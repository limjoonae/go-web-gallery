"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var _ATTRIBUTELIST = [
    { require: '', name: 'pTooltip', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E17\u0E35\u0E48\u0E08\u0E30\u0E41\u0E2A\u0E14\u0E07\u0E43\u0E19 tooltip \u0E41\u0E25\u0E30\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E43\u0E0A\u0E49 Tag html" },
    { require: '', name: 'tooltipPosition', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07\u0E02\u0E2D\u0E07 tooltip \u0E42\u0E14\u0E22\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E44\u0E14\u0E49\u0E14\u0E31\u0E07\u0E19\u0E35\u0E49  \"top\", \"bottom\", \"left\", \"right\"" },
    { require: '', name: 'tooltipEvent', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E2B\u0E49 tooltip \u0E41\u0E2A\u0E14\u0E07\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E01\u0E34\u0E14\u0E40\u0E2B\u0E15\u0E38\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E43\u0E14 \u0E46 \u0E42\u0E14\u0E22\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E44\u0E14\u0E49 2 \u0E40\u0E2B\u0E15\u0E38\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E14\u0E31\u0E07\u0E19\u0E35\u0E49 \"hover\", \"focus\"" },
    { require: '', name: 'tooltipDisabled', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1B\u0E34\u0E14\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19 tooltip \u0E42\u0E14\u0E22\u0E08\u0E30\u0E44\u0E21\u0E48\u0E41\u0E2A\u0E14\u0E07\u0E01\u0E25\u0E48\u0E2D\u0E07 tooltip \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E21\u0E35\u0E04\u0E48\u0E32\u0E40\u0E1B\u0E47\u0E19 true" },
    { require: '', name: 'positionStyle', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 style \u0E02\u0E2D\u0E07 position" },
    { require: '', name: 'tooltipStyleClass', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 style class" }
];
// const _EVENTLIST: Array<any> = [
//     { require: '', name: 'onBeforeToggle', type: 'function($event)', description: `จะส่ง event ให้ก่อนที่ Content จะ toggle`},
//     { require: '', name: 'onAfterToggle', type: 'function($event)', description: `จะส่ง event ให้หลังจากที่ Content ถูก toggle`},
// ];
var _ATTRSYNTAX = [
    { data: "" },
    { data: "     [pTooltip = \"message_in_tooltip\"]" },
    { data: "     [tooltipPosition = \"position_of_tooltip\"]" },
    { data: "     [tooltipEvent = \"hover_or_focus\"]" },
    { data: "     [tooltipDisabled = \"true_or_false\"]" },
    { data: "     [positionStyle = \"style_of_position\"]" },
    { data: "     [tooltipStyleClass = \"style_class\"]" }
];
var _releaseUpdate = [
    { head: "Version", data: "Update primeng version 4.0.0-rc.2" }
];
var _EXAMPLE1 = [
    { data: "\nBasic Tooltip\n<go-button goId=\"tooltip_right\" iconName=\"info\" buttonColor=\"info\" pTooltip=\"Basic Tooltip\"></go-button>\n\nTooltip Positioning\n<go-button goId=\"tooltip_left\" label=\"Left\" buttonColor=\"success\"  pTooltip=\"tooltip position left\" tooltipPosition=\"left\"></go-button>\n<go-button goId=\"tooltip_top\" label=\"Top\" buttonColor=\"warning\"  pTooltip=\"tooltip position top\" tooltipPosition=\"top\"></go-button>\n<go-button goId=\"tooltip_bottom\" label=\"Bottom\" buttonColor=\"danger\"  pTooltip=\"tooltip position bottom\" tooltipPosition=\"bottom\"></go-button>\n\nDisbled Tooltip\n<go-button goId=\"tooltip_disbled\" label=\"Disabled\" buttonColor=\"success\" pTooltip=\"disabled tooltip\" tooltipDisabled=\"true\"></go-button>\n\nTooltip with Event\n<input id=\"tooltip_onfocus\" type=\"text\" pTooltip=\"Textbox Tooltip\" tooltipEvent=\"focus\" placeholder=\"Focus on Me :D\">\n    " },
];
var TooltipDocument = (function () {
    function TooltipDocument() {
        this.componentTag = 'Tooltip';
        this.version = '2.0';
        this.componentDescription = "Tooltip \u0E43\u0E0A\u0E49\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22\u0E04\u0E33\u0E2B\u0E23\u0E37\u0E2D\u0E08\u0E38\u0E14\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21\u0E1A\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E40\u0E27\u0E47\u0E1A \u0E17\u0E35\u0E48\u0E08\u0E30\u0E02\u0E36\u0E49\u0E19\u0E21\u0E32\u0E40\u0E27\u0E25\u0E32\u0E40\u0E2D\u0E32\u0E40\u0E21\u0E32\u0E2A\u0E4C\u0E44\u0E1B\u0E0A\u0E35\u0E49\u0E17\u0E35\u0E48\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07\u0E17\u0E35\u0E48\u0E21\u0E35 ToolTip ";
        this.releaseDate = '29 March 2017';
        this.creditURL = 'https://www.primefaces.org/primeng/#/tooltip';
        this.credit = 'primeng (4.0.0-rc.2)';
        this.prefixSyntax = '<HTML Elements';
        this.attrSyntaxList = _ATTRSYNTAX;
        this.suffixSyntax = '> </HTML Elements>';
        this.attributeList = _ATTRIBUTELIST;
        // private eventList = _EVENTLIST;
        this.releaseUpdate = _releaseUpdate;
        this.releaseDay = '(29 March 2017)';
        this.codeExample1 = _EXAMPLE1;
    }
    return TooltipDocument;
}());
TooltipDocument = __decorate([
    core_1.Component({
        selector: 'doc-tooltip',
        templateUrl: './tooltip.document.html'
    })
], TooltipDocument);
exports.TooltipDocument = TooltipDocument;
//# sourceMappingURL=tooltip.document.js.map