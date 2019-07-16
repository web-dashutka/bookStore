import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
})

export class LayoutComponent {

    @Input()
    set displayComponent(component: string) {
        this.allComponents.some(c => {
            if (c === component) {
                this.activeComponent = c;
                return true;
            }
        });
    }

    public activeComponent: string;
    public allComponents = ['header', 'filter'];
}
