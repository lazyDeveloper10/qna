import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { reducers } from './store';

@NgModule({
    imports: [
        StoreModule.forRoot(reducers)
    ],
    exports: []
})
export class AppStoreModule {
}
