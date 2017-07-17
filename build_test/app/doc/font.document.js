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
var core_1 = require("@angular/core");
var TYPEFACELIST = [
    'Athiti', 'Kanit', 'Maitree', 'Taviraj', 'Trirong'
];
var TYPEFACEMINILIST = [
    '', 'Kanit', '', 'Taviraj', 'Trirong'
];
var TABLELIST = [
    { TypeFace: TYPEFACELIST, fontFamily: 'Regular' },
    { TypeFace: TYPEFACELIST, fontFamily: 'Bold' },
    { TypeFace: TYPEFACEMINILIST, fontFamily: 'BoldItalic' },
    { TypeFace: TYPEFACEMINILIST, fontFamily: 'Italic' },
    { TypeFace: TYPEFACEMINILIST, fontFamily: 'Black' },
    { TypeFace: TYPEFACEMINILIST, fontFamily: 'BlackItalic' },
    { TypeFace: TYPEFACEMINILIST, fontFamily: 'ExtraBold' },
    { TypeFace: TYPEFACEMINILIST, fontFamily: 'ExtraBoldItalic' },
    { TypeFace: TYPEFACELIST, fontFamily: 'ExtraLight' },
    { TypeFace: TYPEFACEMINILIST, fontFamily: 'ExtraLightItalic' },
    { TypeFace: TYPEFACELIST, fontFamily: 'Light' },
    { TypeFace: TYPEFACEMINILIST, fontFamily: 'LightItalic' },
    { TypeFace: TYPEFACELIST, fontFamily: 'Medium' },
    { TypeFace: TYPEFACEMINILIST, fontFamily: 'MediumItalic' },
    { TypeFace: TYPEFACELIST, fontFamily: 'SemiBold' },
    { TypeFace: TYPEFACEMINILIST, fontFamily: 'SemiBoldItalic' },
    { TypeFace: TYPEFACEMINILIST, fontFamily: 'Thin' },
    { TypeFace: TYPEFACEMINILIST, fontFamily: 'ThinItalic' },
];
var FontDocument = (function () {
    function FontDocument() {
        this.componentDescription = "Font \u0E04\u0E37\u0E2D\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23 \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E19\u0E33\u0E44\u0E1B\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E41\u0E1A\u0E1A\u0E2D\u0E31\u0E01\u0E29\u0E23\u0E1A\u0E19 website \u0E44\u0E14\u0E49 \u0E40\u0E1E\u0E35\u0E22\u0E07\u0E41\u0E04\u0E48\u0E40\u0E23\u0E35\u0E22\u0E01\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19 css \u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19\n  \u0E0A\u0E48\u0E27\u0E22\u0E43\u0E2B\u0E49\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E41\u0E2A\u0E14\u0E07 font \u0E44\u0E14\u0E49\u0E44\u0E21\u0E48\u0E27\u0E48\u0E32\u0E08\u0E30\u0E40\u0E1B\u0E34\u0E14\u0E1A\u0E19\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E43\u0E14\u0E01\u0E47\u0E15\u0E32\u0E21 \u0E41\u0E25\u0E30\u0E25\u0E14\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E43\u0E19\u0E17\u0E35\u0E48\u0E43\u0E19\u0E01\u0E32\u0E23\u0E40\u0E01\u0E47\u0E1A\u0E44\u0E1F\u0E25\u0E4C font \u0E1A\u0E19\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E02\u0E2D\u0E07 developer \u0E2D\u0E35\u0E01\u0E14\u0E49\u0E27\u0E22\n    ";
        this.cdn_url = '{_cdnPath_}';
        this.version = '1.0.0';
        this.releaseDate = '28/12/2016';
        this.credit = 'Google Font';
        this.creditUrl = 'https://fonts.google.com/?subset=thai';
        this.prefixSyntax = "font-family: ";
        this.attrSyntax = "'{typeface}-{style}'";
        this.suffixSyntax = ";";
        this.tableList = TABLELIST;
        this.gettingStartDetail = 'การใช้งานต้องทำการ import font.css ของ font แต่ละแบบเข้ามา โดยสามารถทำได้ 2 วิธีดังนี้';
        this.htmlImport = "<link rel=\"stylesheet\" type=\"text/css\" href=\"" + this.cdn_url + "/fonts/" + this.version + "/{TypeFace}/font.css\"/>";
        this.cssImport = "@import url('" + this.cdn_url + "/fonts/" + this.version + "/{TypeFace}/font.css');";
    }
    FontDocument.prototype.ngOnInit = function () {
    };
    return FontDocument;
}());
FontDocument = __decorate([
    core_1.Component({
        selector: 'font-document',
        templateUrl: './font.document.html',
        styleUrls: ['./font.document.css']
    }),
    __metadata("design:paramtypes", [])
], FontDocument);
exports.FontDocument = FontDocument;
//# sourceMappingURL=font.document.js.map