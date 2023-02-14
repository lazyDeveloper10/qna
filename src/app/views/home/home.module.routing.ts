import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppHomeComponent } from './home.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: AppHomeComponent
            },
            {
                path: 'qna/:id',
                loadChildren: () => import('../qna/qna.module').then((mod) => mod.AppQnaModule)
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AppHomeRoutingModule {
}
