import { Component } from '@angular/core';

const ATTRIBUTELIST: Array<any> = [
    { require: '', name: 'class', type: 'string', description: `ใช้สำหรับตั้งค่ารูปแบบ table โดยใช้ class ของ bootstrap` },
    { require: '', name: 'paging', type: 'boolean', description: `ใช้สำหรับกำหนดว่าให้มีการแบ่งหน้าของตารางหรือไม่ มีค่า default เป็น true` },
    { require: '', name: 'itemsPerPage', type: 'number', description: `ใช้สำหรับระบุจำนวน row ข้อมูลที่แสดงใน 1 หน้าตาราง ใช้งานได้เมื่อเปิดใช้งาน paging. มีค่า default เท่ากับ 10` },
    { require: '', name: 'maxSize', type: 'number', description: `ใช้สำหรับระบุค่าของจำนวนหน้าที่ต้องการให้แสดงในส่วนของหมายเลขหน้า หากกำหนดน้อยกว่าจำนวนหน้าทั้งหมด ปุ่มหน้าอื่นๆจะถูกซ่อนเป็น ... โดยจะสามารถใช้ได้เมื่อเปิดใช้งาน paging` },
    { require: '', name: 'showCard', type: 'boolean', description: `ใช้สำหรับกำหนดว่าจะให้แสดง card หรือไม่ (card คือ แถบแสดงเลขหน้าปัจจุบันที่ถูกเปิดอยู่ของตาราง) ใช้งานได้เมื่อเปิดใช้งาน paging. มีค่า default เป็น true` },
    { require: '', name: 'cardClass', type: 'string', description: `ใช้สำหรับตั้งค่ารูปแบบ card โดยใช้ class ของ bootstrap สามารถใช้ได้เมื่อ ‘showCard’ ได้เปิดใช้งานเท่านั้น` },
    { require: '', name: 'filterAll', type: 'boolean', description: `ใช้สำหรับตั้งค่าการแสดงของช่อง input สำหรับกรองข้อมูลทั้งตาราง ซึ่งจะแสดงอยู่ที่ด้านบนของตาราง มีค่า default เป็น true` },
    { require: '', name: 'columns', type: 'array of object', description: `ใช้สำหรับตั้งค่าข้อมูลของหัวตาราง โดย 1 object จะถือเป็นข้อมูล 1 คอลัมน์` },
    { require: '', name: '--title', type: 'string', description: `ใช้สำหรับกำหนดชื่อที่แสดงบนหัวตาราง` },
    { require: '', name: '--name', type: 'string', description: `ใช้สำหรับกำหนดชื่อตัวแปรของหัวตาราง ซึ่งต้องใช้ในการกำหนดข้อมูลของ data` },
    { require: '', name: '--sort', type: 'string', description: `ใช้สำหรับกำหนดการจัดเรียงของตารางตามคอลัมน์ที่กำหนดไว้ในตอนสร้างขึ้น โดยสามารถใช้งานได้เพียงคอลัมน์เดียวเท่านั้น และหากทำการตั้งค่าตัวแปรนี้เป็น false จะเป็นการปิดไม่ให้ใช้งาน sort จากคอลัมน์นี้ โดยสามารถใส่ได้ 2 ค่าคือ 'asc' และ 'desc'` },
    { require: '', name: '--filtering', type: 'object', description: `ใช้กำหนดค่าของการ filter ข้อมูลในตาราง โดยค่าของ placeholder ใช้สำหรับใส่ข้อความชั่วคราวในช่อง และ filterString ใช้กำหนดค่าที่ต้องการ filter เริ่มต้นในช่อง โดยหากไม่มีการใช้ object นี้ จะถือเป็นการปิดไม่ใช้การ filter สำหรับคอลัมน์นั้นๆ` },
    { require: '', name: '--width', type: 'string', description: `ใช้กำหนดค่าความกว้างของคอลัมน์นั้นๆที่จะให้แสดงผล โดยให้ใส่ในรูปแบบของ 'NNpx' เช่น '100px' เป็นต้น (*ควรใช้คู่กับ bootstrap class ชื่อ table-responsive)` },
    { require: '', name: '--maxWidth', type: 'string', description: `ใช้กำหนดค่าความกว้างสูงสุดของคอลัมน์นั้นๆที่สามารถแสดงผลได้ โดยให้ใส่ในรูปแบบของ 'NNpx' เช่น '100px' เป็นต้น (หากใส่ร่วมกับ width จะถือว่าให้ width ใช้งาน)` },
    { require: '', name: '--dateFormat', type: 'string', description: `ใช้สำหรับกำหนดรูปแบบของวันที่เพื่อใช้ในการแสดง โดยสามารถดูได้จากด้านล่าง หากไม่มีการกำหนดจะถือว่าค่าในคอลัมน์นั้นเป็น string แทน` },
    { require: '', name: '--yearAdditional', type: 'number', description: `ใช้สำหรับเพิ่มจำนวนปีเพื่อใช้ในการแสดงผล โดยค่าเริ่มต้นของจำนวนปีที่แสดงจะเป็นคริสตศักราช (หากต้องการแก้ไขเป็นพุทธศักราชให้ใส่ค่านี้ลงไป 543)` },
    { require: '', name: 'data', type: 'array of object', description: `ใช้สำหรับใส่ข้อมูลลงไปในตารางเพื่อทำการแสดง โดยตัวแปรของแต่ละ object จะต้องตรงกับ column name ที่ได้กำหนดไว้ และหาก object ไหนไม่มีจะถือเป็นข้อมูลว่าง` },
    { require: '', name: 'useFixedData', type: 'boolean', description: `ใช้สำหรับเปิดใช้รูปแบบการแสดงตารางที่รองรับการ query ข้อมูลแบบ fetch data ใช้งานร่วมกับ attribute: datalength, itemPerPage มีค่า default เป็น false 
    เมื่อเปิดใช้งานแล้ว จะไม่สามารถใช้งาน sorting, filtering แบบปกติได้ แต่ต้องนำค่าที่ได้จาก onTableChanged($event) ไปใช้งานต่อ` },
    { require: '', name: 'datalength', type: 'number', description: `ค่านี้จะถูกใช้เมื่อ useFixedData เป็น true มีค่า default เท่ากับ 0 ใช้งานร่วมกับ itemPerPage โดยจะนำค่า datalength หารด้วย itemPerPage จะได้จำนวน page ทั้งหมด ซึ่งค่า datalength ควรสัมพันธ์กับจำนวนข้อมูลทั้งหมดที่ query และ itemPerPage
    ควรสัมพันธ์กับจำนวนข้อมูลที่ fetch มาในแต่ละครั้ง` },
    { require: '', name: 'onCellClicked($event)', type: 'function(event)', description: `ใช้สำหรับรับค่าของช่องเมื่อมีการถูกคลิก` },
    { require: '', name: 'onTableChanged($event)', type: 'function(event)', description: `ใช้สำหรับรับค่าการเปลี่ยนแปลงเมื่อตารางมีการเปลี่ยนแปลงเกิดขึ้น เช่น มีการเปลี่ยนแปลงลำดับการเรียง หรือการเปลี่ยนหน้าตาราง เป็นต้น` },
];

const DATEFORMATLIST: Array<any> = [
    { format: 'd', description: 'วันที่ในเดือน (เป็นตัวเลขที่ไม่ขึ้นต้นด้วย 0)' },
    { format: 'dd', description: 'วันที่ในเดือน (เป็นตัวเลข 2 ตำแหน่ง)' },
    { format: 'm', description: 'เลขที่ของเดือน (เป็นตัวเลขที่ไม่ขึ้นต้นด้วย 0)' },
    { format: 'mm', description: 'เลขที่ของเดือน (เป็นตัวเลข 2 ตำแหน่ง)' },
    { format: 'y', description: 'เลขปี (เป็นตัวเลข 2 ตำแหน่ง)' },
    { format: 'yy', description: 'เลขปี (เป็นตัวเลข 4 ตำแหน่ง)' },
    { format: 'เครื่องหมายต่างๆ', description: 'ใช้ขั้นระหว่างวัน เดือน ปี เช่น dd/mm/yy, dd-mm-yy' },
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
    private introduction_example = "ในตัวอย่างนี้ จะใช้ Data ชุดเดียวกันทั้งหมด ตามด้านล่างนี้ <br>*หมายเหตุ สำหรับช่อง startDate จะมีประเภทของตัวแปร Date";
    code_1: string = `<strong>Basic and On Cell Clicked</strong><br>
<go-table id="table_basic" class="table table-striped table-border table-hover table-sm"
    cardClass="card-block card-header card-inverse" 
    [columns]="columns_1" [data]="data" (onCellClicked)="cellClick($event)">
</go-table>
<span><strong>ช่องที่ถูกคลิก:</strong> {{cellClicked}}</span>`;
    code_2: string = `<strong>Sorting and Date</strong><br>
<go-table  id="table_sorting" class="table table-striped table-border table-sm" 
    [paging]="false" [filterAll]="false" [columns]="columns_2" [data]="data">
</go-table>`;
    code_3: string = `<strong>Filtering</strong><br>
<go-table id="table_filter" class="table table-striped table-border table-sm table-responsive" 
    [itemsPerPage]=4 cardClass="card-block card-header card-inverse" 
    [columns]="columns_3" [data]="data" >
</go-table>`;
    code_4: string = `<strong>Fetch Data and Max Size</strong><br>
<go-table  id="table_fetch" class="table table-striped table-border table-sm" 
    [useFixedData]="true" [datalength]=TotalRows [maxSize]=2 [itemsPerPage]=rowPerPage
    [columns]="columns_4" [data]="data_4" (onTableChanged)="tableChanged($event)">
</go-table>
<table class="table table-striped table-border table-sm table-responsive">
    <tr>
        <th></th>
        <th>ค่า filter</th>
        <th>ค่า sort</th>
    </tr>
    <tr>
        <td>รวมทุกคอลัมน์</td>
        <td>{{filterAll}}</td>
    </tr>
    <tr>
        <td>คอลัมน์ 1</td>
        <td>{{filter_1}}</td>
        <td>{{sort_1}}</td>
    </tr>
    <tr>
        <td>คอลัมน์ 2</td>
        <td>{{filter_2}}</td>
        <td>{{sort_2}}</td>
    </tr>
    <tr>
        <td>คอลัมน์ 3</td>
        <td>{{filter_3}}</td>
        <td>{{sort_3}}</td>
    </tr>
    <tr>
        <td>ค่า page</td>
        <td>{{page}}</td>
    </tr>
</table>`;
    data_code: string = `    data: Array<any> = [
        { 'name': 'Abc', 'surname': '<b>Cba</b>', 'no': '01', 'startDate': new Date('2015/1/1') },
        { 'name': 'Bar', 'surname': '<i>Foo</i>', 'no': '02', 'startDate': new Date('2015/2/1') },
        { 'name': 'Foo', 'no': '03', 'startDate': new Date('2015/1/2') },
        { 'name': 'Aaa', 'surname': 'Fff', 'no': '04' },
        { 'name': 'Bbb', 'no': '05', },
        { 'name': 'Ccc', 'surname': 'Ccc', 'no': '06', 'startDate': new Date('2015/7/8') }
    ];`;
    column_1_code: string = `columns_1: Array<any> = [
    { title: 'Name', name: 'name', sort: false },
    { title: 'Surname', name: 'surname', sort: false }
];

cellClicked: string;
cellClick(event: any) {
    this.cellClicked = String(event['row'][event.column]);
}`;
    column_2_code: string = `columns_2: Array<any> = [
    { title: 'Name', name: 'name'},
    { title: 'Id', name: 'no'},
    { title: 'Start Date', name: 'startDate', dateFormat: 'dd-mm-yy', filtering: { placeholder: 'Start Date'}}
];`;
    column_3_code: string = `columns_3: Array<any> = [
    { title: 'Name', name: 'name', sort: false, filtering: { placeholder: 'Name'} },
    { title: 'Id', name: 'no', sort: false , filtering: { placeholder: 'Id'}},
    { title: 'Start Date', name: 'startDate', dateFormat: 'mm/dd/yy', yearAdditional: 543, filtering: { placeholder: 'Start Date' }, sort: false }
];`;
    column_4_code: string =`columns_4: Array<any> = [
    { title: 'Name', name: 'name', filtering: { placeholder: 'Name'} },
    { title: 'Id', name: 'no', filtering: { placeholder: 'Id'} },
    { title: 'Start Date', name: 'startDate', dateFormat: 'dd/mm/yy', yearAdditional: 543, filtering: { placeholder: 'Start Date'} }
];

data_4: Array<any> = [];
TotalRows: number = 6;
rowPerPage: number = 1;
page: number;

filterAll: string;
filter_1: string;
filter_2: string;
filter_3: string;
sort_1: string;
sort_2: string;
sort_3: string;

constructor() {
    this.data_4 = this.getDataFirstPage(this.rowPerPage);
}

//function สมมุติที่มีการทำงานคล้ายการ fetch ข้อมูลรอบแรก
getDataFirstPage(rowPerPage: number): Array<any> {
    let data_fetch: Array<any> = [];
    for (let i = 0; i < rowPerPage; i++) {
        data_fetch.push(this.data[i]);
    }
    return data_fetch;
}

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

    // ค่า output เลข page ปัจจุบัน เมื่อกดปุ่มเปลี่ยน page
    this.page = event.page;

    //การสมมุติการ fetch data จาก db มาเก็บในตัวแปร data_4
    this.data_4 = this.fetchNextNRows(this.rowPerPage, this.page);
}

//function สมมุติที่มีการทำงานคล้ายการ fetch ข้อมูล
fetchNextNRows(rowPerPage: number, page: number): Array<any> {
    let lastRowOfFetchRound = rowPerPage * page;
    let data_fetch: Array<any> = [];
    for (let i = lastRowOfFetchRound - this.rowPerPage; i < lastRowOfFetchRound; i++) {
        data_fetch.push(this.data[i]);
    }
    return data_fetch;
}`;
    data: Array<any> = [
        { 'name': 'Abc', 'surname': '<b>Cba</b>', 'no': '01', 'startDate': new Date('2015/1/1') },
        { 'name': 'Bar', 'surname': '<i>Foo</i>', 'no': '02', 'startDate': new Date('2015/2/1') },
        { 'name': 'Foo', 'no': '03', 'startDate': new Date('2015/1/2') },
        { 'name': 'Aaa', 'surname': 'Fff', 'no': '04' },
        { 'name': 'Bbb', 'no': '05', },
        { 'name': 'Ccc', 'surname': 'Ccc', 'no': '06', 'startDate': new Date('2015/7/8') }
    ];
    columns_1: Array<any> = [
        { title: 'Name', name: 'name', sort: false },
        { title: 'Surname', name: 'surname', sort: false }
    ];
    columns_2: Array<any> = [
        { title: 'Name', name: 'name'},
        { title: 'Id', name: 'no'},
        { title: 'Start Date', name: 'startDate', dateFormat: 'dd-mm-yy', filtering: { placeholder: 'Date'}}
    ];
    columns_3: Array<any> = [
        { title: 'Name', name: 'name', sort: false, filtering: { placeholder: 'Name'} },
        { title: 'Id', name: 'no', sort: false , filtering: { placeholder: 'Id'}},
        { title: 'Start Date', name: 'startDate', dateFormat: 'mm/dd/yy', yearAdditional: 543, filtering: { placeholder: 'Start Date' }, sort: false }
    ];
    columns_4: Array<any> = [
        { title: 'Name', name: 'name', filtering: { placeholder: 'Name'} },
        { title: 'Id', name: 'no', filtering: { placeholder: 'Id'} },
        { title: 'Start Date', name: 'startDate', dateFormat: 'dd/mm/yy', yearAdditional: 543, filtering: { placeholder: 'Start Date'} }
    ];

    cellClicked: string;
    cellClick(event: any) {
        this.cellClicked = String(event['row'][event.column]);
    }

    data_4: Array<any> = [];
    TotalRows: number = 6;
    rowPerPage: number = 1;
    page: number;
    
    filterAll: string;
    filter_1: string;
    filter_2: string;
    filter_3: string;
    sort_1: string;
    sort_2: string;
    sort_3: string;

    constructor() {
        this.data_4 = this.getDataFirstPage(this.rowPerPage);
    }

    //function สมมุติที่มีการทำงานคล้ายการ fetch ข้อมูลรอบแรก
    getDataFirstPage(rowPerPage: number): Array<any> {
        let data_fetch: Array<any> = [];
        for (let i = 0; i < rowPerPage; i++) {
            data_fetch.push(this.data[i]);
        }
        return data_fetch;
    }

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

        // ค่า output เลข page ปัจจุบัน เมื่อกดปุ่มเปลี่ยน page
        this.page = event.page;

        //การสมมุติการ fetch data จาก db มาเก็บในตัวแปร data_4
        this.data_4 = this.fetchNextNRows(this.rowPerPage, this.page);
    }

    //function สมมุติที่มีการทำงานคล้ายการ fetch ข้อมูล
    fetchNextNRows(rowPerPage: number, page: number): Array<any> {
        let lastRowOfFetchRound = rowPerPage * page;
        let data_fetch: Array<any> = [];
        for (let i = lastRowOfFetchRound - this.rowPerPage; i < lastRowOfFetchRound; i++) {
            data_fetch.push(this.data[i]);
        }
        return data_fetch;
    }
}