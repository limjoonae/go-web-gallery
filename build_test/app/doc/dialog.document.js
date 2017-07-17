"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var _ATTRIBUTELIST = [
    { require: '*', name: 'visible', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E27\u0E48\u0E32\u0E08\u0E30\u0E43\u0E2B\u0E49\u0E41\u0E2A\u0E14\u0E07 dialog \u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48 \u0E21\u0E35\u0E04\u0E48\u0E32 default \u0E40\u0E1B\u0E47\u0E19 false" },
    { require: '', name: 'header', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 Title \u0E02\u0E2D\u0E07 dialog" },
    { require: '', name: 'draggable', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E27\u0E48\u0E32\u0E43\u0E2B\u0E49 dialog \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E14\u0E49\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48 \u0E21\u0E35\u0E04\u0E48\u0E32 default \u0E40\u0E1B\u0E47\u0E19 true" },
    { require: '', name: 'closable', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07\u0E1B\u0E38\u0E48\u0E21\u0E1B\u0E34\u0E14(X) \u0E21\u0E35\u0E04\u0E48\u0E32 default \u0E40\u0E1B\u0E47\u0E19 true" },
    { require: '', name: 'responsive', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E2B\u0E49 dialog \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16 responsive \u0E44\u0E14\u0E49 \u0E21\u0E35\u0E04\u0E48\u0E32 default \u0E40\u0E1B\u0E47\u0E19 false (*\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E2B\u0E15\u0E38: \u0E04\u0E27\u0E23\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E04\u0E48\u0E32\u0E40\u0E1B\u0E47\u0E19 true \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25\u0E1A\u0E19 Mobile \u0E44\u0E14\u0E49)" },
    { require: '', name: 'showHeader', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E2B\u0E49 dialog \u0E41\u0E2A\u0E14\u0E07\u0E2A\u0E48\u0E27\u0E19 header \u0E21\u0E35\u0E04\u0E48\u0E32 default \u0E40\u0E1B\u0E47\u0E19 true" },
    { require: '', name: 'modal', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E27\u0E48\u0E32\u0E08\u0E30\u0E43\u0E2B\u0E49 lock screen \u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E41\u0E2A\u0E14\u0E07 dialog \u0E21\u0E35\u0E04\u0E48\u0E32 default \u0E40\u0E1B\u0E47\u0E19 false" },
    { require: '', name: 'width', type: 'number', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E04\u0E27\u0E32\u0E21\u0E01\u0E27\u0E49\u0E32\u0E07\u0E02\u0E2D\u0E07 dialog" },
    { require: '', name: 'height', type: 'number', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E39\u0E07\u0E02\u0E2D\u0E07 dialog" },
    { require: '', name: 'minWidth', type: 'number', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E04\u0E27\u0E32\u0E21\u0E01\u0E27\u0E49\u0E32\u0E07\u0E15\u0E48\u0E33\u0E2A\u0E38\u0E14\u0E02\u0E2D\u0E07 dialog" },
    { require: '', name: 'minHeight', type: 'number', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E39\u0E07\u0E15\u0E48\u0E33\u0E2A\u0E38\u0E14\u0E02\u0E2D\u0E07 dialog" },
    { require: '', name: 'style', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 style inline" },
    { require: '', name: 'styleClass', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 style class" },
];
var _EVENTLIST = [
    { require: '', name: 'onBeforeShow', type: 'function($even)', description: "\u0E08\u0E30\u0E17\u0E33\u0E07\u0E32\u0E19\u0E01\u0E48\u0E2D\u0E19\u0E41\u0E2A\u0E14\u0E07 dialog" },
    { require: '', name: 'onAfterShow', type: 'function($even)', description: "\u0E08\u0E30\u0E17\u0E33\u0E07\u0E32\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E41\u0E2A\u0E14\u0E07 dialog" },
    { require: '', name: 'onBeforeHide', type: 'function($even)', description: "\u0E08\u0E30\u0E17\u0E33\u0E07\u0E32\u0E19\u0E01\u0E48\u0E2D\u0E19\u0E0B\u0E48\u0E2D\u0E19 dialog" },
    { require: '', name: 'onAfterHide', type: 'function($even)', description: "\u0E08\u0E30\u0E17\u0E33\u0E07\u0E32\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E0B\u0E48\u0E2D\u0E19 dialog" },
];
var _ATTRSYNTAX = [
    { data: "" },
    { data: "   visible = \"true_or_false\"" },
    { data: "   [header = \"title\"]" },
    { data: "   [draggable = \"true_or_false\"]" },
    { data: "   [closable = \"true_or_false\"]" },
    { data: "   [responsive = \"true_or_false\"]" },
    { data: "   [showHeader = \"true_or_false\"]" },
    { data: "   [modal = \"true_or_false]" },
    { data: "   [width = \"width_of_dialog\"]" },
    { data: "   [height = \"height_of_dialog\"]" },
    { data: "   [minWidth = \"minimum_width_of_dialog\"]" },
    { data: "   [minHeight = \"minimum_height_of_dialog\"]" },
    { data: "   [style = \"style_inline\"]" },
    { data: "   [styleClass = \"style_class\"]" },
];
var _releaseUpdate = [
    { head: "Version", data: "Update primeng version 4.0.0-rc.2" },
    { head: "Footer", data: "\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E43\u0E2A\u0E48 footer \u0E43\u0E2B\u0E49\u0E41\u0E01\u0E48 popup \u0E44\u0E14\u0E49" },
    { head: "Draggable", data: "\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E2B\u0E49\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19 popup \u0E44\u0E1B\u0E21\u0E32\u0E44\u0E14\u0E49" },
    { head: "Responsive", data: "\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E01\u0E33\u0E2B\u0E19\u0E14 Responsive \u0E43\u0E2B\u0E49\u0E41\u0E01\u0E48 popup \u0E44\u0E14\u0E49" },
    { head: "Width - Height", data: "\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E04\u0E27\u0E32\u0E21\u0E01\u0E27\u0E49\u0E32\u0E07\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E39\u0E07\u0E43\u0E2B\u0E49\u0E41\u0E01\u0E48 popup \u0E44\u0E14\u0E49" },
];
var DialogDocument = (function () {
    function DialogDocument() {
        this.componentTag = 'Dialog';
        this.version = '2.0';
        this.componentDescription = "Dialog \u0E40\u0E1B\u0E47\u0E19\u0E40\u0E2B\u0E21\u0E37\u0E2D\u0E19 message-popup \u0E43\u0E0A\u0E49\u0E41\u0E2A\u0E14\u0E07\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E15\u0E48\u0E32\u0E07 \u0E46 ";
        this.releaseDate = '29 March 2017';
        this.creditURL = 'https://www.primefaces.org/primeng/#/dialog';
        this.credit = 'primeng (4.0.0-rc.2)';
        this.prefixSyntax = '<p-dialog';
        this.attrSyntaxList = _ATTRSYNTAX;
        this.suffixSyntax = '</p-dialog>';
        this.attributeList = _ATTRIBUTELIST;
        this.eventList = _EVENTLIST;
        this.releaseUpdate = _releaseUpdate;
        this.releaseDay = '(29 March 2017)';
        this.display = false;
        this.display2 = false;
        this.display3 = false;
        this.booleanArr = [true, false];
        this.title = "Hello World";
        this.title2 = 'Responsive';
        this.title3 = 'Non-Responsive';
        this.isShowHeader = true;
        this.isDraggable = true;
        this.isClosable = true;
        this.isResponsive = true;
        this.isModal = true;
        this.width = 300;
        this.body = "This is Dialog Body";
        this.res = !this.isResponsive;
        this.codeExample = [
            'app.component.ts',
            "\n private display: boolean = false;\n showDialog() {\n   this.display = !this.display;\n }\n",
            '',
            'app.component.html',
            '',
            "<go-button label=\"show\" iconName=\"external-link-square\" \n      buttonColor=\"primary\" (click)=\"showDialog()\" ></go-button>",
            '',
            '<p-dialog id="dialog_configuration"',
            '   [(visible)]="' + this.display + '"',
            '   header="' + this.title + '"',
            '   [showHeader]="' + this.isShowHeader + '"',
            '   [draggable]="' + this.isDraggable + '"',
            '   [closable]="' + this.isClosable + '"',
            '   [modal]="' + this.isModal + '"',
            '   width="' + this.width + '"',
            '   [height]="' + this.height + '"',
            '>',
            ' <p>' + this.body + '</p>',
            " <p-footer>\n    <div class=\"ui-dialog-buttonpane ui-widget-content ui-helper-clearfix\">\n      <go-button label=\"no\" iconName=\"close\" buttonColor=\"primary\" (click)=\"showDialog()\" ></go-button>\n      <go-button label=\"yes\" iconName=\"check\" buttonColor=\"primary\" (click)=\"showDialog()\" ></go-button>\n    </div>\n  </p-footer>",
            '</p-dialog>'
        ];
    }
    DialogDocument.prototype.showDialog = function () {
        this.display = !this.display;
    };
    DialogDocument.prototype.showDialog2 = function () {
        this.display2 = !this.display2;
    };
    DialogDocument.prototype.showDialog3 = function () {
        this.display3 = !this.display3;
    };
    DialogDocument.prototype.callTitle = function (value) {
        this.title = value;
        this.update();
    };
    DialogDocument.prototype.callShowHeader = function (value) {
        this.isShowHeader = this.stringToBoolean(value);
        this.update();
    };
    DialogDocument.prototype.callDraggable = function (value) {
        this.isDraggable = this.stringToBoolean(value);
        this.update();
    };
    DialogDocument.prototype.callClosable = function (value) {
        this.isClosable = this.stringToBoolean(value);
        this.update();
    };
    DialogDocument.prototype.callResponsive = function (value) {
        this.isResponsive = this.stringToBoolean(value);
        console.log(this.isResponsive);
        this.update();
    };
    DialogDocument.prototype.callModal = function (value) {
        this.isModal = this.stringToBoolean(value);
        this.update();
    };
    DialogDocument.prototype.callWidth = function (value) {
        this.width = value;
        this.update();
    };
    DialogDocument.prototype.callHeight = function (value) {
        this.height = value;
        this.update();
    };
    DialogDocument.prototype.callBody = function (value) {
        this.body = value;
        this.update();
    };
    DialogDocument.prototype.stringToBoolean = function (status) {
        if (status == "true") {
            return true;
        }
        else {
            return false;
        }
    };
    DialogDocument.prototype.update = function () {
        this.codeExample = [
            'app.component.ts',
            "\n private display: boolean = false;\n showDialog() {\n   this.display = !this.display;\n }\n",
            '',
            'app.component.html',
            '',
            "<go-button label=\"show\" iconName=\"external-link-square\" \n      buttonColor=\"primary\" (click)=\"showDialog()\" ></go-button>",
            '',
            '<p-dialog id="dialog_configuration"',
            '   [(visible)]="' + this.display + '"',
            '   header="' + this.title + '"',
            '   [showHeader]="' + this.isShowHeader + '"',
            '   [draggable]="' + this.isDraggable + '"',
            '   [closable]="' + this.isClosable + '"',
            '   [modal]="' + this.isModal + '"',
            '   width="' + this.width + '"',
            '   [height]="' + this.height + '"',
            '>',
            ' <p>' + this.body + '</p>',
            " <p-footer>\n    <div class=\"ui-dialog-buttonpane ui-widget-content ui-helper-clearfix\">\n      <go-button label=\"no\" iconName=\"close\" buttonColor=\"primary\" (click)=\"showDialog()\" ></go-button>\n      <go-button label=\"yes\" iconName=\"check\" buttonColor=\"primary\" (click)=\"showDialog()\" ></go-button>\n    </div>\n  </p-footer>",
            '</p-dialog>'
        ];
    };
    return DialogDocument;
}());
DialogDocument = __decorate([
    core_1.Component({
        selector: 'doc-dialog',
        templateUrl: './dialog.document.html'
    })
], DialogDocument);
exports.DialogDocument = DialogDocument;
//# sourceMappingURL=dialog.document.js.map