"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var _ATTRIBUTELIST = [
    { require: '*', name: 'value', type: 'array', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E43\u0E2B\u0E49 tree" },
    { require: '', name: 'selectionMode', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E43\u0E19\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01 tree \u0E21\u0E35 3 \u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17 \u0E14\u0E31\u0E07\u0E19\u0E35\u0E49  \"single\", \"multiple\", \"checkbox\"" },
    { require: '', name: 'selection', type: 'any', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E31\u0E1A output \u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E08\u0E32\u0E01 tree" },
    { require: '', name: 'style', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E43\u0E2A\u0E48 style inline \u0E43\u0E2B\u0E49 tree" },
    { require: '', name: 'styleClass', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E43\u0E2A\u0E48 style class \u0E43\u0E2B\u0E49 tree" },
];
var _ATTRIBUTETREENODELIST = [
    { require: '', name: 'label', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 label \u0E02\u0E2D\u0E07\u0E42\u0E2B\u0E19\u0E14 tree" },
    { require: '', name: 'data', type: 'any', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E41\u0E2A\u0E14\u0E07\u0E43\u0E19\u0E42\u0E2B\u0E19\u0E14" },
    { require: '', name: 'icon', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 icon \u0E02\u0E2D\u0E07\u0E42\u0E2B\u0E19\u0E14\u0E16\u0E31\u0E14\u0E44\u0E1B" },
    { require: '', name: 'expandedIcon', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 icon \u0E40\u0E21\u0E37\u0E48\u0E2D expanded" },
    { require: '', name: 'collapsedIcon', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 icon \u0E40\u0E21\u0E37\u0E48\u0E2D collapsed " },
    { require: '', name: 'children', type: 'array', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E25\u0E39\u0E01\u0E02\u0E2D\u0E07 tree" },
    { require: '', name: 'leaf', type: 'boolean', description: "\u0E2C\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E27\u0E48\u0E32\u0E42\u0E2B\u0E19\u0E14\u0E21\u0E35\u0E25\u0E39\u0E01 \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E42\u0E2B\u0E25\u0E14\u0E41\u0E1A\u0E1A lazy" },
    { require: '', name: 'style', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E43\u0E2A\u0E48 style inline \u0E43\u0E2B\u0E49\u0E42\u0E2B\u0E19\u0E14" },
    { require: '', name: 'styleClass', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E43\u0E2A\u0E48 style class \u0E43\u0E2B\u0E49\u0E42\u0E2B\u0E19\u0E14" },
    { require: '', name: 'expanded', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E27\u0E48\u0E32\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E43\u0E2B\u0E49\u0E42\u0E2B\u0E19\u0E14 expanded \u0E2B\u0E23\u0E37\u0E2D collapsed " },
];
var _ATTRIBUTEEVENTELIST = [
    { require: '', name: 'onNodeSelect', type: 'function($event)', description: "\u0E08\u0E30\u0E2A\u0E48\u0E07 Node \u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E04\u0E37\u0E19\u0E21\u0E32" },
    { require: '', name: 'onNodeUnselect', type: 'function($event)', description: "\u0E08\u0E30\u0E2A\u0E48\u0E07 Node \u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E04\u0E37\u0E19\u0E21\u0E32" },
    { require: '', name: 'onNodeExpand', type: 'function($event)', description: "\u0E08\u0E30\u0E2A\u0E48\u0E07 Node \u0E17\u0E35\u0E48 Expand \u0E04\u0E37\u0E19\u0E21\u0E32" },
    { require: '', name: 'onNodeCollapse', type: 'function($event)', description: "\u0E08\u0E30\u0E2A\u0E48\u0E07 Node \u0E17\u0E35\u0E48 Collapse \u0E04\u0E37\u0E19\u0E21\u0E32" }
];
var _ATTRSYNTAX = [
    { data: "" },
    { data: "   value = \"array_of_data\"" },
    { data: "   [selectionMode = \"single_or_multiple_or_checkbox\"]" },
    { data: "   [(selection) = \"output\"]" },
    { data: "   [style = \"style_inline\"]" },
    { data: "   [styleClass = \"style_class\"]" }
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
    { data: " import { TreeModule } from 'primeng'; " },
    { data: "@NgModule({ \n   imports: [  \n           .................. \n           TreeModule\n           .................. \n   ] \n  }) " }
];
var _styleLine_html = [
    '<link rel="stylesheet" type="text/css" href="http://10.182.247.73/go-cdn-dev/node_modules/2.4.0/primeng/resources/themes/bootstrap/theme.css" />',
    '<link rel="stylesheet" type="text/css" href="http://10.182.247.73/go-cdn-dev/node_modules/2.4.0/primeng/resources/primeng.min.css" />'
];
var _styleLine_css = [
    "@import url('http://10.182.247.73/go-cdn-dev/node_modules/2.4.0/primeng/resources/themes/bootstrap/theme.css');",
    "@import url('http://10.182.247.73/go-cdn-dev/node_modules/2.4.0/primeng/resources/primeng.min.css');"
];
var _releaseUpdate = [
    { head: "Version", data: "Update primeng version 4.0.0-rc.2" },
    { head: "Icon", data: "\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E43\u0E2A\u0E48\u0E44\u0E2D\u0E04\u0E2D\u0E19 (\u0E08\u0E32\u0E01 Font Awesome)" },
    { head: "selectionMode", data: "\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E08\u0E32\u0E01 Tree \u0E43\u0E2B\u0E49\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E40\u0E14\u0E35\u0E48\u0E22\u0E27 \u0E2B\u0E23\u0E37\u0E2D\u0E2B\u0E25\u0E32\u0E22\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E14\u0E49" },
];
var _EXAMPLE1 = [
    { data: "app.component.html" },
    { data: "" },
    { data: "<p-tree [value]=\"data\" id='tree_basic'></p-tree>" },
];
var _EXAMPLE2 = [
    { data: "app.component.ts  " },
    { data: "" },
    { data: "private selectedFile: any;" },
    { data: "" },
    { data: "app.component.html" },
    { data: "" },
    { data: "<p-tree [value]=\"data\" selectionMode=\"single\" [(selection)]=\"selectedFile\" id='tree_single'></p-tree>" },
    { data: "<div>Selected Node: <label *ngIf=\"selectedFile\">{{selectedFile.label}}</label></div>" },
    { data: "" },
    { data: "" },
];
var _EXAMPLE3 = [
    { data: "app.component.ts  " },
    { data: "" },
    { data: "private selectedFiles: any;" },
    { data: "" },
    { data: "app.component.html" },
    { data: "" },
    { data: "<p-tree [value]=\"data\" selectionMode=\"multiple\" [(selection)]=\"selectedFiles\" id='tree_multiple'> </p-tree>" },
    { data: "<div>Selected Nodes: <span *ngFor=\"let file of selectedFiles\">{{file.label}} </span></div>" },
];
var _EXAMPLE4 = [
    { data: "app.component.ts  " },
    { data: "" },
    { data: "private selectedFiles2: any;" },
    { data: "" },
    { data: "app.component.html" },
    { data: "" },
    { data: "<p-tree [value]=\"data\" selectionMode=\"checkbox\" [(selection)]=\"selectedFiles2\" id='tree_checkbox'></p-tree>" },
    { data: "<div>Selected Nodes: <span *ngFor=\"let file of selectedFiles2\">{{file.label}} </span></div>" },
];
var _DATA1 = [
    "\nprivate data =\n  [\n    {\n      \"label\": \"Documents\",\n      \"data\": \"Documents Folder\",\n      \"expandedIcon\": \"fa-folder-open\",\n      \"collapsedIcon\": \"fa-folder\",\n      \"children\": [{\n        \"label\": \"Work\",\n        \"data\": \"Work Folder\",\n        \"expandedIcon\": \"fa-folder-open\",\n        \"collapsedIcon\": \"fa-folder\",\n        \"children\": [{\"label\": \"Expenses.doc\", \"icon\": \"fa-file-word-o\", \"data\": \"Expenses Document\"}, {\"label\": \"Resume.doc\", \"icon\": \"fa-file-word-o\", \"data\": \"Resume Document\"}]\n       },\n       {\n        \"label\": \"Home\",\n        \"data\": \"Home Folder\",\n        \"expandedIcon\": \"fa-folder-open\",\n        \"collapsedIcon\": \"fa-folder\",\n        \"children\": [{\"label\": \"Invoices.txt\", \"icon\": \"fa-file-word-o\", \"data\": \"Invoices for this month\"}]\n       }]\n     },\n     {\n       \"label\": \"Pictures\",\n       \"data\": \"Pictures Folder\",\n       \"expandedIcon\": \"fa-folder-open\",\n       \"collapsedIcon\": \"fa-folder\",\n       \"children\": [\n          {\"label\": \"barcelona.jpg\", \"icon\": \"fa-file-image-o\", \"data\": \"Barcelona Photo\"},\n          {\"label\": \"logo.jpg\", \"icon\": \"fa-file-image-o\", \"data\": \"PrimeFaces Logo\"},\n          {\"label\": \"primeui.png\", \"icon\": \"fa-file-image-o\", \"data\": \"PrimeUI Logo\"}]\n        },\n        {\n          \"label\": \"Movies\",\n          \"data\": \"Movies Folder\",\n          \"expandedIcon\": \"fa-folder-open\",\n          \"collapsedIcon\": \"fa-folder\",\n          \"children\": [{\n              \"label\": \"Al Pacino\",\n              \"data\": \"Pacino Movies\",\n              \"children\": [{\"label\": \"Scarface\", \"icon\": \"fa-file-video-o\", \"data\": \"Scarface Movie\"}, {\"label\": \"Serpico\", \"icon\": \"fa-file-video-o\", \"data\": \"Serpico Movie\"}]\n            },\n            {\n              \"label\": \"Robert De Niro\",\n              \"data\": \"De Niro Movies\",\n              \"children\": [{\"label\": \"Goodfellas\", \"icon\": \"fa-file-video-o\", \"data\": \"Goodfellas Movie\"}, {\"label\": \"Untouchables\", \"icon\": \"fa-file-video-o\", \"data\": \"Untouchables Movie\"}]\n            }]\n       }\n  ]"
];
var TreeDocument = (function () {
    function TreeDocument() {
        this.componentTag = 'Tree';
        this.version = '2.0';
        this.componentDescription = "Tree \u0E40\u0E1B\u0E47\u0E19 component \u0E17\u0E35\u0E48\u0E0A\u0E48\u0E27\u0E22\u0E41\u0E2A\u0E14\u0E07\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E40\u0E1B\u0E47\u0E19\u0E25\u0E33\u0E14\u0E31\u0E1A\u0E02\u0E31\u0E49\u0E19 \u0E42\u0E14\u0E22\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E44\u0E14\u0E49 \u0E41\u0E25\u0E30\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E14\u0E49\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32 1 \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23";
        this.releaseDate = '29 March 2017';
        this.creditURL = 'https://www.primefaces.org/primeng/#/tree';
        this.credit = 'primeng (4.0.0-rc.2)';
        this.prefixSyntax = '<p-tree';
        this.attrSyntaxList = _ATTRSYNTAX;
        this.suffixSyntax = '></p-tree>';
        this.attributeList = _ATTRIBUTELIST;
        this.attributeTreeNodeList = _ATTRIBUTETREENODELIST;
        this.attributeEventList = _ATTRIBUTEEVENTELIST;
        this.systemjs = _SYSTEMJS;
        this.appModule = _APPMODULE;
        this.styleLine_html = _styleLine_html;
        this.styleLine_css = _styleLine_css;
        this.codeExample1 = _EXAMPLE1;
        this.codeExample2 = _EXAMPLE2;
        this.codeExample3 = _EXAMPLE3;
        this.codeExample4 = _EXAMPLE4;
        this.data1 = _DATA1;
        this.item1 = [
            {
                "label": "Documents",
                "data": "Documents Folder",
                "expandedIcon": "fa-folder-open",
                "collapsedIcon": "fa-folder",
                "children": [{
                        "label": "Work",
                        "data": "Work Folder",
                        "expandedIcon": "fa-folder-open",
                        "collapsedIcon": "fa-folder",
                        "children": [{ "label": "Expenses.doc", "icon": "fa-file-word-o", "data": "Expenses Document" }, { "label": "Resume.doc", "icon": "fa-file-word-o", "data": "Resume Document" }]
                    },
                    {
                        "label": "Home",
                        "data": "Home Folder",
                        "expandedIcon": "fa-folder-open",
                        "collapsedIcon": "fa-folder",
                        "children": [{ "label": "Invoices.txt", "icon": "fa-file-word-o", "data": "Invoices for this month" }]
                    }]
            },
            {
                "label": "Pictures",
                "data": "Pictures Folder",
                "expandedIcon": "fa-folder-open",
                "collapsedIcon": "fa-folder",
                "children": [
                    { "label": "barcelona.jpg", "icon": "fa-file-image-o", "data": "Barcelona Photo" },
                    { "label": "logo.jpg", "icon": "fa-file-image-o", "data": "PrimeFaces Logo" },
                    { "label": "primeui.png", "icon": "fa-file-image-o", "data": "PrimeUI Logo" }
                ]
            },
            {
                "label": "Movies",
                "data": "Movies Folder",
                "expandedIcon": "fa-folder-open",
                "collapsedIcon": "fa-folder",
                "children": [{
                        "label": "Al Pacino",
                        "data": "Pacino Movies",
                        "children": [{ "label": "Scarface", "icon": "fa-file-video-o", "data": "Scarface Movie" }, { "label": "Serpico", "icon": "fa-file-video-o", "data": "Serpico Movie" }]
                    },
                    {
                        "label": "Robert De Niro",
                        "data": "De Niro Movies",
                        "children": [{ "label": "Goodfellas", "icon": "fa-file-video-o", "data": "Goodfellas Movie" }, { "label": "Untouchables", "icon": "fa-file-video-o", "data": "Untouchables Movie" }]
                    }]
            }
        ];
        this.item2 = [
            {
                "label": "Documents",
                "data": "Documents Folder",
                "expandedIcon": "fa-folder-open",
                "collapsedIcon": "fa-folder",
                "children": [{
                        "label": "Work",
                        "data": "Work Folder",
                        "expandedIcon": "fa-folder-open",
                        "collapsedIcon": "fa-folder",
                        "children": [{ "label": "Expenses.doc", "icon": "fa-file-word-o", "data": "Expenses Document" }, { "label": "Resume.doc", "icon": "fa-file-word-o", "data": "Resume Document" }]
                    },
                    {
                        "label": "Home",
                        "data": "Home Folder",
                        "expandedIcon": "fa-folder-open",
                        "collapsedIcon": "fa-folder",
                        "children": [{ "label": "Invoices.txt", "icon": "fa-file-word-o", "data": "Invoices for this month" }]
                    }]
            },
            {
                "label": "Pictures",
                "data": "Pictures Folder",
                "expandedIcon": "fa-folder-open",
                "collapsedIcon": "fa-folder",
                "children": [
                    { "label": "barcelona.jpg", "icon": "fa-file-image-o", "data": "Barcelona Photo" },
                    { "label": "logo.jpg", "icon": "fa-file-image-o", "data": "PrimeFaces Logo" },
                    { "label": "primeui.png", "icon": "fa-file-image-o", "data": "PrimeUI Logo" }
                ]
            },
            {
                "label": "Movies",
                "data": "Movies Folder",
                "expandedIcon": "fa-folder-open",
                "collapsedIcon": "fa-folder",
                "children": [{
                        "label": "Al Pacino",
                        "data": "Pacino Movies",
                        "children": [{ "label": "Scarface", "icon": "fa-file-video-o", "data": "Scarface Movie" }, { "label": "Serpico", "icon": "fa-file-video-o", "data": "Serpico Movie" }]
                    },
                    {
                        "label": "Robert De Niro",
                        "data": "De Niro Movies",
                        "children": [{ "label": "Goodfellas", "icon": "fa-file-video-o", "data": "Goodfellas Movie" }, { "label": "Untouchables", "icon": "fa-file-video-o", "data": "Untouchables Movie" }]
                    }]
            }
        ];
        this.item3 = [
            {
                "label": "Documents",
                "data": "Documents Folder",
                "expandedIcon": "fa-folder-open",
                "collapsedIcon": "fa-folder",
                "children": [{
                        "label": "Work",
                        "data": "Work Folder",
                        "expandedIcon": "fa-folder-open",
                        "collapsedIcon": "fa-folder",
                        "children": [{ "label": "Expenses.doc", "icon": "fa-file-word-o", "data": "Expenses Document" }, { "label": "Resume.doc", "icon": "fa-file-word-o", "data": "Resume Document" }]
                    },
                    {
                        "label": "Home",
                        "data": "Home Folder",
                        "expandedIcon": "fa-folder-open",
                        "collapsedIcon": "fa-folder",
                        "children": [{ "label": "Invoices.txt", "icon": "fa-file-word-o", "data": "Invoices for this month" }]
                    }]
            },
            {
                "label": "Pictures",
                "data": "Pictures Folder",
                "expandedIcon": "fa-folder-open",
                "collapsedIcon": "fa-folder",
                "children": [
                    { "label": "barcelona.jpg", "icon": "fa-file-image-o", "data": "Barcelona Photo" },
                    { "label": "logo.jpg", "icon": "fa-file-image-o", "data": "PrimeFaces Logo" },
                    { "label": "primeui.png", "icon": "fa-file-image-o", "data": "PrimeUI Logo" }
                ]
            },
            {
                "label": "Movies",
                "data": "Movies Folder",
                "expandedIcon": "fa-folder-open",
                "collapsedIcon": "fa-folder",
                "children": [{
                        "label": "Al Pacino",
                        "data": "Pacino Movies",
                        "children": [{ "label": "Scarface", "icon": "fa-file-video-o", "data": "Scarface Movie" }, { "label": "Serpico", "icon": "fa-file-video-o", "data": "Serpico Movie" }]
                    },
                    {
                        "label": "Robert De Niro",
                        "data": "De Niro Movies",
                        "children": [{ "label": "Goodfellas", "icon": "fa-file-video-o", "data": "Goodfellas Movie" }, { "label": "Untouchables", "icon": "fa-file-video-o", "data": "Untouchables Movie" }]
                    }]
            }
        ];
        this.item4 = [
            {
                "label": "Documents",
                "data": "Documents Folder",
                "expandedIcon": "fa-folder-open",
                "collapsedIcon": "fa-folder",
                "children": [{
                        "label": "Work",
                        "data": "Work Folder",
                        "expandedIcon": "fa-folder-open",
                        "collapsedIcon": "fa-folder",
                        "children": [{ "label": "Expenses.doc", "icon": "fa-file-word-o", "data": "Expenses Document" }, { "label": "Resume.doc", "icon": "fa-file-word-o", "data": "Resume Document" }]
                    },
                    {
                        "label": "Home",
                        "data": "Home Folder",
                        "expandedIcon": "fa-folder-open",
                        "collapsedIcon": "fa-folder",
                        "children": [{ "label": "Invoices.txt", "icon": "fa-file-word-o", "data": "Invoices for this month" }]
                    }]
            },
            {
                "label": "Pictures",
                "data": "Pictures Folder",
                "expandedIcon": "fa-folder-open",
                "collapsedIcon": "fa-folder",
                "children": [
                    { "label": "barcelona.jpg", "icon": "fa-file-image-o", "data": "Barcelona Photo" },
                    { "label": "logo.jpg", "icon": "fa-file-image-o", "data": "PrimeFaces Logo" },
                    { "label": "primeui.png", "icon": "fa-file-image-o", "data": "PrimeUI Logo" }
                ]
            },
            {
                "label": "Movies",
                "data": "Movies Folder",
                "expandedIcon": "fa-folder-open",
                "collapsedIcon": "fa-folder",
                "children": [{
                        "label": "Al Pacino",
                        "data": "Pacino Movies",
                        "children": [{ "label": "Scarface", "icon": "fa-file-video-o", "data": "Scarface Movie" }, { "label": "Serpico", "icon": "fa-file-video-o", "data": "Serpico Movie" }]
                    },
                    {
                        "label": "Robert De Niro",
                        "data": "De Niro Movies",
                        "children": [{ "label": "Goodfellas", "icon": "fa-file-video-o", "data": "Goodfellas Movie" }, { "label": "Untouchables", "icon": "fa-file-video-o", "data": "Untouchables Movie" }]
                    }]
            }
        ];
        this.releaseUpdate = _releaseUpdate;
    }
    return TreeDocument;
}());
TreeDocument = __decorate([
    core_1.Component({
        selector: 'doc-tree',
        templateUrl: './tree.document.html'
    })
], TreeDocument);
exports.TreeDocument = TreeDocument;
//# sourceMappingURL=tree.document.js.map