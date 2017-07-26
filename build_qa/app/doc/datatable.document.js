"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var _ATTRIBUTETABLELIST = [
    { require: '*', name: 'value', type: 'array', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 data \u0E02\u0E2D\u0E07 datatable \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E41\u0E2A\u0E14\u0E07\u0E43\u0E19 datatable" },
    { require: '', name: 'groupField', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E0A\u0E37\u0E48\u0E2D\u0E02\u0E2D\u0E07 field \u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E43\u0E2B\u0E49\u0E41\u0E2A\u0E14\u0E07\u0E40\u0E1B\u0E47\u0E19 group" },
    { require: '', name: 'paginator', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E15\u0E32\u0E23\u0E32\u0E07\u0E41\u0E2A\u0E14\u0E07\u0E08\u0E33\u0E19\u0E27\u0E19\u0E2B\u0E19\u0E49\u0E32" },
    { require: '', name: 'pageLinks', type: 'number', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E08\u0E33\u0E19\u0E27\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E43\u0E2B\u0E49\u0E41\u0E2A\u0E14\u0E07" },
    { require: '', name: 'rows', type: 'number', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E08\u0E33\u0E19\u0E27\u0E19 row \u0E15\u0E48\u0E2D\u0E2B\u0E19\u0E49\u0E32" },
    { require: '', name: 'rowsPerPageOptions', type: 'number', description: "\u0E0A\u0E38\u0E14\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E08\u0E33\u0E19\u0E27\u0E19 row \u0E17\u0E35\u0E48\u0E08\u0E30\u0E41\u0E2A\u0E14\u0E07\u0E43\u0E19\u0E2B\u0E19\u0E36\u0E48\u0E07 page" },
    { require: '', name: 'rowGroupMode', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E2D\u0E07 row group \u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E43\u0E2B\u0E49\u0E41\u0E2A\u0E14\u0E07 \u0E21\u0E35\u0E14\u0E31\u0E07\u0E19\u0E35\u0E49 subheader rowspan " },
    { require: '', name: 'sortMode', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E2D\u0E07\u0E01\u0E32\u0E23 sort \u0E21\u0E35\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E14\u0E31\u0E07\u0E19\u0E35\u0E49 single multiple " },
    { require: '', name: 'sortField', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E0A\u0E37\u0E48\u0E2D field \u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E43\u0E2B\u0E49 sort \u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48\u0E41\u0E23\u0E01" },
    { require: '', name: 'globalFilter', type: 'any', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E2D\u0E49\u0E32\u0E07\u0E16\u0E36\u0E07 input box \u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E43\u0E19\u0E01\u0E32\u0E23 search" },
    { require: '', name: 'selectionMode', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 Mode \u0E43\u0E19\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 \u0E21\u0E35 2 \u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17 \u0E04\u0E37\u0E2D single multiple" },
    { require: '', name: 'selection', type: 'any', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 function \u0E21\u0E32\u0E23\u0E31\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E40\u0E25\u0E37\u0E2D\u0E01" },
    { require: '', name: 'editable', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E41\u0E01\u0E49\u0E44\u0E02\u0E15\u0E32\u0E23\u0E32\u0E07\u0E44\u0E14\u0E49" },
    { require: '', name: 'expandableRows', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E15\u0E32\u0E23\u0E32\u0E07\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16 expand \u0E44\u0E14\u0E49" },
    { require: '', name: 'resizableColumns', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E15\u0E32\u0E23\u0E32\u0E07\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16 resize column \u0E44\u0E14\u0E49" },
    { require: '', name: 'columnResizeMode', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 mode \u0E43\u0E19\u0E01\u0E32\u0E23 resize \u0E21\u0E35 2 mode \u0E14\u0E31\u0E07\u0E19\u0E35\u0E49 fit(\u0E25\u0E14\u0E02\u0E19\u0E32\u0E14\u0E04\u0E2D\u0E25\u0E31\u0E21\u0E1E\u0E4C\u0E2D\u0E37\u0E48\u0E19\u0E43\u0E2B\u0E49\u0E40\u0E17\u0E48\u0E32\u0E02\u0E19\u0E32\u0E14\u0E40\u0E14\u0E34\u0E21) expand(\u0E44\u0E21\u0E48\u0E25\u0E14\u0E02\u0E19\u0E32\u0E14)" },
    { require: '', name: 'reorderableColumns', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E15\u0E32\u0E23\u0E32\u0E07\u0E40\u0E23\u0E35\u0E22\u0E07\u0E25\u0E33\u0E14\u0E31\u0E1A\u0E43\u0E2B\u0E49" },
    { require: '', name: 'scrollable', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07 scroll \u0E43\u0E2B\u0E49\u0E41\u0E01\u0E48\u0E15\u0E32\u0E23\u0E32\u0E07" },
    { require: '', name: 'scrollHeight', type: 'number', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E39\u0E07\u0E02\u0E2D\u0E07 scroll" },
    { require: '', name: 'scrollWidth', type: 'number', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E04\u0E27\u0E32\u0E21\u0E01\u0E27\u0E49\u0E32\u0E07\u0E02\u0E2D\u0E07 datatable \u0E43\u0E0A\u0E49\u0E23\u0E48\u0E27\u0E21\u0E01\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E04\u0E27\u0E32\u0E21\u0E01\u0E27\u0E49\u0E32\u0E07\u0E02\u0E2D\u0E07 column" },
    //{ require: '', name: 'virtualScroll', type: 'boolean', description: `ใช้ระบุเพื่อโหลดข้อมูลเพิ่มเติมระหว่าง scroll ใช้ร่วมกับ lazy และ total record`},
    { require: '', name: 'lazy', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E43\u0E2B\u0E49\u0E15\u0E32\u0E23\u0E32\u0E07\u0E42\u0E2B\u0E25\u0E14\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E41\u0E1A\u0E1A lazy" },
    { require: '', name: 'responsive', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E15\u0E32\u0E23\u0E32\u0E07\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16 responsive \u0E44\u0E14\u0E49" },
    { require: '', name: 'exportFilename', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E0A\u0E37\u0E48\u0E2D\u0E44\u0E1F\u0E25\u0E4C\u0E17\u0E35\u0E48\u0E17\u0E33\u0E01\u0E32\u0E23 export " },
];
var _ATTRIBUTECOLUMNLIST = [
    { require: '*', name: 'field', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E43\u0E19\u0E41\u0E15\u0E48\u0E25\u0E30 field" },
    { require: '*', name: 'header', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 header \u0E02\u0E2D\u0E07 column" },
    { require: '', name: 'rowspan', type: 'number', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E08\u0E33\u0E19\u0E27\u0E19 row \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A group" },
    { require: '', name: 'colspan', type: 'number', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E08\u0E33\u0E19\u0E27\u0E19 column \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A group" },
    { require: '', name: 'sortable', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16 sort \u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E43\u0E19 column \u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E44\u0E14\u0E49" },
    { require: '', name: 'sortField', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E43\u0E2B\u0E49 sort \u0E40\u0E1B\u0E47\u0E19\u0E04\u0E48\u0E32\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19" },
    { require: '', name: 'sortFunction', type: 'function', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 aunction \u0E21\u0E32\u0E23\u0E31\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19\u0E33\u0E44\u0E1B sort \u0E15\u0E48\u0E2D\u0E15\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23" },
    { require: '', name: 'filter', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E43\u0E19 column \u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E44\u0E14\u0E49" },
    { require: '', name: 'filterPlaceholder', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 placeholder \u0E43\u0E19\u0E0A\u0E48\u0E2D\u0E07 filter" },
    { require: '', name: 'filterMatchMode', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 Mode \u0E43\u0E19\u0E01\u0E32\u0E23\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 \u0E21\u0E35\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E14\u0E31\u0E07\u0E19\u0E35\u0E49 startsWith, contains, endsWidth, equals, in" },
    { require: '', name: 'selectionMode', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 Mode \u0E43\u0E19\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 \u0E21\u0E35 2 \u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17 \u0E04\u0E37\u0E2D single multiple" },
    { require: '', name: 'editable', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E41\u0E01\u0E49\u0E44\u0E02 column \u0E19\u0E31\u0E49\u0E19\u0E44\u0E14\u0E49" },
    { require: '', name: 'frozen', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E21\u0E35\u0E01\u0E32\u0E23\u0E01\u0E33\u0E2B\u0E19\u0E14 scroll \u0E43\u0E2B\u0E49\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E41\u0E0A\u0E48 column \u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E44\u0E14\u0E49" },
    { require: '', name: 'style', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 style \u0E43\u0E2B\u0E49 column \u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23" },
    { require: '', name: 'styleClass', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 style class \u0E43\u0E2B\u0E49 column \u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23" },
    { require: '', name: 'hidden', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E02\u0E2D\u0E07column " },
];
var _EVENTLIST = [
    { require: '', name: 'onRowClick', type: 'function($event)', description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E17\u0E33\u0E01\u0E32\u0E23\u0E04\u0E25\u0E34\u0E01\u0E41\u0E16\u0E27 \u0E08\u0E30\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E41\u0E16\u0E27\u0E17\u0E35\u0E48\u0E04\u0E25\u0E34\u0E01\u0E04\u0E37\u0E19\u0E21\u0E32" },
    { require: '', name: 'onRowSelect', type: 'function($event)', description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E17\u0E33\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E41\u0E16\u0E27 \u0E08\u0E30\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E02\u0E2D\u0E07\u0E41\u0E16\u0E27\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E04\u0E37\u0E19\u0E21\u0E32" },
    { require: '', name: 'onRowUnselect', type: 'function($event)', description: "\u0E08\u0E30\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E02\u0E2D\u0E07\u0E41\u0E16\u0E27\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E04\u0E37\u0E19\u0E21\u0E32" },
    { require: '', name: 'onRowDblclick', type: 'function($event)', description: "\u0E08\u0E30\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E02\u0E2D\u0E07\u0E41\u0E16\u0E27\u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E14\u0E31\u0E1A\u0E40\u0E1A\u0E34\u0E25\u0E04\u0E25\u0E34\u0E01\u0E04\u0E37\u0E19\u0E21\u0E32" },
    { require: '', name: 'onHeaderCheckboxToggle', type: 'function($event)', description: "\u0E08\u0E30\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E04\u0E37\u0E19\u0E21\u0E32\u0E40\u0E21\u0E37\u0E48\u0E2D checkbox " },
    { require: '', name: 'onContextMenuSelect', type: 'function($event)', description: "\u0E08\u0E30\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E02\u0E2D\u0E07\u0E41\u0E16\u0E27\u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E04\u0E25\u0E34\u0E01\u0E02\u0E27\u0E32\u0E04\u0E37\u0E19\u0E21\u0E32" },
    { require: '', name: 'onColResize	', type: 'function($event)', description: "\u0E08\u0E30\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E04\u0E37\u0E19\u0E21\u0E32\u0E40\u0E21\u0E37\u0E48\u0E2D resize column" },
    { require: '', name: 'onColReorder', type: 'function($event)', description: "\u0E08\u0E30\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E04\u0E37\u0E19\u0E21\u0E32\u0E40\u0E21\u0E37\u0E48\u0E2D reorder" },
    { require: '', name: 'onLazyLoad', type: 'function($event)', description: "\u0E08\u0E30\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E04\u0E37\u0E19\u0E21\u0E32\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E21\u0E35 paging sorting filtering \u0E43\u0E19\u0E42\u0E2B\u0E21\u0E14 lazy" },
    { require: '', name: 'onEditInit', type: 'function($event)', description: "\u0E08\u0E30\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E02\u0E2D\u0E07\u0E41\u0E16\u0E27\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E04\u0E37\u0E19\u0E21\u0E32 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E21\u0E35\u0E01\u0E32\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E44\u0E1B\u0E42\u0E2B\u0E21\u0E14 edit" },
    { require: '', name: 'onEdit', type: 'function($event)', description: "\u0E08\u0E30\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E02\u0E2D\u0E07\u0E41\u0E16\u0E27\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E04\u0E37\u0E19\u0E21\u0E32 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E21\u0E35\u0E01\u0E32\u0E23\u0E41\u0E01\u0E49\u0E44\u0E02\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25" },
    { require: '', name: 'onEditComplete', type: 'function($event)', description: "\u0E08\u0E30\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E02\u0E2D\u0E07\u0E41\u0E16\u0E27\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E04\u0E37\u0E19\u0E21\u0E32 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E41\u0E01\u0E49\u0E44\u0E02\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E2A\u0E23\u0E47\u0E08\u0E2A\u0E34\u0E49\u0E19" },
    { require: '', name: 'onEditCancel', type: 'function($event)', description: "\u0E08\u0E30\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E02\u0E2D\u0E07\u0E41\u0E16\u0E27\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E04\u0E37\u0E19\u0E21\u0E32 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E21\u0E35\u0E01\u0E32\u0E23\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E01\u0E32\u0E23\u0E41\u0E01\u0E49\u0E44\u0E02" },
    { require: '', name: 'onPage', type: 'function($event)', description: "\u0E08\u0E30\u0E2A\u0E48\u0E07 event \u0E04\u0E37\u0E19\u0E21\u0E32 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E21\u0E35\u0E01\u0E32\u0E23\u0E41\u0E1A\u0E48\u0E07\u0E2B\u0E19\u0E49\u0E32" },
    { require: '', name: 'onSort', type: 'function($event)', description: "\u0E08\u0E30\u0E2A\u0E48\u0E07 event \u0E04\u0E37\u0E19\u0E21\u0E32\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E21\u0E35\u0E01\u0E32\u0E23 sort \u0E43\u0E19 column" },
    { require: '', name: 'onFilter', type: 'function($event)', description: "\u0E08\u0E30\u0E2A\u0E48\u0E07\u0E04\u0E48\u0E32 Filters \u0E04\u0E37\u0E19\u0E21\u0E32 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E21\u0E35\u0E01\u0E32\u0E23 Filters" },
    { require: '', name: 'onRowExpand', type: 'function($event)', description: "\u0E08\u0E30\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E02\u0E2D\u0E07\u0E41\u0E16\u0E27\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E04\u0E37\u0E19\u0E21\u0E32 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E41\u0E16\u0E27\u0E19\u0E31\u0E49\u0E19\u0E21\u0E35\u0E01\u0E32\u0E23 expanded" },
    { require: '', name: 'onRowCollapse', type: 'function($event)', description: "\u0E08\u0E30\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E02\u0E2D\u0E07\u0E41\u0E16\u0E27\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E04\u0E37\u0E19\u0E21\u0E32 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E41\u0E16\u0E27\u0E19\u0E31\u0E49\u0E19\u0E21\u0E35\u0E01\u0E32\u0E23 collapsed" },
    { require: '', name: 'onRowGroupExpand', type: 'function($event)', description: "\u0E08\u0E30\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E02\u0E2D\u0E07\u0E01\u0E25\u0E38\u0E48\u0E21\u0E41\u0E16\u0E27\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E04\u0E37\u0E19\u0E21\u0E32 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E21\u0E35\u0E01\u0E32\u0E23 expanded" },
    { require: '', name: 'onRowGroupCollapse', type: 'function($event)', description: "\u0E08\u0E30\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E02\u0E2D\u0E07\u0E01\u0E25\u0E38\u0E48\u0E21\u0E41\u0E16\u0E27\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E04\u0E37\u0E19\u0E21\u0E32 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E21\u0E35\u0E01\u0E32\u0E23 collapsed" }
];
var _ATTRSYNTAX = [
    { data: "" },
    { data: "     [value]=\"data_of_datatable\"" },
    { data: "     [groupField=\"name_of_field]" },
    { data: "     [paginator=\"true_or_false\"] [pageLinks=\"number_of_page\"] [rows=\"number_of_row\"] [rowsPerPageOptions=\"rows_per_page\"]" },
    { data: "     [rowGroupMode=\"subheader_or_rowspan\"] [sortMode=\"single_or_multiple\"] [sortField=\"name_of_field\"]" },
    { data: "     [globalFilter]=\"name_of_searchbox\"" },
    { data: "     [selectionMode=\"single_or_multiple\"] [(selection)=\"selected\"]" },
    { data: "     [editable]=\"true_or_false\"" },
    { data: "     [expandableRows=\"true_or_false\"]" },
    { data: "     [resizableColumns=\"true_or_false\"] [columnResizeMode=\"expand_or_fit\"]" },
    { data: "     [reorderableColumns=\"true_or_false\"]" },
    { data: "     [scrollable=\"true_or_false\"] [scrollHeight=\"height_of_scroll\"] [scrollWidth=\"width_of_scroll\"]" },
    { data: "     [lazy=\"true_or_false\"] [(onLazyLoad)=\"functionLoadLazy($event)\"]" },
    { data: "     [responsive=\"true_or_false]" },
    { data: "     [exportFilename=\"filename\"]" },
    { data: ">" },
    { data: " <p-header> header of table </p-header>" },
    { data: " <p-column field=\"field\" header=\"header_of_column\" " },
    { data: "     [rowspan=\"number\"] [colspan=\"number\"]" },
    { data: "     [sortable=\"true_or_false\"] [sortField=\"name_of_field\"] [sortFunction=\"function\"]" },
    { data: "     [filter=\"true_or_false\"] [filterPlaceholder=\"placeholder\"] [filterMatchMode=\"filter_match_mode\"]" },
    { data: "     [selectionMode=\"single_or_multiple\"]" },
    { data: "     [editable=\"true_or_false\"]" },
    { data: "     [frozen=\"true_or_false\"]" },
    { data: "     [style=\"inline_style_of_column\"] [styleClass=\"style_class_of_column\"]" },
    { data: "     >" },
    { data: " </p-column>" },
    { data: " <p-footer> footer of table </p-footer>" }
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
    { data: "import { DataTableModule } from 'primeng';" },
    { data: "@NgModule({ \n   imports: [  \n           .................. \n           DataTableModule\n           .................. \n   ] \n  }) " }
];
var _styleLine_html = [
    '<link rel="stylesheet" type="text/css" href="http://10.182.247.73/go-cdn-dev/node_modules/2.4.0/primeng/resources/themes/bootstrap/theme.css" />',
    '<link rel="stylesheet" type="text/css" href="http://10.182.247.73/go-cdn-dev/node_modules/2.4.0/primeng/resources/primeng.min.css" />'
];
var _styleLine_css = [
    "@import url('http://10.182.247.73/go-cdn-dev/node_modules/2.4.0/primeng/resources/themes/bootstrap/theme.css');",
    "@import url('http://10.182.247.73/go-cdn-dev/node_modules/2.4.0/primeng/resources/primeng.min.css');"
];
var _DATA1 = [
    "private dataTable1: Array<any> = [ \n  {\"brand\": \"VW\", \"year\": 2012, \"color\": \"Orange\", \"vin\": \"dsad231ff\"},\n  {\"brand\": \"Audi\", \"year\": 2011, \"color\": \"Black\", \"vin\": \"gwregre345\"},\n  {\"brand\": \"Renault\", \"year\": 2005, \"color\": \"Gray\", \"vin\": \"h354htr\"},\n  {\"brand\": \"BMW\", \"year\": 2003, \"color\": \"Blue\", \"vin\": \"j6w54qgh\"},\n  {\"brand\": \"Mercedes\", \"year\": 1995, \"color\": \"Orange\", \"vin\": \"hrtwy34\"}\n];",
];
var _DATA2 = [
    "private datatable2: Array<any> = [\n  {\"brand\": \"VW\", \"year\": 2012, \"color\": \"Orange\", \"vin\": \"dsad231ff\"},\n  {\"brand\": \"Audi\", \"year\": 2011, \"color\": \"Black\", \"vin\": \"gwregre345\"},\n  {\"brand\": \"Renault\", \"year\": 2005, \"color\": \"Gray\", \"vin\": \"h354htr\"},\n  {\"brand\": \"BMW\", \"year\": 2003, \"color\": \"Blue\", \"vin\": \"j6w54qgh\"},\n  {\"brand\": \"Mercedes\", \"year\": 1995, \"color\": \"Orange\", \"vin\": \"hrtwy34\"},\n  {\"brand\": \"Volvo\", \"year\": 2005, \"color\": \"Black\", \"vin\": \"jejtyj\"},\n  {\"brand\": \"Honda\", \"year\": 2012, \"color\": \"Yellow\", \"vin\": \"g43gr\"},\n  {\"brand\": \"Jaguar\", \"year\": 2013, \"color\": \"Orange\", \"vin\": \"greg34\"},\n  {\"brand\": \"Ford\", \"year\": 2000, \"color\": \"Black\", \"vin\": \"h54hw5\"},\n  {\"brand\": \"Fiat\", \"year\": 2013, \"color\": \"Red\", \"vin\": \"245t2s\"}\n];"
];
var _DATA3 = [
    "const _DATAFOREXAMPLE: Array<any> = [\n  {\"brand\": \"VW\", \"year\": 2012, \"color\": \"Orange\", \"vin\": \"dsad231ff\"},\n  {\"brand\": \"Audi\", \"year\": 2011, \"color\": \"Black\", \"vin\": \"gwregre345\"},\n  {\"brand\": \"Renault\", \"year\": 2005, \"color\": \"Gray\", \"vin\": \"h354htr\"},\n  {\"brand\": \"BMW\", \"year\": 2003, \"color\": \"Blue\", \"vin\": \"j6w54qgh\"},\n  {\"brand\": \"Mercedes\", \"year\": 1995, \"color\": \"Orange\", \"vin\": \"hrtwy34\"},\n  {\"brand\": \"Volvo\", \"year\": 2005, \"color\": \"Black\", \"vin\": \"jejtyj\"},\n  {\"brand\": \"Honda\", \"year\": 2012, \"color\": \"Yellow\", \"vin\": \"g43gr\"},\n  {\"brand\": \"Jaguar\", \"year\": 2013, \"color\": \"Orange\", \"vin\": \"greg34\"},\n  {\"brand\": \"Audi\", \"year\": 2000, \"color\": \"Black\", \"vin\": \"h54hw5\"},\n  {\"brand\": \"Fiat\", \"year\": 2013, \"color\": \"Red\", \"vin\": \"245t2s\"},\n  {\"brand\": \"VW\", \"year\": 2012, \"color\": \"Orange\", \"vin\": \"dsad231ff\"},\n  {\"brand\": \"Audi\", \"year\": 2011, \"color\": \"Black\", \"vin\": \"gwregre345\"},\n  {\"brand\": \"Renault\", \"year\": 2005, \"color\": \"Gray\", \"vin\": \"h354htr\"},\n  {\"brand\": \"BMW\", \"year\": 2003, \"color\": \"Blue\", \"vin\": \"j6w54qgh\"},\n  {\"brand\": \"Mercedes\", \"year\": 1995, \"color\": \"Orange\", \"vin\": \"hrtwy34\"},\n  {\"brand\": \"Volvo\", \"year\": 2005, \"color\": \"Black\", \"vin\": \"jejtyj\"},\n  {\"brand\": \"Honda\", \"year\": 2012, \"color\": \"Yellow\", \"vin\": \"g43gr\"},\n  {\"brand\": \"Jaguar\", \"year\": 2013, \"color\": \"Orange\", \"vin\": \"greg34\"},\n  {\"brand\": \"Volvo\", \"year\": 2000, \"color\": \"Black\", \"vin\": \"h54hw5\"},\n  {\"brand\": \"Fiat\", \"year\": 2013, \"color\": \"Red\", \"vin\": \"245t2s\"},\n];"
];
var _EXAMPLE1 = [
    { data: "app.component.ts" },
    { data: "" },
    { data: "private cols1: any = [\n    {field: 'vin', header: 'Vin'},\n    {field: 'year', header: 'Year'},\n    {field: 'brand', header: 'Brand'},\n    {field: 'color', header: 'Color'}\n  ];" },
    { data: "" },
    { data: "app.component.html" },
    { data: "" },
    { data: "<p-dataTable [value]=\"dataTable1\">" },
    { data: "   <p-column *ngFor=\"let col of cols1\" [field]=\"col.field\" [header]=\"col.header\" id='dataTable_basic'></p-column>" },
    { data: "</p-dataTable>" },
];
var _EXAMPLE2 = [
    { data: "app.component.html" },
    { data: "\n<p-dataTable [value]=\"dataTable2\" [rows]=\"5\" [paginator]=\"true\" [rowsPerPageOptions]=\"[5,10]\" sortMode=\"multiple\" id='dataTable_paginator_sort'>\n  <p-header>List of Cars</p-header>\n  <p-column field=\"vin\" header=\"Vin\" [sortable]=\"true\"></p-column>\n  <p-column field=\"year\" header=\"Year\" [sortable]=\"true\"></p-column>\n  <p-column field=\"brand\" header=\"Brand\" [sortable]=\"true\"></p-column>\n  <p-column field=\"color\" header=\"Color\" [sortable]=\"true\">\n    <ng-template let-col let-dataTable2=\"rowData\" pTemplate=\"body\">\n      <span [style.color]=\"dataTable2[col.field]\">{{dataTable2[col.field]}}</span>\n    </ng-template>\n  </p-column>\n</p-dataTable>" }
];
var _EXAMPLE3 = [
    { data: "app.component.ts" },
    { data: "" },
    { data: "private selectedDatas: Array<any>;" },
    { data: "" },
    { data: "app.component.html" },
    { data: "\n<div class=\"ui-widget-header\" style=\"padding:4px 10px;border-bottom: 0 none\">\n  <div class=\"row\"> \n    <i class=\"col col-md-1 fa fa-search\" ></i> \n    <input class=\"col col-md-10\" #gb type=\"text\"  placeholder=\"Global Filter\">\n  </div>\n</div>" },
    { data: "\n<p-dataTable [value]=\"dataTable2\" [rows]=\"5\" [paginator]=\"true\" [globalFilter]=\"gb\" [editable]=\"true\" id='dataTable_filter_editable'>\n  <p-column field=\"vin\" header=\"Vin (startWith)\" [filter]=\"true\" filterPlaceholder=\"Search\" [editable]=\"true\"></p-column>\n\t<p-column field=\"year\" header=\"Year (equals)\" [editable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\" filterMatchMode='equals'></p-column>\n\t<p-column field=\"brand\" header=\"Brand (contain)\" [editable]=\"true\"  [filter]=\"true\" filterPlaceholder=\"Search\" filterMatchMode='contains'></p-column>\n\t<p-column field=\"color\" header=\"Color (endsWith)\" [editable]=\"true\" [filter]=\"true\" filterPlaceholder=\"Search\" filterMatchMode='endsWith'></p-column>\n  <p-footer>\n    <ul>\n      <li *ngFor=\"let data of selectedDatas\" style=\"text-align: left\">{{data.vin + ' - ' + data.brand + ' - ' + data.year + ' - ' + data.color}}</li>\n    </ul>\n  </p-footer>\n</p-dataTable>\n" },
];
var _EXAMPLE4 = [
    { data: "app.component.html" },
    { data: "\n<p-dataTable [value]=\"dataTable2\" expandableRows=\"true\" resizableColumns=\"true\" reorderableColumns=\"true\" id='dataTable_resize'>\n  <p-header>List of Cars</p-header>\n  <p-column expander=\"true\" styleClass=\"col-icon\"></p-column>\n  <p-column field=\"vin\" header=\"Vin\" [sortable]=\"true\"></p-column>\n  <p-column field=\"year\" header=\"Year\" [sortable]=\"true\"></p-column>\n  <p-column field=\"brand\" header=\"Brand\" [sortable]=\"true\"></p-column>\n  <p-column field=\"color\" header=\"Color\" [sortable]=\"true\"></p-column>" },
    { data: "   <ng-template let-dataTable2 pTemplate=\"rowexpansion\">\n    <div class=\"container\" >\n      <div class=\"row\">\n        <div class=\"col-md-2 label\">Vin: </div>\n        <div class=\"col-md-10\">{{dataTable2.vin}}</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-2 label\">Year: </div>\n        <div class=\"col-md-10\">{{dataTable2.year}}</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-2 label\">Brand: </div>\n        <div class=\"col-md-10\">{{dataTable2.brand}}</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-2 label\">Color: </div>\n        <div class=\"col-md-10\">{{dataTable2.color}}</div>\n      </div>\n    </div>\n  </ng-template>\n</p-dataTable>" }
];
var _EXAMPLE5 = [
    { data: "app.component.html" },
    { data: "\n\n<p-dataTable  [value]=\"dataTable5\" exportFilename=\"dataTableEX5\" scrollable=\"true\" scrollHeight=\"100px\" scrollWidth='600px' id='dataTable_scroll_csv'>\n  <p-header>\n    <div >\n      <go-button label=\"CSV\" iconName=\"file-o\" buttonColor=\"primary\" (click)=\"dt.exportCSV()\"></go-button>\n    </div>\n  </p-header>\n  <p-column field=\"vin\" header=\"Vin\" [style] = \"{width:'160px'}\" ></p-column>\n  <p-column field=\"year\" header=\"Year\" [style] = \"{width:'160px'}\" ></p-column>\n  <p-column field=\"brand\" header=\"Brand\" [style] = \"{width:'160px'}\" ></p-column>\n  <p-column field=\"color\" header=\"Color\" [style] = \"{width:'160px'}\" ></p-column>\n</p-dataTable>\n\n \n*\u0E2A\u0E48\u0E27\u0E19\u0E40\u0E2A\u0E23\u0E34\u0E21\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E39\u0E07\u0E02\u0E2D\u0E07 Scroll \u0E43\u0E2B\u0E49\u0E40\u0E2B\u0E21\u0E32\u0E30\u0E2A\u0E21\u0E01\u0E31\u0E1A\u0E08\u0E33\u0E19\u0E27\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\n component.ts\n  private defaultScrollHeight : number = 100;\n\n  scrollHeightCal(data : Array<any>) : string{\n      let scrollHeight : number;\n      let enlargeScroll : number;\n      enlargeScroll = data.length / 5;\n      if(enlargeScroll > 1){\n        scrollHeight = this.defaultScrollHeight + 100 * (enlargeScroll - 1);\n        return scrollHeight + 'px';\n          } \n      else\n      return '100px';\n    }\n" }
];
var _EXAMPLE6 = [
    { data: "app.component.ts" },
    { data: "" },
    { data: "private stacked: boolean;" },
    { data: "\ntoggle() {\n  this.stacked = !this.stacked;\n}" },
    { data: "" },
    { data: "app.component.html" },
    { data: "\n<go-button label=\"Toggle\" iconName=\"list\" buttonColor=\"primary\" (click)=\"toggle()\" id='dataTable_responsive'></go-button>\n<p-dataTable [value]=\"dataTable6\" [rows]=\"5\" [paginator]=\"true\" [responsive]=\"true\" [stacked]=\"stacked\">\n  <p-header>Responsive</p-header>\n  <p-column field=\"vin\" header=\"Vin\"></p-column>\n  <p-column field=\"year\" header=\"Year\"></p-column>\n  <p-column field=\"brand\" header=\"Brand\"></p-column>\n  <p-column field=\"color\" header=\"Color\"></p-column>\n</p-dataTable>\n    " },
];
var _EXAMPLE7 = [
    { data: "app.component.ts" },
    { data: "" },
    { data: "private selectedDatas: Array<any>;" },
    { data: "" },
    { data: "app.component.html" },
    { data: "\n<p-dataTable [value]=\"dataTable3\" selectionMode=\"multiple\" [(selection)]=\"selectedDatas\" id='dataTable_selection'>\n<p-column field=\"vin\" header=\"Vin\"></p-column>\n<p-column field=\"year\" header=\"Year\" ></p-column>\n<p-column field=\"brand\" header=\"Brand\" ></p-column>\n<p-column field=\"color\" header=\"Color\" ></p-column>\n<p-footer>\n    <ul>\n      <li *ngFor=\"let data of selectedDatas\" style=\"text-align: left\">{{data.vin + ' - ' + data.brand + ' - ' + data.year + ' - ' + data.color}}</li>\n    </ul>\n  </p-footer>\n</p-dataTable>\n" },
];
var _EXAMPLE8 = [
    { data: "app.component.ts" },
    { data: "" },
    { data: "\n    ngOnInit() {\n      this.totalRecords = 50000;\n      console.log('total record----', this.totalRecords);\n    }" },
    { data: "\n    private dataForEx = _DATAFOREXAMPLE;\n    private _data: Array<any>;\n    private totalRecords: number;\n    private firstRecord: number =0;\n    private numOfRow: number = 4;\n\n    private onPage(value){\n      this.firstRecord = value.first;\n      this.numOfRow = value.rows;\n    }\n    \n    private lazyLoad(event){\n      console.log('------ event', event)\n      setTimeout(() => {\n        \n            if(this.dataForEx) {\n                this._data = this.dataForEx.slice(event.first, (event.first + event.rows));\n             }\n        }, 1000);\n    }" },
    { data: "" },
    { data: "app.component.html" },
    { data: "\n\t<p-dataTable #dt [lazy]=\"true\" [totalRecords]=\"totalRecords\" [rows]=\"4\" (onLazyLoad)=\"lazyLoad($event)\" \n  [paginator]=\"true\" id='dataTable_lazy' [value]=\"_data\">\n    <p-header>\n\t\t  <div>Lazy Loading</div>\n  \t</p-header>\n\t\t<p-column field=\"vin\" header=\"Vin\"></p-column>\n\t\t<p-column field=\"year\" header=\"Year\"></p-column>\n\t\t<p-column field=\"brand\" header=\"Brand\"></p-column>\n\t\t<p-column field=\"color\" header=\"Color\"></p-column>\n\t</p-dataTable>   \n" },
];
var _DATAFOREXAMPLE = [
    { "brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff" },
    { "brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345" },
    { "brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr" },
    { "brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh" },
    { "brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34" },
    { "brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj" },
    { "brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr" },
    { "brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34" },
    { "brand": "Audi", "year": 2000, "color": "Black", "vin": "h54hw5" },
    { "brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s" },
    { "brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff" },
    { "brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345" },
    { "brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr" },
    { "brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh" },
    { "brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34" },
    { "brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj" },
    { "brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr" },
    { "brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34" },
    { "brand": "Volvo", "year": 2000, "color": "Black", "vin": "h54hw5" },
    { "brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s" },
];
var _DATATABLE2 = [
    { "brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff" },
    { "brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345" },
    { "brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr" },
    { "brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh" },
    { "brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34" },
    { "brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj" },
    { "brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr" },
    { "brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34" },
    { "brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5" },
    { "brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s" }
];
var _DATATABLE1 = [
    { "brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff" },
    { "brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345" },
    { "brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr" },
    { "brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh" },
    { "brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34" }
];
var _COLS1 = [
    { field: 'vin', header: 'Vin' },
    { field: 'year', header: 'Year' },
    { field: 'brand', header: 'Brand' },
    { field: 'color', header: 'Color' }
];
var DataTableDocument = (function () {
    function DataTableDocument() {
        this.componentTag = 'DataTable';
        this.version = '1.0';
        this.componentDescription = "DataTables \u0E40\u0E1B\u0E47\u0E19\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D\u0E0A\u0E48\u0E27\u0E22\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E15\u0E32\u0E23\u0E32\u0E07\u0E41\u0E2A\u0E14\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E14\u0E49\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E07\u0E48\u0E32\u0E22\u0E41\u0E25\u0E30\u0E2A\u0E30\u0E14\u0E27\u0E01 \u0E23\u0E27\u0E21\u0E17\u0E31\u0E49\u0E07\u0E21\u0E35 feature \u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E43\u0E0A\u0E49\u0E43\u0E19\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E15\u0E48\u0E32\u0E07\u0E46\u0E44\u0E14\u0E49";
        this.releaseDate = '29 March 2017';
        this.creditURL = 'https://www.primefaces.org/primeng/#/datatable';
        this.credit = 'primeng (2.0.5)';
        this.prefixSyntax = '<p-dataTable';
        this.attrSyntaxList = _ATTRSYNTAX;
        this.suffixSyntax = '</p-dataTable>';
        this.attributeTableList = _ATTRIBUTETABLELIST;
        this.attributeColumnList = _ATTRIBUTECOLUMNLIST;
        this.eventList = _EVENTLIST;
        this.systemjs = _SYSTEMJS;
        this.appModule = _APPMODULE;
        this.data1 = _DATA1;
        this.data2 = _DATA2;
        this.data3 = _DATA3;
        this.codeExample1 = _EXAMPLE1;
        this.codeExample2 = _EXAMPLE2;
        this.codeExample3 = _EXAMPLE3;
        this.codeExample4 = _EXAMPLE4;
        this.codeExample5 = _EXAMPLE5;
        this.codeExample6 = _EXAMPLE6;
        this.codeExample7 = _EXAMPLE7;
        this.codeExample8 = _EXAMPLE8;
        this.dataTable1 = _DATATABLE1;
        this.cols1 = _COLS1;
        this.dataTable2 = _DATATABLE2;
        this.dataTable3 = _DATATABLE2;
        this.dataTable4 = _DATATABLE1;
        this.dataTable5 = _DATATABLE2;
        this.dataTable6 = _DATATABLE2;
        this.styleLine_html = _styleLine_html;
        this.styleLine_css = _styleLine_css;
        this.defaultScrollHeight = 100;
        this.dataForEx = _DATAFOREXAMPLE;
        this.firstRecord = 0;
        this.numOfRow = 4;
        /*
            loadCarsLazy(event: LazyLoadEvent) {
                //for demo purposes keep loading the same dataset
                //in a real production application, this data should come from server by building the query with LazyLoadEvent options
                this.dataTable5 = [
                    {"brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
          {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
          {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
          {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
          {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
          {"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj"},
          {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr"},
          {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34"},
          {"brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5"},
          {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"}
                ];
                
            }
            */
    }
    DataTableDocument.prototype.toggle = function () {
        this.stacked = !this.stacked;
    };
    DataTableDocument.prototype.scrollHeightCal = function (data) {
        var scrollHeight;
        var enlargeScroll;
        enlargeScroll = data.length / 5;
        if (enlargeScroll > 1) {
            scrollHeight = this.defaultScrollHeight + 100 * (enlargeScroll - 1);
            return scrollHeight + 'px';
        }
        else
            return '100px';
    };
    DataTableDocument.prototype.ngOnInit = function () {
        this.totalRecords = 50000;
        console.log('total record----', this.totalRecords);
    };
    DataTableDocument.prototype.onPage = function (value) {
        this.firstRecord = value.first;
        this.numOfRow = value.rows;
    };
    DataTableDocument.prototype.lazyLoad = function (event) {
        var _this = this;
        console.log('------ event', event);
        setTimeout(function () {
            if (_this.dataForEx) {
                _this._data = _this.dataForEx.slice(event.first, (event.first + event.rows));
            }
        }, 1000);
    };
    return DataTableDocument;
}());
DataTableDocument = __decorate([
    core_1.Component({
        selector: 'doc-datatable',
        templateUrl: './datatable.document.html'
    })
], DataTableDocument);
exports.DataTableDocument = DataTableDocument;
//# sourceMappingURL=datatable.document.js.map