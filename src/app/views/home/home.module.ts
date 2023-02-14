import { NgModule } from '@angular/core';

import { SharedBaseModule } from '../../shared';

import { AppFormQuestionComponent } from '../../components/form-qna';
import { AppQuestionCardComponent } from '../../components/card';

import { AppHomeRoutingModule } from './home.module.routing';

import { AppHomeComponent } from './home.component';

@NgModule({
    imports: [
        SharedBaseModule,
        AppFormQuestionComponent,
        AppQuestionCardComponent,
        AppHomeRoutingModule
    ],
    declarations: [
        AppHomeComponent
    ]
})
export class AppHomeModule {
}
