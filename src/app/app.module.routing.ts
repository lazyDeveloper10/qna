import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppDefaultLayoutComponent } from './core/default-layout/default-layout.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: '',
        component: AppDefaultLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./views/home/home.module').then((mod) => mod.AppHomeModule)
            },
            {
                path: 'qna',
                loadChildren: () => import('./views/qna/qna.module').then((mod) => mod.AppQnaModule)
            },
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppModuleRouting {
}
