import { FormControl, Validators } from '@angular/forms';

import { ValidateEmail } from '../utils';

export class QuestionForm {
    fullName = new FormControl(null, Validators.required);
    email = new FormControl(null, [ Validators.required, ValidateEmail ]);
    vote = new FormControl(0);
    createdAt = new FormControl(new Date().toISOString());
    questionTitle = new FormControl(null, Validators.required);
    question = new FormControl(null, Validators.required);
}

export class AnswerForm {
    fullName = new FormControl(null, Validators.required);
    email = new FormControl(null, Validators.required);
    vote = new FormControl(0);
    createdAt = new FormControl(new Date().toISOString());
    answer = new FormControl(null, Validators.required);
    questionId = new FormControl(null);
}

interface BaseQnaInterface {
    id?: number;
    fullName?: string;
    email?: string;
    vote?: number;
    createdAt?: Date;
}

export interface QuestionInterface extends BaseQnaInterface {
    questionTitle?: string;
    question?: string;
}

export interface AnswerInterface extends BaseQnaInterface {
    answer?: string;
    questionId?: number;
}
