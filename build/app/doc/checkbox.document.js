"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DATA1 = [
    { value: '11', label: 'checkbox 1', disable: true, checked: true },
    { value: '12', label: 'checkbox 2', disable: '', checked: true },
    { value: '13', label: 'checkbox 3', disable: '', checked: true },
    { value: '14', label: 'checkbox 4', disable: '', checked: true },
    { value: '15', label: 'checkbox 5', disable: '', checked: true },
    { value: '16', label: 'checkbox 6', disable: '', checked: false },
];
var DATA2 = [
    { value: '11', label: 'checkbox 1', disable: true, checked: '' },
    { value: '12', label: 'checkbox 2', disable: '', checked: true }
];
var DATA3 = [
    { value: '31', label: 'checkbox 1', disable: '', checked: true },
    { value: '32', label: 'checkbox 2', disable: true, checked: '' },
    { value: '33', label: 'checkbox 3', disable: '', checked: '' },
    { value: '34', label: 'checkbox 4', disable: '', checked: true },
    { value: '35', label: 'checkbox 5', disable: '', checked: '' },
    { value: '36', label: 'checkbox 6', disable: '', checked: '' },
    { value: '37', label: 'checkbox 7', disable: '', checked: true }
];
var EXAMPLE1 = [
    { data: "<go-checkbox name=\"chbnames1\"" },
    { data: "             id=\"chb_block\"" },
    { data: "             label=\"Checkbox: \"" },
    { data: "             [(ngModel)]=\"datas1\"" },
    { data: "             type=\"block\"" },
    { data: "             colorTheme=\"success\"" },
    { data: "             require=\"true\">" },
    { data: " </go-checkbox>" },
    { data: "<p> <strong> Output value: </strong> <label *ngFor=\"let d of datas1\"> <span *ngIf=\"d.checked\">  {{d.value}} , </span></span> </p>" },
    { data: "<p> <strong> Output label: </strong> <label *ngFor=\"let d of datas1\"> <span *ngIf=\"d.checked\">  {{d.label}} , </span></span> </p>" },
];
var EXAMPLE1TS = [
    { data: "private datas1: Array<any> = [" },
    { data: "         { value: '11', label: 'checkbox 1', disable: true, checked: true }," },
    { data: "         { value: '12', label: 'checkbox 2', disable: '', checked: true }," },
    { data: "         { value: '13', label: 'checkbox 3', disable: '', checked: true }," },
    { data: "         { value: '14', label: 'checkbox 4', disable: '', checked: true }," },
    { data: "         { value: '15', label: 'checkbox 5', disable: '', checked: true }," },
    { data: "         { value: '16', label: 'checkbox 6', disable: '', checked: false }" },
    { data: "     ];" },
    { data: "" },
];
var EXAMPLE2 = [
    { data: "<go-checkbox name=\"chbname2\"" },
    { data: "             id=\"chb_inline\"" },
    { data: "             label=\"Checkbox: \"" },
    { data: "             [(ngModel)]=\"datas2\"" },
    { data: "             colorTheme=\"warning\">" },
    { data: "</go-checkbox>" },
    { data: "<p> <strong> Output value: </strong> <span *ngFor=\"let d of datas2\"> <span *ngIf=\"d.checked\">  {{d.value}} , </span></span> </p>" },
    { data: "<p> <strong> Output label: </strong> <span *ngFor=\"let d of datas2\"> <span *ngIf=\"d.checked\">  {{d.label}} , </span></span> </p>" },
];
var EXAMPLE2TS = [
    { data: "private datas2: Array<any> = [" },
    { data: "     { value: '11', label: 'checkbox 1', disable: 'true', checked: '' }," },
    { data: "     { value: '12', label: 'checkbox 2', disable: '', checked: true }" },
    { data: "];" },
    { data: "" },
];
var EXAMPLE3 = [
    { data: "<go-checkbox name=\"chbnames3\"" },
    { data: "               id=\"chb_column\"" },
    { data: "               label=\"Select Checkbox: \"" },
    { data: "               [(ngModel)]=\"datas3\"" },
    { data: "               type=\"column\"" },
    { data: "               [col]=\"3\"" },
    { data: "               colorTheme=\"danger\"" },
    { data: "               require=\"true\">" },
    { data: "</go-checkbox>" },
    { data: "<p> <strong> Output value: </strong> <span *ngFor=\"let d of datas3\"> <span *ngIf=\"d.checked\">  {{d.value}} , </span></span> </p>" },
    { data: "<p> <strong> Output label: </strong> <span *ngFor=\"let d of datas3\"> <span *ngIf=\"d.checked\">  {{d.label}} , </span></span> </p>" },
];
var EXAMPLE3TS = [
    { data: "private datas3: Array<any> = [" },
    { data: "   { value: '31', label: 'checkbox 1', disable: '', checked: true }," },
    { data: "   { value: '32', label: 'checkbox 2', disable: true, checked: '' }," },
    { data: "   { value: '33', label: 'checkbox 3', disable: '', checked: '' }," },
    { data: "   { value: '34', label: 'checkbox 4', disable: '', checked: true }," },
    { data: "   { value: '35', label: 'checkbox 5', disable: '', checked: '' }," },
    { data: "   { value: '36', label: 'checkbox 6', disable: '', checked: '' }," },
    { data: "   { value: '37', label: 'checkbox 7', disable: '', checked: true }" },
    { data: "];" },
    { data: "" },
];
var ATTRIBUTELIST = [
    { require: '*', name: 'id', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 id \u0E43\u0E2B\u0E49 checkbox" },
    { require: '*', name: 'name', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 name \u0E43\u0E2B\u0E49 checkbox" },
    { require: '', name: 'label', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 label \u0E2B\u0E25\u0E31\u0E07 checkbox" },
    { require: '', name: 'require', type: 'boolean ', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32 require \u0E43\u0E2B\u0E49 checkbox" },
    { require: '', name: 'type', type: 'inline/block/column ', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E27\u0E32\u0E07\u0E02\u0E2D\u0E07 checkbox (\u0E01\u0E23\u0E13\u0E35\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E23\u0E30\u0E1A\u0E38 \u0E08\u0E30\u0E16\u0E39\u0E01\u0E01\u0E33\u0E2B\u0E19\u0E14 default type = 'inline')" },
    { require: '', name: 'col', type: 'number', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E08\u0E33\u0E19\u0E27\u0E19 column \u0E40\u0E21\u0E37\u0E48\u0E2D type = column \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E23\u0E30\u0E1A\u0E38\u0E08\u0E33\u0E19\u0E27\u0E19\u0E04\u0E2D\u0E25\u0E31\u0E21\u0E19\u0E4C\u0E44\u0E14\u0E49 1,2,3,4,6,12 \u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19 (\u0E1B\u0E23\u0E31\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E01\u0E27\u0E49\u0E32\u0E07\u0E15\u0E32\u0E21 class bootstrap)" },
    { require: '', name: 'colorTheme', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E2A\u0E35\u0E02\u0E2D\u0E07\u0E1B\u0E38\u0E48\u0E21 \u0E42\u0E14\u0E22\u0E04\u0E48\u0E32\u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E23\u0E30\u0E1A\u0E38\u0E44\u0E14\u0E49 \u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E27\u0E22\n        success=\u0E2A\u0E35\u0E40\u0E02\u0E35\u0E22\u0E27, warning=\u0E2A\u0E35\u0E2A\u0E49\u0E21, danger=\u0E2A\u0E35\u0E41\u0E14\u0E07" },
    { require: '*', name: '[(ngModel)]', type: 'array of data', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E31\u0E1A\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E41\u0E1A\u0E1A two way \u0E0B\u0E36\u0E48\u0E07\u0E04\u0E48\u0E32\u0E17\u0E35\u0E48\u0E2A\u0E48\u0E07\u0E44\u0E1B\u0E08\u0E30\u0E40\u0E1B\u0E47\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E2A\u0E48\u0E07\u0E44\u0E1B\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E01\u0E25\u0E38\u0E48\u0E21 Checkbox \u0E41\u0E25\u0E30\u0E08\u0E30\u0E44\u0E14\u0E49\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E48\u0E07\u0E01\u0E25\u0E31\u0E1A\u0E21\u0E32\u0E17\u0E35\u0E48\u0E15\u0E31\u0E27\u0E41\u0E1B\u0E23\u0E40\u0E14\u0E34\u0E21" },
];
var _releaseUpdate = [
    { dateUpdate: "Bug Fixes 2.0.1 (1 June 2017)" },
    { head: "Value", data: "Return value not correct" },
    { head: "Number of col (in type column)", data: "default col = 1" },
    { head: "Type", data: "default type = inline" },
    { head: "Readonly", data: "remove attribute readonly" },
    { head: "Attribute of array data", data: "\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E2D\u0E07 attribute disable, checked \u0E08\u0E32\u0E01 string \u0E40\u0E1B\u0E47\u0E19 boolean \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2A\u0E30\u0E14\u0E27\u0E01\u0E15\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19" },
    { dateUpdate: "Version 2.0 (12 May 2017)" },
    { head: "\u0E01\u0E32\u0E23\u0E23\u0E31\u0E1A\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25", data: "\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E01\u0E32\u0E23\u0E23\u0E31\u0E1A\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E08\u0E32\u0E01\u0E43\u0E0A\u0E49\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E19\u0E23\u0E31\u0E1A\u0E40\u0E1B\u0E47\u0E19\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49 ngModel \u0E41\u0E17\u0E19 (\u0E44\u0E21\u0E48\u0E21\u0E35\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19 Attribute data \u0E41\u0E25\u0E30 event valueOut \u0E41\u0E25\u0E49\u0E27)" },
    { dateUpdate: "Bug Fixes 1.0.1 (5 May 2017)" },
    { head: "Value", data: "Return value not correct" },
];
var CheckboxDocument = (function () {
    function CheckboxDocument() {
        this.version = "2.0";
        this.releaseDate = "1 June 2017";
        this.datas1 = DATA1;
        this.datas2 = DATA2;
        this.datas3 = DATA3;
        this.codeExample1 = EXAMPLE1;
        this.codeExample2 = EXAMPLE2;
        this.codeExample3 = EXAMPLE3;
        this.codeTS1 = EXAMPLE1TS;
        this.codeTS2 = EXAMPLE2TS;
        this.codeTS3 = EXAMPLE3TS;
        this.attributeList = ATTRIBUTELIST;
        this.releaseUpdate = _releaseUpdate;
        this.componentTag = '<go-checkbox>';
        this.componentDescription = "Checkbox \u0E40\u0E1B\u0E47\u0E19\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D\u0E0A\u0E48\u0E27\u0E22\u0E43\u0E2B\u0E49\u0E01\u0E23\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1A\u0E32\u0E07\u0E2D\u0E22\u0E48\u0E32\u0E07 \u0E41\u0E25\u0E30\u0E17\u0E33\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E42\u0E14\u0E22\u0E01\u0E14\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E2B\u0E21\u0E32\u0E22\u0E16\u0E39\u0E01\u0E17\u0E35\u0E48\u0E15\u0E31\u0E27\u0E43\u0E14\u0E15\u0E31\u0E27\u0E2B\u0E19\u0E36\u0E48\u0E07\n                \u0E2B\u0E23\u0E37\u0E2D \u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19 \u0E17\u0E33\u0E43\u0E2B\u0E49\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E14\u0E49\u0E2B\u0E25\u0E32\u0E22\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23";
        this.componentFeature = [
            { data: "\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E2A\u0E35 checkbox " },
            { data: "\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A checkbox \u0E41\u0E1A\u0E1A block \u0E2B\u0E23\u0E37\u0E2D inline \u0E2B\u0E23\u0E37\u0E2D \u0E41\u0E1A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E1B\u0E47\u0E19\u0E04\u0E2D\u0E25\u0E31\u0E21\u0E19\u0E4C\u0E44\u0E14\u0E49" },
            { data: "\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E01\u0E32\u0E23\u0E40\u0E1B\u0E34\u0E14\u0E1B\u0E34\u0E14\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19 checkbox" }
        ];
        this.attrSyntax = [
            { data: "<go-checkbox" },
            { data: "         id=\"checkbox_id\"" },
            { data: "         [name=\"checkbox_name\"]" },
            { data: "         [label=\"checkbox_label\"] " },
            { data: "         [(ngModel)]=\"array_of_data\"" },
            { data: "         [type=\"type_of_checkbox_format\"]" },
            { data: "         [col=\"number_of_column\"]" },
            { data: "         [colorTheme=\"bootstrap_color\"] " },
            { data: "         [require=\"true_or_false\"]" },
            { data: "></go-checkbox>" },
        ];
        this.arrSyntax = [
            { data: "const DATA: Array<any> = [{" },
            { data: "         value: \"value_of_checkbox\"," },
            { data: "         label: \"label_of_checkbox\"," },
            { data: "         [disable: true_or_false]," },
            { data: "         [checked: true_or_false] " },
            { data: "  }];" }
        ];
        this.arrOfDataList = [
            { require: '*', name: 'value', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E04\u0E48\u0E32\u0E43\u0E2B\u0E49 checkbox" },
            { require: '*', name: 'label', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E17\u0E35\u0E48\u0E08\u0E30\u0E41\u0E2A\u0E14\u0E07\u0E02\u0E49\u0E32\u0E07 checkbox" },
            { require: '', name: 'disable', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1B\u0E34\u0E14\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19 checkbox \u0E42\u0E14\u0E22\n          \u0E2B\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E38\u0E04\u0E48\u0E32 disable=\"true\" \u0E08\u0E30\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E44\u0E14\u0E49" },
            { require: '', name: 'checked', type: 'boolean ', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32 check \u0E43\u0E2B\u0E49 checkbox" }
        ];
    }
    return CheckboxDocument;
}());
CheckboxDocument = __decorate([
    core_1.Component({
        selector: 'doc-checkbox',
        templateUrl: './checkbox.document.html'
    })
], CheckboxDocument);
exports.CheckboxDocument = CheckboxDocument;
//# sourceMappingURL=checkbox.document.js.map