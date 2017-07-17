"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ATTRIBUTELIST = [
    { require: '*', name: 'progress', type: 'number', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E04\u0E48\u0E32\u0E02\u0E2D\u0E07\u0E02\u0E19\u0E32\u0E14 progressbar \u0E17\u0E35\u0E48\u0E08\u0E30\u0E41\u0E2A\u0E14\u0E07\u0E43\u0E19\u0E1B\u0E31\u0E08\u0E08\u0E38\u0E1A\u0E31\u0E19 \u0E42\u0E14\u0E22\u0E08\u0E30\u0E41\u0E2A\u0E14\u0E07\u0E15\u0E32\u0E21\u0E2D\u0E31\u0E15\u0E23\u0E32\u0E2A\u0E48\u0E27\u0E19\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07 progressMin \u0E01\u0E31\u0E1A progressMax" },
    { require: '', name: 'minProgress', type: 'number', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E04\u0E48\u0E32\u0E15\u0E48\u0E33\u0E2A\u0E38\u0E14\u0E02\u0E2D\u0E07 progressbar \u0E17\u0E35\u0E48\u0E08\u0E30\u0E43\u0E2B\u0E49 progressbar \u0E41\u0E2A\u0E14\u0E07\u0E02\u0E36\u0E49\u0E19\u0E21\u0E32 (\u0E21\u0E35\u0E04\u0E48\u0E32 default \u0E40\u0E1B\u0E47\u0E19 0)" },
    { require: '', name: 'maxProgress', type: 'number', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E04\u0E48\u0E32\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14\u0E02\u0E2D\u0E07 progressbar \u0E17\u0E35\u0E48\u0E08\u0E30\u0E43\u0E2B\u0E49 progressbar \u0E41\u0E2A\u0E14\u0E07\u0E02\u0E36\u0E49\u0E19\u0E21\u0E32 (\u0E21\u0E35\u0E04\u0E48\u0E32 default \u0E40\u0E1B\u0E47\u0E19 100)" },
    { require: '', name: 'color', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E2A\u0E35\u0E02\u0E2D\u0E07 progressbar (\u0E21\u0E35\u0E04\u0E48\u0E32 default \u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E35\u0E41\u0E14\u0E07)" },
    { require: '', name: 'height', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E39\u0E07\u0E02\u0E2D\u0E07 progressbar \u0E42\u0E14\u0E22\u0E43\u0E2A\u0E48\u0E40\u0E1B\u0E47\u0E19\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A 'Npx' \u0E40\u0E21\u0E37\u0E48\u0E2D N \u0E40\u0E1B\u0E47\u0E19\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E08\u0E33\u0E19\u0E27\u0E19\u0E40\u0E15\u0E47\u0E21\u0E1A\u0E27\u0E01" },
    { require: '', name: 'lockOnLoad', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E41\u0E2A\u0E14\u0E07 Overlay \u0E44\u0E21\u0E48\u0E43\u0E2B\u0E49\u0E01\u0E14\u0E2A\u0E34\u0E48\u0E07\u0E43\u0E14\u0E46\u0E1A\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E08\u0E2D\u0E44\u0E14\u0E49 \u0E40\u0E21\u0E37\u0E48\u0E2D progressbar \u0E22\u0E31\u0E07\u0E41\u0E2A\u0E14\u0E07\u0E2D\u0E22\u0E39\u0E48" },
    { require: '', name: 'opacity', type: 'number', description: "\u0E43\u0E0A\u0E49\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E04\u0E27\u0E32\u0E21\u0E40\u0E02\u0E49\u0E21\u0E02\u0E2D\u0E07 Overlay \u0E42\u0E14\u0E22\u0E21\u0E35\u0E04\u0E48\u0E32\u0E2D\u0E22\u0E39\u0E48\u0E17\u0E35\u0E48 0(\u0E44\u0E21\u0E48\u0E41\u0E2A\u0E14\u0E07) \u0E16\u0E36\u0E07 1(\u0E40\u0E02\u0E49\u0E21\u0E2A\u0E38\u0E14) \u0E42\u0E14\u0E22\u0E21\u0E35\u0E04\u0E48\u0E32 default \u0E17\u0E35\u0E48 0.5" },
    { require: '', name: 'transitionSpeed', type: 'number', description: "\u0E43\u0E0A\u0E49\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E0A\u0E48\u0E27\u0E07\u0E40\u0E27\u0E25\u0E32\u0E17\u0E35\u0E48\u0E08\u0E30\u0E43\u0E2B\u0E49 progressbar \u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E08\u0E19\u0E40\u0E2A\u0E23\u0E47\u0E08\u0E2A\u0E34\u0E49\u0E19 \u0E42\u0E14\u0E22\u0E43\u0E2B\u0E49\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E19\u0E2B\u0E19\u0E48\u0E27\u0E22 ms(millisecond) (\u0E21\u0E35\u0E04\u0E48\u0E32 default = 500)" },
];
var SYSTEMJSLINE = [
    "map: {",
    "   ..........",
    "   'go-progressbar': 'gos:progressbar/{version}',",
    "   ..........",
    "},",
    "packages: {",
    "   ..........",
    "   'go-progressbar': {",
    "      main: './progressbar.js',",
    "      defaultExtension: 'js'",
    "   },",
    "   ..........",
    "}",
];
var APPMODULELINE = [
    "import { ProgressbarComponent } from 'go-progressbar';",
    "",
    "@NgModule({",
    "   declarations: [",
    "   ..........",
    "   ProgressbarComponent",
    "   ..........",
    "],"
];
var ProgressbarDocument = (function () {
    function ProgressbarDocument() {
        this.componentTag = '<go-progressbar>';
        this.componentDescription = "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E40\u0E23\u0E35\u0E22\u0E01 progressbar \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E41\u0E2A\u0E14\u0E07\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E01\u0E32\u0E23\u0E42\u0E2B\u0E25\u0E14\u0E44\u0E1F\u0E25\u0E4C\u0E2B\u0E23\u0E37\u0E2D\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E15\u0E48\u0E32\u0E07\u0E46 \u0E42\u0E14\u0E22\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E44\u0E14\u0E49\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E2D\u0E34\u0E2A\u0E23\u0E30";
        this.version = '1.0';
        this.releaseDate = '20/2/2017';
        this.prefixSyntax = "<go-progressbar ";
        this.attrSyntax = "[progress]=\"progress_number\" [[minProgress]=\"min_progress_number\"] [[maxProgress]=\"max_progress_number\"] [[lockOnLoad]=\"page_locked_on_loading\"]\n    [color=\"color_name\"] [height=\"progressbar_height\"] [[opacity]=\"opacity_range_0_to_1\"] [[transitionSpeed]=\"speed_in_ms\"]";
        this.suffixSyntax = "></go-progressbar>";
        this.attributeList = ATTRIBUTELIST;
        this.appModuleLine = APPMODULELINE;
        this.systemjsLine = SYSTEMJSLINE;
        this.appModuleDetail = "app.module.ts";
        this.systemJSDetail = "systemjs.config.js";
        this.main_title = 'Example';
        this.firstProgressbarDescription = "\u0E1B\u0E38\u0E48\u0E21\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A progressbar \u0E25\u0E33\u0E14\u0E31\u0E1A\u0E17\u0E35\u0E48\u0E2B\u0E19\u0E36\u0E48\u0E07";
        this.code_1 = "<go-progressbar [progress]=\"progress_1\" id=\"default_progressbar\"></go-progressbar>";
        this.code_button_1 = "\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E1B\u0E38\u0E48\u0E21\u0E01\u0E14: <button class=\"btn btn-primary btn-sm btn-block\" (click)=\"addProgress_1(10)\">\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E04\u0E48\u0E32 progress_1 \u0E40\u0E1B\u0E47\u0E19\u0E08\u0E33\u0E19\u0E27\u0E19 10 \u0E08\u0E38\u0E14</button>";
        this.code_exam_1 = "<b>\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19</b><br>\n    progress_1: number = 0;<br>\n    addProgress_1(val: number) {<br>\n        this.progress_1 += val;<br>\n    }";
        this.progress_1 = 0;
        this.secondProgressbarDescription = "\u0E1B\u0E38\u0E48\u0E21\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A progressbar \u0E25\u0E33\u0E14\u0E31\u0E1A\u0E17\u0E35\u0E48\u0E2A\u0E2D\u0E07";
        this.code_2 = "<go-progressbar [progress]=\"progress_2\" [minProgress]=200 [maxProgress]=1000 [color]=\"green\" id=\"interval_progressbar\">\n    </go-progressbar>";
        this.code_button_2 = "\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E1B\u0E38\u0E48\u0E21\u0E01\u0E14: <button class=\"btn btn-primary btn-sm btn-block\" (click)=\"autoAddProgress_2(20)\">\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E04\u0E48\u0E32 progress_2 \u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34 \u0E23\u0E2D\u0E1A\u0E25\u0E30 20 \u0E08\u0E38\u0E14</button>";
        this.code_exam_2 = "<b>\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19</b><br>\n    progress_2: number = 0;<br>\n    autoAddProgress_2(val: number) {\n        if (this.progress_2 < 1000)\n        setTimeout(() => { this.autoAddProgress_2(val); this.progress_2 += val; }, 500);\n    }";
        this.progress_2 = 0;
        this.isAutoAdd_2 = false;
        this.thirdProgressbarDescription = "\u0E1B\u0E38\u0E48\u0E21\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A progressbar \u0E25\u0E33\u0E14\u0E31\u0E1A\u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21";
        this.code_3 = "<go-progressbar [progress]=\"progress_3\" color=\"black\" height=\"5px\" [lockOnLoad]=\"true\" [opacity]=\"0.6\" [transitionSpeed]=\"1000\" id=\"lock_on_load_progressbar\"></go-progressbar>";
        this.code_button_3 = "\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E1B\u0E38\u0E48\u0E21\u0E01\u0E14: <button class=\"btn btn-primary btn-sm btn-block\" (click)=\"autoAddProgress_3(10)\">\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E04\u0E48\u0E32 progress_3 \u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34 \u0E17\u0E38\u0E01\u0E27\u0E34\u0E19\u0E32\u0E17\u0E35\u0E25\u0E30 10 \u0E2B\u0E19\u0E48\u0E27\u0E22</button>";
        this.code_exam_3 = "<b>\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19</b><br>\n    progress_3: number = 0;<br>\n    autoAddProgress_3(val: number) {\n        if (this.progress_3 < 100)\n            setTimeout(() => { this.autoAddProgress_3(val); this.progress_3 += val; }, 1000);\n    }";
        this.progress_3 = 0;
    }
    ProgressbarDocument.prototype.addProgress_1 = function (val) {
        this.progress_1 += val;
    };
    ProgressbarDocument.prototype.reduceProgress_1 = function (val) {
        this.progress_1 -= val;
    };
    ProgressbarDocument.prototype.finishProgress_1 = function () {
        this.progress_1 = 100;
    };
    ProgressbarDocument.prototype.resetProgress_1 = function () {
        this.progress_1 = 0;
    };
    ProgressbarDocument.prototype.addProgress_2 = function (val) {
        this.progress_2 += val;
    };
    ProgressbarDocument.prototype.autoAddProgress_2 = function (val) {
        this.isAutoAdd_2 = true;
        this.loopAddProgress_2(val);
    };
    ProgressbarDocument.prototype.loopAddProgress_2 = function (val) {
        var _this = this;
        if (this.progress_2 < 1000 && this.isAutoAdd_2) {
            setTimeout(function () { _this.loopAddProgress_2(val); _this.isAutoAdd_2 ? _this.progress_2 += val : null; }, 500);
        }
        else
            this.isAutoAdd_2 = false;
    };
    ProgressbarDocument.prototype.stopAutoAddProgress_2 = function () {
        this.isAutoAdd_2 = false;
    };
    ProgressbarDocument.prototype.resetProgress_2 = function () {
        this.progress_2 = 0;
    };
    ProgressbarDocument.prototype.autoAddProgress_3 = function (val) {
        var _this = this;
        if (this.progress_3 < 100)
            setTimeout(function () { _this.autoAddProgress_3(val); _this.progress_3 += val; }, 1000);
    };
    ProgressbarDocument.prototype.resetProgress_3 = function () {
        this.progress_3 = 0;
    };
    return ProgressbarDocument;
}());
ProgressbarDocument = __decorate([
    core_1.Component({
        selector: 'progressbar-document',
        templateUrl: './progressbar.document.html'
    })
], ProgressbarDocument);
exports.ProgressbarDocument = ProgressbarDocument;
//# sourceMappingURL=progressbar.document.js.map