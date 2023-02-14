import { NgModule } from '@angular/core';

import { SharedBaseModule } from '../../shared';

import { AppQuestionCardComponent, AppAnswerCardComponent } from '../../components/card';
import { AppFormAnswerComponent } from '../../components/form-qna';

import { AppQnaRoutingModule } from './qna.module.routing';

import { AppQnaComponent } from './qna.component';

@NgModule({
    imports: [
        SharedBaseModule,
        AppQuestionCardComponent,
        AppAnswerCardComponent,
        AppFormAnswerComponent,
        AppQnaRoutingModule,
    ],
    declarations: [
        AppQnaComponent
    ]
})
export class AppQnaModule {
}
