import { Component, Input } from '@angular/core';

const _ATTRIBUTELIST: Array<any> = [
    { require: '', name: 'header', type: 'string', description: `ใช้สำหรับระบุ title ของ panel`},
    { require: '', name: 'toggleable', type: 'boolean', description: `ใช้ระบุเพื่อกำหนดให้ panel สามารถ expanded หรือ collapsed ได้`},
    { require: '', name: 'collapsed', type: 'boolean', description: `ใช้ระบุเพื่อกำหนดให้ค่าเริ่มต้นของ panel นั้น collapsed หรือไม่`},
    { require: '', name: 'style', type: 'string', description: `ใช้สำหรับระบุ style แบบ inline`},
    { require: '', name: 'styleClass', type: 'string', description: `ใช้สำหรับระบุ style class`}
];

const _EVENTLIST: Array<any> = [
    { require: '', name: 'onBeforeToggle', type: 'function($event)', description: `จะส่ง event ให้ก่อนที่ Content จะ toggle`},
    { require: '', name: 'onAfterToggle', type: 'function($event)', description: `จะส่ง event ให้หลังจากที่ Content ถูก toggle`},
];

const _ATTRSYNTAX: Array<any> = [
  { data: `` },
  { data: `     [header = "title"]` },
  { data: `     [toggleable = "true_or_false"]` },
  { data: `     [collapsed = "true_or_false"]` },
  { data: `     [style = "style_inline"]` },
  { data: `     [styleClass = "style_class"]` }
];

const _EXAMPLE1: Array<any> = [

  { data: `<p-panel id='panel_basic' header="Title" [toggleable] = "true" [collapsed]="true" (onBeforeToggle)="beforeCollapsed()">{{Content}}</p-panel>` },
]
const _EXAMPLE2: Array<any> = [

  { data: `<p-panel header="Title" [toggleable] = "true" [collapsed]="true" (onBeforeToggle)="beforeCollapsed()">{{Content}}</p-panel>` },

  { data: `` },
  { data: `component.ts` },
  { data: `collapsed : boolean = true;` },
  { data: `beforeCollapsed(){` },
  { data: ` this.collapsed = !this.collapsed;` },
  { data: `}` },
];

@Component({
    selector: 'doc-panel',
    templateUrl: './panel.document.html'
})
export class PanelDocument  { 
    private componentTag: string = 'Panel'
    private version: string = '1.0'; 
    private componentDescription: string = `Panel เป็นเครื่องมือในการจัดองค์ประกอบข้อมูลเนื้อหาต่าง ๆ เข้าด้วยกัน โดยสามารถ toggle ได้`
    private releaseDate: string = '29 March 2017';
    private creditURL: string = 'https://www.primefaces.org/primeng/#/panel';
    private credit: string = 'primeng (2.0.5)';   

    private prefixSyntax: string = '<p-panel';
    private attrSyntaxList: Array<any> = _ATTRSYNTAX;
    private suffixSyntax: string = '> Content </p-panel>';
    private attributeList = _ATTRIBUTELIST;
    private eventList = _EVENTLIST;
    private codeExample1 = _EXAMPLE1;
    
    content : string = "Panel Text Here";

    collapsed : boolean = true;
    beforeCollapsed(){
      this.collapsed = !this.collapsed;
    }
    
}