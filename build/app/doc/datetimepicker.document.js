"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var _ATTRIBUTETABLELIST = [
    { require: '', name: 'inputId', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 id \u0E43\u0E2B\u0E49 datetimepicker" },
    { require: '', name: 'defaultDate', type: 'date', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E43\u0E2B\u0E49\u0E41\u0E01\u0E48 datetimepicker" },
    { require: '', name: 'style', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 style \u0E43\u0E2B\u0E49 datetimepicker" },
    // { require: '', name: 'styleClass', type: 'string', description: `ใช้สำหรับระบุ style class ให้ datetimepicker`},
    { require: '', name: 'inputStyle', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E43\u0E2A\u0E48 style \u0E43\u0E2B\u0E49 input field" },
    // { require: '', name: 'inputStyleClass', type: 'string', description: `ใช้สำหรับใส่ style class ให้ input field`},
    { require: '', name: 'placeholder', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 placeholder \u0E43\u0E2B\u0E49 datetimepicker" },
    { require: '', name: 'disabled', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14 disabled \u0E43\u0E2B\u0E49 datetimepicker" },
    { require: '', name: 'dateFormat', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E43\u0E19 input field \u0E17\u0E35\u0E48\u0E08\u0E30\u0E41\u0E2A\u0E14\u0E07\u0E23\u0E27\u0E21\u0E17\u0E31\u0E49\u0E07\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E17\u0E35\u0E48\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E23\u0E2D\u0E01(\u0E40\u0E0A\u0E48\u0E19 'dd MM yy' \u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E23\u0E2D\u0E01\u0E15\u0E32\u0E21\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E40\u0E1B\u0E47\u0E19 '1 January 2017' \u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19) \u0E42\u0E14\u0E22\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E14\u0E39\u0E44\u0E14\u0E49\u0E08\u0E32\u0E01\u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07" },
    { require: '', name: 'inline', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19\u0E43\u0E19\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A inline (\u0E41\u0E2A\u0E14\u0E07\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19\u0E17\u0E31\u0E49\u0E49\u0E07\u0E15\u0E32\u0E23\u0E32\u0E07)" },
    { require: '', name: 'selectOtherMonths', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E2B\u0E49\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E02\u0E2D\u0E07\u0E40\u0E14\u0E37\u0E2D\u0E19\u0E2D\u0E37\u0E48\u0E19\u0E17\u0E35\u0E48\u0E41\u0E2A\u0E14\u0E07\u0E19\u0E2D\u0E01\u0E40\u0E2B\u0E19\u0E37\u0E2D\u0E08\u0E32\u0E01\u0E40\u0E14\u0E37\u0E2D\u0E19\u0E17\u0E35\u0E48\u0E41\u0E2A\u0E14\u0E07\u0E2D\u0E22\u0E39\u0E48\u0E44\u0E14\u0E49" },
    { require: '', name: 'showIcon', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07\u0E1B\u0E38\u0E48\u0E21\u0E44\u0E2D\u0E04\u0E2D\u0E19\u0E0B\u0E36\u0E48\u0E07\u0E2D\u0E22\u0E39\u0E48\u0E16\u0E31\u0E14\u0E08\u0E32\u0E01 input field" },
    { require: '', name: 'icon', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 icon \u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E43\u0E2B\u0E49\u0E41\u0E2A\u0E14\u0E07\u0E43\u0E19\u0E1B\u0E38\u0E48\u0E21\u0E44\u0E2D\u0E04\u0E2D\u0E19\u0E0B\u0E36\u0E48\u0E07\u0E2D\u0E22\u0E39\u0E48\u0E16\u0E31\u0E14\u0E08\u0E32\u0E01 input field" },
    { require: '', name: 'readonlyInput', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E2B\u0E49\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E23\u0E30\u0E1A\u0E38\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E41\u0E01\u0E49\u0E44\u0E02\u0E04\u0E48\u0E32\u0E43\u0E19 input field \u0E42\u0E14\u0E22\u0E15\u0E23\u0E07\u0E44\u0E14\u0E49" },
    { require: '', name: 'minDate', type: 'Date', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E15\u0E48\u0E33\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E14\u0E49" },
    { require: '', name: 'maxDate', type: 'Date', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E39\u0E07\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E14\u0E49" },
    { require: '', name: 'disabledDates', type: 'Array<Date>', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 \u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E43\u0E2B\u0E49\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1A\u0E19\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19" },
    { require: '', name: 'disabledDays', type: 'Array<number>', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E27\u0E31\u0E19\u0E43\u0E19\u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C \u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E43\u0E2B\u0E49\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1A\u0E19\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19 \u0E40\u0E0A\u0E48\u0E19\u0E23\u0E30\u0E1A\u0E38 [0,6] \u0E08\u0E30\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E27\u0E31\u0E19\u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C\u0E01\u0E31\u0E1A\u0E27\u0E31\u0E19\u0E40\u0E2A\u0E32\u0E23\u0E4C\u0E44\u0E14\u0E49" },
    { require: '', name: 'monthNavigator', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E2B\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E40\u0E14\u0E37\u0E2D\u0E19\u0E43\u0E19\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19" },
    { require: '', name: 'yearNavigator', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E2B\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E1B\u0E35\u0E43\u0E19\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19" },
    { require: '', name: 'yearRange', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E0A\u0E48\u0E27\u0E07\u0E1B\u0E35\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E43\u0E2B\u0E49\u0E41\u0E2A\u0E14\u0E07\u0E43\u0E19\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23 (\u0E43\u0E0A\u0E49\u0E04\u0E39\u0E48\u0E01\u0E31\u0E1A yearNavigator \u0E42\u0E14\u0E22\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E19\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E02\u0E2D\u0E07 \"xxxx:yyyy\" \u0E42\u0E14\u0E22\u0E17\u0E35\u0E48 xxxx \u0E15\u0E49\u0E2D\u0E07\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32 yyyy)" },
    { require: '', name: 'showTime', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E2B\u0E49\u0E41\u0E2A\u0E14\u0E07 time \u0E43\u0E19\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19" },
    { require: '', name: 'hourFormat', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E40\u0E27\u0E25\u0E32 \u0E43\u0E19\u0E41\u0E1A\u0E1A 12 \u0E2B\u0E23\u0E37\u0E2D 24 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07" },
    // { require: '', name: 'locale', type: 'any', description: ``},
    { require: '', name: 'dataType', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E2B\u0E49\u0E04\u0E37\u0E19\u0E04\u0E48\u0E32\u0E01\u0E25\u0E31\u0E1A\u0E21\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A Date \u0E2B\u0E23\u0E37\u0E2D string" },
    // { require: '', name: 'required', type: 'boolean', description: ``},
    { require: '', name: 'showSeconds', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E2B\u0E49\u0E41\u0E2A\u0E14\u0E07\u0E27\u0E34\u0E19\u0E32\u0E17\u0E35\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E2B\u0E49\u0E41\u0E2A\u0E14\u0E07\u0E40\u0E27\u0E25\u0E32" },
    { require: '', name: 'stepHour', type: 'number', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E08\u0E33\u0E19\u0E27\u0E19\u0E43\u0E2B\u0E49\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E40\u0E27\u0E25\u0E32\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E36\u0E49\u0E19\u0E2B\u0E23\u0E37\u0E2D\u0E25\u0E14\u0E25\u0E07 \u0E40\u0E0A\u0E48\u0E19 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14 1 \u0E08\u0E30\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2B\u0E23\u0E37\u0E2D\u0E25\u0E14\u0E25\u0E07\u0E44\u0E14\u0E49\u0E17\u0E35\u0E25\u0E30 1 \u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07" },
    { require: '', name: 'stepMinute', type: 'number', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E08\u0E33\u0E19\u0E27\u0E19\u0E43\u0E2B\u0E49\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E40\u0E27\u0E25\u0E32\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E36\u0E49\u0E19\u0E2B\u0E23\u0E37\u0E2D\u0E25\u0E14\u0E25\u0E07 \u0E40\u0E0A\u0E48\u0E19 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14 1 \u0E08\u0E30\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2B\u0E23\u0E37\u0E2D\u0E25\u0E14\u0E25\u0E07\u0E44\u0E14\u0E49\u0E17\u0E35\u0E25\u0E30 1 \u0E19\u0E32\u0E17\u0E35" },
    { require: '', name: 'stepSecond', type: 'number', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E08\u0E33\u0E19\u0E27\u0E19\u0E43\u0E2B\u0E49\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E40\u0E27\u0E25\u0E32\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E36\u0E49\u0E19\u0E2B\u0E23\u0E37\u0E2D\u0E25\u0E14\u0E25\u0E07 \u0E40\u0E0A\u0E48\u0E19 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14 1 \u0E08\u0E30\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2B\u0E23\u0E37\u0E2D\u0E25\u0E14\u0E25\u0E07\u0E44\u0E14\u0E49\u0E17\u0E35\u0E25\u0E30 1 \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35" },
    { require: '', name: 'isBuddhistYear', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E1B\u0E35\u0E17\u0E35\u0E48\u0E41\u0E2A\u0E14\u0E07\u0E43\u0E19\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19\u0E40\u0E1B\u0E47\u0E19 \u0E1E.\u0E28." },
    { require: '', name: 'calendarLanguage', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E20\u0E32\u0E29\u0E32\u0E17\u0E35\u0E48\u0E41\u0E2A\u0E14\u0E07\u0E43\u0E19\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19 \u0E42\u0E14\u0E22\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E44\u0E14\u0E49\u0E14\u0E31\u0E07\u0E19\u0E35\u0E49 'th', 'en'" },
    { require: '', name: 'firstDayOfWeek', type: 'number', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E41\u0E2A\u0E14\u0E07\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E02\u0E2D\u0E07\u0E41\u0E15\u0E48\u0E25\u0E30\u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C\u0E43\u0E19\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19 \u0E40\u0E0A\u0E48\u0E19 \u0E01\u0E33\u0E2B\u0E19\u0E14\u0E40\u0E1B\u0E47\u0E19 1 \u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19\u0E08\u0E30\u0E41\u0E2A\u0E14\u0E07\u0E27\u0E31\u0E19\u0E08\u0E31\u0E19\u0E17\u0E23\u0E4C\u0E40\u0E1B\u0E47\u0E19\u0E27\u0E31\u0E19\u0E41\u0E23\u0E01" },
    { require: '', name: 'date', type: 'Date', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E04\u0E48\u0E32\u0E02\u0E2D\u0E07\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E43\u0E19\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19 \u0E23\u0E27\u0E21\u0E16\u0E36\u0E07\u0E23\u0E31\u0E1A output \u0E01\u0E25\u0E31\u0E1A\u0E21\u0E32\u0E08\u0E32\u0E01\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19\u0E40\u0E0A\u0E48\u0E19\u0E01\u0E31\u0E19" },
    { require: '', name: 'dateChange', type: 'function($event)', description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E21\u0E35\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E43\u0E19\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19\u0E08\u0E30\u0E2A\u0E48\u0E07 output \u0E04\u0E37\u0E19\u0E21\u0E32" },
    { require: '', name: '', type: '', description: "" },
];
var _ATTRSYNTAX = [
    { data: "" },
    { data: "     inputId = \"id_of_datetimepicker\"" },
    { data: "     [defaultDate] = \"default_date\"" },
    { data: "     [style = \"inline_style\"] " },
    // { data: `     [styleClass = "style_class"]` },
    { data: "     [inputStyle = \"inline_style_of_input_field\"] " },
    // { data: `     [inputStyleClass = "style_class_of_input_field"]` },
    { data: "     [placeholder = \"placeholder\"]" },
    { data: "     [disabled = \"true_or_false\"]" },
    { data: "     [dateFormat = \"date_format\"]" },
    { data: "     [inline = \"true_or_false\"]" },
    { data: "     [selectOtherMonths = \"true_or_false\"]" },
    { data: "     [showIcon = \"true_or_false\"]" },
    { data: "     [icon = \"icon\"]" },
    { data: "     [readonlyInput = \"true_or_false\"]" },
    { data: "     [minDate = \"minimum_date\"]" },
    { data: "     [maxDate = \"maximum_date\"]" },
    { data: "     [disabledDates = \"array_of_date\"]" },
    { data: "     [disabledDays = \"array_of_number\"]" },
    { data: "     [monthNavigator = \"true_or_false\"]" },
    { data: "     [yearNavigator = \"true_or_false\"]" },
    { data: "     [yearRange = \"range_of_year\"]" },
    { data: "     [showTime = \"true_or_false\"]" },
    { data: "     [hourFormat = \"12_or_24\"]" },
    { data: "     [dataType = \"date_or_string\"]" },
    { data: "     [showSeconds = \"true_or_false\"]" },
    { data: "     [stepHour = \"number\"]" },
    { data: "     [stepMinute = \"number\"]" },
    { data: "     [stepSecond = \"number\"]" },
    { data: "     [isBuddhistYear = \"true_or_false\"]" },
    { data: "     [calendarLanguage = \"th_or_en\"]" },
    { data: "     [firstDayOfWeek = \"number\"]" },
    { data: "     [[(date)] = \"date\"]" },
    { data: "     (dateChange) = \"date_output\"" }
];
var _releaseUpdate = [
    { dateUpdate: "Version 2.1 (3 May 2017)" },
    { head: "style", data: "\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E27\u0E32\u0E07 inputbox \u0E43\u0E2B\u0E49\u0E21\u0E35\u0E02\u0E19\u0E32\u0E14\u0E1E\u0E2D\u0E14\u0E35\u0E01\u0E31\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E01\u0E27\u0E49\u0E32\u0E07\u0E17\u0E35\u0E48\u0E19\u0E33 component \u0E44\u0E1B\u0E27\u0E32\u0E07" },
    { dateUpdate: "Version 2.0 (4 April 2017)" },
    { head: "Version", data: "Update primeng version 4.0.0-rc.2" },
    { head: "Icon", data: "\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E43\u0E2A\u0E48\u0E44\u0E2D\u0E04\u0E2D\u0E19 (\u0E08\u0E32\u0E01 Font Awesome)" },
];
var _EXAMPLE1 = [
    { data: "app.component.ts" },
    { data: "" },
    { data: "private basicDatetimepicker: Date;" },
    { data: "" },
    { data: "app.component.html" },
    { data: "" },
    { data: "<go-datetimepicker [(date)]=\"basicDatetimepicker\" id=\"basicDatetimepicker\"></go-datetimepicker>" },
    { data: "<p> <strong> Output: </strong> {{basicDatetimepicker|date}} </p>" },
];
var _EXAMPLE2 = [
    { data: "app.component.ts" },
    { data: "" },
    { data: "private thaiDateimepicker: Date;" },
    { data: "" },
    { data: "app.component.html" },
    { data: "" },
    { data: "<go-datetimepicker id=\"thaiDateimepicker\" [(date)]=\"thaiDateimepicker\" calendarLanguage=\"th\" dateFormat=\"dd/mm/yy\" [isBuddhistYear]=\"true\"></go-datetimepicker> " },
    { data: "<p> <strong> Output: </strong> {{thaiDateimepicker|date}} </p>" },
    { data: "" },
];
var _EXAMPLE3 = [
    { data: "app.component.ts" },
    { data: "" },
    { data: "private iconDatetimepicker: Date;" },
    { data: "" },
    { data: "app.component.html" },
    { data: "" },
    { data: "<go-datetimepicker id=\"iconDatetimepicker\" [(date)]=\"iconDatetimepicker\" [showIcon]=\"true\"></go-datetimepicker>" },
    { data: "<p> <strong> Output: </strong> {{iconDatetimepicker|date}}</p>" },
];
var _EXAMPLE4 = [
    { data: "app.component.ts" },
    { data: "" },
    { data: "private datefromDatetimepicker: Date;" },
    { data: "private datetoDatetimepicker: Date;" },
    { data: "" },
    { data: "app.component.html" },
    { data: "\n<div class=\"form-group\">\n  Date from <go-datetimepicker id=\"datefromDatetimepicker\"[(date)]=\"datefromDatetimepicker\" [maxDate]=\"datetoDatetimepicker\" [readonlyInput]=\"true\"></go-datetimepicker>\n  Date to <go-datetimepicker id=\"datetoDatetimepicker\" [(date)]=\"datetoDatetimepicker\" [minDate]=\"datefromDatetimepicker\" [readonlyInput]=\"true\"></go-datetimepicker>\n</div>\n    " },
    { data: "<p> <strong> from: </strong> {{datefromDatetimepicker|date}} </p> " },
    { data: "<p> <strong>  to </strong> {{datetoDatetimepicker|date}}</p>" },
    { data: "" },
];
var _EXAMPLE5 = [
    { data: "app.component.ts" },
    { data: "" },
    { data: "private disableDatetimepicker: Date;\nprivate invalidDates: Array<Date>;\nngOnInit() {\n    let today = new Date();\n    let invalidDate = new Date();\n    invalidDate.setDate(today.getDate() - 1);\n    this.invalidDates = [today,invalidDate];\n}\n    " },
    { data: "" },
    { data: "app.component.html" },
    { data: "" },
    { data: "<go-datetimepicker id=\"disableDatetimepicker\" [(date)]=\"disableDatetimepicker\" tabindex=\"0\" [disabledDates]=\"invalidDates\" [disabledDays]=\"[0,6]\" readonlyInput=\"readonlyInput\"></go-datetimepicker>" },
    { data: "<p> <strong> Output: </strong> {{disableDatetimepicker|date}}</p>" },
    { data: "" },
];
var _EXAMPLE6 = [
    { data: "app.component.ts" },
    { data: "" },
    { data: "private navigatorDatetimepicker: Date;" },
    { data: "" },
    { data: "app.component.html" },
    { data: "" },
    { data: "<go-datetimepicker id='navigatorDatetimepicker' [(date)]=\"navigatorDatetimepicker\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"2000:2030\" [firstDayOfWeek]=\"1\"></go-datetimepicker>" },
    { data: "<p> <strong> Output: </strong> {{navigatorDatetimepicker|date}}</p>" },
    { data: "" },
    { data: "" },
];
var _EXAMPLE7 = [
    { data: "app.component.ts" },
    { data: "" },
    { data: "private dateAndTimepicker: Date;" },
    { data: "" },
    { data: "app.component.html" },
    { data: "" },
    { data: "<go-datetimepicker id=\"dateAndTimepicker\" [(date)]=\"dateAndTimepicker\" [showSeconds]=\"true\" [showTime]=\"true\" \n[stepHour]=\"1\"  [stepMinute]=\"5\"  [stepSecond]=\"5\" [hourFormat]=\"12\">" },
    { data: "<p> <strong> Output: </strong> {{dateAndTimepicker}}</p> " },
    { data: "" },
    { data: "" },
];
var _EXAMPLE8 = [
    { data: "app.component.ts" },
    { data: "" },
    { data: "private inlineDateimepicker: Date;" },
    { data: "" },
    { data: "app.component.html" },
    { data: "" },
    { data: "<go-datetimepicker id=\"inlineDateimepicker\" [(date)]=\"inlineDateimepicker\" [inline]=\"true\"></go-datetimepicker>" },
    { data: "<p> <strong> Output: </strong> {{inlineDateimepicker|date}}</p> " },
    { data: "" },
    { data: "" },
];
var DateTimePickerDocument = (function () {
    function DateTimePickerDocument() {
        this.componentTag = '<go-datetimepicker>';
        this.version = '2.1';
        this.componentDescription = "DateTimePicker \u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E40\u0E1B\u0E47\u0E19\u0E1B\u0E0F\u0E34\u0E17\u0E34\u0E19\u0E43\u0E19\u0E01\u0E32\u0E23\u0E23\u0E30\u0E1A\u0E38\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E41\u0E25\u0E30/\u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E27\u0E25\u0E32 \u0E42\u0E14\u0E22\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E02\u0E2D\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25\u0E44\u0E14\u0E49";
        this.releaseDate = '3 May 2017';
        this.creditURL = 'https://www.primefaces.org/primeng/#/calendar';
        this.credit = 'primeng (4.0.0-rc.2)';
        this.releaseUpdate = _releaseUpdate;
        this.prefixSyntax = '<go-datetimepicker';
        this.attrSyntaxList = _ATTRSYNTAX;
        this.suffixSyntax = '> </go-datetimepicker>';
        this.attributeTableList = _ATTRIBUTETABLELIST;
        this.codeExample1 = _EXAMPLE1;
        this.codeExample2 = _EXAMPLE2;
        this.codeExample3 = _EXAMPLE3;
        this.codeExample4 = _EXAMPLE4;
        this.codeExample5 = _EXAMPLE5;
        this.codeExample6 = _EXAMPLE6;
        this.codeExample7 = _EXAMPLE7;
        this.codeExample8 = _EXAMPLE8;
    }
    DateTimePickerDocument.prototype.ngOnInit = function () {
        var today = new Date();
        var invalidDate = new Date();
        invalidDate.setDate(today.getDate() - 1);
        this.invalidDates = [today, invalidDate];
    };
    return DateTimePickerDocument;
}());
DateTimePickerDocument = __decorate([
    core_1.Component({
        selector: 'doc-datetimepicker',
        templateUrl: './datetimepicker.document.html'
    })
], DateTimePickerDocument);
exports.DateTimePickerDocument = DateTimePickerDocument;
//# sourceMappingURL=datetimepicker.document.js.map