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
    { require: '*', name: 'images', type: 'array', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 path \u0E43\u0E19\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E16\u0E36\u0E07\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E" },
    { require: '', name: 'panelWidth', type: 'number', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E04\u0E27\u0E32\u0E21\u0E01\u0E27\u0E49\u0E32\u0E07\u0E43\u0E2B\u0E49\u0E01\u0E31\u0E1A panel" },
    { require: '', name: 'panelHeight', type: 'number', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E39\u0E07\u0E43\u0E2B\u0E49\u0E01\u0E31\u0E1A panel" },
    { require: '', name: 'frameWidth', type: 'number', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E04\u0E27\u0E32\u0E21\u0E01\u0E27\u0E49\u0E32\u0E07\u0E43\u0E2B\u0E49\u0E01\u0E31\u0E1A frame" },
    { require: '', name: 'frameHeight', type: 'number', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E39\u0E07\u0E43\u0E2B\u0E49\u0E01\u0E31\u0E1A frame" },
    { require: '', name: 'showFilmstrip', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E43\u0E2B\u0E49\u0E41\u0E2A\u0E14\u0E07 filmstrip" },
    { require: '', name: 'autoPlay', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E43\u0E2B\u0E49\u0E41\u0E2A\u0E14\u0E07\u0E20\u0E32\u0E1E\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34" },
    { require: '', name: 'transitionInterval', type: 'number', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E27\u0E25\u0E32 (milliseconds) \u0E43\u0E19\u0E01\u0E32\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E20\u0E32\u0E1E\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E42\u0E2B\u0E21\u0E14\u0E41\u0E2A\u0E14\u0E07\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34" },
    { require: '', name: 'effect', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E25\u0E31\u0E01\u0E29\u0E13\u0E30 effect \u0E02\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E20\u0E32\u0E1E \u0E40\u0E0A\u0E48\u0E19 fade" },
    { require: '', name: 'effectDuration', type: 'number', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E27\u0E25\u0E32 (milliseconds) \u0E43\u0E19\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07 effect" },
    { require: '', name: 'showCaption', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E38\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E43\u0E2B\u0E49\u0E41\u0E2A\u0E14\u0E07\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E" },
];
var _ATTRIBUTEIMAGELIST = [
    { require: '*', name: 'source', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 path \u0E02\u0E2D\u0E07\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E" },
    { require: '', name: 'alt', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E" },
    { require: '', name: 'title', type: 'string', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38 title \u0E02\u0E2D\u0E07\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E" },
];
var _ATTRSYNTAX = [
    { data: "" },
    { data: "   images = \"array_of_image\"" },
    { data: "   [panelWidth = \"width_of_panel\"]" },
    { data: "   [panelHeight = \"height_of_panel\"]" },
    { data: "   [frameWidth = \"width_of_frame\"]" },
    { data: "   [frameHeight = \"height_of_frame\"]" },
    { data: "   [showFilmstrip = \"true_or_false\"]" },
    { data: "   [autoPlay = \"true_or_false\"]" },
    { data: "   [transitionInterval = \"milliseconds\"]" },
    { data: "   [effect = \"fade\"]" },
    { data: "   [effectDuration = \"milliseconds\"]" },
    { data: "   [showCaption = \"true_or_false\"]" }
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
    { data: " import { GalleriaModule } from 'primeng'; " },
    { data: "@NgModule({ \n   imports: [  \n           .................. \n           GalleriaModule\n           .................. \n   ] \n  }) " }
];
var _EXAMPLE1 = [
    { data: "app.component.ts" },
    { data: "\nprivate images = [\n  { source:'./image/galleria1.jpg', alt:'Description for Image 1', title:'Title 1' },\n  { source:'./image/galleria2.jpg', alt:'Description for Image 2', title:'Title 2' },\n  { source:'./image/galleria3.jpg', alt:'Description for Image 3', title:'Title 3' },\n  { source:'./image/galleria4.jpg', alt:'Description for Image 4', title:'Title 4' },\n  { source:'./image/galleria5.jpg', alt:'Description for Image 5', title:'Title 5' },\n  { source:'./image/galleria6.jpg', alt:'Description for Image 6', title:'Title 6' },\n  { source:'./image/galleria7.jpg', alt:'Description for Image 7', title:'Title 7' },\n  { source:'./image/galleria8.jpg', alt:'Description for Image 8', title:'Title 8' },\n  { source:'./image/galleria9.jpg', alt:'Description for Image 9', title:'Title 9' },\n  { source:'./image/galleria10.jpg', alt:'Description for Image 10', title:'Title 10' },\n  { source:'./image/galleria11.jpg', alt:'Description for Image 11', title:'Title 11' },\n  { source:'./image/galleria12.jpg', alt:'Description for Image 12', title:'Title 12' }\n];\n    " },
    { data: "app.component.html" },
    { data: "" },
    { data: "<p-galleria id='galleria_basic' [images]=\"images\" [autoPlay]=\"true\" panelWidth=\"400\" panelHeight=\"313\"  ></p-galleria>" },
];
var _EXAMPLE2 = [
    { data: "" },
    { data: " <p-galleria id='galleria_effect' [images]=\"images\" [autoPlay]=\"true\" panelWidth=\"400\" panelHeight=\"313\"  transitionInterval=\"2000\" effect=\"explode\" effectDuration=\"500\" showCaption=\"true\"></p-galleria>" },
];
var _EXAMPLE3 = [
    { data: "" },
];
var _EXAMPLE4 = [
    { data: "" },
];
var _IMAGE = [
    { source: './image/galleria/galleria1.jpg', alt: 'Description for Image 1' },
    { source: './image/galleria/galleria2.jpg', alt: 'Description for Image 2' },
    { source: './image/galleria/galleria3.jpg', alt: 'Description for Image 3' },
    { source: './image/galleria/galleria4.jpg', alt: 'Description for Image 4' },
    { source: './image/galleria/galleria5.jpg', alt: 'Description for Image 5' },
    { source: './image/galleria/galleria6.jpg', alt: 'Description for Image 6' },
    { source: './image/galleria/galleria7.jpg', alt: 'Description for Image 7' },
    { source: './image/galleria/galleria8.jpg', alt: 'Description for Image 8' },
    { source: './image/galleria/galleria9.jpg', alt: 'Description for Image 9' },
    { source: './image/galleria/galleria10.jpg', alt: 'Description for Image 10' },
    { source: './image/galleria/galleria11.jpg', alt: 'Description for Image 11' },
    { source: './image/galleria/galleria12.jpg', alt: 'Description for Image 12' }
];
var _styleLine_html = [
    '<link rel="stylesheet" type="text/css" href="http://10.182.247.173/gos-cdn/node_modules/2.4.0/primeng/resources/themes/bootstrap/theme.css" />',
    '<link rel="stylesheet" type="text/css" href="http://10.182.247.173/gos-cdn/node_modules/2.4.0/primeng/resources/primeng.min.css" />'
];
var _styleLine_css = [
    "@import url('http://10.182.247.173/gos-cdn/node_modules/2.4.0/primeng/resources/themes/bootstrap/theme.css');",
    "@import url('http://10.182.247.173/gos-cdn/node_modules/2.4.0/primeng/resources/primeng.min.css');"
];
var GalleriaDocument = (function () {
    function GalleriaDocument() {
        this.componentTag = 'Galleria';
        this.version = '1.0';
        this.componentDescription = "Galleria \u0E40\u0E1B\u0E47\u0E19\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D\u0E0A\u0E48\u0E27\u0E22\u0E41\u0E2A\u0E14\u0E07\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E";
        this.releaseDate = '29 March 2017';
        this.creditURL = 'https://www.primefaces.org/primeng/#/galleria';
        this.credit = 'primeng (2.0.5)';
        this.prefixSyntax = '<p-galleria';
        this.attrSyntaxList = _ATTRSYNTAX;
        this.suffixSyntax = '></p-galleria>';
        this.attributeList = _ATTRIBUTELIST;
        this.attributeImageList = _ATTRIBUTEIMAGELIST;
        this.systemjs = _SYSTEMJS;
        this.appModule = _APPMODULE;
        this.styleLine_html = _styleLine_html;
        this.styleLine_css = _styleLine_css;
        this.codeExample1 = _EXAMPLE1;
        this.codeExample2 = _EXAMPLE2;
        this.codeExample3 = _EXAMPLE3;
        this.codeExample4 = _EXAMPLE4;
        this.images = _IMAGE;
    }
    return GalleriaDocument;
}());
GalleriaDocument = __decorate([
    core_1.Component({
        selector: 'doc-galleria',
        templateUrl: './galleria.document.html'
    })
], GalleriaDocument);
exports.GalleriaDocument = GalleriaDocument;
//# sourceMappingURL=galleria.document.js.map