"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var COMP_VERSION = '1.0.0';
var CDN_URL = 'http://10.182.247.73/gos-cdn/';
var ATTRIBUTELIST = [
    { require: '*', name: 'images', type: 'object', description: "\u0E2D\u0E47\u0E2D\u0E1A\u0E40\u0E08\u0E04\u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E43\u0E19\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E16\u0E36\u0E07\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E" },
    { require: '', name: 'showImage', type: 'number', description: "\u0E08\u0E33\u0E19\u0E27\u0E19\u0E23\u0E39\u0E1B\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E43\u0E2B\u0E49\u0E41\u0E2A\u0E14\u0E07\u0E43\u0E19\u0E2D\u0E31\u0E25\u0E1A\u0E31\u0E49\u0E21" }
];
var SYSTEMJSLINE = [
    "map: {",
    " 'go-image-gallery': 'go:image-gallery/" + COMP_VERSION + "',",
    "},",
    "",
    "packages: {",
    " 'go-image-gallery': {",
    "    main: './image-gallery.module.js',",
    "    defaultExtension: 'js'",
    "  },",
    "}",
];
var APPMODULELINE = [
    "import { ImageGalleryModule } from 'go-image-gallery';",
    "",
    "@NgModule({",
    " imports: [",
    " ..........",
    " ImageGalleryModule,",
    " ..........",
    "],",
    "})"
];
var OBJECTLINE = [
    "name_of_gallery = [",
    "   { thumb: 'path/img1.jpg', img: 'path/img1.jpg' },",
    "   { thumb: 'path/img2.jpg', img: 'path/img2.jpg' },",
    "   { thumb: 'path/img3.jpg', img: 'path/img3.jpg' },",
    "   { thumb: 'path/img4.jpg', img: 'path/img4.jpg' },",
    "   { thumb: 'path/img5.jpg', img: 'path/img5.jpg' },",
    "];"
];
var STYLELINE_HTML = [
    "<link href=\"" + CDN_URL + "image-gallery/" + COMP_VERSION + "/angular2-image-popup/directives/angular2-image-popup/css/style.css\" rel=\"stylesheet\" type=\"text/css\">",
    "<link href=\"" + CDN_URL + "font-awesome/4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\" type=\"text/css\">"
];
var STYLELINE_CSS = [
    "@import url('" + CDN_URL + "node_modules/2.4.0/angular2-image-popup/directives/angular2-image-popup/css/style.css');",
    "@import url('" + CDN_URL + "font-awesome/4.7.0/css/font-awesome.min.css');"
];
var ImageGalleryDocument = (function () {
    function ImageGalleryDocument() {
        this.version = COMP_VERSION;
        this.componentTag = '<go-image-gallery>';
        this.componentDescription = "Image gallery \u0E40\u0E1B\u0E47\u0E19\u0E01\u0E32\u0E23\u0E23\u0E27\u0E1A\u0E23\u0E27\u0E21\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E\u0E43\u0E2B\u0E49\u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E2D\u0E31\u0E25\u0E1A\u0E31\u0E49\u0E21";
        this.releaseDate = '7/12/2016';
        this.credit = 'angular2-image-popup (v. 1.1.2)';
        this.creditUrl = 'https://www.npmjs.com/package/angular2-image-popup';
        this.prefixSyntax = "<go-image-gallery ";
        this.attrSyntax = "[images]=name_of_gallery [showImage=number]";
        this.suffixSyntax = "></go-image-gallery>";
        this.attributeList = ATTRIBUTELIST;
        this.systemjsLine = SYSTEMJSLINE;
        this.appModuleLine = APPMODULELINE;
        this.objectLine = OBJECTLINE;
        this.styleLine_html = STYLELINE_HTML;
        this.styleLine_css = STYLELINE_CSS;
        this.objectDetail = "\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A object \u0E14\u0E31\u0E07\u0E19\u0E35\u0E49 \u0E42\u0E14\u0E22 thumb => \u0E23\u0E39\u0E1B\u0E40\u0E25\u0E47\u0E01\u0E17\u0E35\u0E48\u0E41\u0E2A\u0E14\u0E07\u0E43\u0E19\u0E2D\u0E31\u0E25\u0E1A\u0E31\u0E49\u0E21\u0E23\u0E27\u0E21, img => \u0E23\u0E39\u0E1B\u0E43\u0E2B\u0E0D\u0E48\u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E43\u0E19\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07";
        this.imgUrl = './image/gallery/';
        this.ImgGallery = [
            { thumb: this.imgUrl + 'thumbs/img1.jpg', img: this.imgUrl + 'img1.jpg' },
            { thumb: this.imgUrl + 'thumbs/img2.jpg', img: this.imgUrl + 'img2.jpg' },
            { thumb: this.imgUrl + 'thumbs/img3.jpg', img: this.imgUrl + 'img3.jpg' },
            { thumb: this.imgUrl + 'thumbs/img4.jpg', img: this.imgUrl + 'img4.jpg' },
            { thumb: this.imgUrl + 'thumbs/img5.jpg', img: this.imgUrl + 'img5.jpg' }
        ];
    }
    return ImageGalleryDocument;
}());
ImageGalleryDocument = __decorate([
    core_1.Component({
        selector: 'image-gallery-document',
        templateUrl: './image-gallery.document.html'
    }),
    __metadata("design:paramtypes", [])
], ImageGalleryDocument);
exports.ImageGalleryDocument = ImageGalleryDocument;
//# sourceMappingURL=image-gallery.document.js.map