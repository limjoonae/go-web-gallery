import { Component, Input } from '@angular/core';

const _ATTRIBUTELIST: Array<any> = [
    { require: '', name: 'multiple', type: 'boolean', description: `ใช้ระบุเพื่อกำหนดให้แท็บสามารถเปิดได้พร้อมกันหลายแท็บ`},
    { require: '', name: 'lazy', type: 'boolean', description: `ใช้ระบุเพื่อกำหนดให้โหลดข้อมูลแบบ lazy`},
    { require: '', name: 'style', type: 'string', description: `ใช้สำหรับระบุ style แบบ inline`},
    { require: '', name: 'styleClass', type: 'string', description: `ใช้สำหรับระบุ style class`}
];

const _ATTRIBUTEACCORDIONTABLIST: Array<any> = [
    { require: '', name: 'header', type: 'string', description: `ใช้สำหรับระบุ title ของ tab`},
    { require: '', name: 'selected', type: 'boolean', description: `ใช้สำหรับระบุเพื่อเลือก tab ที่ต้องการ`},
    { require: '', name: 'disabled', type: 'boolean', description: `ใช้สำหรับระบุเพื่อ disabled tab ที่ต้องการ`},
  
];
const _EVENTLIST: Array<any> = [
    { require: '', name: 'onClose', type: 'function($event)', description: `จะส่ง event ให้เมื่อแท็บ collapsed`},
    { require: '', name: 'onOpen', type: 'function($event)', description: `จะส่ง event ให้เมื่อแท็บ expanded`},
];

const _ATTRSYNTAX: Array<any> = [
  { data: `` },
  { data: `     [multiple = "true_or_false"]` },
  { data: `     [lazy = "true_or_false"]` },
  { data: `     [style = "style_inline"]` },
  { data: `     [styleClass = "style_class"]` },
  { data: `>` },
  { data: ` <p-accordionTab ` },
  { data: `     [header = "title"]` },
  { data: `     [selected = "true_or_false"]` },
  { data: `     [disabled = "true_or_false"]` },
  { data: ` </p-accordionTab>` },
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
  { data: `import { AccordionModule } from 'primeng';` },
  { data: `@NgModule({ 
   imports: [  
           .................. 
           AccordionModule
           .................. 
   ] 
  }) `}
]

const _styleLine_html: Array<any> = [
'<link rel="stylesheet" type="text/css" href="http://10.182.247.173/gos-cdn/node_modules/2.4.0/primeng/resources/themes/bootstrap/theme.css" />',
'<link rel="stylesheet" type="text/css" href="http://10.182.247.173/gos-cdn/node_modules/2.4.0/primeng/resources/primeng.min.css" />'
];

const _styleLine_css: Array<any> = [
  `@import url('http://10.182.247.173/gos-cdn/node_modules/2.4.0/primeng/resources/themes/bootstrap/theme.css');`,
  `@import url('http://10.182.247.173/gos-cdn/node_modules/2.4.0/primeng/resources/primeng.min.css');`
];

const _EXAMPLE1: Array<any> = [
  { data: `
<p-accordion>
  <p-accordionTab header="Header 1">
    Content 1
  </p-accordionTab>
  <p-accordionTab header="Header 2">
    Content 2
  </p-accordionTab>
  <p-accordionTab header="Header 3">
    Content 3    
  </p-accordionTab>
</p-accordion>
` },
]
const _EXAMPLE2: Array<any> = [
  { data: `
<p-accordion [multiple]="true">
  <p-accordionTab header="Header 1">
    Content 1
  </p-accordionTab>
  <p-accordionTab header="Header 2">
    Content 2
  </p-accordionTab>
  <p-accordionTab header="Header 3">
    Content 3    
  </p-accordionTab>
</p-accordion>
    ` },
]
const _EXAMPLE3: Array<any> = [
  { data: `
<p-accordion>
  <p-accordionTab header="Header 1" [disabled]="true">
    Content 1
  </p-accordionTab>
  <p-accordionTab header="Header 2">
    Content 2
  </p-accordionTab>
  <p-accordionTab header="Header 3">
    Content 3    
  </p-accordionTab>
</p-accordion>
    ` },
]
const _EXAMPLE4: Array<any> = [
  { data: `` },
]


@Component({
    selector: 'doc-accordion',
    templateUrl: './accordion.document.html'
})
export class AccordionDocument  { 
    private componentTag: string = 'Accordion'
    private version: string = '1.0'; 
    private componentDescription: string = `Accordion เป็นเครื่องมือในการจัดองค์ประกอบข้อมูลเนื้อหาต่าง ๆ ใน tab`
    private releaseDate: string = '29 March 2017';
    private creditURL: string = 'https://www.primefaces.org/primeng/#/accordion';
    private credit: string = 'primeng (2.0.5)';   

    private prefixSyntax: string = '<p-accordion';
    private attrSyntaxList: Array<any> = _ATTRSYNTAX;
    private suffixSyntax: string = '</p-accordion>';
    private attributeList = _ATTRIBUTELIST;
    private attributeAccordTabList = _ATTRIBUTEACCORDIONTABLIST;
    private eventList = _EVENTLIST;
    private systemjs = _SYSTEMJS;
    private appModule = _APPMODULE;
    private styleLine_html = _styleLine_html;
    private styleLine_css = _styleLine_css;

    private codeExample1 = _EXAMPLE1;
    private codeExample2 = _EXAMPLE2;
    private codeExample3 = _EXAMPLE3;
    private codeExample4 = _EXAMPLE4;
    


}