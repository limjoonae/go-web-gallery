import { Component, Input } from '@angular/core';

const _ATTRIBUTELIST: Array<any> = [
    { require: '', name: 'pTooltip', type: 'string', description: `ใช้สำหรับระบุข้อความที่จะแสดงใน tooltip และสามารถใช้ Tag html`},
    { require: '', name: 'tooltipPosition', type: 'boolean', description: `ใช้สำหรับระบุตำแหน่งของ tooltip โดยสามารถกำหนดได้ดังนี้  "top", "bottom", "left", "right"`},
    { require: '', name: 'tooltipEvent', type: 'boolean', description: `ใช้ระบุเพื่อกำหนดให้ tooltip แสดงเมื่อเกิดเหตุการณ์ใด ๆ โดยสามารถกำหนดได้ 2 เหตุการณ์ดังนี้ "hover", "focus"`},
    { require: '', name: 'tooltipDisabled', type: 'boolean', description: `ใช้กำหนดเพื่อปิดใช้งาน tooltip โดยจะไม่แสดงกล่อง tooltip เมื่อมีค่าเป็น true`},
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

const _releaseUpdate: Array<any> = [
  { head: `Version`, data: `Update primeng version 4.0.0-rc.2` }
];

const _EXAMPLE1: Array<any> = [
  { data: `
Basic Tooltip
<go-button goId="tooltip_right" iconName="info" buttonColor="info" pTooltip="Basic Tooltip"></go-button>

Tooltip Positioning
<go-button goId="tooltip_left" label="Left" buttonColor="success"  pTooltip="tooltip position left" tooltipPosition="left"></go-button>
<go-button goId="tooltip_top" label="Top" buttonColor="warning"  pTooltip="tooltip position top" tooltipPosition="top"></go-button>
<go-button goId="tooltip_bottom" label="Bottom" buttonColor="danger"  pTooltip="tooltip position bottom" tooltipPosition="bottom"></go-button>

Disbled Tooltip
<go-button goId="tooltip_disbled" label="Disabled" buttonColor="success" pTooltip="disabled tooltip" tooltipDisabled="true"></go-button>

Tooltip with Event
<input id="tooltip_onfocus" type="text" pTooltip="Textbox Tooltip" tooltipEvent="focus" placeholder="Focus on Me :D">
    ` },
];

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
    private releaseUpdate = _releaseUpdate;
    private releaseDay: string = '(29 March 2017)';

    private codeExample1 = _EXAMPLE1;

}