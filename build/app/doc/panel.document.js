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
    { require: '', name: 'header', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 title \u0E02\u0E2D\u0E07 panel" },
    { require: '', name: 'toggleable', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E2B\u0E49 panel \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16 expanded \u0E2B\u0E23\u0E37\u0E2D collapsed \u0E44\u0E14\u0E49" },
    { require: '', name: 'collapsed', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E2B\u0E49\u0E04\u0E48\u0E32\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E02\u0E2D\u0E07 panel \u0E19\u0E31\u0E49\u0E19 collapsed \u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48" },
    { require: '', name: 'style', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 style \u0E41\u0E1A\u0E1A inline" },
    { require: '', name: 'styleClass', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 style class" }
];
var _EVENTLIST = [
    { require: '', name: 'onBeforeToggle', type: 'function($event)', description: "\u0E08\u0E30\u0E2A\u0E48\u0E07 event \u0E43\u0E2B\u0E49\u0E01\u0E48\u0E2D\u0E19\u0E17\u0E35\u0E48 Content \u0E08\u0E30 toggle" },
    { require: '', name: 'onAfterToggle', type: 'function($event)', description: "\u0E08\u0E30\u0E2A\u0E48\u0E07 event \u0E43\u0E2B\u0E49\u0E2B\u0E25\u0E31\u0E07\u0E08\u0E32\u0E01\u0E17\u0E35\u0E48 Content \u0E16\u0E39\u0E01 toggle" },
];
var _ATTRSYNTAX = [
    { data: "" },
    { data: "     [header = \"title\"]" },
    { data: "     [toggleable = \"true_or_false\"]" },
    { data: "     [collapsed = \"true_or_false\"]" },
    { data: "     [style = \"style_inline\"]" },
    { data: "     [styleClass = \"style_class\"]" }
];
var _EXAMPLE1 = [
    { data: "<p-panel id='panel_basic' header=\"Title\" [toggleable] = \"true\" [collapsed]=\"true\" (onBeforeToggle)=\"beforeCollapsed()\">{{Content}}</p-panel>" },
];
var _EXAMPLE2 = [
    { data: "<p-panel header=\"Title\" [toggleable] = \"true\" [collapsed]=\"true\" (onBeforeToggle)=\"beforeCollapsed()\">{{Content}}</p-panel>" },
    { data: "" },
    { data: "component.ts" },
    { data: "collapsed : boolean = true;" },
    { data: "beforeCollapsed(){" },
    { data: " this.collapsed = !this.collapsed;" },
    { data: "}" },
];
var PanelDocument = (function () {
    function PanelDocument() {
        this.componentTag = 'Panel';
        this.version = '1.0';
        this.componentDescription = "Panel \u0E40\u0E1B\u0E47\u0E19\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D\u0E43\u0E19\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E2D\u0E07\u0E04\u0E4C\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E15\u0E48\u0E32\u0E07 \u0E46 \u0E40\u0E02\u0E49\u0E32\u0E14\u0E49\u0E27\u0E22\u0E01\u0E31\u0E19 \u0E42\u0E14\u0E22\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16 toggle \u0E44\u0E14\u0E49";
        this.releaseDate = '29 March 2017';
        this.creditURL = 'https://www.primefaces.org/primeng/#/panel';
        this.credit = 'primeng (2.0.5)';
        this.prefixSyntax = '<p-panel';
        this.attrSyntaxList = _ATTRSYNTAX;
        this.suffixSyntax = '> Content </p-panel>';
        this.attributeList = _ATTRIBUTELIST;
        this.eventList = _EVENTLIST;
        this.codeExample1 = _EXAMPLE1;
        this.content = "Panel Text Here";
        this.collapsed = true;
    }
    PanelDocument.prototype.beforeCollapsed = function () {
        this.collapsed = !this.collapsed;
    };
    return PanelDocument;
}());
PanelDocument = __decorate([
    core_1.Component({
        selector: 'doc-panel',
        templateUrl: './panel.document.html'
    })
], PanelDocument);
exports.PanelDocument = PanelDocument;
//# sourceMappingURL=panel.document.js.map