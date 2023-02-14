import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

import { SharedBaseModule } from '../../shared';

import { AppFormComponent } from '../form/form.component';
import { AppInputTextComponent } from '../input';
import { AppEditorComponent } from '../editor';

import { AnswerForm, AnswerInterface } from '../../models';
import { AnswerServices } from '../../services';

@Component({
    standalone: true,
    selector: 'app-form-answer-component',
    inputs: [ 'questionId' ],
    outputs: [ 'onUpdateAnswerList' ],
    imports: [ SharedBaseModule, AppFormComponent, AppInputTextComponent, AppEditorComponent ],
    template: `
        <app-form-component
            [form]="form"
            [submitDisabled]="formLoading"
            [cancelDisabled]="formLoading"
            [canSubmit]="true"
            [canCancel]="true"
            (onSubmit)="onSubmit($event)"
            (onCancel)="onCancel()"
            submitLabel="Answer Question"
        >
            <div class="row">
                <div class="col-md-6">
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
                </div>
            </div>

            <app-editor-component
                [form]="form"
                [labelRequired]="true"
                label="Answer"
                formControlName="answer"
            ></app-editor-component>
        </app-form-component>
    `
})
export class AppFormAnswerComponent implements OnDestroy {
    @Input() questionId?: number;
    @Output() onUpdateAnswerList = new EventEmitter<any>(true);

    private ngUnsubscribe = new Subject();

    formLoading?: boolean = false;

    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private answerServices: AnswerServices
    ) {
        this.form = this.formBuilder.group(new AnswerForm());
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next(true);
        this.ngUnsubscribe.complete();
    }

    onCancel() {
        this.form.reset();
    }

    onSubmit(event: AnswerInterface) {
        event.questionId = this.questionId;

        this.answerServices.createOne(event)
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe(() => {
                this.onUpdateAnswerList.emit();
                this.onCancel();
            });
    }
}
