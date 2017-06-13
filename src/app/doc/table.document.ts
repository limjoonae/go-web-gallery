import { Component } from '@angular/core';

const ATTRIBUTELIST: Array<any> = [
    { require: '', name: 'class', type: 'string', description: `ใช้สำหรับตั้งค่ารูปแบบ table โดยใช้ class ของ bootstrap` },
    { require: '', name: 'paging', type: 'boolean', description: `ใช้สำหรับตั้งค่าการใช้งานของการจัดหน้าของตาราง` },
    { require: '', name: 'itemsPerPage', type: 'number', description: `ใช้สำหรับระบุค่าของจำนวนแถวในตารางที่ต้องการแสดงในแต่ละหน้า โดยจะสามารถใช้ได้เมื่อ ‘paging’ ได้เปิดใช้งานเท่านั้น` },
    { require: '', name: 'maxSize', type: 'number', description: `ใช้สำหรับระบุค่าของจำนวนหน้าที่ต้องการให้แสดงในส่วนของหมายเลขหน้า โดยจะสามารถใช้ได้เมื่อ ‘paging’ ได้เปิดใช้งานเท่านั้น` },
    { require: '', name: 'showCard', type: 'boolean', description: `ใช้สำหรับตั้งค่าการแสดงของ card ซึ่งใช้แสดงหน้าของ table ที่กำลังดูอยู่ สามารถใช้ได้เมื่อ ‘paging’ ได้เปิดใช้งานเท่านั้น` },
    { require: '', name: 'cardClass', type: 'string', description: `ใช้สำหรับตั้งค่ารูปแบบ card โดยใช้ class ของ bootstrap สามารถใช้ได้เมื่อ ‘showCard’ ได้เปิดใช้งานเท่านั้น` },
    { require: '', name: 'filterAll', type: 'boolean', description: `ใช้สำหรับตั้งค่าการแสดงของช่อง input สำหรับกรองข้อมูลทั้งตาราง ซึ่งจะแสดงอยู่ที่ด้านบนของตาราง` },
    { require: '', name: 'columns', type: 'array of object', description: `ใช้สำหรับตั้งค่าข้อมูลของหัวตาราง โดย 1 object จะถือเป็นข้อมูล 1 คอลัมน์` },
    { require: '', name: '--title', type: 'string', description: `ใช้สำหรับกำหนดชื่อที่แสดงบนหัวตาราง` },
    { require: '', name: '--name', type: 'string', description: `ใช้สำหรับกำหนดชื่อตัวแปรของหัวตาราง ซึ่งต้องใช้ในการกำหนดข้อมูลของ data` },
    { require: '', name: '--sort', type: 'string', description: `ใช้สำหรับกำหนดการจัดเรียงของตารางตามคอลัมน์ที่กำหนดไว้ในตอนสร้างขึ้น โดยสามารถใช้งานได้เพียงคอลัมน์เดียวเท่านั้น และหากทำการตั้งค่าตัวแปรนี้เป็น false จะเป็นการปิดไม่ให้ใช้งาน sort จากคอลัมน์นี้ โดยสามารถใส่ได้ 2 ค่าคือ 'asc' และ 'desc'` },
    { require: '', name: '--filtering', type: 'object', description: `ใช้กำหนดค่าของการ filter ข้อมูลในตาราง โดยค่าของ placeholder ใช้สำหรับใส่ข้อความชั่วคราวในช่อง และ filterString ใช้กำหนดค่าที่ต้องการ filter เริ่มต้นในช่อง โดยหากไม่มีการใช้ object นี้ จะถือเป็นการปิดไม่ใช้การ filter สำหรับคอลัมน์นั้นๆ` },
    { require: '', name: '--width', type: 'string', description: `ใช้กำหนดค่าความกว้างของคอลัมน์นั้นๆที่จะให้แสดงผล โดยให้ใส่ในรูปแบบของ 'NNpx' เช่น '100px' เป็นต้น (*ควรใช้คู่กับ bootstrap class ชื่อ table-responsive)` },
    { require: '', name: '--maxWidth', type: 'string', description: `ใช้กำหนดค่าความกว้างสูงสุดของคอลัมน์นั้นๆที่สามารถแสดงผลได้ โดยให้ใส่ในรูปแบบของ 'NNpx' เช่น '100px' เป็นต้น (หากใส่ร่วมกับ width จะถือว่าให้ width ใช้งาน)` },
    { require: '', name: '--dateFormat', type: 'string', description: `ใช้สำหรับกำหนดรูปแบบของวันที่เพื่อใช้ในการแสดง โดยสามารถดูได้จากด้านล่าง หากไม่มีการกำหนดจะถือว่าค่าในคอลัมน์นั้นเป็น string แทน` },
    { require: '', name: '--yearAdditional', type: 'string', description: `ใช้สำหรับเพิ่มจำนวนปีเพื่อใช้ในการแสดงผล โดยค่าเริ่มต้นของจำนวนปีที่แสดงจะเป็นคริสตศักราช (หากต้องการแก้ไขเป็นพุทธศักราชให้ใส่ค่านี้ลงไป 543)` },
    { require: '', name: 'data', type: 'array of object', description: `ใช้สำหรับใส่ข้อมูลลงไปในตารางเพื่อทำการแสดง โดยตัวแปรของแต่ละ object จะต้องตรงกับ column name ที่ได้กำหนดไว้ และหาก object ไหนไม่มีจะถือเป็นข้อมูลว่าง` },
    { require: '', name: 'useFixedData', type: 'boolean', description: `ใช้สำหรับตั้งค่าให้ตารางแสดงข้อมูลทั้งหมดตามค่า data ที่ใส่เข้าไป เหมาะกับการใช้เพื่อให้มีการควบคุมตารางจากภายนอก` },
    { require: '', name: 'datalength', type: 'number', description: `ค่านี้จะถูกใช้เมื่อ useFixedData เป็น true เท่านั้น โดยจะเป็นการบังคับกำหนดค่าจำนวนข้อมูลทั้งหมดที่มีเพื่อให้ pagination แสดงผลได้อย่างถูกต้อง` },
    { require: '', name: 'onCellClicked($event)', type: 'function(event)', description: `ใช้สำหรับรับค่าของช่องเมื่อมีการถูกคลิก` },
    { require: '', name: 'onTableChanged($event)', type: 'function(event)', description: `ใช้สำหรับรับค่าการเปลี่ยนแปลงเมื่อตารางมีการเปลี่ยนแปลงเกิดขึ้น เช่น มีการเปลี่ยนแปลงลำดับการเรียง เป็นต้น` },
];

const DATEFORMATLIST: Array<any> = [
    { format: 'd', description: 'วันที่ในเดือน (เป็นตัวเลขที่ไม่ขึ้นต้นด้วย 0)' },
    { format: 'dd', description: 'วันที่ในเดือน (เป็นตัวเลข 2 ตำแหน่ง)' },
    { format: 'm', description: 'เลขที่ของเดือน (เป็นตัวเลขที่ไม่ขึ้นต้นด้วย 0)' },
    { format: 'mm', description: 'เลขที่ของเดือน (เป็นตัวเลข 2 ตำแหน่ง)' },
    { format: 'y', description: 'เลขปี (เป็นตัวเลข 2 ตำแหน่ง)' },
    { format: 'YY', description: 'เลขปี (เป็นตัวเลข 4 ตำแหน่ง)' },
    { format: `'...'`, description: 'ตัวอักษรต่างๆ' },
    { format: '"', description: 'เครื่องหมายคำพูด' },
    { format: 'อย่างอื่นทั้งหมด', description: 'ตัวอักษรต่างๆ' },
];

const SYSTEMJSLINE: Array<any> = [
    `map: {`,
    `   ..........`,
    `   'ng2-table': 'npm:ng2-table',`,
    `   'ng2-bootstrap': 'npm:ng2-bootstrap',`,
    `   'moment': 'npm:moment/moment.js',`,
    `   'go-table': 'go:table/{version}',`,
    `   ..........`,
    `},`,
    `packages: {`,
    `   ..........`,
    `   'ng2-table': {`,
    `      main: './ng2-table.js',`,
    `      defaultExtension: 'js'`,
    `   },`,
    `   'ng2-bootstrap': {`,
    `      main: './bundles/ng2-bootstrap.umd.js',`,
    `      defaultExtension: 'js'`,
    `   },`,
    `   'go-table': {`,
    `      main: './table.component.js',`,
    `      defaultExtension: 'js'`,
    `   },`,
    `   ..........`,
    `}`,
];

const APPMODULELINE: Array<any> = [
    `import { FormsModule } from '@angular/forms';`,
    `import { PaginationModule, TabsModule } from 'ng2-bootstrap';`,
    `import { Ng2TableModule } from 'ng2-table';`,
    `import { TableComponent } from 'go-table';`,
    ``,
    `@NgModule({ `,
    `   declarations: [`,
    `   ..........`,
    `   TableComponent`,
    `   ..........`,
    `],`,
    `   imports: [`,
    `   ..........`,
    `   FormsModule,`,
    `   PaginationModule.forRoot(),`,
    `   TabsModule.forRoot(),`,
    `   Ng2TableModule,`,
    `   ..........`,
    `]})`
];


@Component({
    selector: 'table-document',
    templateUrl: './table.document.html'
})
export class TableDocument {

    private componentTag: string = '<go-table>';
    private componentDescription: string = `ใช้สำหรับสร้างตารางที่สามารถจัดเรียง ค้นหา และจัดรูปแบบหน้าได้`;
    private version: string = '1.0';
    private releaseDate: string = '22/12/2016';
    private prefixSyntax: string = `<go-table `;
    private attrSyntax: string = `[class="table_bootstrap_class"] [[paging]="show_paging"] 
        [[itemsPerPage]="num_itemPerPage"]  [[maxSize]="max_numpage_show"] [[showCard]="show_page_card"] 
        [cardClass="card_bootstrap_class"] [[filterAll]="show_allcolumns_filter"] 
        [columns]="header_columns" [data]="table_data" [[useFixedData]="is_data_fixed"] 
        [[datalength]="total_data_number"] [(onCellClicked)="onCellClicked($event)"] 
        [(onTableChanged)="tableChanged($event)]"`;
    private suffixSyntax: string = `></go-table>`;
    private columnsSyntax: string = `columns:Array<any> = [ {
        title:'column_header_title', name:'column_name', 
        sort:'sort_type', filtering:{placeholder='filter_input_placeholder', filterString='filter_input_string'},
        width:'column_width', maxWidth:'column_max_width', dateFormat:'date_format',
        yearAdditional:'additional_year_number' } ];`;
    private dataSyntax: string = `data: Array<any> = [ {
        column_name_1:'data_of_column_1', column_name_2:'data_of_column_2', … } ];`;

    private attributeList = ATTRIBUTELIST;
    private dateFormatList = DATEFORMATLIST;
    private appModuleLine = APPMODULELINE;
    private systemjsLine = SYSTEMJSLINE;
    private appModuleDetail: string = `app.module.ts`;
    private systemJSDetail: string = `systemjs.config.js`;

    private introduction_example = "ในตัวอย่างนี้ จะใช้ Data ชุดเดียวกันทั้งหมด ตามด้านล่างนี้ <br>*หมายเหตุ สำหรับช่อง startDate จะมีประเภทของตัวแปร Date";

    code_1: string = `<go-table class="table table-striped table-border table-hover table-sm" 
    [paging]=true [itemsPerPage]=10	[maxSize]=3 [showCard]="true" cardClass="card-block card-header card-inverse" 
    [filterAll]="false" [columns]="columns_1" [data]="data" (onCellClicked)="cellClick($event)"></go-table>`;
    code_2: string = `<go-table class="table table-striped table-border table-sm" [paging]=false 
    [filterAll]=true [columns]="columns_2" [data]="data"></go-table>`;
    code_3: string = `<go-table class="table table-striped table-border table-sm table-responsive" 
    [paging]="true" [itemsPerPage]=4 [maxSize]=2 [showCard]="true" 
    cardClass="card-block card-header card-inverse" [filterAll]="false" 
    [columns]="columns_3" [data]="data"></go-table>`;
    code_4: string = `<go-table class="table table-striped table-border table-sm" [useFixedData]="true" 
    [paging]="true" [itemsPerPage]=1 [maxSize]=4 [datalength]=6 [showCard]="true" 
    cardClass="card-block card-header card-inverse" [filterAll]="true" [columns]="columns_4"
	[data]="data_4" (onTableChanged)="tableChanged($event)"></go-table>`;

    data_code: string = `    data: Array<any> = [
        { 'name': 'Abc', 'surname': '<b>Cba</b>', 'no': '01', 'startDate': new Date('2015/1/1') },
        { 'name': 'Bar', 'surname': '<i>Foo</i>', 'no': '02', 'startDate': new Date('2015/2/1') },
        { 'name': 'Foo', 'no': '03', 'startDate': new Date('2015/1/2') },
        { 'name': 'Aaa', 'surname': 'Fff', 'no': '04' },
        { 'name': 'Bbb', 'no': '05', },
        { 'name': 'Ccc', 'surname': 'Ccc', 'no': '06', 'startDate': new Date('2015/7/8') }
    ];`;

    column_1_code: string = `columns_1: Array<any> = [
        { title: 'Name', name: 'name', filtering: { placeholder: 'Filter by name' } },
        { title: 'Surname', name: 'surname', sort: false }
    ];
    cellClick(event: any) {
        this.click = String(event['row'][event.column]);
    }`;

    column_2_code: string = `columns_2: Array<any> = [
        { title: 'Name', name: 'name' },
        { title: 'Id', name: 'no', sort: 'asc' },
        { title: 'Start Date', name: 'startDate', dateFormat: 'dd-mm-yy' }
    ]; `;

    column_3_code: string = `columns_3: Array<any> = [
        { title: 'Name', name: 'name', filtering: { placeholder: 'name', filterString: 'Aaa' }, maxWidth: '100px' },
        { title: 'Id', name: 'no', width: '100px'  },
        { title: 'Start Date', name: 'startDate', dateFormat: 'mm/dd/yy', yearAdditional: 543, width: '100px'  }
   ]; `;

    column_4_code: string =
    `columns_4: Array<any> = [
        { title: 'Name', name: 'name', filtering: { filterString: '' } },
        { title: 'Id', name: 'no' },
        { title: 'Start Date', name: 'startDate', dateFormat: 'dd/mm/yy', yearAdditional: 543 }
    ]; 
    tableChanged(event: any) {
        //สำหรับตัวอย่างนี้มี 3 คอลัมน์ ค่า output filter และ sort จึงมี 3 ค่าเช่นกัน
        this.filterAll = event.filterString; //ค่า output ที่เกิดขึ้นจากการ filter แบบรวม
        //ค่า output ที่เกิดจากการ filter แบบแยกคอลัมน์
        this.filter_1 = event.columns[0].filtering ? event.columns[0].filtering.filterString : '';
        this.filter_2 = event.columns[1].filtering ? event.columns[1].filtering.filterString : '';
        this.filter_3 = event.columns[2].filtering ? event.columns[2].filtering.filterString : '';
        //ค่า output ที่เกิดจากการเปลี่ยน sort
        this.sort_1 = event.columns[0].sort;
        this.sort_2 = event.columns[1].sort;
        this.sort_3 = event.columns[2].sort;
        this.page = event.page; // ค่า output เมื่อมีการเปลี่ยนหน้า page ด้านล่าง
        //data ที่แสดงใน table จะเปลี่ยนแปลงตามค่า page โดยหากกดที่ page หน้า 2 ก็จะดึงข้อมูลแถวที่ 2 มาแสดง
        this.data_4 = [this.data[this.page - 1]]; 
    }`;

    columns_1: Array<any> = [
        { title: 'Name', name: 'name', filtering: { placeholder: 'Filter by name' } },
        { title: 'Surname', name: 'surname', sort: false }
    ];
    columns_2: Array<any> = [
        { title: 'Name', name: 'name' },
        { title: 'Id', name: 'no', sort: 'asc' },
        { title: 'Start Date', name: 'startDate', dateFormat: 'dd-mm-yy'}
    ];
    columns_3: Array<any> = [
        { title: 'Name', name: 'name', filtering: { placeholder: 'name', filterString: 'Aaa' }, maxWidth: '100px' },
        { title: 'Id', name: 'no', width: '100px' },
        { title: 'Start Date', name: 'startDate', dateFormat: 'mm/dd/yy', yearAdditional: 543, width: '100px' }
    ];
    columns_4: Array<any> = [
        { title: 'Name', name: 'name', filtering: { filterString: '' } },
        { title: 'Id', name: 'no',filtering: { filterString: '' } },
        { title: 'Start Date', name: 'startDate', dateFormat: 'dd/mm/yy', yearAdditional: 543 ,filtering: { filterString: '' }}
    ];

    data: Array<any> = [
        { 'name': 'Abc', 'surname': '<b>Cba</b>', 'no': '01', 'startDate': new Date('2015/1/1') },
        { 'name': 'Bar', 'surname': '<i>Foo</i>', 'no': '02', 'startDate': new Date('2015/2/1') },
        { 'name': 'Foo', 'no': '03', 'startDate': new Date('2015/1/2') },
        { 'name': 'Aaa', 'surname': 'Fff', 'no': '04' },
        { 'name': 'Bbb', 'no': '05', },
        { 'name': 'Ccc', 'surname': 'Ccc', 'no': '06', 'startDate': new Date('2015/7/8') }
    ]

    click: string;
    cellClick(event: any) {
        this.click = String(event['row'][event.column]);
    }

    constructor() {
        this.data_4 = [this.data[0]];
    }

    filterAll: string;
    filter_1: string;
    filter_2: string;
    filter_3: string;
    sort_1: string;
    sort_2: string;
    sort_3: string;
    page: number;
    data_4: any;
    tableChanged(event: any) {
        //สำหรับตัวอย่างนี้มี 3 คอลัมน์ ค่า output filter และ sort จึงมี 3 ค่าเช่นกัน
        this.filterAll = event.filterString; //ค่า output ที่เกิดขึ้นจากการ filter แบบรวม
        //ค่า output ที่เกิดจากการ filter แบบแยกคอลัมน์
        this.filter_1 = event.columns[0].filtering ? event.columns[0].filtering.filterString : '';
        this.filter_2 = event.columns[1].filtering ? event.columns[1].filtering.filterString : '';
        this.filter_3 = event.columns[2].filtering ? event.columns[2].filtering.filterString : '';
        //ค่า output ที่เกิดจากการเปลี่ยน sort
        this.sort_1 = event.columns[0].sort;
        this.sort_2 = event.columns[1].sort;
        this.sort_3 = event.columns[2].sort;
        this.page = event.page; // ค่า output เมื่อมีการเปลี่ยนหน้า page ด้านล่าง
        //data ที่แสดงใน table จะเปลี่ยนแปลงตามค่า page โดยหากกดที่ page หน้า 2 ก็จะดึงข้อมูลแถวที่ 2 มาแสดง
        this.data_4 = [this.data[this.page - 1]];
    }

}