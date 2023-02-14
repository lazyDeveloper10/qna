import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { SharedBaseModule, SharedFormModule } from '../../shared'

import { isFieldInvalid } from 'src/app/utils';

@Component({
    standalone: true,
    selector: 'app-editor-component',
    inputs: [
        'form',
        'formControlName',
        'label',
        'labelRequired',
        'labelDisabled',
        'customFieldValidation'
    ],
    outputs: [],
    imports: [ SharedBaseModule, SharedFormModule, CKEditorModule ],
    template: `
        <div [formGroup]="form" class="mb-3">
            <label
                *ngIf="!labelDisabled"
                [class.required]="labelRequired"
            >
                {{ label ? label : 'Please input label'  }}
            </label>

            <ckeditor
                [class.is-invalid]="customFieldValidation ? customFieldValidation(form, formControlName) : isFieldInvalid(form, formControlName)"
                [ngClass]="(labelRequired ? 'required' : '!required')"
                [editor]="Editor"
                [formControlName]="formControlName"
            >
            </ckeditor>
            <ng-container *ngIf="customFieldValidation ? customFieldValidation(form, formControlName) : isFieldInvalid(form, formControlName)">
                <!-- validators required -->
                <div *ngIf="form.get(formControlName)?.hasError('required')" class="invalid-feedback">
                    {{ label }} is required
                </div>
            </ng-container>
        </div>
    `
})
export class AppEditorComponent {
    @Input() form!: FormGroup;
    @Input() formControlName!: string;
    @Input() label?: string;
    @Input() labelRequired?: boolean = false;
    @Input() labelDisabled?: boolean = false;
    @Input() customFieldValidation?: Function;

    public Editor: any = ClassicEditor;

    isFieldInvalid = isFieldInvalid;
}
