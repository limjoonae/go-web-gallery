import { Component, Input } from '@angular/core';

const _ATTRIBUTETABLELIST: Array<any> = [
    { require: '*', name: 'value', type: 'array', description: `ใช้สำหรับระบุ data ของ datatable เพื่อแสดงใน datatable`},
    { require: '', name: 'groupField', type: 'string', description: `ใช้สำหรับระบุชื่อของ field ที่ต้องการให้แสดงเป็น group`},
    { require: '', name: 'paginator', type: 'boolean', description: `ใช้ระบุเพื่อให้ตารางแสดงจำนวนหน้า`},
    { require: '', name: 'pageLinks', type: 'number', description: `ใช้สำหรับระบุจำนวนหน้าที่ต้องการให้แสดง`},
    { require: '', name: 'rows', type: 'number', description: `ใช้สำหรับระบุจำนวน row ต่อหน้า`},
    { require: '', name: 'rowsPerPageOptions', type: 'number', description: `ชุดตัวเลขสำหรับกำหนดจำนวน row ที่จะแสดงในหนึ่ง page`},
    { require: '', name: 'rowGroupMode', type: 'string', description: `ใช้สำหรับระบุประเภทของ row group ที่ต้องการให้แสดง มีดังนี้ subheader rowspan `},
    { require: '', name: 'sortMode', type: 'string', description: `ใช้สำหรับระบุประเภทของการ sort มีประเภทดังนี้ single multiple `},
    { require: '', name: 'sortField', type: 'string', description: `ใช้สำหรับระบุชื่อ field ที่ต้องการให้ sort ตั้งแต่แรก`},
    { require: '', name: 'globalFilter', type: 'any', description: `ใช้สำหรับอ้างถึง input box ที่ใช้ในการ search`},
    { require: '', name: 'selectionMode', type: 'string', description: `ใช้สำหรับระบุ Mode ในการเลือกข้อมูล มี 2 ประเภท คือ single multiple`},
    { require: '', name: 'selection', type: 'any', description: `ใช้สำหรับระบุ function มารับข้อมูลที่ถูกเลือก`},
    { require: '', name: 'editable', type: 'boolean', description: `ใช้ระบุเพื่อให้สามารถแก้ไขตารางได้`},
    { require: '', name: 'expandableRows', type: 'boolean', description: `ใช้ระบุเพื่อให้ตารางสามารถ expand ได้`},
    { require: '', name: 'resizableColumns', type: 'boolean', description: `ใช้ระบุเพื่อให้ตารางสามารถ resize column ได้`},
    { require: '', name: 'columnResizeMode', type: 'string', description: `ใช้สำหรับระบุ mode ในการ resize มี 2 mode ดังนี้ fit(ลดขนาดคอลัมพ์อื่นให้เท่าขนาดเดิม) expand(ไม่ลดขนาด)`},
    { require: '', name: 'reorderableColumns', type: 'boolean', description: `ใช้ระบุเพื่อให้ตารางเรียงลำดับให้`},
    { require: '', name: 'scrollable', type: 'boolean', description: `ใช้ระบุเพื่อติดตั้ง scroll ให้แก่ตาราง`},
    { require: '', name: 'scrollHeight', type: 'number', description: `ใช้สำหรับระบุความสูงของ scroll`},
    { require: '', name: 'scrollWidth', type: 'number', description: `ใช้สำหรับระบุความกว้างของ datatable ใช้ร่วมกับการกำหนดความกว้างของ column`},
    { require: '', name: 'virtualScroll', type: 'boolean', description: `ใช้ระบุเพื่อโหลดข้อมูลเพิ่มเติมระหว่าง scroll ใช้ร่วมกับ lazy และ total record`},
    { require: '', name: 'lazy', type: 'boolean', description: `ใช้ระบุให้ตารางโหลดข้อมูลแบบ lazy`},
    { require: '', name: 'responsive', type: 'boolean', description: `ใช้ระบุเพื่อให้ตารางสามารถ responsive ได้`},
    { require: '', name: 'exportFilename', type: 'string', description: `ใช้ระบุชื่อไฟล์ที่ทำการ export `},
];

const _ATTRIBUTECOLUMNLIST: Array<any> = [
    { require: '*', name: 'field', type: 'string', description: `ใช้สำหรับระบุข้อมูลในแต่ละ field`},
    { require: '*', name: 'header', type: 'string', description: `ใช้สำหรับระบุ header ของ column`},
    { require: '', name: 'rowspan', type: 'number', description: `ใช้สำหรับระบุจำนวน row สำหรับ group`},
    { require: '', name: 'colspan', type: 'number', description: `ใช้สำหรับระบุจำนวน column สำหรับ group`},
    { require: '', name: 'sortable', type: 'boolean', description: `ใช้ระบุเพื่อให้สามารถ sort ข้อมูลใน column ที่ต้องการได้`},
    { require: '', name: 'sortField', type: 'string', description: `ใช้สำหรับระบุข้อมูลที่ให้ sort เป็นค่าเริ่มต้น`},
    { require: '', name: 'sortFunction', type: 'function', description: `ใช้สำหรับระบุ aunction มารับข้อมูลเพื่อนำไป sort ต่อตามต้องการ`},
    { require: '', name: 'filter', type: 'boolean', description: `ใช้ระบุเพื่อให้สามารถค้นหาข้อมูลใน column ที่ต้องการได้`},
    { require: '', name: 'filterPlaceholder', type: 'string', description: `ใช้สำหรับระบุ placeholder ในช่อง filter`},
    { require: '', name: 'filterMatchMode', type: 'string', description: `ใช้สำหรับระบุ Mode ในการค้นหาข้อมูล มีประเภทดังนี้ startsWith, contains, endsWidth, equals, in`},
    { require: '', name: 'selectionMode', type: 'string', description: `ใช้สำหรับระบุ Mode ในการเลือกข้อมูล มี 2 ประเภท คือ single multiple`},
    { require: '', name: 'editable', type: 'boolean', description: `ใช้ระบุเพื่อให้สามารถแก้ไข column นั้นได้`},
    { require: '', name: 'frozen', type: 'boolean', description: `ใช้สำหรับระบุเมื่อมีการกำหนด scroll ให้สามารถแช่ column ที่ต้องการได้`},
    { require: '', name: 'style', type: 'string', description: `ใช้สำหรับระบุ style ให้ column ที่ต้องการ`},
    { require: '', name: 'styleClass', type: 'string', description: `ใช้สำหรับระบุ style class ให้ column ที่ต้องการ`},
    { require: '', name: 'hidden', type: 'boolean', description: `ใช้สำหรับกำหนดการแสดงข้อมูลของcolumn `},
];

const _EVENTLIST: Array<any> = [
  { require: '', name: 'onRowClick', type: 'function($event)', description: `เมื่อทำการคลิกแถว จะส่งข้อมูลแถวที่คลิกคืนมา`},
  { require: '', name: 'onRowSelect', type: 'function($event)', description: `เมื่อทำการเลือกแถว จะส่งข้อมูลของแถวที่เลือกคืนมา`},
  { require: '', name: 'onRowUnselect', type: 'function($event)', description: `จะส่งข้อมูลของแถวที่ไม่ถูกเลือกคืนมา`},
  { require: '', name: 'onRowDblclick', type: 'function($event)', description: `จะส่งข้อมูลของแถวที่ถูกดับเบิลคลิกคืนมา`},
  { require: '', name: 'onHeaderCheckboxToggle', type: 'function($event)', description: `จะส่งข้อมูลคืนมาเมื่อ checkbox `},
  { require: '', name: 'onContextMenuSelect', type: 'function($event)', description: `จะส่งข้อมูลของแถวที่ถูกคลิกขวาคืนมา`},
  { require: '', name: 'onColResize	', type: 'function($event)', description: `จะส่งข้อมูลคืนมาเมื่อ resize column`},
  { require: '', name: 'onColReorder', type: 'function($event)', description: `จะส่งข้อมูลคืนมาเมื่อ reorder`},
  { require: '', name: 'onLazyLoad', type: 'function($event)', description: `จะส่งข้อมูลคืนมาเมื่อมี paging sorting filtering ในโหมด lazy`},
  { require: '', name: 'onEditInit', type: 'function($event)', description: `จะส่งข้อมูลของแถวที่ต้องการคืนมา เมื่อมีการเปลี่ยนไปโหมด edit`},
  { require: '', name: 'onEdit', type: 'function($event)', description: `จะส่งข้อมูลของแถวที่ต้องการคืนมา เมื่อมีการแก้ไขข้อมูล`},
  { require: '', name: 'onEditComplete', type: 'function($event)', description: `จะส่งข้อมูลของแถวที่ต้องการคืนมา เมื่อแก้ไขข้อมูลเสร็จสิ้น`},
  { require: '', name: 'onEditCancel', type: 'function($event)', description: `จะส่งข้อมูลของแถวที่ต้องการคืนมา เมื่อมีการยกเลิกการแก้ไข`},
  { require: '', name: 'onPage', type: 'function($event)', description: `จะส่ง event คืนมา เมื่อมีการแบ่งหน้า`},
  { require: '', name: 'onSort', type: 'function($event)', description: `จะส่ง event คืนมาเมื่อมีการ sort ใน column`},
  { require: '', name: 'onFilter', type: 'function($event)', description: `จะส่งค่า Filters คืนมา เมื่อมีการ Filters`},
  { require: '', name: 'onRowExpand', type: 'function($event)', description: `จะส่งข้อมูลของแถวที่ต้องการคืนมา เมื่อแถวนั้นมีการ expanded`},
  { require: '', name: 'onRowCollapse', type: 'function($event)', description: `จะส่งข้อมูลของแถวที่ต้องการคืนมา เมื่อแถวนั้นมีการ collapsed`},
  { require: '', name: 'onRowGroupExpand', type: 'function($event)', description: `จะส่งข้อมูลของกลุ่มแถวที่ต้องการคืนมา เมื่อมีการ expanded`},
  { require: '', name: 'onRowGroupCollapse', type: 'function($event)', description: `จะส่งข้อมูลของกลุ่มแถวที่ต้องการคืนมา เมื่อมีการ collapsed`}
];

const _ATTRSYNTAX: Array<any> = [
  { data: `` },
  { data: `     [value]="data_of_datatable"` },
  { data: `     [groupField="name_of_field]`},
  { data: `     [paginator="true_or_false"] [pageLinks="number_of_page"] [rowsPerPageOptions="rows_per_page"]` },
  { data: `     [rowGroupMode="subheader_or_rowspan"] [sortMode="single_or_multiple"] [sortField="name_of_field"]` },
  { data: `     [globalFilter]="name_of_searchbox"` },
  { data: `     [selectionMode="single_or_multiple"] [(selection)="selected"]` },
  { data: `     [editable]="true_or_false"` },
  { data: `     [expandableRows="true_or_false"]` },
  { data: `     [resizableColumns="true_or_false"] [columnResizeMode="expand_or_fit"]` },
  { data: `     [reorderableColumns="true_or_false"]` },
  { data: `     [scrollable="true_or_false"] [scrollHeight="height_of_scroll"] [scrollWidth="width_of_scroll"] [rows="number_of_row"] [virtualScroll="virtual_scroll"]` },
  { data: `     [lazy="true_or_false"] [(onLazyLoad)="functionLoadLazy($event)"]` },
  { data: `     [responsive="true_or_false]` },
  { data: `     [exportFilename="filename"]` },
  { data: `>` },
  { data: ` <p-header> header of table </p-header>` },
  { data: ` <p-column field="field" header="header_of_column" ` },
  { data: `     [rowspan="number"] [colspan="number"]` },
  { data: `     [sortable="true_or_false"] [sortField="name_of_field"] [sortFunction="function"]` },
  { data: `     [filter="true_or_false"] [filterPlaceholder="placeholder"] [filterMatchMode="filter_match_mode"]` },
  { data: `     [selectionMode="single_or_multiple"]` },
  { data: `     [editable="true_or_false"]` },
  { data: `     [frozen="true_or_false"]` },
  { data: `     [style="inline_style_of_column"] [styleClass="style_class_of_column"]` },
  { data: `     >` },
  { data: ` </p-column>` },
  { data: ` <p-footer> footer of table </p-footer>` }
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
]

const _APPMODULE: Array<any> = [
  { data: `import { DataTableModule } from 'primeng';` },
  { data: `@NgModule({ 
   imports: [  
           .................. 
           DataTableModule
           .................. 
   ] 
  }) `}
]

const _styleLine_html: Array<any> = [
'<link rel="stylesheet" type="text/css" href="http://10.182.247.73/go-cdn-dev/node_modules/2.4.0/primeng/resources/themes/bootstrap/theme.css" />',
'<link rel="stylesheet" type="text/css" href="http://10.182.247.73/go-cdn-dev/node_modules/2.4.0/primeng/resources/primeng.min.css" />'
];

const _styleLine_css: Array<any> = [
  `@import url('http://10.182.247.73/go-cdn-dev/node_modules/2.4.0/primeng/resources/themes/bootstrap/theme.css');`,
  `@import url('http://10.182.247.73/go-cdn-dev/node_modules/2.4.0/primeng/resources/primeng.min.css');`
];

const _DATA1: Array<any> = [
  `private dataTable1: Array<any> = [ 
  {"brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
  {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
  {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
  {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
  {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34"}
];`,
];

const _DATA2: Array<any> = [
`private datatable2: Array<any> = [
  {"brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
  {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
  {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
  {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
  {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
  {"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj"},
  {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr"},
  {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34"},
  {"brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5"},
  {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"}
];`
];
const _EXAMPLE1: Array<any> = [
  { data: `app.component.ts` },  
  { data: `` },
  { data: `private cols1: any = [
    {field: 'vin', header: 'Vin'},
    {field: 'year', header: 'Year'},
    {field: 'brand', header: 'Brand'},
    {field: 'color', header: 'Color'}
  ];` },
  { data: `` },
  { data: `app.component.html` },
  { data: `` },
  { data: `<p-dataTable [value]="dataTable1">` },
  { data: `   <p-column *ngFor="let col of cols1" [field]="col.field" [header]="col.header"></p-column>` },
  { data: `</p-dataTable>` },


]
const _EXAMPLE2: Array<any> = [
  { data: `app.component.html` },  
  { data: `
<p-dataTable [value]="dataTable2" [rows]="5" [paginator]="true" [rowsPerPageOptions]="[5,10]" sortMode="multiple">
  <p-header>List of Cars</p-header>
  <p-column field="vin" header="Vin" [sortable]="true"></p-column>
  <p-column field="year" header="Year" [sortable]="true"></p-column>
  <p-column field="brand" header="Brand" [sortable]="true"></p-column>
  <p-column field="color" header="Color" [sortable]="true">
    <ng-template let-col let-dataTable2="rowData" pTemplate="body">
      <span [style.color]="dataTable2[col.field]">{{dataTable2[col.field]}}</span>
    </ng-template>
  </p-column>
</p-dataTable>` }
]
const _EXAMPLE3: Array<any> = [
  { data: `app.component.ts` },  
  { data: `` },
  { data: `private selectedDatas: Array<any>;` },
  { data: `` },
  { data: `app.component.html` },
  { data: `
<div class="ui-widget-header" style="padding:4px 10px;border-bottom: 0 none">
  <div class="row"> 
    <i class="col col-md-1 fa fa-search" ></i> 
    <input class="col col-md-10" #gb type="text"  placeholder="Global Filter">
  </div>
</div>` },
  { data: `
<p-dataTable [value]="dataTable2" [rows]="5" [paginator]="true" [globalFilter]="gb" [editable]="true">
  <p-column field="vin" header="Vin (startWith)" [filter]="true" filterPlaceholder="Search" [editable]="true"></p-column>
	<p-column field="year" header="Year (equals)" [editable]="true" [filter]="true" filterPlaceholder="Search" filterMatchMode='equals'></p-column>
	<p-column field="brand" header="Brand (contain)" [editable]="true"  [filter]="true" filterPlaceholder="Search" filterMatchMode='contains'></p-column>
	<p-column field="color" header="Color (endsWith)" [editable]="true" [filter]="true" filterPlaceholder="Search" filterMatchMode='endsWith'></p-column>
  <p-footer>
    <ul>
      <li *ngFor="let data of selectedDatas" style="text-align: left">{{data.vin + ' - ' + data.brand + ' - ' + data.year + ' - ' + data.color}}</li>
    </ul>
  </p-footer>
</p-dataTable>
` },

];
const _EXAMPLE4: Array<any> = [
  { data: `app.component.html` },
  { data: `
<p-dataTable [value]="dataTable2" expandableRows="true" resizableColumns="true" reorderableColumns="true">
  <p-header>List of Cars</p-header>
  <p-column expander="true" styleClass="col-icon"></p-column>
  <p-column field="vin" header="Vin" [sortable]="true"></p-column>
  <p-column field="year" header="Year" [sortable]="true"></p-column>
  <p-column field="brand" header="Brand" [sortable]="true"></p-column>
  <p-column field="color" header="Color" [sortable]="true"></p-column>` },
  { data: `   <ng-template let-dataTable2 pTemplate="rowexpansion">
    <div class="container" >
      <div class="row">
        <div class="col-md-2 label">Vin: </div>
        <div class="col-md-10">{{dataTable2.vin}}</div>
      </div>
      <div class="row">
        <div class="col-md-2 label">Year: </div>
        <div class="col-md-10">{{dataTable2.year}}</div>
      </div>
      <div class="row">
        <div class="col-md-2 label">Brand: </div>
        <div class="col-md-10">{{dataTable2.brand}}</div>
      </div>
      <div class="row">
        <div class="col-md-2 label">Color: </div>
        <div class="col-md-10">{{dataTable2.color}}</div>
      </div>
    </div>
  </ng-template>
</p-dataTable>` }
];

const _EXAMPLE5: Array<any> = [
  { data: `app.component.html` },
  { data: `
<p-dataTable #dt [value]="dataTable5" exportFilename="dataTableEX5" scrollable="true" scrollHeight="150px" scrollWidth='480px'>
  <p-header>
    <div >
      <go-button label="CSV" iconName="file-o" buttonColor="primary" (click)="dt.exportCSV()"></go-button>
    </div>
  </p-header>
  <p-column field="vin" header="Vin" [style] = "{width:'160px'}" ></p-column>
  <p-column field="year" header="Year" [style] = "{width:'160px'}" ></p-column>
  <p-column field="brand" header="Brand" [style] = "{width:'160px'}" ></p-column>
  <p-column field="color" header="Color" [style] = "{width:'160px'}" ></p-column>
</p-dataTable>

 
*ส่วนเสริมสำหรับการกำหนดความสูงของ Scroll ให้เหมาะสมกับจำนวนข้อมูล
 component.ts
  private defaultScrollHeight : number = 100;

  scrollHeightCal(data : Array<any>) : string{
      let scrollHeight : number;
      let enlargeScroll : number;
      enlargeScroll = data.length / 5;
      if(enlargeScroll > 1){
        scrollHeight = this.defaultScrollHeight + 100 * (enlargeScroll - 1);
        return scrollHeight + 'px';
          } 
      else
      return '100px';
    }
` }
];

const _EXAMPLE6: Array<any> = [
  { data: `app.component.ts` },  
  { data: `` },
  { data: `private stacked: boolean;` },
  { data: `
toggle() {
  this.stacked = !this.stacked;
}` },
  { data: `` },
  { data: `app.component.html` },
  { data: `
<go-button label="Toggle" iconName="list" buttonColor="primary" (click)="toggle()"></go-button>
<p-dataTable [value]="dataTable6" [rows]="5" [paginator]="true" [responsive]="true" [stacked]="stacked">
  <p-header>Responsive</p-header>
  <p-column field="vin" header="Vin"></p-column>
  <p-column field="year" header="Year"></p-column>
  <p-column field="brand" header="Brand"></p-column>
  <p-column field="color" header="Color"></p-column>
</p-dataTable>
    ` },
];

const _EXAMPLE7: Array<any> = [
  { data: `app.component.ts` },  
  { data: `` },
  { data: `private selectedDatas: Array<any>;` },
  { data: `` },
  { data: `app.component.html` },
  { data: `
<p-dataTable [value]="dataTable3" selectionMode="multiple" [(selection)]="selectedDatas">
<p-column field="vin" header="Vin"></p-column>
<p-column field="year" header="Year" ></p-column>
<p-column field="brand" header="Brand" ></p-column>
<p-column field="color" header="Color" ></p-column>
<p-footer>
    <ul>
      <li *ngFor="let data of selectedDatas" style="text-align: left">{{data.vin + ' - ' + data.brand + ' - ' + data.year + ' - ' + data.color}}</li>
    </ul>
  </p-footer>
</p-dataTable>
` },

];

const _DATATABLE2: Array<any> = [
  {"brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
  {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
  {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
  {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
  {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
  {"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj"},
  {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr"},
  {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34"},
  {"brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5"},
  {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"}
];

const _DATATABLE1: Array<any> = [
  {"brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
  {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
  {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
  {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
  {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34"}
];

const _COLS1: any = [
    {field: 'vin', header: 'Vin'},
    {field: 'year', header: 'Year'},
    {field: 'brand', header: 'Brand'},
    {field: 'color', header: 'Color'}
  ];


@Component({
    selector: 'doc-datatable',
    templateUrl: './datatable.document.html'
})
export class DataTableDocument  { 
    private componentTag: string = 'DataTable'
    private version: string = '1.0'; 
    private componentDescription: string = `DataTables เป็นเครื่องมือช่วยสร้างตารางแสดงข้อมูลได้อย่างง่ายและสะดวก รวมทั้งมี feature ที่สามารถเลือกใช้ในการใช้งานต่างๆได้`
    private releaseDate: string = '29 March 2017';
    private creditURL: string = 'https://www.primefaces.org/primeng/#/datatable';
    private credit: string = 'primeng (2.0.5)';   

    private prefixSyntax: string = '<p-dataTable';
    private attrSyntaxList: Array<any> = _ATTRSYNTAX;
    private suffixSyntax: string = '</p-dataTable>';
    private attributeTableList: Array<any> = _ATTRIBUTETABLELIST;
    private attributeColumnList: Array<any> = _ATTRIBUTECOLUMNLIST;
    private eventList: Array<any> = _EVENTLIST;
    private systemjs: Array<any> = _SYSTEMJS;
    private appModule : Array<any> = _APPMODULE;

    private data1 = _DATA1;
    private data2 = _DATA2;
    private codeExample1 = _EXAMPLE1;
    private codeExample2 = _EXAMPLE2;
    private codeExample3 = _EXAMPLE3;
    private codeExample4 = _EXAMPLE4;
    private codeExample5 = _EXAMPLE5;
    private codeExample6 = _EXAMPLE6;
    private codeExample7 = _EXAMPLE7;

    private dataTable1 = _DATATABLE1;
    private cols1 = _COLS1;
    private dataTable2 = _DATATABLE2;
    private dataTable3 = _DATATABLE2;
    private dataTable4 = _DATATABLE1;
    private dataTable5 = _DATATABLE2;
    private dataTable6 = _DATATABLE2;
    private styleLine_html = _styleLine_html;
    private styleLine_css = _styleLine_css;

    private selectedDatas: Array<any>;
    private defaultScrollHeight : number = 100;

    private stacked: boolean;

    toggle() {
        this.stacked = !this.stacked;
    }
    
    scrollHeightCal(data : Array<any>) : string{
      let scrollHeight : number;
      let enlargeScroll : number;
      enlargeScroll = data.length / 5;
      if(enlargeScroll > 1){
        scrollHeight = this.defaultScrollHeight + 100 * (enlargeScroll - 1);
        return scrollHeight + 'px';
          } 
      else
      return '100px';
    }

    
}