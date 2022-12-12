import { Component } from '@angular/core';
import { DarkModeService } from './darkModeService/dark-mode.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(public darkModeService: DarkModeService) {

    }
}
