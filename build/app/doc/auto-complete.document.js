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
    { require: '*', name: 'ngModel', type: 'any', description: "\u0E15\u0E31\u0E27\u0E41\u0E1B\u0E23\u0E17\u0E35\u0E48\u0E1C\u0E25\u0E25\u0E31\u0E1E\u0E18\u0E4C\u0E02\u0E2D\u0E07 autocomplete \u0E08\u0E30\u0E23\u0E30\u0E1A\u0E38\u0E04\u0E48\u0E32\u0E43\u0E2B\u0E49" },
    { require: '*', name: 'source', type: 'array หรือ text', description: "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E41\u0E2A\u0E14\u0E07\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A dropdown list" },
    { require: '', name: 'placeholder', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E43\u0E19 textbox" },
    { require: '', name: 'list-formatter', type: 'function', description: "\u0E0A\u0E37\u0E48\u0E2D\u0E15\u0E31\u0E27\u0E41\u0E1B\u0E23\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E47\u0E19 string(key) \u0E2B\u0E23\u0E37\u0E2D \u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E19\u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E43\u0E19\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E43\u0E19 dropdown list \u0E40\u0E0A\u0E48\u0E19 '(key) name' \u0E2B\u0E23\u0E37\u0E2D\u0E0A\u0E37\u0E48\u0E2D\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19 'myListFormatter' (\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E48 'myListFormatter()' )" },
    { require: '', name: 'path-to-data', type: 'text', description: "path \u0E02\u0E2D\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 array \u0E43\u0E19 http response" },
    { require: '', name: 'min-chars', type: 'number', description: "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23\u0E02\u0E31\u0E49\u0E19\u0E15\u0E48\u0E33\u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E43\u0E19\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07 dropdown \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E41\u0E2B\u0E25\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E1B\u0E47\u0E19\u0E41\u0E1A\u0E1A remote data" },
    { require: '', name: 'max-num-list', type: 'number', description: "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E21\u0E32\u0E01\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E41\u0E2A\u0E14\u0E07\u0E44\u0E14\u0E49\u0E43\u0E19 dropdown list" },
    { require: '', name: 'value-property-name', type: 'text', description: "\u0E0A\u0E37\u0E48\u0E2D\u0E04\u0E35\u0E22\u0E4C\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E04\u0E48\u0E32 default \u0E04\u0E37\u0E2D id" },
    { require: '', name: 'display-property-name', type: 'text', description: "\u0E0A\u0E37\u0E48\u0E2D\u0E04\u0E35\u0E22\u0E4C\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E22\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E41\u0E2A\u0E14\u0E07 default \u0E04\u0E37\u0E2D value" },
    { require: '', name: 'blank-option-text', type: 'text', description: "\u0E40\u0E1B\u0E47\u0E19\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E19\u0E30\u0E19\u0E33\u0E0B\u0E36\u0E48\u0E07\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E08\u0E30\u0E40\u0E1B\u0E47\u0E19\u0E04\u0E48\u0E32\u0E27\u0E48\u0E32\u0E07" },
    { require: '', name: 'valueChanged / ngModelChange', type: 'function($event)', description: "callback function \u0E0B\u0E36\u0E48\u0E07\u0E08\u0E30\u0E17\u0E33\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E21\u0E27\u0E25\u0E1C\u0E25\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 dropdown list \u0E16\u0E39\u0E01\u0E40\u0E25\u0E37\u0E2D\u0E01" },
    { require: '', name: 'loading-text', type: 'text', description: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E43\u0E19\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07\u0E43\u0E19\u0E02\u0E13\u0E30\u0E17\u0E35\u0E48\u0E17\u0E33\u0E01\u0E32\u0E23\u0E42\u0E2B\u0E25\u0E14\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 default \u0E04\u0E37\u0E2D Loading..." },
    { require: '', name: 'accept-user-input', type: 'boolean', description: "\u0E16\u0E49\u0E32\u0E40\u0E1B\u0E47\u0E19 false \u0E41\u0E25\u0E30\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A source \u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E08\u0E30\u0E01\u0E25\u0E31\u0E1A\u0E44\u0E1B\u0E40\u0E1B\u0E47\u0E19\u0E04\u0E48\u0E32\u0E40\u0E14\u0E34\u0E21\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01" }
];
var SYSTEMJSLINE = [
    "map: {",
    " 'ng2-auto-complete':'npm:npm:ng2-auto-complete/dist/ng2-auto-complete.umd.js',",
    "},",
];
var APPMODULELINE = [
    "import { Ng2AutoCompleteModule } from 'ng2-auto-complete';",
    "",
    "@NgModule({",
    " imports: [",
    "   ..........",
    "   Ng2AutoCompleteModule,",
    "   ..........",
    " ],",
    "})"
];
var _EXAMPLE1 = [
    { data: "app.component.ts" },
    { data: "" },
    { data: " myCallback(newVal: any) {\n    console.log(\"value is changed to \", newVal);\n    this.model1 = newVal;\n  }" },
    { data: "private selectedDatas: Array<any>;" },
    { data: "" },
    { data: "app.component.html" },
    { data: "\n<input type=\"text\" class=\"form-control\" auto-complete [source]=\"arrayOfStrings\" \n(ngModelChange)=\"myCallback($event)\" [ngModel]=\"model1\" placeholder=\"enter text\" id=\"autocomplete_basic\">\n" },
];
var AutoCompleteDocument = (function () {
    function AutoCompleteDocument() {
        this.componentTag = 'auto-complete';
        this.componentDescription = "Auto-complete \u0E40\u0E1B\u0E47\u0E19\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E02\u0E36\u0E49\u0E19\u0E21\u0E32\u0E42\u0E14\u0E22\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34";
        this.version = '1.0';
        this.releaseDate = '7/12/2016';
        this.credit = 'ng2-auto-complete (v. 0.12.0)';
        this.creditUrl = 'https://www.npmjs.com/package/ng2-auto-complete';
        this.prefixSyntax = "<input auto-complete ";
        this.attrSyntax = "[(ngModel)]=\"myData\" [source]=\"mySource\" [placeholder=\"text\"] [list-formatter=\"string_or_function_variable_name\"] [path-to-data=\"text\"] [min-chars=\"number\"]\n                                [max-num-list=\"number\"] [value-property-name=\"text\"] [display-property-name=\"text\"] [blank-option-text=\"text\"]\n                                [(valueChanged / ngModelChange)=\"function\"] [loading-text=\"text\"] [[accept-user-input]=true_or_false]";
        this.suffixSyntax = ">";
        this.attributeList = ATTRIBUTELIST;
        this.systemjsLine = SYSTEMJSLINE;
        this.appModuleLine = APPMODULELINE;
        this.appModuleDetail = "app.module.ts - \u0E17\u0E33\u0E01\u0E32\u0E23 import \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E17\u0E31\u0E49\u0E07\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E04\u0E48\u0E32\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21\u0E43\u0E19 imports";
        this.codeExample1 = _EXAMPLE1;
        this.arrayOfNumbers = [100, 200, 300, 400, 500];
        this.arrayOfStrings = ["this", "is", "array", "of", "text"];
        this.arrayOfKeyValues = [{ id: 1, value: "One" }, { id: 2, value: "Two" }, { id: 3, value: "Three" }, { id: 4, value: "Four" }];
        this.arrayOfKeyValues2 = [{ key: 1, name: "Key One" }, { key: 2, name: "Key Two" }, { key: 3, name: "Key Three" }, { key: 4, name: "Key Four" }];
        this.googleGeoCode = "https://maps.googleapis.com/maps/api/geocode/json?address=:keyword";
        this.model1 = "is";
        this.model2 = { id: 1, value: "One" };
        this.model3 = { key: 3, name: "Key Three" };
    }
    AutoCompleteDocument.prototype.myCallback = function (newVal) {
        console.log("value is changed to ", newVal);
        this.model1 = newVal;
    };
    AutoCompleteDocument.prototype.printModel4 = function () {
        console.log(this.model4);
    };
    AutoCompleteDocument.prototype.json = function (obj) {
        return JSON.stringify(obj);
    };
    return AutoCompleteDocument;
}());
AutoCompleteDocument = __decorate([
    core_1.Component({
        selector: 'auto-complete-document',
        templateUrl: './auto-complete.document.html',
    })
], AutoCompleteDocument);
exports.AutoCompleteDocument = AutoCompleteDocument;
//# sourceMappingURL=auto-complete.document.js.map