import { Component } from '@angular/core';

@Component({
    selector: 'app-default-layout-component',
    templateUrl: './default-layout.component.html'
})
export class AppDefaultLayoutComponent {
    navbarOpen = false;

    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }
}
