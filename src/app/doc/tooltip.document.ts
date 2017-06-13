import { Component, Input } from '@angular/core';

const _ATTRIBUTELIST: Array<any> = [
    { require: '', name: 'pTooltip', type: 'string', description: `ใช้สำหรับระบุข้อความที่จะแสดงใน tooltip และสามารถใช้ Tag html`},
    { require: '', name: 'tooltipPosition', type: 'boolean', description: `ใช้สำหรับระบุตำแหน่งของ tooltip โดยสามารถกำหนดได้ดังนี้  "top", "bottom", "left", "right"`},
    { require: '', name: 'tooltipEvent', type: 'boolean', description: `ใช้ระบุเพื่อกำหนดให้ tooltip แสดงเมื่อเกิดเหตุการณ์ใด ๆ โดยสามารถกำหนดได้ 2 เหตุการณ์ดังนี้ "hover", "focus"`},
    { require: '', name: 'tooltipDisabled', type: 'boolean', description: `ใช้ระบุเพื่อกำหนดให้ค่าเริ่มต้นของ panel นั้น collapsed หรือไม่`},
    { require: '', name: 'positionStyle', type: 'string', description: `ใช้สำหรับระบุ style ของ position`},
    { require: '', name: 'tooltipStyleClass', type: 'string', description: `ใช้สำหรับระบุ style class`}
];

// const _EVENTLIST: Array<any> = [
//     { require: '', name: 'onBeforeToggle', type: 'function($event)', description: `จะส่ง event ให้ก่อนที่ Content จะ toggle`},
//     { require: '', name: 'onAfterToggle', type: 'function($event)', description: `จะส่ง event ให้หลังจากที่ Content ถูก toggle`},
// ];

const _ATTRSYNTAX: Array<any> = [
  { data: `` },
  { data: `     [pTooltip = "message_in_tooltip"]` },
  { data: `     [tooltipPosition = "position_of_tooltip"]` },
  { data: `     [tooltipEvent = "hover_or_focus"]` },
  { data: `     [tooltipDisabled = "true_or_false"]` },
  { data: `     [positionStyle = "style_of_position"]` },
  { data: `     [tooltipStyleClass = "style_class"]` }
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
];

const _APPMODULE: Array<any> = [
  { data: `import { TooltipModule } from 'primeng';` },
  { data: `@NgModule({ 
   imports: [  
           .................. 
           TooltipModule
           .................. 
   ] 
  }) `}
];

const _styleLine_html: Array<any> = [
'<link rel="stylesheet" type="text/css" href="http://10.182.247.73/go-cdn-dev/node_modules/2.4.0/primeng/resources/themes/bootstrap/theme.css" />',
'<link rel="stylesheet" type="text/css" href="http://10.182.247.73/go-cdn-dev/node_modules/2.4.0/primeng/resources/primeng.min.css" />'
];

const _styleLine_css: Array<any> = [
  `@import url('http://10.182.247.73/go-cdn-dev/node_modules/2.4.0/primeng/resources/themes/bootstrap/theme.css');`,
  `@import url('http://10.182.247.73/go-cdn-dev/node_modules/2.4.0/primeng/resources/primeng.min.css');`
];

const _releaseUpdate: Array<any> = [
  { head: `Version`, data: `Update primeng version 4.0.0-rc.2` }
];

const _EXAMPLE1: Array<any> = [
  { data: `
  <go-button label="Right" buttonColor="danger"  pTooltip="tooltip position right"></go-button>
  <go-button label="Left" buttonColor="info"  pTooltip="tooltip position left" tooltipPosition="left"></go-button> 
  <go-button label="Top" buttonColor="warning"  pTooltip="tooltip position top" tooltipPosition="top"></go-button> 
  <go-button label="Bottom" buttonColor="success"  pTooltip="tooltip position bottom" tooltipPosition="bottom"></go-button>
  <input pTooltip = "Textbox Tooltip" placeholder="Mouse On Me!!" type="text" ng-reflect-text="Enter your name">
    ` },
];
const _EXAMPLE2: Array<any> = [
  { data: `` },
]
const _EXAMPLE3: Array<any> = [
  { data: `` },
]
const _EXAMPLE4: Array<any> = [
  { data: `` },
]


@Component({
    selector: 'doc-tooltip',
    templateUrl: './tooltip.document.html'
})
export class TooltipDocument  { 
    private componentTag: string = 'Tooltip'
    private version: string = '2.0'; 
    private componentDescription: string = `Tooltip ใช้อธิบายคำหรือจุดที่ต้องการอธิบายเพิ่มเติมบนหน้าเว็บ ที่จะขึ้นมาเวลาเอาเมาส์ไปชี้ที่ตำแหน่งที่มี ToolTip `
    private releaseDate: string = '29 March 2017';
    private creditURL: string = 'https://www.primefaces.org/primeng/#/tooltip';
    private credit: string = 'primeng (4.0.0-rc.2)';   

    private prefixSyntax: string = '<HTML Elements';
    private attrSyntaxList: Array<any> = _ATTRSYNTAX;
    private suffixSyntax: string = '> </HTML Elements>';
    private attributeList = _ATTRIBUTELIST;
    // private eventList = _EVENTLIST;
    private systemjs = _SYSTEMJS;
    private appModule = _APPMODULE;
    private styleLine_html = _styleLine_html;
    private styleLine_css = _styleLine_css;
    private releaseUpdate = _releaseUpdate;
    private releaseDay: string = '(29 March 2017)';

    private codeExample1 = _EXAMPLE1;
    private codeExample2 = _EXAMPLE2;
    private codeExample3 = _EXAMPLE3;
    private codeExample4 = _EXAMPLE4;
    



}