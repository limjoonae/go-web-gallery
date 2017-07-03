import { Component, Input } from '@angular/core';

const COMP_VERSION: string = '1.0.0';
const CDN_URL: string = 'http://10.182.247.73/gos-cdn/';
const ATTRIBUTELIST: Array<any> = [
    { require: '*', name: 'images', type: 'object', description: `อ็อบเจคที่ใช้ในการเข้าถึงรูปภาพ`},
    { require: '', name: 'showImage', type: 'number', description: `จำนวนรูปที่ต้องการให้แสดงในอัลบั้ม`}
];

const SYSTEMJSLINE: Array<any> = [
    `map: {`,
    ` 'go-image-gallery': 'go:image-gallery/`+ COMP_VERSION +`',`,
    `},`,
    ``,
    `packages: {`, 
    ` 'go-image-gallery': {`,
    `    main: './image-gallery.module.js',`,
    `    defaultExtension: 'js'`,
    `  },`,   
    `}`,   
    
];

const APPMODULELINE: Array<any> = [ 
    `import { ImageGalleryModule } from 'go-image-gallery';`, 
    ``, 
    `@NgModule({`, 
    ` imports: [`, 
    ` ..........`, 
    ` ImageGalleryModule,`, 
    ` ..........`,
    `],`, 
    `})`
];

const OBJECTLINE: Array<any> = [
    `name_of_gallery = [`, 
    `   { thumb: 'path/img1.jpg', img: 'path/img1.jpg' },`, 
    `   { thumb: 'path/img2.jpg', img: 'path/img2.jpg' },`, 
    `   { thumb: 'path/img3.jpg', img: 'path/img3.jpg' },`, 
    `   { thumb: 'path/img4.jpg', img: 'path/img4.jpg' },`, 
    `   { thumb: 'path/img5.jpg', img: 'path/img5.jpg' },`, 
    `];`
];


const STYLELINE_HTML: Array<any> = [
    `<link href="` + CDN_URL + `image-gallery/`+ COMP_VERSION +`/angular2-image-popup/directives/angular2-image-popup/css/style.css" rel="stylesheet" type="text/css">`,
    `<link href="` + CDN_URL + `font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">` 
];

const STYLELINE_CSS: Array<any> = [
    `@import url('`+ CDN_URL +`node_modules/2.4.0/angular2-image-popup/directives/angular2-image-popup/css/style.css');`,
    `@import url('`+ CDN_URL +`font-awesome/4.7.0/css/font-awesome.min.css');` 
];

@Component({
    selector: 'image-gallery-document',
    templateUrl: './image-gallery.document.html'
})
export class ImageGalleryDocument {

    private version = COMP_VERSION;
    private componentTag: string = '<go-image-gallery>';
    private componentDescription: string = `Image gallery เป็นการรวบรวมรูปภาพให้อยู่ในอัลบั้ม`;
    private releaseDate: string = '7/12/2016';
    private credit: string = 'angular2-image-popup (v. 1.1.2)';
    private creditUrl: string = 'https://www.npmjs.com/package/angular2-image-popup';
    private prefixSyntax: string = `<go-image-gallery `;
    private attrSyntax: string = `[images]=name_of_gallery [showImage=number]`;
    private suffixSyntax: string = `></go-image-gallery>`;
    private attributeList = ATTRIBUTELIST;
    private systemjsLine = SYSTEMJSLINE;
    private appModuleLine = APPMODULELINE; 
    private objectLine = OBJECTLINE;
    private styleLine_html = STYLELINE_HTML;
    private styleLine_css = STYLELINE_CSS;
    private objectDetail: string = `กำหนดรูปแบบ object ดังนี้ โดย thumb => รูปเล็กที่แสดงในอัลบั้มรวม, img => รูปใหญ่ที่ใช้ในการแสดง`;
    private imgUrl = './image/gallery/';

    ImgGallery = [
    { thumb: this.imgUrl + 'thumbs/img1.jpg', img: this.imgUrl + 'img1.jpg' },
    { thumb: this.imgUrl + 'thumbs/img2.jpg', img: this.imgUrl + 'img2.jpg' },
    { thumb: this.imgUrl + 'thumbs/img3.jpg', img: this.imgUrl + 'img3.jpg' },
    { thumb: this.imgUrl + 'thumbs/img4.jpg', img: this.imgUrl + 'img4.jpg' },
    { thumb: this.imgUrl + 'thumbs/img5.jpg', img: this.imgUrl + 'img5.jpg' }
    ];

    constructor() {
       
    }
}