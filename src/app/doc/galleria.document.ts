import { Component, Input } from '@angular/core';

const _ATTRIBUTELIST: Array<any> = [
    { require: '*', name: 'images', type: 'array', description: `ใช้สำหรับระบุ path ในการเข้าถึงรูปภาพ`},
    { require: '', name: 'panelWidth', type: 'number', description: `ใช้สำหรับระบุความกว้างให้กับ panel`},
    { require: '', name: 'panelHeight', type: 'number', description: `ใช้สำหรับระบุความสูงให้กับ panel`},
    { require: '', name: 'frameWidth', type: 'number', description: `ใช้สำหรับระบุความกว้างให้กับ frame`},
    { require: '', name: 'frameHeight', type: 'number', description: `ใช้สำหรับระบุความสูงให้กับ frame`},
    { require: '', name: 'showFilmstrip', type: 'boolean', description: `ใช้ระบุเพื่อต้องการให้แสดง filmstrip`},
    { require: '', name: 'autoPlay', type: 'boolean', description: `ใช้ระบุเพื่อต้องการให้แสดงภาพอัตโนมัติ`},
    { require: '', name: 'transitionInterval', type: 'number', description: `ใช้สำหรับระบุเวลา (milliseconds) ในการเปลี่ยนภาพเมื่ออยู่ในโหมดแสดงรูปภาพอัตโนมัติ`},
    { require: '', name: 'effect', type: 'string', description: `ใช้สำหรับระบุลักษณะ effect ของการเปลี่ยนภาพ เช่น fade`},
    { require: '', name: 'effectDuration', type: 'number', description: `ใช้สำหรับระบุเวลา (milliseconds) ในการแสดง effect`},
    { require: '', name: 'showCaption', type: 'boolean', description: `ใช้ระบุเพื่อต้องการให้แสดงคำอธิบายรูปภาพ`},
];

const _ATTRIBUTEIMAGELIST: Array<any> = [
  { require: '*', name: 'source', type: 'string', description: `ใช้สำหรับระบุ path ของรูปภาพ`},
  { require: '', name: 'alt', type: 'string', description: `ใช้สำหรับระบุคำอธิบายรูปภาพ`},
  { require: '', name: 'title', type: 'string', description: `ใช้สำหรับระบุ title ของรูปภาพ`},
];

const _ATTRSYNTAX: Array<any> = [
  { data: `` },
  { data: `   images = "array_of_image"` },
  { data: `   [panelWidth = "width_of_panel"]`},
  { data: `   [panelHeight = "height_of_panel"]`},
  { data: `   [frameWidth = "width_of_frame"]`},
  { data: `   [frameHeight = "height_of_frame"]`},
  { data: `   [showFilmstrip = "true_or_false"]`},
  { data: `   [autoPlay = "true_or_false"]`},
  { data: `   [transitionInterval = "milliseconds"]`},
  { data: `   [effect = "fade"]`},
  { data: `   [effectDuration = "milliseconds"]`},
  { data: `   [showCaption = "true_or_false"]`}
];

const _SYSTEMJS: Array<any> = [
    { data: `map: {`},
    { data: `     'primeng': 'npm:primeng',`},
    { data: `  },`},
    { data: ``},
    { data: `packages: {`},
    { data: ` 'primeng': {`},
    { data: `   main: './primeng.js',`},
    { data: `   defaultExtension: 'js'`},
    { data: ` }`},
    { data: `}`}
]

const _APPMODULE: Array<any> = [
  { data: ` import { GalleriaModule } from 'primeng'; ` },
  { data: `@NgModule({ 
   imports: [  
           .................. 
           GalleriaModule
           .................. 
   ] 
  }) `}
]

const _EXAMPLE1: Array<any> = [
  { data: `app.component.ts` },
  { data: `
private images = [
  { source:'./image/galleria1.jpg', alt:'Description for Image 1', title:'Title 1' },
  { source:'./image/galleria2.jpg', alt:'Description for Image 2', title:'Title 2' },
  { source:'./image/galleria3.jpg', alt:'Description for Image 3', title:'Title 3' },
  { source:'./image/galleria4.jpg', alt:'Description for Image 4', title:'Title 4' },
  { source:'./image/galleria5.jpg', alt:'Description for Image 5', title:'Title 5' },
  { source:'./image/galleria6.jpg', alt:'Description for Image 6', title:'Title 6' },
  { source:'./image/galleria7.jpg', alt:'Description for Image 7', title:'Title 7' },
  { source:'./image/galleria8.jpg', alt:'Description for Image 8', title:'Title 8' },
  { source:'./image/galleria9.jpg', alt:'Description for Image 9', title:'Title 9' },
  { source:'./image/galleria10.jpg', alt:'Description for Image 10', title:'Title 10' },
  { source:'./image/galleria11.jpg', alt:'Description for Image 11', title:'Title 11' },
  { source:'./image/galleria12.jpg', alt:'Description for Image 12', title:'Title 12' }
];
    ` },
    { data: `app.component.html` },
    { data: `` },
    { data: `<p-galleria [images]="images" [autoPlay]="true" panelWidth="400" panelHeight="313"  ></p-galleria>` },
]
const _EXAMPLE2: Array<any> = [
  { data: `` },
]
const _EXAMPLE3: Array<any> = [
  { data: `` },
]

const _EXAMPLE4: Array<any> = [
  { data: `` },
]

const _IMAGE = [
  { source:'./image/galleria1.jpg', alt:'Description for Image 1'},
  { source:'./image/galleria2.jpg', alt:'Description for Image 2' },
  { source:'./image/galleria3.jpg', alt:'Description for Image 3' },
  { source:'./image/galleria4.jpg', alt:'Description for Image 4' },
  { source:'./image/galleria5.jpg', alt:'Description for Image 5' },
  { source:'./image/galleria6.jpg', alt:'Description for Image 6' },
  { source:'./image/galleria7.jpg', alt:'Description for Image 7'},
  { source:'./image/galleria8.jpg', alt:'Description for Image 8'},
  { source:'./image/galleria9.jpg', alt:'Description for Image 9'},
  { source:'./image/galleria10.jpg', alt:'Description for Image 10' },
  { source:'./image/galleria11.jpg', alt:'Description for Image 11' },
  { source:'./image/galleria12.jpg', alt:'Description for Image 12' }
];

const _styleLine_html: Array<any> = [
'<link rel="stylesheet" type="text/css" href="http://10.182.247.173/gos-cdn/node_modules/2.4.0/primeng/resources/themes/bootstrap/theme.css" />',
'<link rel="stylesheet" type="text/css" href="http://10.182.247.173/gos-cdn/node_modules/2.4.0/primeng/resources/primeng.min.css" />'
];

const _styleLine_css: Array<any> = [
  `@import url('http://10.182.247.173/gos-cdn/node_modules/2.4.0/primeng/resources/themes/bootstrap/theme.css');`,
  `@import url('http://10.182.247.173/gos-cdn/node_modules/2.4.0/primeng/resources/primeng.min.css');`
];

@Component({
    selector: 'doc-galleria',
    templateUrl: './galleria.document.html'
})
export class GalleriaDocument  { 
    private componentTag: string = 'Galleria'
    private version: string = '1.0'; 
    private componentDescription: string = `Galleria เป็นเครื่องมือช่วยแสดงรูปภาพ`
    private releaseDate: string = '29 March 2017';
    private creditURL: string = 'https://www.primefaces.org/primeng/#/galleria';
    private credit: string = 'primeng (2.0.5)';   

    private prefixSyntax: string = '<p-galleria';
    private attrSyntaxList: Array<any> = _ATTRSYNTAX;
    private suffixSyntax: string = '></p-galleria>';
    private attributeList = _ATTRIBUTELIST;
    private attributeImageList = _ATTRIBUTEIMAGELIST;
    private systemjs = _SYSTEMJS;
    private appModule = _APPMODULE;
    private styleLine_html = _styleLine_html;
    private styleLine_css = _styleLine_css;

    private codeExample1 = _EXAMPLE1;
    private codeExample2 = _EXAMPLE2;
    private codeExample3 = _EXAMPLE3;
    private codeExample4 = _EXAMPLE4;

    private images = _IMAGE;
  
}