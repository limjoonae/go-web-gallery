import { Component } from '@angular/core';

const ATTRIBUTELIST: Array<any> = [
  { require: '*', name: 'ngModel', type: 'any', description: `ตัวแปรที่ผลลัพธ์ของ autocomplete จะระบุค่าให้` },
  { require: '*', name: 'source', type: 'array หรือ text', description: `ข้อมูลที่ใช้แสดงสำหรับ dropdown list` },
  { require: '', name: 'placeholder', type: 'text', description: `ใช้กำหนดข้อความตัวอย่างใน textbox` },
  { require: '', name: 'list-formatter', type: 'function', description: `ชื่อตัวแปรที่เป็น string(key) หรือ ฟังก์ชันที่ใช้ในการจัดรูปแบบการแสดงผลข้อมูลใน dropdown list เช่น '(key) name' หรือชื่อฟังก์ชั่น 'myListFormatter' (ไม่ใช่ 'myListFormatter()' )` },
  { require: '', name: 'path-to-data', type: 'text', description: `path ของข้อมูล array ใน http response` },
  { require: '', name: 'min-chars', type: 'number', description: `จำนวนตัวอักษรขั้นต่ำที่ใช้ในการแสดง dropdown เมื่อแหล่งข้อมูลเป็นแบบ remote data` },
  { require: '', name: 'max-num-list', type: 'number', description: `จำนวนข้อมูลที่มากที่สุดที่สามารถแสดงได้ใน dropdown list` }, 
  { require: '', name: 'value-property-name', type: 'text', description: `ชื่อคีย์สำหรับค่า default คือ id` },
  { require: '', name: 'display-property-name', type: 'text', description: `ชื่อคีย์สำหรัยข้อความที่ใช้แสดง default คือ value` },
  { require: '', name: 'blank-option-text', type: 'text', description: `เป็นข้อความแนะนำซึ่งเมื่อเลือกจะเป็นค่าว่าง` },
  { require: '', name: 'valueChanged / ngModelChange', type: 'function($event)', description: `callback function ซึ่งจะทำการประมวลผลเมื่อข้อมูล dropdown list ถูกเลือก` },
  { require: '', name: 'loading-text', type: 'text', description: `ข้อความที่ใช้ในการแสดงในขณะที่ทำการโหลดข้อมูล default คือ Loading...` },
  { require: '', name: 'accept-user-input', type: 'boolean', description: `ถ้าเป็น false และข้อมูลไม่ตรงกับ source ข้อมูลจะกลับไปเป็นค่าเดิมที่เลือก` }
];

const SYSTEMJSLINE: Array<any> = [
    `map: {`,
    ` 'ng2-auto-complete':'npm:npm:ng2-auto-complete/dist/ng2-auto-complete.umd.js',`,
    `},`, 
    
];

const APPMODULELINE: Array<any> = [
  `import { Ng2AutoCompleteModule } from 'ng2-auto-complete';`,
  ``,
  `@NgModule({`,
  ` imports: [`,
  `   ..........`,
  `   Ng2AutoCompleteModule,`,
  `   ..........`,
  ` ],`,
  `})`
];
 const _EXAMPLE1: Array<any> = [
  { data: `app.component.ts` },  
  { data: `` },
   { data: ` myCallback(newVal: any) {
    console.log("value is changed to ", newVal);
    this.model1 = newVal;
  }` },
  { data: `private selectedDatas: Array<any>;` },
  { data: `` },
  { data: `app.component.html` },
  { data: `
<input type="text" class="form-control" auto-complete [source]="arrayOfStrings" 
(ngModelChange)="myCallback($event)" [ngModel]="model1" placeholder="enter text" id="autocomplete_basic">
` },

];

@Component({
  selector: 'auto-complete-document',
  templateUrl: './auto-complete.document.html',
  // styles: [`
  //   ng2-auto-complete, input {
  //     display: block; border: 1px solid #ccc; width: 300px;
  //   }
  // `]
})
export class AutoCompleteDocument {

  private componentTag: string = 'auto-complete';
  private componentDescription: string = `Auto-complete เป็นการแสดงตัวเลือกที่ต้องการขึ้นมาโดยอัตโนมัติ`;
  private version: string = '1.0';
  private releaseDate: string = '7/12/2016';
  private credit: string = 'ng2-auto-complete (v. 0.12.0)';
  private creditUrl: string = 'https://www.npmjs.com/package/ng2-auto-complete';
  private prefixSyntax: string = `<input auto-complete `;
  private attrSyntax: string = `[(ngModel)]="myData" [source]="mySource" [placeholder="text"] [list-formatter="string_or_function_variable_name"] [path-to-data="text"] [min-chars="number"]
                                [max-num-list="number"] [value-property-name="text"] [display-property-name="text"] [blank-option-text="text"]
                                [(valueChanged / ngModelChange)="function"] [loading-text="text"] [[accept-user-input]=true_or_false]`;
  private suffixSyntax: string = `>`;
  private attributeList = ATTRIBUTELIST;
  private systemjsLine = SYSTEMJSLINE;
  private appModuleLine = APPMODULELINE;
  private appModuleDetail: string = `app.module.ts - ทำการ import พร้อมทั้งกำหนดค่าเพิ่มเติมใน imports`;
  private codeExample1 = _EXAMPLE1;
  arrayOfNumbers: number[] = [100, 200, 300, 400, 500];
 
  arrayOfStrings: string[] =
  ["this", "is", "array", "of", "text"];

  arrayOfKeyValues: any[] =
  [{ id: 1, value: "One" }, { id: 2, value: "Two" }, { id: 3, value: "Three" }, { id: 4, value: "Four" }];

  arrayOfKeyValues2: any[] =
  [{ key: 1, name: "Key One" }, { key: 2, name: "Key Two" }, { key: 3, name: "Key Three" }, { key: 4, name: "Key Four" }];

  googleGeoCode: string = "https://maps.googleapis.com/maps/api/geocode/json?address=:keyword";

  model1 = "is";
  model2 = { id: 1, value: "One" };
  model3 = { key: 3, name: "Key Three" };
  model4: any;

  myCallback(newVal: any) {
    console.log("value is changed to ", newVal);
    this.model1 = newVal;
  }

  printModel4() {
    console.log(this.model4);
  }


  json(obj: any) {
    return JSON.stringify(obj);
  }
  
}
