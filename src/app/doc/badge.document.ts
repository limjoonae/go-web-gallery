import { Component, OnInit } from '@angular/core';

const ATTRIBUTELIST: Array<any> = [
    { require: '*', name: 'type', type: 'text', description: `ใช้เลือกประเภทการแสดงผล สามารถเลือกได้ 3 
        ประเภทคือ badge, badge-link, badge-button`},
    { require: '*', name: 'badgeData', type: 'text', description: `ใช้ระบุข้อความ/ข้อมูลที่จะแสดงใน badge`},
    { require: '', name: 'badgeStyle', type: 'text', description: `ใช้กำหนดรูปแบบกล่อง badge ประกอบด้วย 
        pill=รูปทรงแคปซูล หากไม่ระบุ จะแสดงเป็นทรงสี่เหลี่ยม`},
    { require: '', name: 'badgeColor', type: 'text', description: `ใช้กำหนดสีของ badge โดยค่าที่สามารถระบุได้ ประกอบด้วย 
        default=สีเทา primary=สีน้ำเงิน, success=สีเขียว, info=สีฟ้า, warning=สีส้ม, danger=สีแดง`},
    { require: '', name: 'labelText', type: 'text', description: `ใช้ระบุข้อความกรณีเลือกใช้งาน type badge-link, badge-button`},
    { require: '', name: 'buttonColor', type: 'text', description: `(ใช้ร่วมกับ type=" badge-button") กำหนดสีของปุ่ม 
        โดยค่าที่สามารถระบุได้ ประกอบด้วย primary=สีน้ำเงิน, secondary=, success=สีเขียว, info=สีฟ้า, warning=สีส้ม, danger=สีแดง`},
    { require: '', name: 'buttonSize', type: 'text', description: `(ใช้ร่วมกับ type=" badge-button") 
        กำหนดขนาดของปุ่ม ค่าที่ระบุได้ประกอบด้วย sm=small,  lg=large`},
];

const SYSTEMJSLINE: Array<any> = [
    `map: {`,
    ` 'go-badge': 'gos:badge/{version}',`,
    ` 'go-service': 'gos:service/{version}',`,
    `},`,
    ``,
    `packages: {`,
    ` 'go-badge': {`,
    `    main: './badge.js',`,
    `    defaultExtension: 'js'`,
    `  },`,   
    ` 'go-service': {`,
    `    main: './index.js',`,
    `    defaultExtension: 'js'`,
    `  },`,
    `}`,
];

const APPMODULELINE: Array<any> = [
    `import { BadgeComponent } from 'go-badge';`,
    ``,
    `@NgModule({`,
    `   declarations: [`,
    `   ..........`,
    `   BadgeComponent,`,
    `   ..........`,
    `],`,
];

@Component({
  selector: 'badge-document',
  templateUrl: './badge.document.html',
})
export class BadgeDocument implements OnInit {

  private componentTag: string = '<go-badge>';
  private version: string = '1.0';
  private releaseDate: string = '15/12/2016';
  private credit: string = '-';
  private creditUrl: string = '#';
  private prefixSyntax: string = `<go-badge `;
  private attrSyntax: string = `type="badge_type" badgeData="badge_data" [labelText="label_text"] [badgeStyle="pill"] 
    [badgeColor="color_theme"] [buttonColor="color_Theme"] [buttonSize="sm_or_lg"]`;
  private suffixSyntax: string = `></go-badge>`;
  private attributeList = ATTRIBUTELIST;
  private systemjsLine = SYSTEMJSLINE;
  private appModuleLine = APPMODULELINE;
  constructor() { }

  ngOnInit() {
  }

}
