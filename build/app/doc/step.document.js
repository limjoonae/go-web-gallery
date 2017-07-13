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
var router_1 = require("@angular/router");
var _ATTRIBUTELIST = [
    { require: '*', name: 'model', type: 'array', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E43\u0E2B\u0E49 step" },
    { require: '', name: 'activeIndex', type: 'number', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E25\u0E02\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E43\u0E2B\u0E49 active" },
    { require: '', name: 'readonly', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E43\u0E2B\u0E49 read only" },
    { require: '', name: 'style', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 style \u0E41\u0E1A\u0E1A inline" },
    { require: '', name: 'styleClass', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 style class" }
];
// const _EVENTLIST: Array<any> = [
//     { require: '', name: 'onBeforeToggle', type: 'function($event)', description: `จะส่ง event ให้ก่อนที่ Content จะ toggle`},
//     { require: '', name: 'onAfterToggle', type: 'function($event)', description: `จะส่ง event ให้หลังจากที่ Content ถูก toggle`},
// ];
var _ATTRSYNTAX = [
    { data: "" },
    { data: "     model = \"items\"" },
    { data: "     [activeIndex = \"number\"]" },
    { data: "     [readonly = \"true_or_false\"]" },
    { data: "     [style = \"style_inline\"]" },
    { data: "     [styleClass = \"style_class\"]" }
];
var _SYSTEMJS = [
    { data: "map: {" },
    { data: "     'primeng': 'npm:primeng'," },
    { data: "  }," },
    { data: "" },
    { data: "packages: {" },
    { data: " 'primeng': {" },
    { data: "   main: './primeng.js'," },
    { data: "   defaultExtension: 'js'" },
    { data: " }" },
    { data: "}" }
];
var _APPMODULE = [
    { data: "import { StepsModule } from 'primeng';" },
    { data: "import { RouterModule, Routes } from '@angular/router'" },
    { data: "" },
    { data: "\n  const appRoutes: Routes = [\n    { path: '', component: AppComponent},\n  ];"
    },
    { data: "" },
    { data: "@NgModule({ \n   imports: [  \n           .................. \n           StepsModule,\n           RouterModule.forRoot(appRoutes, {useHash: true}),\n           .................. \n   ] \n  }) " }
];
var _styleLine_html = [
    '<link rel="stylesheet" type="text/css" href="http://10.182.247.173/gos-cdn/node_modules/2.4.0/primeng/resources/themes/bootstrap/theme.css" />',
    '<link rel="stylesheet" type="text/css" href="http://10.182.247.173/gos-cdn/node_modules/2.4.0/primeng/resources/primeng.min.css" />'
];
var _styleLine_css = [
    "@import url('http://10.182.247.173/gos-cdn/node_modules/2.4.0/primeng/resources/themes/bootstrap/theme.css');",
    "@import url('http://10.182.247.173/gos-cdn/node_modules/2.4.0/primeng/resources/primeng.min.css');"
];
var _EXAMPLE1 = [
    { data: "app.component.ts" },
    { data: "\nprivate items1 = [\n    { label: 'Login' },\n    { label: 'Select Round' },\n    { label: 'Payment' },\n    { label: 'Confirm' }\n];\n  " },
    { data: "" },
    { data: "app.component.html" },
    { data: "" },
    { data: "<p-steps id=\"basic_steps\" [model]=\"items1\" ></p-steps>" },
];
var _EXAMPLE2 = [
    { data: "app.component.ts" },
    { data: "" },
    { data: "import { ViewEncapsulation } from '@angular/core';" },
    { data: "\n@Component({\n    styles: ['\n        .ui-steps .ui-steps-item  {\n            width: 16%;\n        }\n\n        .ui-steps .ui-steps-title {\n          white-space: pre-line;\n        }\n        \n        .ui-steps.steps-custom .ui-steps-item .ui-steps-title {\n            color: #555555;\n        }\n       \n    '],\n    encapsulation: ViewEncapsulation.None\n  })" },
    { data: "" },
    { data: "export class Step  { " },
    { data: "\n  private activeIndex: number = 1;\n  private items2: Array<any> = [\n    {\n      label: 'Step 1',\n      command: (event: any) => {\n        this.activeIndex = 0;\n      }\n    },\n    {\n      label: 'Step 2',\n      command: (event: any) => {\n        this.activeIndex = 1;\n      }\n    },\n    {\n      label: 'Step 3',\n      command: (event: any) => {\n        this.activeIndex = 2;\n      }\n    },\n    {\n      label: 'Step 4',\n      command: (event: any) => {\n        this.activeIndex = 3;\n      }\n    },\n    {\n      label: 'Step 5',\n      command: (event: any) => {\n        this.activeIndex = 4;\n      }\n    },\n    {\n      label: 'Step 6',\n      command: (event: any) => {\n        this.activeIndex = 5;\n      }\n    }\n  ];\n    " },
    { data: "}" },
    { data: "" },
    { data: "app.component.html" },
    { data: "" },
    { data: "<p-steps id=\"custom_steps\" [model]=\"items2\" [(activeIndex)]=\"activeIndex\" [readonly]=\"false\" styleClass=\"steps-custom\"></p-steps>" },
];
var _EXAMPLE3 = [
    { data: "" },
];
var _EXAMPLE4 = [
    { data: "" },
];
var StepDocument = (function () {
    function StepDocument(router) {
        var _this = this;
        this.router = router;
        this.componentTag = 'Step';
        this.version = '1.0';
        this.componentDescription = "Step \u0E40\u0E1B\u0E47\u0E19\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D\u0E43\u0E19\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19 \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E1B\u0E23\u0E31\u0E1A\u0E43\u0E2B\u0E49\u0E40\u0E2B\u0E21\u0E32\u0E30\u0E2A\u0E21\u0E01\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19\u0E15\u0E48\u0E32\u0E07 \u0E46 \u0E44\u0E14\u0E49";
        this.releaseDate = '13 June 2017';
        this.creditURL = 'https://www.primefaces.org/primeng/#/steps';
        this.credit = 'primeng (2.0.5)';
        this.prefixSyntax = '<p-steps ';
        this.attrSyntaxList = _ATTRSYNTAX;
        this.suffixSyntax = '>  </p-steps>';
        this.attributeList = _ATTRIBUTELIST;
        // private eventList = _EVENTLIST;
        this.systemjs = _SYSTEMJS;
        this.appModule = _APPMODULE;
        this.styleLine_html = _styleLine_html;
        this.styleLine_css = _styleLine_css;
        this.codeExample1 = _EXAMPLE1;
        this.codeExample2 = _EXAMPLE2;
        this.codeExample3 = _EXAMPLE3;
        this.codeExample4 = _EXAMPLE4;
        this.activeIndex = 1;
        this.items1 = [
            { label: 'Step 1' },
            { label: 'Step 2' },
            { label: 'Step 3' },
            { label: 'Step 4' }
        ];
        this.items2 = [{
                label: 'Step 1',
                command: function (event) {
                    _this.activeIndex = 0;
                }
            },
            {
                label: 'Step 2',
                command: function (event) {
                    _this.activeIndex = 1;
                }
            },
            {
                label: 'Step 3',
                command: function (event) {
                    _this.activeIndex = 2;
                }
            },
            {
                label: 'Step 4',
                command: function (event) {
                    _this.activeIndex = 3;
                }
            },
            {
                label: 'Step 5',
                command: function (event) {
                    _this.activeIndex = 4;
                }
            },
            {
                label: 'Step 6',
                command: function (event) {
                    _this.activeIndex = 5;
                }
            }
        ];
    }
    return StepDocument;
}());
StepDocument = __decorate([
    core_1.Component({
        selector: 'doc-step',
        templateUrl: './step.document.html',
        styles: ["\n        .ui-steps .ui-steps-item  {\n            width: 16%;\n        }\n\n        .ui-steps .ui-steps-title {\n          white-space: pre-line;\n        }\n        \n        .ui-steps.steps-custom .ui-steps-item .ui-steps-title {\n            color: #555555;\n        }\n       \n    "],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [router_1.Router])
], StepDocument);
exports.StepDocument = StepDocument;
//# sourceMappingURL=step.document.js.map