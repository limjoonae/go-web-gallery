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
    { require: '*', name: 'elementId', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 id \u0E43\u0E2B\u0E49\u0E01\u0E31\u0E1A text editor" },
    { require: '', name: 'height', type: 'number', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E39\u0E07\u0E43\u0E2B\u0E49\u0E01\u0E31\u0E1A editor \u0E42\u0E14\u0E22\u0E21\u0E35\u0E04\u0E48\u0E32\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E39\u0E07\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E17\u0E35\u0E48 200" },
    { require: '', name: 'width', type: 'number', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E04\u0E27\u0E32\u0E21\u0E01\u0E27\u0E49\u0E32\u0E07\u0E43\u0E2B\u0E49\u0E01\u0E31\u0E1A editor \u0E42\u0E14\u0E22\u0E2B\u0E32\u0E01\u0E44\u0E21\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E08\u0E30\u0E16\u0E37\u0E2D\u0E27\u0E48\u0E32\u0E43\u0E2B\u0E49\u0E02\u0E22\u0E32\u0E22\u0E40\u0E15\u0E47\u0E21 container \u0E17\u0E35\u0E48\u0E04\u0E23\u0E2D\u0E1A\u0E40\u0E2D\u0E32\u0E44\u0E27\u0E49" },
    { require: '', name: 'editormode', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19 \u0E42\u0E14\u0E22\u0E08\u0E30\u0E41\u0E1A\u0E48\u0E07\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E2D\u0E2D\u0E01\u0E40\u0E1B\u0E47\u0E19 3 \u0E23\u0E30\u0E14\u0E31\u0E1A\u0E04\u0E37\u0E2D basic, standard \u0E41\u0E25\u0E30 full (\u0E21\u0E35\u0E04\u0E48\u0E32\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E40\u0E1B\u0E47\u0E19 standard)" },
    {
        require: '', name: 'resize', type: 'boolean หรือ \'both\'', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E43\u0E2B\u0E49\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E1B\u0E23\u0E31\u0E1A\u0E02\u0E19\u0E32\u0E14\u0E15\u0E31\u0E27 editor \u0E40\u0E2D\u0E07\u0E44\u0E14\u0E49\u0E42\u0E14\u0E22\u0E21\u0E35\u0E04\u0E48\u0E32\u0E14\u0E31\u0E07\u0E19\u0E35\u0E49 1.fault \u0E04\u0E37\u0E2D \u0E44\u0E21\u0E48\u0E43\u0E2B\u0E49\u0E21\u0E35\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E31\u0E1A\u0E02\u0E19\u0E32\u0E14\u0E44\u0E14\u0E49 \n        2.true \u0E04\u0E37\u0E2D \u0E1B\u0E23\u0E31\u0E1A\u0E02\u0E19\u0E32\u0E14\u0E44\u0E14\u0E49\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E39\u0E07 3.'both' \u0E04\u0E37\u0E2D \u0E1B\u0E23\u0E31\u0E1A\u0E02\u0E19\u0E32\u0E14\u0E44\u0E14\u0E49\u0E17\u0E31\u0E49\u0E07\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E39\u0E07\u0E41\u0E25\u0E30\u0E04\u0E27\u0E32\u0E21\u0E01\u0E27\u0E49\u0E32\u0E07"
    },
    { require: '', name: 'showMenubar', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07 Menubar \u0E1A\u0E19\u0E41\u0E16\u0E1A\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D\u0E02\u0E2D\u0E07 editor" },
    { require: '', name: 'showStatusbar', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07 Statusbar \u0E1A\u0E19\u0E41\u0E16\u0E1A\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D\u0E02\u0E2D\u0E07 editor" },
    { require: '', name: 'content', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E43\u0E19 text editor \u0E15\u0E2D\u0E19\u0E40\u0E23\u0E34\u0E48\u0E21\u0E43\u0E0A\u0E49" },
    { require: '', name: 'onEditorChanged', type: 'function($event)', description: "\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E08\u0E30\u0E16\u0E39\u0E01\u0E40\u0E23\u0E35\u0E22\u0E01\u0E40\u0E21\u0E37\u0E48\u0E2D editor \u0E40\u0E01\u0E34\u0E14\u0E01\u0E32\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07 \u0E40\u0E0A\u0E48\u0E19 \u0E21\u0E35\u0E01\u0E32\u0E23\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E40\u0E02\u0E49\u0E32\u0E44\u0E1B\u0E43\u0E19 editor \u0E42\u0E14\u0E22\u0E04\u0E48\u0E32 event \u0E17\u0E35\u0E48\u0E2A\u0E48\u0E07\u0E2D\u0E2D\u0E01\u0E21\u0E32\u0E04\u0E37\u0E2D content \u0E43\u0E19\u0E15\u0E31\u0E27 editor \u0E42\u0E14\u0E22\u0E08\u0E30\u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E42\u0E04\u0E23\u0E07\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E02\u0E2D\u0E07 HTML" }
];
var SYSTEMJSLINE = [
    "map: {",
    "   ..........",
    "   'tinymce': 'npm:tinymce',",
    "   'go-texteditor': 'go:texteditor/{version}',",
    "   ..........",
    "},",
    "meta: {",
    "   ..........",
    "   'tinymce': {",
    "      format: 'global'",
    "   },",
    "   ..........",
    "},",
    "packages: {",
    "   ..........",
    "   'tinymce': {",
    "      main: './tinymce.min.js',",
    "      defaultExtension: 'js'",
    "   },",
    "   'go-texteditor': {",
    "      main: './texteditor.js',",
    "      defaultExtension: 'js'",
    "   },",
    "   ..........",
    "}",
];
var APPMODULELINE = [
    "import { TextEditorComponent } from 'go-texteditor';",
    "",
    "@NgModule({",
    "   declarations: [",
    "   ..........",
    "   TextEditorComponent",
    "   ..........",
    "],",
];
var TextEditorDocument = (function () {
    function TextEditorDocument() {
        this.componentTag = '<go-texteditor>';
        this.componentDescription = "\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E40\u0E23\u0E35\u0E22\u0E01\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19 Rich Text Editor \u0E1A\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E40\u0E27\u0E47\u0E1A";
        this.version = '1.0';
        this.releaseDate = '7/12/2016';
        this.prefixSyntax = "<go-texteditor ";
        this.attrSyntax = "elementId=\"editor_id\" [[height]=\"_height\"] [[width]=\"_width\"] \n        [editormode=\"mode_level\"] [[resize]=\"resize_value\"] [[showMenubar]=\"is_menubar_showed\"] \n        [[showStatusbar]=\"is_statusbar_showed\"] [content='text_editor_content'] \n        [(onEditorChanged)= \"change_function($event)\"]";
        this.suffixSyntax = "></go-texteditor>";
        this.attributeList = ATTRIBUTELIST;
        this.appModuleLine = APPMODULELINE;
        this.systemjsLine = SYSTEMJSLINE;
        this.appModuleDetail = "app.module.ts";
        this.systemJSDetail = "systemjs.config.js";
        this.code_1 = "\n    <go-texteditor elementId='editor_1' [height]='100' editormode='basic' content='basic editor' \n    (onEditorChanged)=\"change_1($event)\"></go-texteditor>";
        this.code_output_1 = "app.component.ts\n    value_1: string = '';\n    change_1(event: any) { this.value_1 = event; }";
        this.code_2 = "\n    \t<go-texteditor elementId='editor_2' editormode='standard' [width]='400' \n    [showMenubar]='false' [resize]='true' content='standard editor'\t(onEditorChanged)=\"change_2($event)\">\n    </go-texteditor>";
        this.code_output_2 = "app.component.ts\n    value_1: string = '';\n    change_2(event: any) { this.value_2 = event; }";
        this.code_3 = "\n    <go-texteditor elementId='editor_3' editormode='full' [showStatusbar]='false' \n    content='full editor' (onEditorChanged)=\"change_3($event)\"></go-texteditor>";
        this.code_output_3 = "app.component.ts\n    value_1: string = '';\n     change_3(event: any) { this.value_3 = event; }";
        this.value_1 = '';
        this.value_2 = '';
        this.value_3 = '';
    }
    TextEditorDocument.prototype.change_1 = function (event) { this.value_1 = event; };
    TextEditorDocument.prototype.change_2 = function (event) { this.value_2 = event; };
    TextEditorDocument.prototype.change_3 = function (event) { this.value_3 = event; };
    return TextEditorDocument;
}());
TextEditorDocument = __decorate([
    core_1.Component({
        selector: 'texteditor-document',
        templateUrl: './texteditor.document.html'
    })
], TextEditorDocument);
exports.TextEditorDocument = TextEditorDocument;
//# sourceMappingURL=texteditor.document.js.map