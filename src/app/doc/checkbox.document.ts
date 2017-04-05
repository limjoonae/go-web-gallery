import { Component, Input } from '@angular/core';

const DATA1: Array<any> = [
  { value: '11', label: 'checkbox 1', disable: '', readonly: '', checked: 'true' },
  { value: '12', label: 'checkbox 2', disable: '', readonly: '', checked: '' }
];

const DATA2: Array<any> = [
  { value: '11', label: 'checkbox 1', disable: 'true', readonly: '', checked: '' },
  { value: '12', label: 'checkbox 2', disable: '', readonly: '', checked: 'true' }
];

const DATA3: Array<any> = [
    { value: '31', label: 'checkbox 1', disable: '', readonly: '', checked: 'true' },
    { value: '32', label: 'checkbox 2', disable: 'true', readonly: '', checked: '' },
    { value: '33', label: 'checkbox 3', disable: '', readonly: '', checked: '' },
    { value: '34', label: 'checkbox 4', disable: '', readonly: '', checked: 'true' },
    { value: '35', label: 'checkbox 5', disable: '', readonly: '', checked: '' },
    { value: '36', label: 'checkbox 6', disable: '', readonly: '', checked: '' },
    { value: '37', label: 'checkbox 7', disable: '', readonly: '', checked: 'true' }
];

const EXAMPLE1: Array<any> = [
  { data: `<go-checkbox name="chbnames1"`},
  { data: `             id="chbid1"`},
  { data: `             label="Checkbox: "`},
  { data: `             [data]="datas"`},
  { data: `             type="block"`},
  { data: `             colorTheme="success"`},
  { data: `             require="true"`},
  { data: `             (valueOut)="textValue($event)"`},
  { data: `             > checkbox`},
  { data: ` </go-checkbox>`},
  { data: `<p> <strong> Output value: </strong> {{getValue}} </p>`},
  { data: `<p> <strong> Output label: </strong> {{getLabel}} </p>`},
  { data: ``},
  { data: `private datas = : CheckboxData[] = [`},
  { data: `         { value: '11', label: 'checkbox 1', disable: '', readonly: '', checked: 'true' },`},
  { data: `         { value: '12', label: 'checkbox 2', disable: '', readonly: '', checked: '' }`},
  { data: `     ];`},
  { data: `private getValue: any = [];`},
  { data: `private getLabel: any = [];`},
  { data: ``},
  { data: `private textValue(value: any): void{
    this.getValue = [];
    this.getLabel = [];
    if(value.length >0){
      this.getValue = value[0].value;
      this.getLabel = value[0].label;
      for(var i=1; i < value.length; i++){
        this.getValue = this.getValue + "," + value[i].value;
        this.getLabel = this.getLabel + "," + value[i].label;
      }
    }
  }`},
  
];

const EXAMPLE2: Array<any> = [
  { data: `private datas = : CheckboxData[] = [`},
  { data: `     { value: '11', label: 'checkbox 1', disable: 'true', readonly: '', checked: '' },`},
  { data: `     { value: '12', label: 'checkbox 2', disable: '', readonly: '', checked: 'true' }`},
  { data: `];`},
  { data: ``},
  { data: `<go-checkbox name="chbname2"`},
  { data: `             id="chbid2"`},
  { data: `             label="Checkbox: "`},
  { data: `             [data]="datas"`},
  { data: `             colorTheme="warning"`},
  { data: `             > checkbox `},
  { data: `</go-checkbox>`},
];

const EXAMPLE3: Array<any> = [
  { data: `private data: Arrat<any> = [`},
  { data: `   { value: '31', label: 'checkbox 1', disable: '', readonly: '', checked: 'true' },`},
  { data: `   { value: '32', label: 'checkbox 2', disable: 'true', readonly: '', checked: '' },`},
  { data: `   { value: '33', label: 'checkbox 3', disable: '', readonly: '', checked: '' },`},
  { data: `   { value: '34', label: 'checkbox 4', disable: '', readonly: '', checked: 'true' },`},
  { data: `   { value: '35', label: 'checkbox 5', disable: '', readonly: '', checked: '' },`},
  { data: `   { value: '36', label: 'checkbox 6', disable: '', readonly: '', checked: '' },`},
  { data: `   { value: '37', label: 'checkbox 7', disable: '', readonly: '', checked: 'true' }`},
  { data: `];`},
  { data: ``},
  { data: `<go-checkbox name="chbnames3"`},
  { data: `               id="chbid3"`},
  { data: `               label="Select Checkbox: "`},
  { data: `               [data]="datas3"`},
  { data: `               type="column"`},
  { data: `               [col]="3"`},
  { data: `               colorTheme="danger"`},
  { data: `               require="true"`},
  { data: `               >  check `},
  { data: `</go-checkbox>`},
];

const ATTRIBUTELIST: Array<any> = [
    { require: '*', name: 'id', type: 'text', description: `ใช้สำหรับระบุ id ให้ checkbox`},
    { require: '*', name: 'name', type: 'text', description: `ใช้สำหรับระบุ name ให้ checkbox`},
    { require: '', name: 'label', type: 'text', description: `ใช้สำหรับระบุ label หน้า checkbox`},
    { require: '', name: 'require', type: 'boolean ', description: `ใช้สำหรับตั้งค่า require ให้ checkbox`},
    { require: '', name: 'type', type: 'inline/block/column ', description: `ใช้สำหรับระบุการจัดวางของ checkbox`},
    { require: '', name: 'col', type: 'number', description: `ใช้สำหรับระบุจำนวน column เมื่อ type = column สามารถระบุจำนวนคอลัมน์ได้ 1,2,3,4,6,12 เท่านั้น (ปรับความกว้างตาม class bootstrap)`},
    { require: '', name: 'colorTheme', type: 'text', description: `ใช้กำหนดสีของปุ่ม โดยค่าที่สามารถระบุได้ ประกอบด้วย
        success=สีเขียว, warning=สีส้ม, danger=สีแดง`}
];

const GETTINGSTART: Array<any> = [
  { data: `import { CheckboxComponent } from 'go-checkbox';` },
  { data: `import { CustomDisabledDirective, CustomReadonlyDirective, CustomCheckDirective  } from 'go-directive';`},
  { data: `import { LabelComponent } from 'go-label';`},
  { data: ``},
  { data: `@NgModule({`},
  { data: `     declarations: [ `},
  { data: `         ..................`},
  { data: `         CheckboxComponent,`},
  { data: `         CustomDisabledDirective,`},
  { data: `         CustomReadonlyDirective,`},
  { data: `         CustomCheckDirective,`},
  { data: `         LabelComponent,`},
  { data: `         ..................`},
  { data: `     ],`}
];

const EVENTLIST: Array<any> = [
  { require: '', name: 'valueOut', type: 'function($event)', description: `เมื่อเหตุการณ์ใดๆเกิดขึ้น จะทำการ return ชุดข้อมูลของ data ที่เลือกในปัจจุบัน` }
];


@Component({
    moduleId: module.id,
    selector: 'doc-checkbox',
    templateUrl: './checkbox.document.html'
})
export class CheckboxDocument  { 

    version: string = `1.0`;
    private releaseDate: string =  `24 Febuary 2017`
    private datas1 = DATA1;
    private datas2 = DATA2;
    private datas3 = DATA3;
    private codeExample1 = EXAMPLE1;
    private codeExample2 = EXAMPLE2;
    private codeExample3 = EXAMPLE3;
    private attributeList = ATTRIBUTELIST;
    private eventList = EVENTLIST;
    private gettingStart = GETTINGSTART;

    private componentTag: string = '<go-checkbox>' 
    private componentDescription: string = `Checkbox เป็นเครื่องมือช่วยให้กรอกข้อมูลบางอย่าง และทำการเลือกข้อมูลโดยกดเครื่องหมายถูกที่ตัวใดตัวหนึ่ง
                หรือ ตัวเลือกมากกว่านั้น ทำให้เลือกได้หลายรายการ`
    private componentFeature: Array<any> = [
      { data: `กำหนดสี checkbox ` },
      { data: `กำหนดรูปแบบ checkbox แบบ block หรือ inline หรือ แบ่งข้อมูลเป็นคอลัมน์ได้`},
      { data: `กำหนดการเปิดปิดการใช้งาน checkbox`}
    ];

    private attrSyntax : Array<any> = [
      { data: `<go-checkbox` },
      { data: `         id="checkbox_id"`},
      { data: `         [name="checkbox_name"]`},
      { data: `         [label="checkbox_label"] `},
      { data: `         data="array_of_data"`},
      { data: `         [type="type_of_checkbox_format"]`},
      { data: `         [col="number_of_column"]`},
      { data: `         [colorTheme="bootstrap_color"] `},
      { data: `         [require="true_or_false"]`},
      { data: `></go-checkbox>`},
    ];

    private arrSyntax: Array<any> = [
      { data: `const DATA: Array<any> = [{` },
      { data: `         value: "value_of_checkbox",`},
      { data: `         label: "label_of_checkbox",`},
      { data: `         [disable: "true_or_false"],`},
      { data: `         [readonly: "true_or_false"],`},
      { data: `         [checked: "true_or_false"] `},
      { data: `  }];`}
    ];

    private arrOfDataList: Array<any> = [
      { require: '*', name: 'value', type: 'string', description: `ใช้สำหรับระบุค่าให้ checkbox`},
      { require: '*', name: 'label', type: 'string', description: `ใช้สำหรับระบุข้อความที่จะแสดงข้าง checkbox`},
      { require: '', name: 'disable', type: 'boolean', description: `ใช้กำหนดเพื่อปิดใช้งาน checkbox โดย
          หากระบุค่า disable="true" จะไม่สามารถใช้งานได้`},
      { require: '', name: 'readonly', type: 'boolean ', description: `ใช้สำหรับตั้งค่า checkbox ให้แสดงผล read only`},
      { require: '', name: 'checked', type: 'boolean ', description: `ใช้สำหรับตั้งค่า check ให้ checkbox`}
  ];

  private systemjs: Array<any> = [
      { data: `map: {`},
      { data: `     'go-checkbox': 'go:checkbox/(version)',`},
      { data: `     'go-service':  'go:service/(version)',`},
      { data: `     'go-label':	'go:label/(version)',`},
      { data: `     'go-directive': 'go:directive/(version)',`},
      { data: `  },`},
      { data: ``},
      { data: `packages: {`},
      { data: `'go-checkbox': {`},
      { data: `   main: './checkbox.js',`},
      { data: `   defaultExtension: 'js'`},
      { data: `},`},
      { data: `'go-service': {`},
      { data: `     main: './index.js',`},
      { data: `     defaultExtension: 'js'`},
      { data: `},`},
      { data: `'go-label': {`},
      { data: `     main: './label.js',`},
      { data: `     defaultExtension: 'js'`},
      { data: `},`},
      { data: `'go-directive': {`},
      { data: `     main: './index.js',`},
      { data: `     defaultExtension: 'js'`},
      { data: `}`},
      { data: `}`},
      { data: ``},
      { data: ``},

  ];

  private getValue: any = [];
  private getLabel: any = [];

  private textValue(value: any): void{
    this.getValue = [];
    this.getLabel = [];
    if(value.length >0){
      this.getValue = value[0].value;
      this.getLabel = value[0].label;
      for(var i=1; i < value.length; i++){
        this.getValue = this.getValue + "," + value[i].value;
        this.getLabel = this.getLabel + "," + value[i].label;
      }
    }
  }

 }