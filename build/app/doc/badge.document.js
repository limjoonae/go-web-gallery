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
var core_1 = require("@angular/core");
var ATTRIBUTELIST = [
    { require: '*', name: 'type', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25 \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E14\u0E49 3 \n        \u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E04\u0E37\u0E2D badge, badge-link, badge-button" },
    { require: '*', name: 'badgeData', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21/\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E08\u0E30\u0E41\u0E2A\u0E14\u0E07\u0E43\u0E19 badge" },
    { require: '', name: 'badgeStyle', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E01\u0E25\u0E48\u0E2D\u0E07 badge \u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E27\u0E22 \n        pill=\u0E23\u0E39\u0E1B\u0E17\u0E23\u0E07\u0E41\u0E04\u0E1B\u0E0B\u0E39\u0E25 \u0E2B\u0E32\u0E01\u0E44\u0E21\u0E48\u0E23\u0E30\u0E1A\u0E38 \u0E08\u0E30\u0E41\u0E2A\u0E14\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E17\u0E23\u0E07\u0E2A\u0E35\u0E48\u0E40\u0E2B\u0E25\u0E35\u0E48\u0E22\u0E21" },
    { require: '', name: 'badgeColor', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E2A\u0E35\u0E02\u0E2D\u0E07 badge \u0E42\u0E14\u0E22\u0E04\u0E48\u0E32\u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E23\u0E30\u0E1A\u0E38\u0E44\u0E14\u0E49 \u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E27\u0E22 \n        default=\u0E2A\u0E35\u0E40\u0E17\u0E32 primary=\u0E2A\u0E35\u0E19\u0E49\u0E33\u0E40\u0E07\u0E34\u0E19, success=\u0E2A\u0E35\u0E40\u0E02\u0E35\u0E22\u0E27, info=\u0E2A\u0E35\u0E1F\u0E49\u0E32, warning=\u0E2A\u0E35\u0E2A\u0E49\u0E21, danger=\u0E2A\u0E35\u0E41\u0E14\u0E07" },
    { require: '', name: 'labelText', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E01\u0E23\u0E13\u0E35\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19 type badge-link, badge-button" },
    { require: '', name: 'buttonColor', type: 'text', description: "(\u0E43\u0E0A\u0E49\u0E23\u0E48\u0E27\u0E21\u0E01\u0E31\u0E1A type=\" badge-button\") \u0E01\u0E33\u0E2B\u0E19\u0E14\u0E2A\u0E35\u0E02\u0E2D\u0E07\u0E1B\u0E38\u0E48\u0E21 \n        \u0E42\u0E14\u0E22\u0E04\u0E48\u0E32\u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E23\u0E30\u0E1A\u0E38\u0E44\u0E14\u0E49 \u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E27\u0E22 primary=\u0E2A\u0E35\u0E19\u0E49\u0E33\u0E40\u0E07\u0E34\u0E19, secondary= \u0E2A\u0E35\u0E02\u0E32\u0E27, success=\u0E2A\u0E35\u0E40\u0E02\u0E35\u0E22\u0E27, info=\u0E2A\u0E35\u0E1F\u0E49\u0E32, warning=\u0E2A\u0E35\u0E2A\u0E49\u0E21, danger=\u0E2A\u0E35\u0E41\u0E14\u0E07" },
    { require: '', name: 'buttonSize', type: 'text', description: "(\u0E43\u0E0A\u0E49\u0E23\u0E48\u0E27\u0E21\u0E01\u0E31\u0E1A type=\" badge-button\") \n        \u0E01\u0E33\u0E2B\u0E19\u0E14\u0E02\u0E19\u0E32\u0E14\u0E02\u0E2D\u0E07\u0E1B\u0E38\u0E48\u0E21 \u0E04\u0E48\u0E32\u0E17\u0E35\u0E48\u0E23\u0E30\u0E1A\u0E38\u0E44\u0E14\u0E49\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E27\u0E22 sm=small,  lg=large" },
];
var SYSTEMJSLINE = [
    "map: {",
    " 'go-badge': 'gos:badge/{version}',",
    " 'go-service': 'gos:service/{version}',",
    "},",
    "",
    "packages: {",
    " 'go-badge': {",
    "    main: './badge.js',",
    "    defaultExtension: 'js'",
    "  },",
    " 'go-service': {",
    "    main: './index.js',",
    "    defaultExtension: 'js'",
    "  },",
    "}",
];
var APPMODULELINE = [
    "import { BadgeComponent } from 'go-badge';",
    "",
    "@NgModule({",
    "   declarations: [",
    "   ..........",
    "   BadgeComponent,",
    "   ..........",
    "],",
];
var BadgeDocument = (function () {
    function BadgeDocument() {
        this.componentTag = '<go-badge>';
        this.version = '1.0';
        this.releaseDate = '15/12/2016';
        this.credit = '-';
        this.creditUrl = '#';
        this.prefixSyntax = "<go-badge ";
        this.attrSyntax = "type=\"badge_type\" badgeData=\"badge_data\" [labelText=\"label_text\"] [badgeStyle=\"pill\"] \n    [badgeColor=\"color_theme\"] [buttonColor=\"color_Theme\"] [buttonSize=\"sm_or_lg\"]";
        this.suffixSyntax = "></go-badge>";
        this.attributeList = ATTRIBUTELIST;
        this.systemjsLine = SYSTEMJSLINE;
        this.appModuleLine = APPMODULELINE;
    }
    BadgeDocument.prototype.ngOnInit = function () {
    };
    return BadgeDocument;
}());
BadgeDocument = __decorate([
    core_1.Component({
        selector: 'badge-document',
        templateUrl: './badge.document.html',
    }),
    __metadata("design:paramtypes", [])
], BadgeDocument);
exports.BadgeDocument = BadgeDocument;
//# sourceMappingURL=badge.document.js.map