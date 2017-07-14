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
    { require: '*', name: 'goId', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 id \u0E02\u0E2D\u0E07 text area" },
    { require: '*', name: 'goName', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 name \u0E02\u0E2D\u0E07 text area" },
    { require: '', name: 'label', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E43\u0E2A\u0E48\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E43\u0E19 label \u0E02\u0E2D\u0E07 text area" },
    { require: '', name: 'defaultValue', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E23\u0E31\u0E1A-\u0E2A\u0E48\u0E07\u0E43\u0E19 textarea" },
    { require: '', name: 'row', type: 'number', description: "\u0E43\u0E0A\u0E49\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E39\u0E07\u0E02\u0E2D\u0E07 text area \u0E2B\u0E32\u0E01\u0E44\u0E21\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14 \u0E08\u0E30\u0E21\u0E35\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E39\u0E07 = 2 \u0E1A\u0E23\u0E23\u0E17\u0E31\u0E14" },
    { require: '', name: 'require', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E01\u0E31\u0E1A text area \u0E17\u0E35\u0E48\u0E08\u0E33\u0E40\u0E1B\u0E47\u0E19\u0E15\u0E49\u0E2D\u0E07\u0E23\u0E30\u0E1A\u0E38\u0E04\u0E48\u0E32 \u0E42\u0E14\u0E22\n        \u0E2B\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E38\u0E04\u0E48\u0E32 require =\"true\" \u0E08\u0E30\u0E41\u0E2A\u0E14\u0E07 * \u0E2B\u0E25\u0E31\u0E07 label" },
    { require: '', name: 'disable', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1B\u0E34\u0E14\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19 textarea \u0E42\u0E14\u0E22\n        \u0E2B\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E38\u0E04\u0E48\u0E32 disable=\"true\" \u0E08\u0E30\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E41\u0E01\u0E49\u0E44\u0E02\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E43\u0E19 textarea \u0E44\u0E14\u0E49" },
    { require: '', name: 'readonly', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E2B\u0E49\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E41\u0E01\u0E49\u0E44\u0E02\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E43\u0E19 text area \u0E44\u0E14\u0E49" },
    { require: '', name: 'maxlength', type: 'number', description: "\u0E43\u0E0A\u0E49\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E04\u0E27\u0E32\u0E21\u0E22\u0E32\u0E27\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14\u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E44\u0E14\u0E49\u0E43\u0E19 text area \n        \u0E2B\u0E32\u0E01\u0E44\u0E21\u0E48\u0E23\u0E30\u0E1A\u0E38\u0E08\u0E30\u0E21\u0E35\u0E04\u0E48\u0E32 = 524288 \u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23" },
    { require: '', name: 'colorTheme', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E2A\u0E35\u0E02\u0E2D\u0E07 text area \u0E42\u0E14\u0E22\u0E04\u0E48\u0E32\u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E23\u0E30\u0E1A\u0E38\u0E44\u0E14\u0E49 \u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E14\u0E49\u0E27\u0E22\n        success=\u0E2A\u0E35\u0E40\u0E02\u0E35\u0E22\u0E27, info=\u0E2A\u0E35\u0E1F\u0E49\u0E32, warning=\u0E2A\u0E35\u0E2A\u0E49\u0E21, danger=\u0E2A\u0E35\u0E41\u0E14\u0E07" }
];
var TextareaDocument = (function () {
    function TextareaDocument() {
        this.componentTag = '<go-textarea>';
        this.componentDescription = "Text area \u0E43\u0E0A\u0E49\u0E43\u0E19\u0E01\u0E32\u0E23\u0E23\u0E31\u0E1A\u0E04\u0E48\u0E32\u0E41\u0E25\u0E30\u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21";
        this.version = '1.0';
        this.releaseDate = '10/02/2016';
        this.prefixSyntax = "<go-textarea ";
        this.attrSyntax = "goId=\"textarea_id\" goName=\"textarea_name\" [ defaultValue=\"text\" or [(defaultValue)]=\"text_parameter\" ] [label=\"label_name\"] [row=\"row_num\"] [require=\"true_or_false\"] [disable=\"true_or_false\"] [readonly=\"true_or_false\"] [maxlength=\"number\"] [colorTheme=\"text\"] ";
        this.suffixSyntax = "></go-textarea>";
        this.attributeList = ATTRIBUTELIST;
        this.paramText = '{{wording}}';
        this.wording = 'I have an Apple';
    }
    TextareaDocument.prototype.ngOnInit = function () {
    };
    return TextareaDocument;
}());
TextareaDocument = __decorate([
    core_1.Component({
        selector: 'textarea-document',
        templateUrl: './textarea.document.html',
        styleUrls: ['./textarea.document.css']
    }),
    __metadata("design:paramtypes", [])
], TextareaDocument);
exports.TextareaDocument = TextareaDocument;
//# sourceMappingURL=textarea.document.js.map