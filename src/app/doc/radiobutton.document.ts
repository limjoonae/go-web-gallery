import { Component, Input } from '@angular/core';

const DATA1: Array<any> = [
  { value: '11', label: 'radio button 1', disable: '', readonly: '', checked: 'true' },
  { value: '12', label: 'radio button 2', disable: '', readonly: '', checked: '' }
];

const DATA2: Array<any> = [
  { value: '11', label: 'radio button 1', disable: 'true', readonly: '', checked: '' },
  { value: '12', label: 'radio button 2', disable: '', readonly: '', checked: 'true' }
];

const DATA3: Array<any> = [
  { value: '31', label: 'radio button 1', disable: '', readonly: '', checked: 'true' },
  { value: '32', label: 'radio button 2', disable: '', readonly: '', checked: '' },
  { value: '33', label: 'radio button 3', disable: 'true', readonly: '', checked: '' },
  { value: '34', label: 'radio button 4', disable: '', readonly: '', checked: '' },
  { value: '35', label: 'radio button 5', disable: '', readonly: '', checked: '' }
];

const EXAMPLE1: Array<any> = [
  { data: `app.component.html`},
  { data: ``},
  { data: `<go-radiobutton name="radioname1"`},
  { data: `                  id="radioid1"`},
  { data: `                  label="Radio button: "`},
  { data: `                  [data]="datas"`},
  { data: `                  block="block"`},
  { data: `                  colorTheme="success"`},
  { data: `                  require="true"`},
  { data: `                  (valueOut)="textValue($event)"`},
  { data: `> radiobutton </go-radiobutton>`},
  { data: `<p> <strong> Output value: </strong> {{getValue}} </p>`},
  { data: `<p> <strong> Output label: </strong> {{getLabel}} </p>`},
  { data: ``},
  { data: `app.component.ts`},
  { data: ``},
  { data: `private datas: Array<any> = [` },
  { data: `  { value: '11', label: 'radio button 1', disable: '', readonly: '', checked: 'true' },`},
  { data: `  { value: '12', label: 'radio button 2', disable: '', readonly: '', checked: '' }`},
  { data: `];`},
  { data: ``},
  { data: `private getValue: any = [];`},
  { data: `private getLabel: any = [];`},
  { data: ``},
  { data: `private textValue(data: any): void{  
        this.getValue = data.value;
        this.getLabel = data.label;
  }`}
];

const EXAMPLE2: Array<any> = [
  { data: `const DATA: Array<any> = [` },
  { data: `   { value: '11', label: 'radio button 1', disable: 'true', readonly: '', checked: '' },`},
  { data: `   { value: '12', label: 'radio button 2', disable: '', readonly: '', checked: 'true' }`},
  { data: `];`},
  { data: ``},
  { data: `private datas = DATA;`},
  { data: ``},
  { data: `<go-radiobutton name="radioname2"`},
  { data: `                  id="radioid2"`},
  { data: `                  label="Radio button: "`},
  { data: `                  [data]="datas"`},
  { data: `                  colorTheme="warning"`},
  { data: `radiobutton </go-radiobutton>`},
];

const EXAMPLE3: Array<any> = [
  { data: `private data: Arrat<any> = [`},
  { data: `   { value: '31', label: 'radio button 1', disable: '', readonly: '', checked: 'true' },`},
  { data: `   { value: '32', label: 'radio button 2', disable: '', readonly: '', checked: '' },`},
  { data: `   { value: '33', label: 'radio button 3', disable: 'true', readonly: '', checked: '' },`},
  { data: `   { value: '34', label: 'radio button 4', disable: '', readonly: '', checked: '' },`},
  { data: `   { value: '35', label: 'radio button 5', disable: '', readonly: '', checked: '' },`},
  { data: `];`},
  { data: ``},
  { data: `<go-radiobutton name="chbnames3"`},
  { data: `               id="chbid3"`},
  { data: `               label="Select Radio button: "`},
  { data: `               [data]="datas3"`},
  { data: `               type="column"`},
  { data: `               [col]="3"`},
  { data: `               colorTheme="danger"`},
  { data: `               require="true"`},
  { data: `               >  radiobutton `},
  { data: `</go-radiobutton>`},
];

const arrSyntaxList: Array<any> = [
  { data: `const DATA: Array<any> = [{` },
  { data: `       value: "value_of_radioButton",`},
  { data: `       label: "label_of_radioButton",`},
  { data: `       [disable: "true_or_false"],`},
  { data: `       [readonly: "true_or_false"],`},
  { data: `       [checked: "true_or_false"]`},
  { data: `  }];`}
];

const attrSyntaxList: Array<any> = [
  { data: `<go-radiobutton` },
  { data: `       id="radio_id"`},
  { data: `       [name="radio_name"]`},
  { data: `       [label="radio_label"] `},
  { data: `       data="array_of_data"`},
  { data: `       [type="type_of_radiobutton_format"]`},
  { data: `       [col="number_of_column"]`},
  { data: `       [colorTheme="bootstrap_color"] `},
  { data: `       [require="true_or_false"]`},
  { data: `></go-radiobutton>`},
];

const ATTRIBUTELIST: Array<any> = [
    { require: '*', name: 'id', type: 'text', description: `ใช้สำหรับระบุ id ให้ radio button`},
    { require: '*', name: 'name', type: 'text', description: `ใช้สำหรับระบุ name ให้ radio button`},
    { require: '', name: 'label', type: 'text', description: `ใช้สำหรับระบุ label หน้า radio button`},
    { require: '', name: 'require', type: 'boolean ', description: `ใช้สำหรับตั้งค่า require ให้ radio button`},
    { require: '', name: 'type', type: 'inline/block/column ', description: `ใช้สำหรับระบุการจัดวางของ radio button`},
    { require: '', name: 'col', type: 'number', description: `ใช้สำหรับระบุจำนวน column เมื่อ type = column สามารถระบุจำนวนคอลัมน์ได้ 1,2,3,4,6,12 เท่านั้น (ปรับความกว้างตาม class bootstrap)`},
    { require: '', name: 'colorTheme', type: 'text', description: `ใช้กำหนดสีของปุ่ม โดยค่าที่สามารถระบุได้ ประกอบด้วย
        success=สีเขียว, info=สีฟ้า, warning=สีส้ม, danger=สีแดง`}
];

const ARRDATALIST: Array<any> = [
    { require: '*', name: 'value', type: 'string', description: `ใช้สำหรับระบุค่าให้ radio button`},
    { require: '*', name: 'label', type: 'string', description: `ใช้สำหรับระบุข้อความที่จะแสดงข้าง radio button`},
    { require: '', name: 'disable', type: 'boolean', description: `ใช้กำหนดเพื่อปิดใช้งาน radio button โดย
        หากระบุค่า disable="true" จะไม่สามารถใช้งานได้`},
    { require: '', name: 'readonly', type: 'boolean ', description: `ใช้สำหรับตั้งค่า radio button ให้แสดงผล read only`},
    { require: '', name: 'checked', type: 'boolean ', description: `ใช้สำหรับตั้งค่า check ให้ radio button`}
];

const GETTINGSTART: Array<any> = [
  { data: `import { RadioButtonComponent }  from 'go-radiobutton';` },
  { data: `import { CustomDisabledDirective, CustomReadonlyDirective, CustomCheckDirective  } from 'go-directive';`},
  { data: `import { LabelComponent } from 'go-label';`},
  { data: ``},
  { data: `@NgModule({`},
  { data: `declarations: [ `},
  { data: `     ..................`},
  { data: `     RadioButtonComponent,`},
  { data: `     CustomDisabledDirective,`},
  { data: `     CustomReadonlyDirective,`},
  { data: `     CustomCheckDirective,`},
  { data: `     LabelComponent,`},
  { data: `     ..................`},
  { data: `],`}
];


@Component({
    moduleId: module.id,
    selector: 'doc-radiobutton',
    templateUrl: 'radiobutton.document.html'
})
export class RadioButtonDocument  { 

  private componentTag: string = '<go-radiobutton>' 
  private componentDescription: string = `Radiobutton เป็นเครื่องมือช่วยให้กรอกข้อมูลบางอย่าง และทำการเลือกข้อมูลโดยกดเครื่องหมายเลือกที่ตัวใดตัวหนึ่ง ไม่สามารถเลือกได้หลายตัวเลือก`
  private componentFeature: Array<any> = [
      { data: `กำหนดสี radio button ` },
      { data: `กำหนดรูปแบบ radio button แบบ block, inline หรือ แบบคอลัมน์`},
      { data: `กำหนดการเปิดปิดการใช้งาน radio button`}
  ];
  private releaseDate = `24 Febuary 2016`;
  private version = '1.0';

  private datas1 = DATA1;
  private datas2 = DATA2;
  private datas3 = DATA3;
  private codeExample1 = EXAMPLE1;
  private codeExample2 = EXAMPLE2;
  private codeExample3 = EXAMPLE3;

  private arrSyntax = arrSyntaxList;
  private attrSyntax = attrSyntaxList;
  private attributeList = ATTRIBUTELIST;
  private arrOfDataList = ARRDATALIST;
  private gettingStartList = GETTINGSTART;


  private systemjs: Array<any> = [
      { data: `map: {`},
      { data: `     'go-radiobutton': 'go:radiobutton/(version)',`},
      { data: `     'go-service':  'go:service/(version)',`},
      { data: `     'go-label':	'go:label/(version)',`},
      { data: `     'go-directive': 'go:directive/(version)',`},
      { data: `  },`},
      { data: ``},
      { data: `packages: {`},
      { data: `'go-radiobutton': {`},
      { data: `   main: './radiobutton.js',`},
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

  private textValue(data: any): void{  
        this.getValue = data.value;
        this.getLabel = data.label;
  }
 }