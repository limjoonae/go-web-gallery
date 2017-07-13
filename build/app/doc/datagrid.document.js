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
    { require: '*', name: 'value', type: 'array', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E43\u0E2B\u0E49 datagrid" },
    { require: '', name: 'rows', type: 'number', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E08\u0E33\u0E19\u0E27\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E08\u0E30\u0E41\u0E2A\u0E14\u0E07\u0E43\u0E19\u0E41\u0E15\u0E48\u0E25\u0E30\u0E2B\u0E19\u0E49\u0E32" },
    { require: '', name: 'paginator', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E2B\u0E49 datagrid \u0E41\u0E2A\u0E14\u0E07\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E25\u0E02\u0E2B\u0E19\u0E49\u0E32 (paginator) \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E40\u0E1B\u0E47\u0E19 true \u0E41\u0E25\u0E49\u0E27\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E04\u0E48\u0E32 row \u0E14\u0E49\u0E27\u0E22" },
    { require: '', name: 'paginatorPosition', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E2B\u0E49\u0E41\u0E2A\u0E14\u0E07\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E25\u0E02\u0E2B\u0E19\u0E49\u0E32 (paginator) \u0E44\u0E27\u0E49\u0E2A\u0E48\u0E27\u0E19\u0E44\u0E2B\u0E19\u0E02\u0E2D\u0E07\u0E15\u0E32\u0E23\u0E32\u0E07 \u0E42\u0E14\u0E22\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E14\u0E49 3 \u0E41\u0E1A\u0E1A\u0E14\u0E31\u0E07\u0E19\u0E35\u0E49  \"top\", \"bottom\" \u0E41\u0E25\u0E30 \"both\"" },
    { require: '', name: 'pageLinks', type: 'number', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E08\u0E33\u0E19\u0E27\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E08\u0E30\u0E41\u0E2A\u0E14\u0E07\u0E43\u0E19 paginator" },
    { require: '', name: 'totalRecords', type: 'number', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E08\u0E33\u0E19\u0E27\u0E19\u0E02\u0E2D\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14" },
    { require: '', name: 'rowsPerPageOptions', type: 'array', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E08\u0E33\u0E19\u0E27\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E08\u0E30\u0E41\u0E2A\u0E14\u0E07\u0E15\u0E48\u0E2D\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E31\u0E49\u0E19" },
    { require: '', name: 'lazy', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E2B\u0E49\u0E42\u0E2B\u0E25\u0E14\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E41\u0E1A\u0E1A lazy" },
    { require: '', name: 'style', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 style \u0E41\u0E1A\u0E1A inline" },
    { require: '', name: 'styleClass', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 style class" }
];
var _EVENTLIST = [
    { require: '', name: 'onLazyLoad', type: 'function($event)', description: "\u0E08\u0E30\u0E2A\u0E48\u0E07 event \u0E43\u0E14 \u0E46 \u0E04\u0E37\u0E19\u0E21\u0E32\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E21\u0E35\u0E01\u0E32\u0E23\u0E40\u0E01\u0E34\u0E14 event \u0E15\u0E48\u0E32\u0E07 \u0E46 \u0E43\u0E19\u0E42\u0E2B\u0E21\u0E14 lazy" },
    { require: '', name: 'onPage', type: 'function($event)', description: "\u0E08\u0E30\u0E2A\u0E48\u0E07 event \u0E04\u0E37\u0E19\u0E21\u0E32\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E21\u0E35\u0E01\u0E32\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E40\u0E01\u0E34\u0E14\u0E02\u0E36\u0E49\u0E19" },
];
var _ATTRSYNTAX = [
    { data: "" },
    { data: "   value = \"array_of_data\"" },
    { data: "   [rows = \"number_of_row\"]" },
    { data: "   [paginator = \"true_or_false\"]" },
    { data: "   [paginatorPosition = \"position_of_paginator\"]" },
    { data: "   [pageLinks = \"number\"]" },
    { data: "   [rowsPerPageOptions = \"row_per_page\"]" },
    { data: "   [totalRecords = \"number\"]" },
    { data: "   [lazy = \"true_or_false]" },
    { data: "   [style = \"style_inline\"]" },
    { data: "   [styleClass = \"style_class\"]" }
];
var _DATACODE = [
    "private data: Array<any> = [\n  {\"brand\": \"VW\", \"year\": 2012, \"color\": \"Orange\", \"vin\": \"dsad231ff\"},\n  {\"brand\": \"Audi\", \"year\": 2011, \"color\": \"Black\", \"vin\": \"gwregre345\"},\n  {\"brand\": \"Renault\", \"year\": 2005, \"color\": \"Gray\", \"vin\": \"h354htr\"},\n  {\"brand\": \"BMW\", \"year\": 2003, \"color\": \"Blue\", \"vin\": \"j6w54qgh\"},\n  {\"brand\": \"Mercedes\", \"year\": 1995, \"color\": \"Orange\", \"vin\": \"hrtwy34\"},\n  {\"brand\": \"Volvo\", \"year\": 2005, \"color\": \"Black\", \"vin\": \"jejtyj\"},\n  {\"brand\": \"Honda\", \"year\": 2012, \"color\": \"Yellow\", \"vin\": \"g43gr\"},\n  {\"brand\": \"Jaguar\", \"year\": 2013, \"color\": \"Orange\", \"vin\": \"greg34\"}\n];"
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
var _DATAFOREXAMPLE_BASIC = [
    { "brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff" },
    { "brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345" },
    { "brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr" },
    { "brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh" },
    { "brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34" },
    { "brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj" },
    { "brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr" },
    { "brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34" },
];
var _codeExampleBasic = [
    { data: "\n<p-dataGrid id=\"datagrid_basic\" [value]=\"data\">\n  <p-header> List of Cars </p-header>\n  <ng-template let-data pTemplate=\"item\">\n      <div style=\"padding:3px\" class=\"ui-g-12 ui-md-3\">\n        <p-panel [header]=\"data.vin\" [style]=\"{'text-align':'center'}\">\n          <img src=\"./image/datagrid/{{data.brand}}.gif\">\n          <div class=\"data-detail\">{{data.year}} - {{data.color}}</div>\t\n        </p-panel>\n      </div>\n  </ng-template>\n</p-dataGrid>\n" }
];
var _codeExamplePaginator = [
    { data: "\nDefault\n\n<p-dataGrid id=\"datagrid_paginator\" [value]=\"data\" \n            [paginator]=\"true\" [rows]=\"4\">\n  <p-header> List of Cars </p-header>\n  <ng-template let-data pTemplate=\"item\">\n    <div style=\"padding:3px\" class=\"ui-g-12 ui-md-3\">\n      <p-panel [header]=\"data.vin\" [style]=\"{'text-align':'center'}\">\n        <img src=\"./image/datagrid/{{data.brand}}.gif\">\n        <div class=\"data-detail\">{{data.year}} - {{data.color}}</div>\t\n      </p-panel>\n    </div>\n  </ng-template>\n</p-dataGrid>\n" },
    { data: "\nTop\n\n<p-dataGrid id=\"datagrid_paginator_top\" [value]=\"data\" \n            [paginator]=\"true\" [rows]=\"4\" paginatorPosition=\"top\">\n  <p-header> List of Cars </p-header>\n  <ng-template let-data pTemplate=\"item\">\n    <div style=\"padding:3px\" class=\"ui-g-12 ui-md-3\">\n      <p-panel [header]=\"data.vin\" [style]=\"{'text-align':'center'}\">\n        <img src=\"./image/datagrid/{{data.brand}}.gif\">\n        <div class=\"data-detail\">{{data.year}} - {{data.color}}</div>\t\n      </p-panel>\n    </div>\n  </ng-template>\n</p-dataGrid>\n" },
    { data: "\nBoth\n\n<p-dataGrid id=\"datagrid_paginator_both\" [value]=\"data\" \n            [paginator]=\"true\" [rows]=\"4\" paginatorPosition=\"both\">\n  <p-header> List of Cars </p-header>\n  <ng-template let-data pTemplate=\"item\">\n    <div style=\"padding:3px\" class=\"ui-g-12 ui-md-3\">\n      <p-panel [header]=\"data.vin\" [style]=\"{'text-align':'center'}\">\n        <img src=\"./image/datagrid/{{data.brand}}.gif\">\n        <div class=\"data-detail\">{{data.year}} - {{data.color}}</div>\t\n      </p-panel>\n    </div>\n  </ng-template>\n</p-dataGrid>\n" },
    { data: "\nPage Links\n\n<p-dataGrid id=\"datagrid_pagelink\" [value]=\"data\" \n            [paginator]=\"true\" [rows]=\"4\" pageLinks=\"1\">\n  <p-header> List of Cars </p-header>\n  <ng-template let-data pTemplate=\"item\">\n    <div style=\"padding:3px\" class=\"ui-g-12 ui-md-3\">\n      <p-panel [header]=\"data.vin\" [style]=\"{'text-align':'center'}\">\n        <img src=\"./image/datagrid/{{data.brand}}.gif\">\n        <div class=\"data-detail\">{{data.year}} - {{data.color}}</div>\t\n      </p-panel>\n    </div>\n  </ng-template>\n</p-dataGrid>\n" },
    { data: "\nRows Per Page Options\n\n<p-dataGrid id=\"datagrid_rowsPerPage\" [value]=\"data\" \n            [paginator]=\"true\" [rows]=\"4\" [rowsPerPageOptions]=\"[1,2,3,4,5,6,7,8]\">\n  <p-header> List of Cars </p-header>\n  <ng-template let-data pTemplate=\"item\">\n    <div style=\"padding:3px\" class=\"ui-g-12 ui-md-3\">\n      <p-panel [header]=\"data.vin\" [style]=\"{'text-align':'center'}\">\n        <img src=\"./image/datagrid/{{data.brand}}.gif\">\n        <div class=\"data-detail\">{{data.year}} - {{data.color}}</div>\t\n      </p-panel>\n    </div>\n  </ng-template>\n</p-dataGrid>\n" },
    { data: "" },
    { data: "" },
];
var _codeExampleEvent_html = [
    { data: "\n<p-dataGrid id=\"datagrid_event\" [value]=\"data\" \n            [paginator]=\"true\" [rows]=\"4\" \n            [rowsPerPageOptions]=\"[1,2,3,4,5,6,7,8]\" \n            (onPage)=\"onPage($event)\" >\n  <p-header> List of Cars </p-header>\n  <ng-template let-dataForEx pTemplate=\"item\">\n    <div style=\"padding:3px\" class=\"ui-g-12 ui-md-3\">\n      <p-panel [header]=\"dataForEx.vin\" [style]=\"{'text-align':'center'}\">\n        <img src=\"./image/datagrid/{{dataForEx.brand}}.gif\">\n        <div class=\"dataForEx-detail\">{{dataForEx.year}} - {{dataForEx.color}}</div>\n        <hr class=\"ui-widget-content\" style=\"border-top:0\">\n        <i class=\"fa fa-search\" (click)=\"selectCar(dataForEx)\" style=\"cursor:pointer\"></i>\n      </p-panel>\n    </div>\n  </ng-template>\n</p-dataGrid>\n\n<p> <strong> Index of first record in page: </strong>  {{firstRecord}} </p>\n<p> <strong> Number of rows on the page: </strong> {{numOfRow}} </p>\n\n<p-dialog header=\"Car Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\"  [modal]=\"true\" width=\"225\" (onAfterHide)=\"onDialogHide()\">\n  <div class=\"ui-grid ui-grid-responsive ui-grid-pad\" *ngIf=\"selectedCar\" style=\"font-size:16px;text-align:center;padding:20px\">\n    <div class=\"ui-grid-row\">\n      <div class=\"ui-grid-col-12\" style=\"text-align:center\"><img src=\"./image/datagrid/{{selectedCar.brand}}.gif\"></div>\n    </div>\n    <div class=\"ui-grid-row\">\n\t    <div class=\"ui-grid-col-4\">Vin: </div>\n\t\t  <div class=\"ui-grid-col-8\">{{selectedCar.vin}}</div>\n\t  </div>\n\t  <div class=\"ui-grid-row\">\n\t\t  <div class=\"ui-grid-col-4\">Year: </div>\n\t\t  <div class=\"ui-grid-col-8\">{{selectedCar.year}}</div>\n\t  </div>\n\t  <div class=\"ui-grid-row\">\n\t\t  <div class=\"ui-grid-col-4\">Brand: </div>\n\t\t  <div class=\"ui-grid-col-8\">{{selectedCar.brand}}</div>\n\t  </div>\n\t  <div class=\"ui-grid-row\">\n\t\t  <div class=\"ui-grid-col-4\">Color: </div>\n\t\t  <div class=\"ui-grid-col-8\">{{selectedCar.color}}</div>\n\t  </div>\n  </div>\n</p-dialog>\n" }
];
var _codeExampleEvent_ts = [
    { data: "" },
    { data: "private displayDialog: boolean;" },
    { data: "private selectedCar: any;" },
    { data: "\nprivate selectCar(car: any) {\n    this.selectedCar = car;\n    this.displayDialog = true;\n}" },
    { data: "\nprivate onDialogHide() {\n  this.selectedCar = null;\n}\n" },
    { data: "private firstRecord: number = 0;" },
    { data: "private numOfRow: number = 4;" },
    { data: "\nprivate onPage(value){\n  this.firstRecord = value.first;\n  this.numOfRow = value.rows;\n}\n  " }
];
var _codeExampleLazy_html = [
    { data: "\n<p-dataGrid id=\"datagrid_lazy\" [lazy]=\"true\"\n    [value]=\"data_lazy\" \n    [totalRecords]=\"totalRecords\"\n    (onLazyLoad)=\"lazyLoad($event)\" \n    [paginator]=\"true\" [rows]=\"4\">\n  <p-header> List of Cars </p-header>\n\t\t<ng-template let-data pTemplate=\"item\">\n      <div style=\"padding:3px\" class=\"ui-g-12 ui-md-3\">\n        <p-panel [header]=\"data.vin\" [style]=\"{'text-align':'center'}\">\n          <img src=\"./image/datagrid/{{data.brand}}.gif\">\n          <div class=\"data-detail\">{{data.year}} - {{data.color}}</div>\t\n        </p-panel>\n      </div>\n    </ng-template>\n</p-dataGrid>\n   " }
];
var _codeExampleLazy_ts = [
    { data: "\nprivate dataForEx: Array<any> = [\n  {\"brand\": \"VW\", \"year\": 2012, \"color\": \"Orange\", \"vin\": \"dsad231ff\"},\n  {\"brand\": \"Audi\", \"year\": 2011, \"color\": \"Black\", \"vin\": \"gwregre345\"},\n  {\"brand\": \"Renault\", \"year\": 2005, \"color\": \"Gray\", \"vin\": \"h354htr\"},\n  {\"brand\": \"BMW\", \"year\": 2003, \"color\": \"Blue\", \"vin\": \"j6w54qgh\"},\n  {\"brand\": \"Mercedes\", \"year\": 1995, \"color\": \"Orange\", \"vin\": \"hrtwy34\"},\n  {\"brand\": \"Volvo\", \"year\": 2005, \"color\": \"Black\", \"vin\": \"jejtyj\"},\n  {\"brand\": \"Honda\", \"year\": 2012, \"color\": \"Yellow\", \"vin\": \"g43gr\"},\n  {\"brand\": \"Jaguar\", \"year\": 2013, \"color\": \"Orange\", \"vin\": \"greg34\"},\n  {\"brand\": \"Audi\", \"year\": 2000, \"color\": \"Black\", \"vin\": \"h54hw5\"},\n  {\"brand\": \"Fiat\", \"year\": 2013, \"color\": \"Red\", \"vin\": \"245t2s\"},\n  {\"brand\": \"VW\", \"year\": 2012, \"color\": \"Orange\", \"vin\": \"dsad231ff\"},\n  {\"brand\": \"Audi\", \"year\": 2011, \"color\": \"Black\", \"vin\": \"gwregre345\"},\n  {\"brand\": \"Renault\", \"year\": 2005, \"color\": \"Gray\", \"vin\": \"h354htr\"},\n  {\"brand\": \"BMW\", \"year\": 2003, \"color\": \"Blue\", \"vin\": \"j6w54qgh\"},\n  {\"brand\": \"Mercedes\", \"year\": 1995, \"color\": \"Orange\", \"vin\": \"hrtwy34\"},\n  {\"brand\": \"Volvo\", \"year\": 2005, \"color\": \"Black\", \"vin\": \"jejtyj\"},\n  {\"brand\": \"Honda\", \"year\": 2012, \"color\": \"Yellow\", \"vin\": \"g43gr\"},\n  {\"brand\": \"Jaguar\", \"year\": 2013, \"color\": \"Orange\", \"vin\": \"greg34\"},\n  {\"brand\": \"Volvo\", \"year\": 2000, \"color\": \"Black\", \"vin\": \"h54hw5\"},\n  {\"brand\": \"Fiat\", \"year\": 2013, \"color\": \"Red\", \"vin\": \"245t2s\"},\n];" },
    { data: "private data_lazy: Array<any>;" },
    { data: "private totalRecords: number;" },
    { data: "\n ngOnInit() {\n  this.totalRecords = this.dataForEx.length;\n}\n" },
    { data: "\nprivate lazyLoad(event){\n  setTimeout(() => {\n    if(this.dataForEx) {\n      this.data_lazy = this.dataForEx.slice(event.first, (event.first + event.rows));\n    }\n  }, 5000);\n}\n" },
];
var DataGridDocument = (function () {
    function DataGridDocument() {
        this.componentTag = 'DataGrid';
        this.version = '1.0';
        this.componentDescription = "DataGrid \u0E40\u0E1B\u0E47\u0E19\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D\u0E0A\u0E48\u0E27\u0E22\u0E41\u0E2A\u0E14\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E43\u0E19\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E15\u0E32\u0E23\u0E32\u0E07 grid";
        this.releaseDate = '29 March 2017';
        this.creditURL = 'https://www.primefaces.org/primeng/#/datagrid';
        this.credit = 'primeng (2.0.5)';
        this.prefixSyntax = '<p-dataGrid';
        this.attrSyntaxList = _ATTRSYNTAX;
        this.suffixSyntax = '</p-dataGrid>';
        this.attributeList = _ATTRIBUTELIST;
        this.eventList = _EVENTLIST;
        this.dataForEx = _DATAFOREXAMPLE;
        this.dataForExBasic = _DATAFOREXAMPLE_BASIC;
        this.codeData = _DATACODE;
        this.codeExampleBasic = _codeExampleBasic;
        this.codeExamplePaginator = _codeExamplePaginator;
        this.codeExampleEvent_html = _codeExampleEvent_html;
        this.codeExampleEvent_ts = _codeExampleEvent_ts;
        this.codeExampleLazy_html = _codeExampleLazy_html;
        this.codeExampleLazy_ts = _codeExampleLazy_ts;
        this.firstRecord = 0;
        this.numOfRow = 4;
    }
    DataGridDocument.prototype.ngOnInit = function () {
        this.totalRecords = this.dataForEx.length;
    };
    DataGridDocument.prototype.selectCar = function (car) {
        this.selectedCar = car;
        this.displayDialog = true;
    };
    DataGridDocument.prototype.onDialogHide = function () {
        this.selectedCar = null;
    };
    DataGridDocument.prototype.onPage = function (value) {
        this.firstRecord = value.first;
        this.numOfRow = value.rows;
    };
    DataGridDocument.prototype.lazyLoad = function (event) {
        var _this = this;
        setTimeout(function () {
            if (_this.dataForEx) {
                _this.data_lazy = _this.dataForEx.slice(event.first, (event.first + event.rows));
            }
        }, 5000);
    };
    return DataGridDocument;
}());
DataGridDocument = __decorate([
    core_1.Component({
        selector: 'doc-datagrid',
        templateUrl: './datagrid.document.html'
    })
], DataGridDocument);
exports.DataGridDocument = DataGridDocument;
//# sourceMappingURL=datagrid.document.js.map