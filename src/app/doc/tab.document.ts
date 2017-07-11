import { Component, Input } from '@angular/core';

const _ATTRIBUTELIST: Array<any> = [
    { require: '', name: 'orientation', type: 'string', description: `ใช้สำหรับระบุตำแหน่งของ tab มาสามารถระบุได้ดังนี้ "top", "bottom", "left", "right"`},
    { require: '', name: 'style', type: 'string', description: `ใช้สำหรับระบุ style แบบ inline`},
    { require: '', name: 'styleClass', type: 'string', description: `ใช้สำหรับระบุ style class`}
];

const _ATTRIBUTETABPANELLIST: Array<any> = [
    { require: '', name: 'header', type: 'string', description: `ใช้สำหรับระบุ header ของ tab`},
    { require: '', name: 'selected', type: 'boolean', description: `ระบุเพื่อกำหนดให้ tab ที่ต้องการ active`},
    { require: '', name: 'disabled', type: 'boolean', description: `ระบุเพื่อกำหนดให้ tab ที่ต้องการ disable`},
    { require: '', name: 'closable', type: 'boolean', description: `ระบุเพื่อกำหนดให้ tab ที่ต้องการสามารถปิด tab ได้`},
    { require: '', name: 'leftIcon', type: 'string', description: `ใช้สำหรับระบุ icon ไว้ด้านซ้ายของ tab`},
    { require: '', name: 'rightIcon', type: 'string', description: `ใช้สำหรับระบุ icon ไว้ด้านขวาของ tab`},
    { require: '', name: 'headerStyle', type: 'string', description: `ใช้สำหรับระบุ style แบบ inline`},
    { require: '', name: 'headerStyleClass', type: 'string', description: `ใช้สำหรับระบุ style class`}
];

const _EVENTLIST: Array<any> = [
    { require: '', name: 'onChange', type: 'function($event)', description: `จะส่ง event เมื่อแท็บมีการเปลี่ยนแปลง`},
    { require: '', name: 'onClose', type: 'function($event)', description: `จะส่ง event เมื่อแท็บถูกปิด`},
];

const _ATTRSYNTAX: Array<any> = [
  { data: `` },
  { data: `     <p-tabPanel` },
  { data: `       [header = "header_of_tab"]` },
  { data: `       [selected = "true_or_false"]` },
  { data: `       [disabled = "true_or_false"]` },
  { data: `       [closable = "true_or_false"]` },
  { data: `       [leftIcon = "icon"]` },
  { data: `       [rightIcon = "icon"]` },
  { data: `       [headerStyle = "style_inline"]` },
  { data: `       [headerStyleClass = "style_class"]` },
  { data: `     </p-tabPanel>` },
  
];

const _releaseUpdate: Array<any> = [
  { head: `Version`, data: `Update primeng version 4.0.0-rc.2` },
  { head: `Icon`, data: `สามารถใส่ไอคอน (จาก Font Awesome)` },
  { head: `Closable`, data: `สามารถปิดแท็บ (close tab) ได้` },
  { head: `Orientation`, data: `สามารถระบุตำแหน่งของ tab ระบุได้ดังนี้ "top", "bottom", "left", "right"` },
  { head: `Event`, data: `สามารถส่ง event คืนมาเมื่อกดเปลี่ยนแท็บ หรือปิดแท็บได้` },
];

const _EXAMPLE1: Array<any> = [
  { data: `
<p-tabView id="tabView_basic">
  <p-tabPanel header="Header 1" id="basic_tp_1" leftIcon="fa-calendar">
    Content 1
  </p-tabPanel>
  <p-tabPanel header="Header 2" id="basic_tp_2" leftIcon="fa-print">
    Content 2
  </p-tabPanel>
  <p-tabPanel header="Header 3" id="basic_tp_3" leftIcon="fa-bell-o" rightIcon="fa-bookmark-o">
    Content 3
  </p-tabPanel>
</p-tabView>
    ` },
]
const _EXAMPLE2: Array<any> = [
  { data: `app.component.ts` },
  { data: `
private tabSelect: number = 1;
private onTabChange(event) {
  this.tabSelect = event.index;
}
  ` },
  { data: `` },
  { data: `app.component.html` },
  { data: `` },
  { data: `
<div class="form-group">
  <p-tabView (onChange)="onTabChange($event)" id="tabView_event">
    <p-tabPanel header="Header I"  id="event_tp_1">
      Content 1
    </p-tabPanel>
    <p-tabPanel header="Header II" id="event_tp_2" [selected]="true">
      Content 2
    </p-tabPanel>
    <p-tabPanel header="Header III" id="event_tp_3" [closable]="true" >
      Content 3
    </p-tabPanel>
    <p-tabPanel header="Header IV" id="event_tp_4" [disabled]="true">
      Content 4
    </p-tabPanel>
  </p-tabView>
</div>
<p> Select Tab: {{tabSelect + 1}}</p>
    ` },
]
const _EXAMPLE3: Array<any> = [
  { data: `
<p-tabView orientation="left"  id="tabView_orientation">
  <p-tabPanel header="Header 1" id="orientation_tp_1" leftIcon="fa-calendar">
    Content 1
  </p-tabPanel>
  <p-tabPanel header="Header 2" id="orientation_tp_2" leftIcon="fa-print">
    Content 2
  </p-tabPanel>
  <p-tabPanel header="Header 3" id="orientation_tp_3" leftIcon="fa-bell-o" rightIcon="fa-bookmark-o">
    Content 3
  </p-tabPanel>
</p-tabView>
    ` },
]
const _EXAMPLE4: Array<any> = [
  { data: `` },
]


@Component({
    selector: 'doc-tab',
    templateUrl: './tab.document.html'
})
export class TabDocument  { 
    private componentTag: string = 'TabView'
    private version: string = '2.0'; 
    private componentDescription: string = `TabView เป็นเครื่องมือในการจัดองค์ประกอบข้อมูลเนื้อหาต่าง ๆ เข้าด้วยกัน โดยสามารถแบ่งออกเป็นแท็บหลาย ๆ แท็บตามต้องการ`
    private releaseDate: string = '29 March 2017';
    private creditURL: string = 'https://www.primefaces.org/primeng/#/tabview';
    private credit: string = '4.0.0-rc.2';   

    private prefixSyntax: string = `<p-tabView [orientation = "orientation_of_tab"] [style = "style_inline"] [styleClass = "style_class"] >`;
    private attrSyntaxList: Array<any> = _ATTRSYNTAX;
    private suffixSyntax: string = '</p-tabView>';
    private attributeList = _ATTRIBUTELIST;
    private attributeTabPanelList = _ATTRIBUTETABPANELLIST;
    private eventList = _EVENTLIST;
    private releaseUpdate = _releaseUpdate;
    private releaseDay: string = '(29 March 2017)';

    private codeExample1 = _EXAMPLE1;
    private codeExample2 = _EXAMPLE2;
    private codeExample3 = _EXAMPLE3;
    private codeExample4 = _EXAMPLE4;
    private tabSelect: number = 1;
    private onTabChange(event) {
        this.tabSelect = event.index;
    }
}