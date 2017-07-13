"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ATTRIBUTELIST = [
    { require: '*', name: 'opened', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E43\u0E2B\u0E49 sidebar \u0E40\u0E1B\u0E34\u0E14\u0E2D\u0E2D\u0E01\u0E21\u0E32(true) \u0E2B\u0E23\u0E37\u0E2D\u0E1B\u0E34\u0E14\u0E01\u0E25\u0E31\u0E1A\u0E40\u0E02\u0E49\u0E32\u0E44\u0E1B(false) \u0E42\u0E14\u0E22\u0E15\u0E2D\u0E19\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28\u0E04\u0E48\u0E32\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E43\u0E2B\u0E49\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28\u0E40\u0E1B\u0E47\u0E19 false \u0E14\u0E49\u0E27\u0E22\u0E40\u0E2A\u0E21\u0E2D" },
    { require: '', name: 'position', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07\u0E17\u0E35\u0E48 sidebar \u0E2D\u0E22\u0E39\u0E48\u0E42\u0E14\u0E22\u0E08\u0E30\u0E41\u0E1A\u0E48\u0E07\u0E2D\u0E2D\u0E01\u0E40\u0E1B\u0E47\u0E19 4 \u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07 \u0E44\u0E14\u0E49\u0E41\u0E01\u0E48 \u0E14\u0E49\u0E32\u0E19\u0E0B\u0E49\u0E32\u0E22\u0E02\u0E2D\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E08\u0E2D(left), \u0E14\u0E49\u0E32\u0E19\u0E02\u0E27\u0E32\u0E02\u0E2D\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E08\u0E2D(right), \u0E14\u0E49\u0E32\u0E19\u0E1A\u0E19\u0E02\u0E2D\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E08\u0E2D(top) \u0E41\u0E25\u0E30 \u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07\u0E02\u0E2D\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E08\u0E2D(bottom)" },
    { require: '', name: 'closeOnClickOutside', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E43\u0E2B\u0E49\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E1B\u0E34\u0E14 sidebar \u0E44\u0E14\u0E49\u0E42\u0E14\u0E22\u0E01\u0E32\u0E23\u0E04\u0E25\u0E34\u0E01\u0E2A\u0E48\u0E27\u0E19\u0E2D\u0E37\u0E48\u0E19\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E14\u0E49\u0E32\u0E19\u0E19\u0E2D\u0E01 Sidebar" },
    { require: '', name: 'showBackdrop', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E43\u0E2B\u0E49\u0E17\u0E33\u0E01\u0E32\u0E23\u0E25\u0E47\u0E2D\u0E01\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E02\u0E49\u0E32\u0E07\u0E19\u0E2D\u0E01\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E48 sidebar \u0E44\u0E21\u0E48\u0E43\u0E2B\u0E49\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E01\u0E14\u0E44\u0E14\u0E49" },
    { require: '', name: 'trapFocus', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E43\u0E2B\u0E49 focus \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E43\u0E0A\u0E49\u0E44\u0E14\u0E49\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E43\u0E19 sidebar \u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19 (\u0E01\u0E25\u0E48\u0E32\u0E27\u0E04\u0E37\u0E2D \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E21\u0E35\u0E01\u0E32\u0E23\u0E01\u0E14 Tab \u0E08\u0E30\u0E17\u0E33\u0E01\u0E32\u0E23 focus \u0E40\u0E09\u0E1E\u0E32\u0E30\u0E20\u0E32\u0E22\u0E43\u0E19 sidebar \u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19)" },
    { require: '', name: 'autoFocus', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E43\u0E2B\u0E49\u0E17\u0E33\u0E01\u0E32\u0E23 focus \u0E43\u0E19 sidebar \u0E17\u0E31\u0E19\u0E17\u0E35\u0E17\u0E35\u0E48\u0E21\u0E35\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07" },
    { require: '', name: 'onOpened', type: 'function()', description: "\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E19\u0E35\u0E49\u0E08\u0E30\u0E16\u0E39\u0E01\u0E40\u0E23\u0E35\u0E22\u0E01\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19  \u0E40\u0E21\u0E37\u0E48\u0E2D sidebar \u0E40\u0E1B\u0E34\u0E14\u0E02\u0E36\u0E49\u0E19\u0E21\u0E32" },
    { require: '', name: 'onClosed', type: 'function()', description: "\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E19\u0E35\u0E49\u0E08\u0E30\u0E16\u0E39\u0E01\u0E40\u0E23\u0E35\u0E22\u0E01\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19  \u0E40\u0E21\u0E37\u0E48\u0E2D sidebar \u0E1B\u0E34\u0E14\u0E25\u0E07\u0E44\u0E1B" }
];
var SYSTEMJSLINE = [
    "map: {",
    "   ..........",
    "   'ng-sidebar': 'npm:ng-sidebar',",
    "   'go-sidebar': 'go:sidebar/{version}',",
    "   ..........",
    "},",
    "packages: {",
    "   ..........",
    "   'ng-sidebar': {",
    "      main: './lib/index.js',",
    "      defaultExtension: 'js'",
    "   },",
    "   'go-sidebar': {",
    "      main: './sidebar.component.js',",
    "      defaultExtension: 'js'",
    "   },",
    "   ..........",
    "}",
];
var APPMODULELINE = [
    "import { SidebarModule } from 'ng-sidebar';",
    "import { SidebarComponent } from 'go-sidebar';",
    "",
    "@NgModule({",
    "   declarations: [",
    "   ..........",
    "   SidebarComponent",
    "   ..........",
    "],",
    "   imports: [",
    "   ..........",
    "   SidebarModule",
    "   ..........",
    "],",
];
var SidebarDocument = (function () {
    function SidebarDocument() {
        this.componentTag = '<go-sidebar>';
        this.componentDescription = "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E40\u0E23\u0E35\u0E22\u0E01 Sidebar \u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E23\u0E35\u0E22\u0E01\u0E2D\u0E2D\u0E01\u0E21\u0E32\u0E41\u0E2A\u0E14\u0E07\u0E41\u0E25\u0E30\u0E0B\u0E48\u0E2D\u0E19\u0E08\u0E32\u0E01\u0E2B\u0E19\u0E49\u0E32\u0E40\u0E27\u0E47\u0E1A\u0E44\u0E14\u0E49";
        this.version = '1.0';
        this.releaseDate = '7/12/2016';
        this.prefixSyntax = "<go-sidebar ";
        this.attrSyntax = "[(opened)]=\"_opened\" [position=\"sidebar_position\"] [[closeOnClickOutside]=\"can_close_by_click_outside\"] \n        [[showBackdrop]=\"show_backdrop\"] [[animate]=\"show_with_animation\"] [[trapfocus]=\"trapfocus_on_sidebar\"]\n        [[autofocus]=\"autofocus_on_sidebar\"] [(onOpened)=\"onSidebarOpen()\"] [(onClosed)=\"onSidebarClose()\"]";
        this.suffixSyntax = "></go-sidebar>";
        this.attributeList = ATTRIBUTELIST;
        this.appModuleLine = APPMODULELINE;
        this.systemjsLine = SYSTEMJSLINE;
        this.appModuleDetail = "app.module.ts";
        this.systemJSDetail = "systemjs.config.js";
        this.main_title = 'Example';
        this.open_1 = false;
        this.open_2 = false;
        this.open_3 = false;
        this.open_4 = false;
        this.html_1 = "<button class=\"btn btn-primary\" *ngIf=\"!open_1\" (click)=\"toggleSidebar_1()\">Open Sidebar Default</button>\n<button class=\"btn btn-secondary\" *ngIf=\"open_1\" (click)=\"toggleSidebar_1()\">Close Sidebar Default</button>\n\n<go-sidebar [(opened)]=\"open_1\" id=\"default_sidebar\">\n    <nav class=\"nav nav-pills nav-stacked\">\n        <a class=\"nav-link\" href=\"#\" (click)=\"toggleSidebar_1()\">Menu 1</a>\n        <a class=\"nav-link\" href=\"#\" (click)=\"toggleSidebar_1()\">Menu 2</a>\n        <a class=\"nav-link\" href=\"#\" (click)=\"toggleSidebar_1()\">Menu 3</a>\n    </nav>\n</go-sidebar>";
        this.ts_1 = "private open_1: boolean = false;\nprivate toggleSidebar_1(): void {\n    this.open_1 = !this.open_1;\n}\n";
        this.html_2 = "<button class=\"btn btn-primary\" (click)=\"toggleSidebar_2()\">Open Sidebar with Lock Screen</button>\n\n<go-sidebar [(opened)]=\"open_2\" position=\"top\" [showBackdrop]='true' closeOnClickOutside=\"true\" id=\"backdrop_sidebar\">\n    <nav class=\"navbar navbar-default\">\n        <a class=\"nav-link\" href=\"#\" (click)=\"toggleSidebar_2()\">Menu 4</a>\n        <a class=\"nav-link\" href=\"#\" (click)=\"toggleSidebar_2()\">Menu 5</a>\n        <a class=\"nav-link\" href=\"#\" (click)=\"toggleSidebar_2()\">Menu 6</a>\n    </nav>\n</go-sidebar>";
        this.ts_2 = "private open_2: boolean = false;\nprivate toggleSidebar_2(): void {\n    this.open_2 = !this.open_2;\n}\n";
        this.html_3 = "<button class=\"btn btn-primary\" *ngIf=\"!open_3\" (click)=\"toggleSidebar_3()\">Open Sidebar Right Position</button>\n<button class=\"btn btn-secondary\" *ngIf=\"open_3\" (click)=\"toggleSidebar_3()\">Close Sidebar Right Position</button>\n\n<go-sidebar [(opened)]=\"open_3\" position='right' id=\"right_sidebar\">\n    <nav class=\"nav nav-pills nav-stacked\">\n        <a class=\"nav-link\" href=\"#\" (click)=\"toggleSidebar_3()\">Menu 7</a>\n        <a class=\"nav-link\" href=\"#\" (click)=\"toggleSidebar_3()\">Menu 8</a>\n        <a class=\"nav-link\" href=\"#\" (click)=\"toggleSidebar_3()\">Menu 9</a>\n    </nav>\n</go-sidebar>";
        this.ts_3 = "private open_3: boolean = false;\nprivate toggleSidebar_3(): void {\n    this.open_3 = !this.open_3;\n}\n";
        this.html_4 = "<button class=\"btn btn-primary\" *ngIf=\"!open_4\" (click)=\"toggleSidebar_4()\">Open Sidebar with Return Result</button>\n<button class=\"btn btn-secondary\" *ngIf=\"open_4\" (click)=\"toggleSidebar_4()\">Close Sidebar with Return Result</button>\n<p>{{sidebarMessage}}</p>\n\n<go-sidebar [(opened)]=\"open_4\" (onOpened)=\"openFinish()\" (onClosed)=\"closeFinish()\" id=\"action_sidebar\">\n    <nav class=\"nav nav-pills nav-stacked\">\n        <a class=\"nav-link\" href=\"#\" (click)=\"toggleSidebar_4()\">Menu 10</a>\n        <a class=\"nav-link\" href=\"#\" (click)=\"toggleSidebar_4()\">Menu 11</a>\n        <a class=\"nav-link\" href=\"#\" (click)=\"toggleSidebar_4()\">Menu 12</a>\n    </nav>\n</go-sidebar>";
        this.ts_4 = "private open_4: boolean = false;\nprivate toggleSidebar_4(): void {\n    this.open_4 = !this.open_4;\n}\nprivate sidebarMessage: string;\nprivate openFinish(): void { this.sidebarMessage = '\u0E40\u0E1B\u0E34\u0E14\u0E40\u0E2A\u0E23\u0E47\u0E08\u0E2A\u0E34\u0E49\u0E19' };\nprivate closeFinish(): void { this.sidebarMessage = '\u0E1B\u0E34\u0E14\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22' };\n";
    }
    SidebarDocument.prototype.toggleSidebar_1 = function () {
        this.open_1 = !this.open_1;
    };
    SidebarDocument.prototype.toggleSidebar_2 = function () {
        this.open_2 = !this.open_2;
    };
    SidebarDocument.prototype.toggleSidebar_3 = function () {
        this.open_3 = !this.open_3;
    };
    SidebarDocument.prototype.toggleSidebar_4 = function () {
        this.open_4 = !this.open_4;
    };
    SidebarDocument.prototype.openFinish = function () { this.sidebarMessage = 'เปิดเสร็จสิ้น'; };
    ;
    SidebarDocument.prototype.closeFinish = function () { this.sidebarMessage = 'ปิดเรียบร้อย'; };
    ;
    return SidebarDocument;
}());
SidebarDocument = __decorate([
    core_1.Component({
        selector: 'sidebar-document',
        templateUrl: './sidebar.document.html'
    })
], SidebarDocument);
exports.SidebarDocument = SidebarDocument;
//# sourceMappingURL=sidebar.document.js.map