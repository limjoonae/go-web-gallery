import {Component} from '@angular/core';

@Component({
    template: `
<div class="container">
    <div class="col-md-3">
        <gettingstart-menu></gettingstart-menu>
    </div>
    <div class="col-md-9">
        <h3 class="card-header"><strong>Changelog</strong></h3>
        <div class="card-block">
            <div Markdown path="file/CHANGELOG-Gomodule.md"></div>
        </div>
    </div>
</div>

    `
})

export class ChangelogGomoduleComponent {

}