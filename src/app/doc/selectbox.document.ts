import { Component, OnInit, ViewEncapsulation } from '@angular/core';

const COLORS = [
  { 'name': 'Blue 10', 'hex': '#C0E6FF' },
  { 'name': 'Blue 20', 'hex': '#7CC7FF' },
  { 'name': 'Blue 30', 'hex': '#5AAAFA' },
  { 'name': 'Blue 40', 'hex': '#5596E6' },
  { 'name': 'Blue 50', 'hex': '#4178BE' },
  { 'name': 'Blue 60', 'hex': '#325C80' },
  { 'name': 'Blue 70', 'hex': '#264A60' },
  { 'name': 'Blue 80', 'hex': '#1D3649' },
  { 'name': 'Blue 90', 'hex': '#152935' },
  { 'name': 'Blue 100', 'hex': '#010205' },
  { 'name': 'Green 10', 'hex': '#C8F08F' },
  { 'name': 'Green 20', 'hex': '#B4E051' },
  { 'name': 'Green 30', 'hex': '#8CD211' },
  { 'name': 'Green 40', 'hex': '#5AA700' },
  { 'name': 'Green 50', 'hex': '#4B8400' },
  { 'name': 'Green 60', 'hex': '#2D660A' },
  { 'name': 'Green 70', 'hex': '#144D14' },
  { 'name': 'Green 80', 'hex': '#0A3C02' },
  { 'name': 'Green 90', 'hex': '#0C2808' },
  { 'name': 'Green 100', 'hex': '#010200' },
  { 'name': 'Red 10', 'hex': '#FFD2DD' },
  { 'name': 'Red 20', 'hex': '#FFA5B4' },
  { 'name': 'Red 30', 'hex': '#FF7D87' },
  { 'name': 'Red 40', 'hex': '#FF5050' },
  { 'name': 'Red 50', 'hex': '#E71D32' },
  { 'name': 'Red 60', 'hex': '#AD1625' },
  { 'name': 'Red 70', 'hex': '#8C101C' },
  { 'name': 'Red 80', 'hex': '#6E0A1E' },
  { 'name': 'Red 90', 'hex': '#4C0A17' },
  { 'name': 'Red 100', 'hex': '#040001' },
  { 'name': 'Yellow 10', 'hex': '#FDE876' },
  { 'name': 'Yellow 20', 'hex': '#FDD600' },
  { 'name': 'Yellow 30', 'hex': '#EFC100' },
  { 'name': 'Yellow 40', 'hex': '#BE9B00' },
  { 'name': 'Yellow 50', 'hex': '#8C7300' },
  { 'name': 'Yellow 60', 'hex': '#735F00' },
  { 'name': 'Yellow 70', 'hex': '#574A00' },
  { 'name': 'Yellow 80', 'hex': '#3C3200' },
  { 'name': 'Yellow 90', 'hex': '#281E00' },
  { 'name': 'Yellow 100', 'hex': '#020100' }
];

const ATTRIBUTELIST: Array<any> = [
  { require: '*', name: 'items', type: 'Array<any>', description: `arrays ของไอเทมที่ใช้เลือกควรเป็น array ของอ็อบเจ็ค ที่มีการระบุคุณสมบัติ(property)ของ id และ text  
                                                                  ซึ่งในการใช้งานนั้นไม่ซับซ้อน เช่น เราอาจส่งค่า string array เข้าไป โดยที่ string เดียวกันใช้เป็นทั้งตัว text และ id 
                                                                  นอกจากนี้เราสามารถ nest ไอเทมโดยการระบุคุณสมบัติ children ไปยังไอเทมนั้นๆได้ด้วย ซึ่งค่าที่เราใส่ควรเป็น array ของไอเทมอีกอันนึง
                                                                  ไอเทมที่มี children สามารถที่จะละเว้นการใส่ id ได้ ถ้าไอเทมมีการระบุ id ทุกไอเทมจะสามารถเรียกใช้ได้ในระดับ local และ selection operation จะใช้บน local อาเรย์เท่านั้น
                                                                  ถ้าไม่มีการระบุ id ไอเทมจะไม่สามารถเรียกใช้ได้ในระดับ local จะต้องใช้ออปชั่น query ในการดึงข้อมูลออกมา` },
  { require: '', name: 'active', type: 'Array<any>', description: `initial selection data ที่ใช้เซตควรเป็นอ็อบเจคที่ระบุคุณสมบัติของ id และ text` },
  { require: '', name: 'allowClear', type: 'boolean', description: `ถ้ากำหนดเป็น true ผู้ใช้สามารถเคลียร์ตัวเลือกที่เลือกไว้ทิ้งได้ (ใช้ได้เฉพาะเลือกแบบ 1 ตัวเลือก)` },
  { require: '', name: 'placeholder', type: 'text', description: `ใช้กำหนดข้อความตัวอย่างใน select จะปรากฎเมื่อไม่มีการเลือกตัวเลือกใดๆ` },
  { require: '', name: 'disabled', type: 'boolean', description: `ใช้กำหนดเพื่อปิดใช้งาน select โดย หากระบุค่า disabled="true" จะไม่สามารถกดเลือกได้` },
  { require: '', name: 'multiple', type: 'boolean', description: `ถ้ากำหนดเป็น true ผู้ใช้สามารถเลือกตัวเลือกได้มากกว่า 1 ตัวเลือก` }
];

const EVENTLIST: Array<any> = [
  { require: '*', name: 'data', type: 'function($event)', description: `เมื่อเหตุการณ์ใดๆเกิดขึ้น จะทำการ return Array<any> ของข้อมูลที่เลือกในปัจจุบัน` },
  { require: '', name: 'selected', type: 'function($event)', description: `หลังจากตัวเลือกใหม่ถูกเลือก จะทำการ return อ็อบเจคที่ระบุคุณสมบัติของ id และ text ทีเป็นรายละเอียดของตัวเลือกนั้น` },
  { require: '', name: 'removed', type: 'function($event)', description: `หลังจากตัวเลือกถูกลบ จะทำการ return อ็อบเจคที่ระบุคุณสมบัติของ id และ text ทีเป็นรายละเอียดของตัวเลือกนั้น` },
  { require: '', name: 'typed', type: 'function($event)', description: `เมื่อผู้ใช้พิมพ์ลงในกล่องข้อความจะทำการ return ค่าที่ผู้ใช้พิมพ์ในรูปของ string` }
];

const APPMODULELINE: Array<any> = [
  `import { SelectModule } from 'ng2-select/ng2-select';`,
  ``,
  `@NgModule({`,
  ` imports: [`,
  `     ..........`,
  `     SelectModule,`,
  `     ..........`,
  ` ],`,
  `})`
];

 const _EXAMPLE1: Array<any> = [
      `app.component.html`,
      ``,
      `<ng-select [allowClear]="true" `,
      `         placeholder="please select city"`,
      `         [items]="items"`, 
      `         [disabled]="disabledSingle" `,
      `         (data)="refreshSingleValue($event)"`,
      `></ng-select>`, 
      `<p><strong> Select: </strong> {{ singleValue.text }} </p>`,
      ``,
      `app.component.ts`,
      ``,
      `private items: Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',`,
      `         'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',`, 
      `         'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',`,
      `         'Düsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',`,
      `         'Hamburg', 'Hannover', 'Helsinki', 'Kraków', 'Leeds', 'Leipzig', 'Lisbon',`, 
      `         'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Málaga',`,
      `         'Naples', 'Palermo', 'Paris', 'Poznań', 'Prague', 'Riga', 'Rome',`,
      `         'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',`, 
      `         'Zagreb', 'Zaragoza', 'Łódź'];`,
      ``,
      `private disabledSingle: boolean = false;`,
      `private singleValue: any = {};`,
      ``,
      `public refreshSingleValue(value: any): void {`,
      ` this.singleValue = value;`, 
      `}`
 ];

 const _EXAMPLE2: Array<any> = [
     `app.component.html`,
     ``,
     `<ng-select [multiple]="true" `,
     `          [items]="items"`,
     `          (data)="refreshMultiValue($event)"`,
     `          (selected)="selected($event)"`,
     `          (removed)="removed($event)"`,
     `          placeholder="please select city"`,
     `          [active]="initial"`,
     `></ng-select>`,
     `<p><strong> Output value: </strong> {{ itemsToString(multiValue)}} </p>`,
     `<p><strong> Select value: </strong> {{ selectValue.text }} </p>`,
     `<p><strong> Remove value: </strong> {{ removeValue.text }} </p>`,
     ``,
     `app.component.ts`,
     ``,
     `private items: Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',`,
     `         'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',`, 
     `         'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',`,
     `         'Düsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',`,
     `         'Hamburg', 'Hannover', 'Helsinki', 'Kraków', 'Leeds', 'Leipzig', 'Lisbon',`, 
     `         'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Málaga',`,
     `         'Naples', 'Palermo', 'Paris', 'Poznań', 'Prague', 'Riga', 'Rome',`,
     `         'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',`, 
     `         'Zagreb', 'Zaragoza', 'Łódź'];`,
     ``,
     `private initial:Array<string> = ['Munich'];`,
     ``,    
     `private selectValue: any = [];`,
     `private removeValue: any = [];`,
     `private multiValue: any = [];`,
     ``,
     `public refreshMultiValue(value: any): void {`,
     `  this.multiValue = value;`,
     `}`,
     ``,
     `public selected(value: any): void {`,
     `  this.selectValue = value;`,
     `}`,
     ``,
     `public removed(value: any): void {`,
     `  this.removeValue = value;`,
     `}`,
     ``,
     `public itemsToString(value: Array<any>): string {`,
     `  return value`,
     `      .map((item: any) => {`,
     `          return item.text;`,
     `      }).join(',');`,
     `}`,
     ``,
 ];

 const _EXAMPLE3: Array<any> = [
     `app.component.html`,
     ``,
    `<ng-select
        [items]="colorItems"
        (data)="refreshColorValue($event)"
        placeholder="Please select color">`,
    `</ng-select>`,
     `<p><strong> Output value: </strong> {{colorValue.text}} </p>`,
     ``,
     `app.component.ts`,
     ``,
     `import { OnInit, ViewEncapsulation } from '@angular/core';`,
    `@Component({
        .......................
        styles: ['colorbox,.colorbox { display:inline-block; height:14px; width:14px;margin-right:4px; border:1px solid #000;}'],
        encapsulation: ViewEncapsulation.None
    })`,
     ``,
     `const COLORS = [
            { 'name': 'Blue 10', 'hex': '#C0E6FF' },
            { 'name': 'Blue 20', 'hex': '#7CC7FF' },
            { 'name': 'Blue 30', 'hex': '#5AAAFA' },
            { 'name': 'Blue 40', 'hex': '#5596E6' },
            { 'name': 'Blue 50', 'hex': '#4178BE' },
            { 'name': 'Blue 60', 'hex': '#325C80' },
            { 'name': 'Blue 70', 'hex': '#264A60' },
            { 'name': 'Blue 80', 'hex': '#1D3649' },
            { 'name': 'Blue 90', 'hex': '#152935' },
            { 'name': 'Blue 100', 'hex': '#010205' },
            { 'name': 'Green 10', 'hex': '#C8F08F' },
            { 'name': 'Green 20', 'hex': '#B4E051' },
            { 'name': 'Green 30', 'hex': '#8CD211' },
            { 'name': 'Green 40', 'hex': '#5AA700' },
            { 'name': 'Green 50', 'hex': '#4B8400' },
            { 'name': 'Green 60', 'hex': '#2D660A' },
            { 'name': 'Green 70', 'hex': '#144D14' },
            { 'name': 'Green 80', 'hex': '#0A3C02' },
            { 'name': 'Green 90', 'hex': '#0C2808' },
            { 'name': 'Green 100', 'hex': '#010200' },
            { 'name': 'Red 10', 'hex': '#FFD2DD' },
            { 'name': 'Red 20', 'hex': '#FFA5B4' },
            { 'name': 'Red 30', 'hex': '#FF7D87' },
            { 'name': 'Red 40', 'hex': '#FF5050' },
            { 'name': 'Red 50', 'hex': '#E71D32' },
            { 'name': 'Red 60', 'hex': '#AD1625' },
            { 'name': 'Red 70', 'hex': '#8C101C' },
            { 'name': 'Red 80', 'hex': '#6E0A1E' },
            { 'name': 'Red 90', 'hex': '#4C0A17' },
            { 'name': 'Red 100', 'hex': '#040001' },
            { 'name': 'Yellow 10', 'hex': '#FDE876' },
            { 'name': 'Yellow 20', 'hex': '#FDD600' },
            { 'name': 'Yellow 30', 'hex': '#EFC100' },
            { 'name': 'Yellow 40', 'hex': '#BE9B00' },
            { 'name': 'Yellow 50', 'hex': '#8C7300' },
            { 'name': 'Yellow 60', 'hex': '#735F00' },
            { 'name': 'Yellow 70', 'hex': '#574A00' },
            { 'name': 'Yellow 80', 'hex': '#3C3200' },
            { 'name': 'Yellow 90', 'hex': '#281E00' },
            { 'name': 'Yellow 100', 'hex': '#020100' }
        ];`,
     ``,
     `private colorValue: any = {};`,
     `private colorItems: Array<any> = [];`,
     ``,
     `public ngOnInit(): any {
    COLORS.forEach((color: { name: string, hex: string }) => {
        this.colorItems.push({
            id: color.hex,
            text: '<colorbox style="background-color:$ {color.hex};"></colorbox>$ {color.name} ($ {color.hex})'
        });
    });
}`,
     ``,
     `public refreshColorValue(value: any): void {`,
     `  this.colorValue = value;`,
     `}`,
 ];

@Component({
    selector: 'doc-selectbox',
    templateUrl: './selectbox.document.html',
    styles: [`colorbox,.colorbox { display:inline-block; height:14px; width:14px;margin-right:4px; border:1px solid #000;}`],
    encapsulation: ViewEncapsulation.None
})
export class SelectboxDocument {
    private componentTag: string = 'ng-select';
    private componentDescription: string = `Select เป็นการแสดงตัวเลือกให้ผู้ใช้เลือก โดยสามารถเลือกได้ 2 แบบ คือ แบบ 1 ตัวเลือกและมากกว่า 1 ตัวเลือก`;
    private version: string = '1.0';
    private releaseDate: string = '7/12/2016';
    private credit: string = 'ng2-select (v.1.2.0)';
    private creditURL: string = 'https://valor-software.com/ng2-select/';
    private prefixSyntax: string = `<ng-select `;
    private attrSyntax: string = `[items]="array_of_data" [[active]="array_of_items"] [[allowClear]="true_or_false"]
                                    [[placeholder]="text"] [[disabled]="true_or_false"] [[multiple]="true_or_false"]
                                    [(data)="function($event)"] [(selected)="function($event)"] [(removed)="function($event)"]
                                    [(typed)="function($event)"]`;
    private suffixSyntax: string = `><ng-select>`;
    private attributeList = ATTRIBUTELIST;
    private eventList = EVENTLIST;
    private appModuleLine = APPMODULELINE;

    private exampleOf1 = _EXAMPLE1;
    private exampleOf2 = _EXAMPLE2;
    private exampleOf3 = _EXAMPLE3;
    
    // private appModuleDetail: string = `app.module.ts - ทำการ import พร้อมทั้งกำหนดค่าเพิ่มเติมใน imports`;

    private systemjs: Array<any> = [
      { data: `map: {`},
      { data: `     'ng2-select': 'npm:ng2-select/bundles/ng2-select.umd.js',`},
      { data: `  }`},
      { data: `}`}

  ];

    private items: Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
        'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
        'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',
        'Düsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',
        'Hamburg', 'Hannover', 'Helsinki', 'Kraków', 'Leeds', 'Leipzig', 'Lisbon','Liverpool',
        'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Málaga',
        'Naples', 'Palermo', 'Paris', 'Poznań', 'Prague', 'Riga', 'Rome',
        'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',
        'The Hague', 'Turin', 'Valencia', 'Vienna', 'Vilnius', 'Warsaw', 'Wrocław',
        'Zagreb', 'Zaragoza', 'Łódź'];

    private initial:Array<string> = ['Munich'];    

    private removeValue: any = [];
    private selectValue: any = [];
    private singleValue: any = {};
    private multiValue: any = [];
    private childValue: any = {};
    private colorValue: any = {};
    // private _disabledV:string = '0';
    private disabledSingle: boolean = false;
    private disabledMulti: boolean = false;
    private disabledChild: boolean = false;
    private disabledColor: boolean = false;

  private colorItems: Array<any> = [];

  public ngOnInit(): any {
    COLORS.forEach((color: { name: string, hex: string }) => {
      this.colorItems.push({
        id: color.hex,
        text: `<colorbox style='background-color:${color.hex};'></colorbox>${color.name} (${color.hex})`
      });
    });
  }

  public disableSingle() {
    this.disabledSingle = !this.disabledSingle;
  }

  public disableMulti() {
    this.disabledMulti = !this.disabledMulti;
  }

  public disableChild() {
    this.disabledChild = !this.disabledChild;
  }

  public disableColor() {
    this.disabledColor = !this.disabledColor;
  }

  public itemsToString(value: Array<any>): string {
    return value
      .map((item: any) => {
        return item.text;
      }).join(',');
  }

  public selected(value: any): void {
    this.selectValue = value;
  }

  public removed(value: any): void {
    this.removeValue = value;
  }

  public refreshSingleValue(value: any): void {
    this.singleValue = value;
  }

  public refreshMultiValue(value: any): void {
    this.multiValue = value;
  }

  public refreshChildValue(value: any): void {
    this.childValue = value;
  }

  public refreshColorValue(value: any): void {
    this.colorValue = value;
  }
}
