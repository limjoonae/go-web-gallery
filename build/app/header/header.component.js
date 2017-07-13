"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PAGELIST = [
    { routerLink: 'accordion', menuName: 'Accordion' },
    { routerLink: 'autocomplete', menuName: 'Auto Complete' },
    { routerLink: 'badge', menuName: 'Badge' },
    { routerLink: 'button', menuName: 'Button' },
    { routerLink: 'chart', menuName: 'Chart' },
    { routerLink: 'checkbox', menuName: 'Check Box' },
    { routerLink: 'datagrid', menuName: 'Datagrid' },
    { routerLink: 'datatable', menuName: 'Datatable' },
    { routerLink: 'datetimepicker', menuName: 'Datetime Picker' },
    { routerLink: 'dialog', menuName: 'Dialog' },
    { routerLink: 'galleria', menuName: 'Galleria' },
    { routerLink: 'imagegallery', menuName: 'Image Gallery' },
    { routerLink: 'panel', menuName: 'Panel' },
    { routerLink: 'progressbar', menuName: 'Progress Bar' },
    { routerLink: 'pulldownmenu', menuName: 'Pulldown Menu' },
    { routerLink: 'radiobutton', menuName: 'Radio Button' },
    { routerLink: 'selectbox', menuName: 'Select Box' },
    { routerLink: 'sidebar', menuName: 'Side Bar' },
    { routerLink: 'steps', menuName: 'Steps' },
    { routerLink: 'tabview', menuName: 'Tabview' },
    { routerLink: 'table', menuName: 'Table' },
    { routerLink: 'textarea', menuName: 'Text Area' },
    { routerLink: 'textbox', menuName: 'Text Box' },
    { routerLink: 'texteditor', menuName: 'Text Editor' },
    { routerLink: 'tooltip', menuName: 'Tooltip' },
    { routerLink: 'tree', menuName: 'Tree' },
    { routerLink: 'upload', menuName: 'Upload' },
];
var HeaderComponent = (function () {
    function HeaderComponent() {
        this.pageList = PAGELIST;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'web-gallery-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.css']
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map