import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DarkModeService {

    private darkModeState: BehaviorSubject<boolean> = new BehaviorSubject(this.checkIfDarkModeIsUsed());

    constructor() {
        this.darkModeState.subscribe((state: boolean) => {
            if (state) {
                this.setDarkMode();
            } else {
                this.setLightMode();
            }
        });
    }

    public toggleDarkMode = (): void => {
        this.darkModeState.next(!this.darkModeState.getValue());
    };

    private checkIfDarkModeIsUsed(): boolean {
        const matchMedia = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return typeof matchMedia === 'boolean' ? matchMedia : true;
    }

    private setDarkMode(): void {
        document.body.classList.add('dark');
        document.body.classList.remove('light');
    }

    private setLightMode(): void {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    }
}