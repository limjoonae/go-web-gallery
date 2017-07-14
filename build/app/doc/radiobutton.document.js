"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var DATA1 = [
    { value: '11', label: 'radio button 1', disable: '', readonly: '', checked: 'true' },
    { value: '12', label: 'radio button 2', disable: '', readonly: '', checked: '' }
];
var DATA2 = [
    { value: '11', label: 'radio button 1', disable: 'true', readonly: '', checked: '' },
    { value: '12', label: 'radio button 2', disable: '', readonly: '', checked: 'true' }
];
var DATA3 = [
    { value: '31', label: 'radio button 1', disable: '', readonly: '', checked: 'true' },
    { value: '32', label: 'radio button 2', disable: '', readonly: '', checked: '' },
    { value: '33', label: 'radio button 3', disable: 'true', readonly: '', checked: '' },
    { value: '34', label: 'radio button 4', disable: '', readonly: '', checked: '' },
    { value: '35', label: 'radio button 5', disable: '', readonly: '', checked: '' }
];
var EXAMPLE1 = [
    { data: "app.component.html" },
    { data: "" },
    { data: "<go-radiobutton id='radionbutton_block' name=\"radioname1\"" },
    { data: "                  label=\"Radio button: \"" },
    { data: "                  [data]=\"data\"" },
    { data: "                  type=\"block\"" },
    { data: "                  colorTheme=\"success\"" },
    { data: "                  require=\"true\"" },
    { data: "                  (valueOut)=\"textValue($event)\"" },
    { data: "> </go-radiobutton>" },
    { data: "<p> <strong> Output value: </strong> {{getValue}} </p>" },
    { data: "<p> <strong> Output label: </strong> {{getLabel}} </p>" },
    { data: "" },
    { data: "app.component.ts" },
    { data: "" },
    { data: "private datas: Array<any> = [" },
    { data: "  { value: '11', label: 'radio button 1', disable: '', readonly: '', checked: 'true' }," },
    { data: "  { value: '12', label: 'radio button 2', disable: '', readonly: '', checked: '' }" },
    { data: "];" },
    { data: "" },
    { data: "private getValue: any = [];" },
    { data: "private getLabel: any = [];" },
    { data: "" },
    { data: "private textValue(data: any): void{  \n        this.getValue = data.value;\n        this.getLabel = data.label;\n  }" }
];
var EXAMPLE2 = [
    { data: "const DATA: Array<any> = [" },
    { data: "   { value: '11', label: 'radio button 1', disable: 'true', readonly: '', checked: '' }," },
    { data: "   { value: '12', label: 'radio button 2', disable: '', readonly: '', checked: 'true' }" },
    { data: "];" },
    { data: "" },
    { data: "private datas = DATA;" },
    { data: "" },
    { data: "<go-radiobutton  id='radionbutton_in-line' name=\"radioname2\"" },
    { data: "                  label=\"Radio button: \"" },
    { data: "                  [data]=\"data\"" },
    { data: "                  colorTheme=\"warning\">" },
    { data: " </go-radiobutton>" },
];
var EXAMPLE3 = [
    { data: "private data: Array<any> = [" },
    { data: "   { value: '31', label: 'radio button 1', disable: '', readonly: '', checked: 'true' }," },
    { data: "   { value: '32', label: 'radio button 2', disable: '', readonly: '', checked: '' }," },
    { data: "   { value: '33', label: 'radio button 3', disable: 'true', readonly: '', checked: '' }," },
    { data: "   { value: '34', label: 'radio button 4', disable: '', readonly: '', checked: '' }," },
    { data: "   { value: '35', label: 'radio button 5', disable: '', readonly: '', checked: '' }," },
    { data: "];" },
    { data: "" },
    { data: "<go-radiobutton id='radionbutton_column' name=\"chbnames3\"" },
    { data: "               label=\"Select Radio button: \"" },
    { data: "               [data]=\"data\"" },
    { data: "               type=\"column\"" },
    { data: "               [col]=\"3\"" },
    { data: "               colorTheme=\"danger\"" },
    // { data: `               require="true"`},
    { data: "               >" },
    { data: "</go-radiobutton>" },
];
var arrSyntaxList = [
    { data: "const DATA: Array<any> = [{" },
    { data: "       value: \"value_of_radioButton\"," },
    { data: "       label: \"label_of_radioButton\"," },
    { data: "       [disable: \"true_or_false\"]," },
    { data: "       [readonly: \"true_or_false\"]," },
    { data: "       [checked: \"true_or_false\"]" },
    { data: "  }];" }
];
var attrSyntaxList = [
    { data: "<go-radiobutton" },
    { data: "       id=\"radio_id\"" },
    { data: "       [name=\"radio_name\"]" },
    { data: "       [label=\"radio_label\"] " },
    { data: "       data=\"array_of_data\"" },
    { data: "       [type=\"type_of_radiobutton_format\"]" },
    { data: "       [col=\"number_of_column\"]" },
    { data: "       [colorTheme=\"bootstrap_color\"] " },
    { data: "       [require=\"true_or_false\"]" },
    { data: "></go-radiobutton>" },
];
var ATTRIBUTELIST = [
    { require: '*', name: 'id', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 id \u0E43\u0E2B\u0E49 radio button" },
    { require: '*', name: 'name', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 name \u0E43\u0E2B\u0E49 radio button" },
    { require: '', name: 'label', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 label \u0E2B\u0E19\u0E49\u0E32 radio button" },
    { require: '', name: 'require', type: 'boolean ', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32 require \u0E43\u0E2B\u0E49 radio button" },
    { require: '', name: 'type', type: 'inline/block/column ', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E27\u0E32\u0E07\u0E02\u0E2D\u0E07 radio button" },
    { require: '', name: 'col', type: 'number', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E08\u0E33\u0E19\u0E27\u0E19 column \u0E40\u0E21\u0E37\u0E48\u0E2D type = column \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E23\u0E30\u0E1A\u0E38\u0E08\u0E33\u0E19\u0E27\u0E19\u0E04\u0E2D\u0E25\u0E31\u0E21\u0E19\u0E4C\u0E44\u0E14\u0E49 1,2,3,4,6,12 \u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19 (\u0E1B\u0E23\u0E31\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E01\u0E27\u0E49\u0E32\u0E07\u0E15\u0E32\u0E21 class bootstrap)" },
    { require: '', name: 'colorTheme', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E2A\u0E35\u0E02\u0E2D\u0E07\u0E1B\u0E38\u0E48\u0E21 \u0E42\u0E14\u0E22\u0E04\u0E48\u0E32\u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E23\u0E30\u0E1A\u0E38\u0E44\u0E14\u0E49 \u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E27\u0E22\n        success=\u0E2A\u0E35\u0E40\u0E02\u0E35\u0E22\u0E27, info=\u0E2A\u0E35\u0E1F\u0E49\u0E32, warning=\u0E2A\u0E35\u0E2A\u0E49\u0E21, danger=\u0E2A\u0E35\u0E41\u0E14\u0E07" }
];
var ARRDATALIST = [
    { require: '*', name: 'value', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E04\u0E48\u0E32\u0E43\u0E2B\u0E49 radio button" },
    { require: '*', name: 'label', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E17\u0E35\u0E48\u0E08\u0E30\u0E41\u0E2A\u0E14\u0E07\u0E02\u0E49\u0E32\u0E07 radio button" },
    { require: '', name: 'disable', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1B\u0E34\u0E14\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19 radio button \u0E42\u0E14\u0E22\n        \u0E2B\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E38\u0E04\u0E48\u0E32 disable=\"true\" \u0E08\u0E30\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E44\u0E14\u0E49" },
    { require: '', name: 'readonly', type: 'boolean ', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32 radio button \u0E43\u0E2B\u0E49\u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25 read only" },
    { require: '', name: 'checked', type: 'boolean ', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32 check \u0E43\u0E2B\u0E49 radio button" }
];
var GETTINGSTART = [
    { data: "import { RadioButtonComponent }  from 'go-radiobutton';" },
    { data: "import { CustomDisabledDirective, CustomReadonlyDirective, CustomCheckDirective  } from 'go-directive';" },
    { data: "import { LabelComponent } from 'go-label';" },
    { data: "" },
    { data: "@NgModule({" },
    { data: "declarations: [ " },
    { data: "     .................." },
    { data: "     RadioButtonComponent," },
    { data: "     CustomDisabledDirective," },
    { data: "     CustomReadonlyDirective," },
    { data: "     CustomCheckDirective," },
    { data: "     LabelComponent," },
    { data: "     .................." },
    { data: "]," }
];
var RadioButtonDocument = (function () {
    function RadioButtonDocument() {
        this.componentTag = '<go-radiobutton>';
        this.componentDescription = "Radiobutton \u0E40\u0E1B\u0E47\u0E19\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D\u0E0A\u0E48\u0E27\u0E22\u0E43\u0E2B\u0E49\u0E01\u0E23\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1A\u0E32\u0E07\u0E2D\u0E22\u0E48\u0E32\u0E07 \u0E41\u0E25\u0E30\u0E17\u0E33\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E42\u0E14\u0E22\u0E01\u0E14\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E17\u0E35\u0E48\u0E15\u0E31\u0E27\u0E43\u0E14\u0E15\u0E31\u0E27\u0E2B\u0E19\u0E36\u0E48\u0E07 \u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E14\u0E49\u0E2B\u0E25\u0E32\u0E22\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01";
        this.componentFeature = [
            { data: "\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E2A\u0E35 radio button " },
            { data: "\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A radio button \u0E41\u0E1A\u0E1A block, inline \u0E2B\u0E23\u0E37\u0E2D \u0E41\u0E1A\u0E1A\u0E04\u0E2D\u0E25\u0E31\u0E21\u0E19\u0E4C" },
            { data: "\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E01\u0E32\u0E23\u0E40\u0E1B\u0E34\u0E14\u0E1B\u0E34\u0E14\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19 radio button" }
        ];
        this.releaseDate = "24 Febuary 2016";
        this.version = '1.0';
        this.datas1 = DATA1;
        this.datas2 = DATA2;
        this.datas3 = DATA3;
        this.codeExample1 = EXAMPLE1;
        this.codeExample2 = EXAMPLE2;
        this.codeExample3 = EXAMPLE3;
        this.arrSyntax = arrSyntaxList;
        this.attrSyntax = attrSyntaxList;
        this.attributeList = ATTRIBUTELIST;
        this.arrOfDataList = ARRDATALIST;
        this.gettingStartList = GETTINGSTART;
        this.systemjs = [
            { data: "map: {" },
            { data: "     'go-radiobutton': 'go:radiobutton/(version)'," },
            { data: "     'go-service':  'go:service/(version)'," },
            { data: "     'go-label':\t'go:label/(version)'," },
            { data: "     'go-directive': 'go:directive/(version)'," },
            { data: "  }," },
            { data: "" },
            { data: "packages: {" },
            { data: "'go-radiobutton': {" },
            { data: "   main: './radiobutton.js'," },
            { data: "   defaultExtension: 'js'" },
            { data: "}," },
            { data: "'go-service': {" },
            { data: "     main: './index.js'," },
            { data: "     defaultExtension: 'js'" },
            { data: "}," },
            { data: "'go-label': {" },
            { data: "     main: './label.js'," },
            { data: "     defaultExtension: 'js'" },
            { data: "}," },
            { data: "'go-directive': {" },
            { data: "     main: './index.js'," },
            { data: "     defaultExtension: 'js'" },
            { data: "}" },
            { data: "}" },
            { data: "" },
            { data: "" },
        ];
        this.getValue = [];
        this.getLabel = [];
    }
    RadioButtonDocument.prototype.textValue = function (data) {
        this.getValue = data.value;
        this.getLabel = data.label;
    };
    return RadioButtonDocument;
}());
RadioButtonDocument = __decorate([
    core_1.Component({
        selector: 'doc-radiobutton',
        templateUrl: './radiobutton.document.html'
    })
], RadioButtonDocument);
exports.RadioButtonDocument = RadioButtonDocument;
//# sourceMappingURL=radiobutton.document.js.map