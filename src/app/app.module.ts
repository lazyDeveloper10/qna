import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//
import { ModalModule } from 'ngx-bootstrap/modal';

// ngrx
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular
import { AppStoreModule } from './stores/store.module';

import { AppModuleRouting } from './app.module.routing';

import { AppComponent } from './app.component';
import { AppDefaultLayoutComponent } from './core/default-layout/default-layout.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ModalModule.forRoot(),
        AppModuleRouting,
        // Instrumentation must be imported after importing StoreModule (config is optional)
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production, // Restrict extension to log-only mode
        }),
        AppStoreModule
    ],
    declarations: [
        AppComponent,
        AppDefaultLayoutComponent
    ],
    providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err: any) => console.error(err));
