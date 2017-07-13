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
var componentVersion = '1.0';
var cdnPath = 'http://10.182.247.73/go-cdn-dev/node_modules/';
var VERSION = '1.0.0';
var ATTRIBUTELIST = [
    { require: '*', name: 'id', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 id \u0E02\u0E2D\u0E07\u0E1B\u0E38\u0E48\u0E21" },
    { require: '*', name: 'name', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 name \u0E02\u0E2D\u0E07\u0E1B\u0E38\u0E48\u0E21" },
    { require: '', name: 'label', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E43\u0E2A\u0E48\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E43\u0E19 label \u0E02\u0E2D\u0E07\u0E1B\u0E38\u0E48\u0E21" },
    { require: '', name: 'disable', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1B\u0E34\u0E14\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E1B\u0E38\u0E48\u0E21 \u0E42\u0E14\u0E22\n        \u0E2B\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E38\u0E04\u0E48\u0E32 disable=\"true\" \u0E08\u0E30\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E01\u0E14\u0E1B\u0E38\u0E48\u0E21\u0E44\u0E14\u0E49" },
    { require: '', name: 'buttonColor', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E2A\u0E35\u0E02\u0E2D\u0E07\u0E1B\u0E38\u0E48\u0E21 \u0E42\u0E14\u0E22\u0E04\u0E48\u0E32\u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E23\u0E30\u0E1A\u0E38\u0E44\u0E14\u0E49 \u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E27\u0E22\n        primary, secondary, success, info, warning, danger, \n        outline-primary, outline-secondary, outline-success, outline-info, outline-warning, outline-danger" },
    { require: '', name: 'buttonSize', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E02\u0E19\u0E32\u0E14\u0E02\u0E2D\u0E07\u0E1B\u0E38\u0E48\u0E21 \u0E04\u0E48\u0E32\u0E17\u0E35\u0E48\u0E23\u0E30\u0E1A\u0E38\u0E44\u0E14\u0E49\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E27\u0E22 sm, lg" },
    { require: '', name: 'iconName', type: 'text', description: "\u0E23\u0E30\u0E1A\u0E38\u0E0A\u0E37\u0E48\u0E2D\u0E23\u0E39\u0E1B\u0E17\u0E35\u0E48\u0E08\u0E30\u0E19\u0E33\u0E21\u0E32\u0E41\u0E2A\u0E14\u0E07\u0E1A\u0E19\u0E1B\u0E38\u0E48\u0E21" },
    { require: '', name: 'iconSize', type: 'text', description: "\u0E23\u0E30\u0E1A\u0E38\u0E02\u0E19\u0E32\u0E14\u0E02\u0E2D\u0E07\u0E23\u0E39\u0E1B\u0E17\u0E35\u0E48\u0E08\u0E30\u0E19\u0E33\u0E21\u0E32\u0E41\u0E2A\u0E14\u0E07\u0E1A\u0E19\u0E1B\u0E38\u0E48\u0E21 \u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E27\u0E22 \n        lg, 2x, 3x, 4x, 5x (\u0E40\u0E23\u0E35\u0E22\u0E07\u0E08\u0E32\u0E01\u0E02\u0E19\u0E32\u0E14\u0E40\u0E25\u0E47\u0E01\u0E44\u0E1B\u0E43\u0E2B\u0E0D\u0E48)" },
    { require: '', name: 'iconPos', type: 'text', description: "\u0E23\u0E30\u0E1A\u0E38\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07\u0E02\u0E2D\u0E07\u0E23\u0E39\u0E1B \u0E01\u0E33\u0E2B\u0E19\u0E14\u0E04\u0E48\u0E32\u0E44\u0E14\u0E49\u0E04\u0E37\u0E2D iconPos=\"right\" \n        \u0E2B\u0E32\u0E01\u0E44\u0E21\u0E48\u0E23\u0E30\u0E1A\u0E38\u0E08\u0E30 default \u0E40\u0E1B\u0E47\u0E19 left" },
];
var EVENTLIST = [
    { name: "(click)", parameter: 'event: function_name()', description: "\u0E43\u0E0A\u0E49\u0E43\u0E19\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07 event \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E33\u0E07\u0E32\u0E19\u0E15\u0E32\u0E21 function \u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14" },
];
var SYSTEMJSLINE = [
    "map: {",
    " 'go-button': 'go:button/" + VERSION + "',",
    " 'go-directive': 'go:directive/" + VERSION + "',",
    " 'go-service': 'go:service/" + VERSION + "',",
    "},",
    "",
    "packages: {",
    " 'go-button': {",
    "    main: './button.js',",
    "    defaultExtension: 'js'",
    "  },",
    " 'go-directive': {",
    "    main: './index.js',",
    "    defaultExtension: 'js'",
    "  },",
    " 'go-service': {",
    "    main: './index.js',",
    "    defaultExtension: 'js'",
    "  },",
    "}",
];
var APPMODULELINE = [
    "import { ButtonComponent }  from 'go-button';",
    "import { CustomDisabledDirective } from 'go-directive';",
    "",
    "@NgModule({",
    "   declarations: [",
    "   ..........",
    "   ButtonComponent, CustomDisabledDirective",
    "   ..........",
    "],",
];
var ButtonDocument = (function () {
    function ButtonDocument() {
        this.componentTag = '<go-button>';
        this.componentDescription = "Button \u0E43\u0E0A\u0E49\u0E43\u0E19\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E01\u0E43\u0E0A\u0E49 action \u0E15\u0E48\u0E32\u0E07\u0E46";
        this.version = componentVersion;
        this.releaseDate = '7/12/2016';
        this.credit = '-';
        this.creditUrl = '/';
        this.prefixSyntax = "<go-button ";
        this.attrSyntax = "id=\"button_id\" name=\"button_name\" [label=\"label_name\"] [disable=\"true_or_false\"] \n    [buttonColor=\"color_theme\"] [buttonSize=\"sm_or_lg\"] [iconName=\"icon_name\"] [iconSize=\"icon_size\"] [iconPos=\"right_position\"]";
        this.suffixSyntax = "></go-button>";
        this.attributeList = ATTRIBUTELIST;
        this.systemjsLine = SYSTEMJSLINE;
        this.appModuleLine = APPMODULELINE;
        this.fontAwesomeVersion = '4.7.0';
        this.eventList = EVENTLIST;
        this.htmlImport = "<link href=\"" + cdnPath + "font-awesome/css/font-awesome.min.css rel=\"stylesheet\" type=\"text/css\">";
        this.cssImport = "@import url('" + cdnPath + "font-awesome/css/font-awesome.min.css');";
        this.count = 0;
        this.countCode = "Count: {{count}}";
    }
    ButtonDocument.prototype.ngOnInit = function () {
    };
    ButtonDocument.prototype.myClick = function () {
        this.count++;
    };
    ButtonDocument.prototype.myReset = function () {
        this.count = 0;
    };
    return ButtonDocument;
}());
ButtonDocument = __decorate([
    core_1.Component({
        selector: 'button-document',
        templateUrl: './button.document.html',
        styleUrls: ['./button.document.css']
    }),
    __metadata("design:paramtypes", [])
], ButtonDocument);
exports.ButtonDocument = ButtonDocument;
//# sourceMappingURL=button.document.js.map