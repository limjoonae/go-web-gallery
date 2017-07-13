"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var _ATTRIBUTELIST = [
    { require: '', name: 'multiple', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E2B\u0E49\u0E41\u0E17\u0E47\u0E1A\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E1B\u0E34\u0E14\u0E44\u0E14\u0E49\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E01\u0E31\u0E19\u0E2B\u0E25\u0E32\u0E22\u0E41\u0E17\u0E47\u0E1A" },
    { require: '', name: 'lazy', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E2B\u0E49\u0E42\u0E2B\u0E25\u0E14\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E41\u0E1A\u0E1A lazy" },
    { require: '', name: 'style', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 style \u0E41\u0E1A\u0E1A inline" },
    { require: '', name: 'styleClass', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 style class" }
];
var _ATTRIBUTEACCORDIONTABLIST = [
    { require: '', name: 'header', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 title \u0E02\u0E2D\u0E07 tab" },
    { require: '', name: 'selected', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E25\u0E37\u0E2D\u0E01 tab \u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23" },
    { require: '', name: 'disabled', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D disabled tab \u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23" },
];
var _EVENTLIST = [
    { require: '', name: 'onClose', type: 'function($event)', description: "\u0E08\u0E30\u0E2A\u0E48\u0E07 event \u0E43\u0E2B\u0E49\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E41\u0E17\u0E47\u0E1A collapsed" },
    { require: '', name: 'onOpen', type: 'function($event)', description: "\u0E08\u0E30\u0E2A\u0E48\u0E07 event \u0E43\u0E2B\u0E49\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E41\u0E17\u0E47\u0E1A expanded" },
];
var _ATTRSYNTAX = [
    { data: "" },
    { data: "     [multiple = \"true_or_false\"]" },
    { data: "     [lazy = \"true_or_false\"]" },
    { data: "     [style = \"style_inline\"]" },
    { data: "     [styleClass = \"style_class\"]" },
    { data: ">" },
    { data: " <p-accordionTab " },
    { data: "     [header = \"title\"]" },
    { data: "     [selected = \"true_or_false\"]" },
    { data: "     [disabled = \"true_or_false\"]" },
    { data: " </p-accordionTab>" },
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
    { data: "import { AccordionModule } from 'primeng';" },
    { data: "@NgModule({ \n   imports: [  \n           .................. \n           AccordionModule\n           .................. \n   ] \n  }) " }
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
    { data: "\n<p-accordion id = \"BasicAccordion\">\n  <p-accordionTab header=\"Header 1\" id = \"BasicAccordionTab1\">\n    Content 1\n  </p-accordionTab>\n  <p-accordionTab header=\"Header 2\" id = \"BasicAccordionTab2\">\n    Content 2\n  </p-accordionTab>\n  <p-accordionTab header=\"Header 3\" id = \"BasicAccordionTab3\">\n    Content 3    \n  </p-accordionTab>\n</p-accordion>\n" },
];
var _EXAMPLE2 = [
    { data: "\n<p-accordion [multiple]=\"true\" id=\"MultipleAccordion\">\n  <p-accordionTab header=\"Header 1\" id=\"MultipleAccordionTab1\">\n    Content 1\n  </p-accordionTab>\n  <p-accordionTab header=\"Header 2\" id=\"MultipleAccordionTab2\">\n    Content 2\n  </p-accordionTab>\n  <p-accordionTab header=\"Header 3\" id=\"MultipleAccordionTab3\">\n    Content 3    \n  </p-accordionTab>\n</p-accordion>\n    " },
];
var _EXAMPLE3 = [
    { data: "\n<p-accordion [lazy] = \"true\" id=\"LazyAccordion\">\n  <p-accordionTab header=\"Header 1\" [selected]=\"true\" id=\"LazyAccordionTab1\">\n    Content 1\n  </p-accordionTab>\n  <p-accordionTab header=\"Header 2\" id=\"LazyAccordionTab2\">\n    Content 2\n  </p-accordionTab>\n  <p-accordionTab header=\"Header 3\" id=\"LazyAccordionTab3\">\n    Content 3    \n  </p-accordionTab>\n</p-accordion>\n    " },
];
var _EXAMPLE4 = [
    { data: "\n<p-accordion id=\"DisableAccordion\">\n  <p-accordionTab header=\"Header 1\" [disabled]=\"true\" id=\"DisableAccordionTab1\">\n    Content 1\n  </p-accordionTab>\n  <p-accordionTab header=\"Header 2\" id=\"DisableAccordionTab2\">\n    Content 2\n  </p-accordionTab>\n  <p-accordionTab header=\"Header 3\" id=\"DisableAccordionTab3\">\n    Content 3    \n  </p-accordionTab>\n</p-accordion>\n    " },
];
var _EXAMPLE5 = [
    { data: "\n<p-accordion id=\"SelectedAccordion\">\n  <p-accordionTab header=\"Header 1\" [selected]=\"true\" id=\"SelectedAccordionTab1\">\n    Content 1\n  </p-accordionTab>\n  <p-accordionTab header=\"Header 2\" [selected]=\"true\" id=\"SelectedAccordionTab2\">\n    Content 2\n  </p-accordionTab>\n  <p-accordionTab header=\"Header 3\" [selected]=\"true\" id=\"SelectedAccordionTab3\">\n    Content 3    \n  </p-accordionTab>\n</p-accordion>\n    " },
];
var AccordionDocument = (function () {
    function AccordionDocument() {
        this.componentTag = 'Accordion';
        this.version = '1.0';
        this.componentDescription = "Accordion \u0E40\u0E1B\u0E47\u0E19\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D\u0E43\u0E19\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E2D\u0E07\u0E04\u0E4C\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E15\u0E48\u0E32\u0E07 \u0E46 \u0E43\u0E19 tab";
        this.releaseDate = '29 March 2017';
        this.creditURL = 'https://www.primefaces.org/primeng/#/accordion';
        this.credit = 'primeng (2.0.5)';
        this.prefixSyntax = '<p-accordion';
        this.attrSyntaxList = _ATTRSYNTAX;
        this.suffixSyntax = '</p-accordion>';
        this.attributeList = _ATTRIBUTELIST;
        this.attributeAccordTabList = _ATTRIBUTEACCORDIONTABLIST;
        this.eventList = _EVENTLIST;
        this.systemjs = _SYSTEMJS;
        this.appModule = _APPMODULE;
        this.styleLine_html = _styleLine_html;
        this.styleLine_css = _styleLine_css;
        this.codeExample1 = _EXAMPLE1;
        this.codeExample2 = _EXAMPLE2;
        this.codeExample3 = _EXAMPLE3;
        this.codeExample4 = _EXAMPLE4;
        this.codeExample5 = _EXAMPLE5;
    }
    return AccordionDocument;
}());
AccordionDocument = __decorate([
    core_1.Component({
        selector: 'doc-accordion',
        templateUrl: './accordion.document.html'
    })
], AccordionDocument);
exports.AccordionDocument = AccordionDocument;
//# sourceMappingURL=accordion.document.js.map