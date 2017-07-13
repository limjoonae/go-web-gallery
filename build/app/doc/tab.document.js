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
    { require: '', name: 'orientation', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07\u0E02\u0E2D\u0E07 tab \u0E21\u0E32\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E23\u0E30\u0E1A\u0E38\u0E44\u0E14\u0E49\u0E14\u0E31\u0E07\u0E19\u0E35\u0E49 \"top\", \"bottom\", \"left\", \"right\"" },
    { require: '', name: 'style', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 style \u0E41\u0E1A\u0E1A inline" },
    { require: '', name: 'styleClass', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 style class" }
];
var _ATTRIBUTETABPANELLIST = [
    { require: '', name: 'header', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 header \u0E02\u0E2D\u0E07 tab" },
    { require: '', name: 'selected', type: 'boolean', description: "\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E2B\u0E49 tab \u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23 active" },
    { require: '', name: 'disabled', type: 'boolean', description: "\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E2B\u0E49 tab \u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23 disable" },
    { require: '', name: 'closable', type: 'boolean', description: "\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E2B\u0E49 tab \u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E1B\u0E34\u0E14 tab \u0E44\u0E14\u0E49" },
    { require: '', name: 'leftIcon', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 icon \u0E44\u0E27\u0E49\u0E14\u0E49\u0E32\u0E19\u0E0B\u0E49\u0E32\u0E22\u0E02\u0E2D\u0E07 tab" },
    { require: '', name: 'rightIcon', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 icon \u0E44\u0E27\u0E49\u0E14\u0E49\u0E32\u0E19\u0E02\u0E27\u0E32\u0E02\u0E2D\u0E07 tab" },
    { require: '', name: 'headerStyle', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 style \u0E41\u0E1A\u0E1A inline" },
    { require: '', name: 'headerStyleClass', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 style class" }
];
var _EVENTLIST = [
    { require: '', name: 'onChange', type: 'function($event)', description: "\u0E08\u0E30\u0E2A\u0E48\u0E07 event \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E41\u0E17\u0E47\u0E1A\u0E21\u0E35\u0E01\u0E32\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07" },
    { require: '', name: 'onClose', type: 'function($event)', description: "\u0E08\u0E30\u0E2A\u0E48\u0E07 event \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E41\u0E17\u0E47\u0E1A\u0E16\u0E39\u0E01\u0E1B\u0E34\u0E14" },
];
var _ATTRSYNTAX = [
    { data: "" },
    { data: "     <p-tabPanel" },
    { data: "       [header = \"header_of_tab\"]" },
    { data: "       [selected = \"true_or_false\"]" },
    { data: "       [disabled = \"true_or_false\"]" },
    { data: "       [closable = \"true_or_false\"]" },
    { data: "       [leftIcon = \"icon\"]" },
    { data: "       [rightIcon = \"icon\"]" },
    { data: "       [headerStyle = \"style_inline\"]" },
    { data: "       [headerStyleClass = \"style_class\"]" },
    { data: "     </p-tabPanel>" },
];
var _releaseUpdate = [
    { head: "Version", data: "Update primeng version 4.0.0-rc.2" },
    { head: "Icon", data: "\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E43\u0E2A\u0E48\u0E44\u0E2D\u0E04\u0E2D\u0E19 (\u0E08\u0E32\u0E01 Font Awesome)" },
    { head: "Closable", data: "\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E1B\u0E34\u0E14\u0E41\u0E17\u0E47\u0E1A (close tab) \u0E44\u0E14\u0E49" },
    { head: "Orientation", data: "\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E23\u0E30\u0E1A\u0E38\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07\u0E02\u0E2D\u0E07 tab \u0E23\u0E30\u0E1A\u0E38\u0E44\u0E14\u0E49\u0E14\u0E31\u0E07\u0E19\u0E35\u0E49 \"top\", \"bottom\", \"left\", \"right\"" },
    { head: "Event", data: "\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E2A\u0E48\u0E07 event \u0E04\u0E37\u0E19\u0E21\u0E32\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E01\u0E14\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E17\u0E47\u0E1A \u0E2B\u0E23\u0E37\u0E2D\u0E1B\u0E34\u0E14\u0E41\u0E17\u0E47\u0E1A\u0E44\u0E14\u0E49" },
];
var _EXAMPLE1 = [
    { data: "\n<p-tabView id=\"tabView_basic\">\n  <p-tabPanel header=\"Header 1\" id=\"basic_tp_1\" leftIcon=\"fa-calendar\">\n    Content 1\n  </p-tabPanel>\n  <p-tabPanel header=\"Header 2\" id=\"basic_tp_2\" leftIcon=\"fa-print\">\n    Content 2\n  </p-tabPanel>\n  <p-tabPanel header=\"Header 3\" id=\"basic_tp_3\" leftIcon=\"fa-bell-o\" rightIcon=\"fa-bookmark-o\">\n    Content 3\n  </p-tabPanel>\n</p-tabView>\n    " },
];
var _EXAMPLE2 = [
    { data: "app.component.ts" },
    { data: "\nprivate tabSelect: number = 1;\nprivate onTabChange(event) {\n  this.tabSelect = event.index;\n}\n  " },
    { data: "" },
    { data: "app.component.html" },
    { data: "" },
    { data: "\n<div class=\"form-group\">\n  <p-tabView (onChange)=\"onTabChange($event)\" id=\"tabView_event\">\n    <p-tabPanel header=\"Header I\"  id=\"event_tp_1\">\n      Content 1\n    </p-tabPanel>\n    <p-tabPanel header=\"Header II\" id=\"event_tp_2\" [selected]=\"true\">\n      Content 2\n    </p-tabPanel>\n    <p-tabPanel header=\"Header III\" id=\"event_tp_3\" [closable]=\"true\" >\n      Content 3\n    </p-tabPanel>\n    <p-tabPanel header=\"Header IV\" id=\"event_tp_4\" [disabled]=\"true\">\n      Content 4\n    </p-tabPanel>\n  </p-tabView>\n</div>\n<p> Select Tab: {{tabSelect + 1}}</p>\n    " },
];
var _EXAMPLE3 = [
    { data: "\n<p-tabView orientation=\"left\"  id=\"tabView_orientation\">\n  <p-tabPanel header=\"Header 1\" id=\"orientation_tp_1\" leftIcon=\"fa-calendar\">\n    Content 1\n  </p-tabPanel>\n  <p-tabPanel header=\"Header 2\" id=\"orientation_tp_2\" leftIcon=\"fa-print\">\n    Content 2\n  </p-tabPanel>\n  <p-tabPanel header=\"Header 3\" id=\"orientation_tp_3\" leftIcon=\"fa-bell-o\" rightIcon=\"fa-bookmark-o\">\n    Content 3\n  </p-tabPanel>\n</p-tabView>\n    " },
];
var _EXAMPLE4 = [
    { data: "" },
];
var TabDocument = (function () {
    function TabDocument() {
        this.componentTag = 'TabView';
        this.version = '2.0';
        this.componentDescription = "TabView \u0E40\u0E1B\u0E47\u0E19\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D\u0E43\u0E19\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E2D\u0E07\u0E04\u0E4C\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E15\u0E48\u0E32\u0E07 \u0E46 \u0E40\u0E02\u0E49\u0E32\u0E14\u0E49\u0E27\u0E22\u0E01\u0E31\u0E19 \u0E42\u0E14\u0E22\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E41\u0E1A\u0E48\u0E07\u0E2D\u0E2D\u0E01\u0E40\u0E1B\u0E47\u0E19\u0E41\u0E17\u0E47\u0E1A\u0E2B\u0E25\u0E32\u0E22 \u0E46 \u0E41\u0E17\u0E47\u0E1A\u0E15\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23";
        this.releaseDate = '29 March 2017';
        this.creditURL = 'https://www.primefaces.org/primeng/#/tabview';
        this.credit = '4.0.0-rc.2';
        this.prefixSyntax = "<p-tabView [orientation = \"orientation_of_tab\"] [style = \"style_inline\"] [styleClass = \"style_class\"] >";
        this.attrSyntaxList = _ATTRSYNTAX;
        this.suffixSyntax = '</p-tabView>';
        this.attributeList = _ATTRIBUTELIST;
        this.attributeTabPanelList = _ATTRIBUTETABPANELLIST;
        this.eventList = _EVENTLIST;
        this.releaseUpdate = _releaseUpdate;
        this.releaseDay = '(29 March 2017)';
        this.codeExample1 = _EXAMPLE1;
        this.codeExample2 = _EXAMPLE2;
        this.codeExample3 = _EXAMPLE3;
        this.codeExample4 = _EXAMPLE4;
        this.tabSelect = 1;
    }
    TabDocument.prototype.onTabChange = function (event) {
        this.tabSelect = event.index;
    };
    return TabDocument;
}());
TabDocument = __decorate([
    core_1.Component({
        selector: 'doc-tab',
        templateUrl: './tab.document.html'
    })
], TabDocument);
exports.TabDocument = TabDocument;
//# sourceMappingURL=tab.document.js.map