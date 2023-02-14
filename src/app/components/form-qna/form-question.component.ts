import { Component, EventEmitter, OnDestroy, Output, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

import { SharedBaseModule } from '../../shared';

import { AppFormComponent } from '../form/form.component';
import { AppInputTextComponent } from '../input';
import { AppEditorComponent } from '../editor';

import { QuestionForm } from '../../models';
import { QuestionServices } from '../../services';

@Component({
    standalone: true,
    selector: 'app-form-question-component',
    inputs: [],
    outputs: [ 'onUpdateQuestionList' ],
    imports: [ SharedBaseModule, AppFormComponent, AppInputTextComponent, AppEditorComponent ],
    template: `
        <button type="button" class="btn btn-primary" (click)="openModal(template)">
            Ask Question
        </button>

        <ng-template #template>
            <div class="modal-xl">
                <div class="modal-header">
                    <h4 class="modal-title pull-left">Ask Question</h4>
                    <button type="button" class="btn-close close pull-right" aria-label="Close"
                            (click)="modalRef?.hide()">
                        <span aria-hidden="true" class="visually-hidden">&times;</span>
                    </button>
                </div>

                <div class="modal-body">
                    <app-form-component
                        [form]="form"
                        [submitDisabled]="formLoading"
                        [cancelDisabled]="formLoading"
                        [canSubmit]="true"
                        [canCancel]="true"
                        (onSubmit)="onSubmit($event)"
                        (onCancel)="onCancel()"
                        submitLabel="Ask Question"
                    >
                        <app-input-text-component
                            [form]="form"
                            [labelRequired]="true"
                            label="Fullname"
                            formControlName="fullName"
                        ></app-input-text-component>

                        <app-input-text-component
                            [form]="form"
                            [labelRequired]="true"
                            label="Email"
                            formControlName="email"
                        ></app-input-text-component>

                        <app-input-text-component
                            [form]="form"
                            [labelRequired]="true"
                            label="Question Title"
                            formControlName="questionTitle"
                        ></app-input-text-component>

                        <app-editor-component
                            [form]="form"
                            [labelRequired]="true"
                            label="Question"
                            formControlName="question"
                        ></app-editor-component>
                    </app-form-component>
                </div>
            </div>
        </ng-template>
    `
})
export class AppFormQuestionComponent implements OnDestroy {
    @Output() onUpdateQuestionList = new EventEmitter<any>(true);
    @ViewChild('staticModal') public staticModal?: ModalDirective;

    private ngUnsubscribe = new Subject();

    modalRef?: BsModalRef;
    formLoading?: boolean = false;

    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private modalService: BsModalService,
        private questionServices: QuestionServices
    ) {
        this.form = this.formBuilder.group(new QuestionForm());
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next(true);
        this.ngUnsubscribe.complete();
    }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

    onCancel() {
        this.form.reset();
        this.modalService.hide();
    }

    onSubmit(event: Object) {
        this.questionServices.createOne(event)
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe(() => {
                this.onUpdateQuestionList.emit();
                this.onCancel();
            });
    }
}
