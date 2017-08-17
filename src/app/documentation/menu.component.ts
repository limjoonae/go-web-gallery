import { Component } from '@angular/core';

@Component ({
    selector: 'gettingstart-menu',
    template: `
        <h5><strong><a class="nav-link" [routerLink]="['/documentation/gettingstart/prerequisite']">Getting Started</a></strong></h5>
        <ul class="nav nav-pills nav-stacked" role="tablist">
            <li class="nav-item"><a class="nav-link" [routerLink]="['/documentation/gettingstart/prerequisite']" routerLinkActive="active" role="tab" data-toggle="tab">Prerequisite Install</a></li>
            <li class="nav-item"><a class="nav-link" [routerLink]="['/documentation/gettingstart/createnewproject']" routerLinkActive="active" role="tab" data-toggle="tab">Create New Project</a> </li>
            <li class="nav-item"><a class="nav-link" [routerLink]="['/documentation/gettingstart/existingproject']" routerLinkActive="active" role="tab" data-toggle="tab">Existing Angular Project</a></li>
        </ul>
        <h5 style="margin-top: 1rem;"><strong><a class="nav-link" [routerLink]="['/documentation/changelog/gomodule']">Changelog</a></strong></h5>
        <ul class="nav nav-pills nav-stacked" role="tablist">
            <li class="nav-item"><a class="nav-link" [routerLink]="['/documentation/changelog/gomodule']" routerLinkActive="active" role="tab" data-toggle="tab">Gomodule</a></li>
            <li class="nav-item"><a class="nav-link" [routerLink]="['/documentation/changelog/libmodule']" routerLinkActive="active" role="tab" data-toggle="tab">LibModule</a> </li>
        </ul>
    `
})

export class GettingstartMenuComponent {

}