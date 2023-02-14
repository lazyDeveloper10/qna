import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppQnaComponent } from './qna.component';

const routes: Routes = [
    {
        path: '',
        component: AppQnaComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AppQnaRoutingModule {
}
