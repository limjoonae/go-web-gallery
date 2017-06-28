import { Component, Input } from '@angular/core';

const _ATTRIBUTELIST: Array<any> = [
  { require: '*', name: 'value', type: 'array', description: `ใช้สำหรับระบุข้อมูลให้ datagrid`},
  { require: '', name: 'rows', type: 'number', description: `ใช้สำหรับระบุจำนวนข้อมูลที่จะแสดงในแต่ละหน้`},
  { require: '', name: 'paginator', type: 'boolean', description: `ใช้ระบุเพื่อกำหนดให้ datagrid แสดงหมายเลขหน้า (paginator)`},
  { require: '', name: 'paginatorPosition', type: 'string', description: `ใช้ระบุเพื่อกำหนดให้แสดงหมายเลขหน้า (paginator) ไว้ส่วนไหนของตาราง โดยสามารถเลือกได้ 3 แบบดังนี้  "top", "bottom" และ "both"`},
  { require: '', name: 'pageLinks', type: 'number', description: `ใช้สำหรับระบุจำนวนหน้าที่จะแสดงใน paginator`},
  { require: '', name: 'totalRecords', type: 'number', description: `ใช้สำหรับระบุจำนวนของข้อมูลทั้งหมด`},
  { require: '', name: 'rowsPerPageOptions', type: 'array', description: `ใช้สำหรับระบุจำนวนหน้าที่จะแสดงต่อหน้านั้น`},
  { require: '', name: 'lazy', type: 'boolean', description: `ใช้ระบุเพื่อกำหนดให้โหลดข้อมูลแบบ lazy`},
  { require: '', name: 'style', type: 'string', description: `ใช้สำหรับระบุ style แบบ inline`},
  { require: '', name: 'styleClass', type: 'string', description: `ใช้สำหรับระบุ style class`}

];

const _EVENTLIST: Array<any> = [
  { require: '', name: 'onLazyLoad', type: 'function($event)', description: `จะส่ง event ใด ๆ คืนมาเมื่อมีการเกิด event ต่าง ๆ ในโหมด lazy`},
  { require: '', name: 'onPage', type: 'function($event)', description: `จะส่ง event คืนมาเมื่อมีการเปลี่ยนหน้าเกิดขึ้น`},

];

const _ATTRSYNTAX: Array<any> = [
  { data: `` },
  { data: `   value = "array_of_data"` },
  { data: `   [rows = "number_of_row"]` },
  { data: `   [paginator = "true_or_false"]` },
  { data: `   [paginatorPosition = "position_of_paginator"]` },
  { data: `   [pageLinks = "number"]` },
  { data: `   [rowsPerPageOptions = "row_per_page"]` },
  { data: `   [totalRecords = "number"]` },
  { data: `   [lazy = "true_or_false]` },
  { data: `   [style = "style_inline"]` },
  { data: `   [styleClass = "style_class"]` }
];

const _EXAMPLE1: Array<any> = [
  { data: `app.component.ts` },
  { data: `` },
  { data: `private displayDialog: boolean;` },
  { data: `private selectedCar: any;` },
  { data: `
private selectCar(car: any) {
    this.selectedCar = car;
    this.displayDialog = true;
}` },
  { data: `
private onDialogHide() {
  this.selectedCar = null;
}
` },
  { data: `` },
  { data: `` },
  { data: `app.component.html` },
  { data: `
<p-dataGrid [value]="data" [paginator]="true" [rows]="8" pageLinks="2" paginatorPosition="both" [rowsPerPageOptions]="[4,8,12,16,20]">
  <p-header> List of Cars </p-header>
  <ng-template let-data pTemplate="item">
    <div style="padding:3px" class="ui-g-12 ui-md-3">
      <p-panel [header]="data.vin" [style]="{'text-align':'center'}">
        <img src="./image/datagrid/{{data.brand}}.gif">
        <div class="data-detail">{{data.year}} - {{data.color}}</div>
        <hr class="ui-widget-content" style="border-top:0">
        <i class="fa fa-search" (click)="selectCar(data)" style="cursor:pointer"></i>
      </p-panel>
    </div>
  </ng-template>
</p-dataGrid>
    ` },
  { data: `` },
  { data: `
<p-dialog header="Car Details" [(visible)]="displayDialog" [responsive]="true"  [modal]="true" width="225" (onAfterHide)="onDialogHide()">
  <div class="ui-grid ui-grid-responsive ui-grid-pad" *ngIf="selectedCar" style="font-size:16px;text-align:center;padding:20px">
    <div class="ui-grid-row">
      <div class="ui-grid-col-12" style="text-align:center"><img src="./image/datagrid/{{selectedCar.brand}}.gif"></div>
    </div>
    <div class="ui-grid-row">
      <div class="ui-grid-col-4">Vin: </div>
      <div class="ui-grid-col-8">{{selectedCar.vin}}</div>
    </div>
    <div class="ui-grid-row">
      <div class="ui-grid-col-4">Year: </div>
      <div class="ui-grid-col-8">{{selectedCar.year}}</div>
    </div>
    <div class="ui-grid-row">
      <div class="ui-grid-col-4">Brand: </div>
      <div class="ui-grid-col-8">{{selectedCar.brand}}</div>
    </div>
    <div class="ui-grid-row">
      <div class="ui-grid-col-4">Color: </div>
      <div class="ui-grid-col-8">{{selectedCar.color}}</div>
    </div>
  </div>
</p-dialog>
    ` },
  { data: `` },
  { data: `` },
  { data: `` },
  { data: `` },
  { data: `` },
  { data: `` },
  { data: `` },
  { data: `` },
]
const _EXAMPLE2: Array<any> = [
  { data: `` },
]
const _EXAMPLE3: Array<any> = [
  { data: `` },
]
const _EXAMPLE4: Array<any> = [
  { data: `` },
]

const _DATACODE: Array<any> = [
`private data: Array<any> = [
  {"brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
  {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
  {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
  {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
  {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
  {"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj"},
  {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr"},
  {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34"},
  {"brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5"},
  {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"},
  {"brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
  {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
  {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
  {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
  {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
  {"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj"},
  {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr"},
  {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34"},
  {"brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5"},
  {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"},
];`
];

const _DATAFOREXAMPLE: Array<any> = [
  {"brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
  {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
  {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
  {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
  {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
  {"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj"},
  {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr"},
  {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34"},
  {"brand": "Audi", "year": 2000, "color": "Black", "vin": "h54hw5"},
  {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"},
  {"brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
  {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
  {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
  {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
  {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
  {"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj"},
  {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr"},
  {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34"},
  {"brand": "Volvo", "year": 2000, "color": "Black", "vin": "h54hw5"},
  {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"},
];


@Component({
    selector: 'doc-datagrid',
    templateUrl: './datagrid.document.html'
})
export class DataGridDocument  { 
    private componentTag: string = 'DataGrid'
    private version: string = '1.0'; 
    private componentDescription: string = `DataGrid เป็นเครื่องมือช่วยแสดงข้อมูลในรูปแบบตาราง grid`
    private releaseDate: string = '29 March 2017';
    private creditURL: string = 'https://www.primefaces.org/primeng/#/datagrid';
    private credit: string = 'primeng (2.0.5)';   

    private prefixSyntax: string = '<p-dataGrid';
    private attrSyntaxList: Array<any> = _ATTRSYNTAX;
    private suffixSyntax: string = '</p-dataGrid>';
    private attributeList: Array<any> = _ATTRIBUTELIST;
    private eventList: Array<any> = _EVENTLIST;

    private dataForEx = _DATAFOREXAMPLE;
    private codeExample1 = _EXAMPLE1;
    private codeExample2 = _EXAMPLE2;
    private codeExample3 = _EXAMPLE3;
    private codeExample4 = _EXAMPLE4;
    private codeData = _DATACODE;
    
    private displayDialog: boolean;
    private selectedCar: any;

    private selectCar(car: any) {
        this.selectedCar = car;
        this.displayDialog = true;
    }
    
    private onDialogHide() {
        this.selectedCar = null;
    }


}