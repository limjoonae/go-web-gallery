import { Component, OnInit } from '@angular/core';

const ATTRIBUTELIST: Array<any> = [
    { require: '*', name: 'chartType', type: 'text', description: `ใช้สำหรับกำหนดประเภทของ chart ที่ต้องการแสดง ได้แก่ line, bar, pie, doughnut` },
    { require: '*', name: 'chartData', type: 'array of object', description: `ใช้สำหรับใส่ข้อมูลของ chart โดยแต่ละ object ที่อยู่ใน array จะถือเป็นข้อมูล 1 ชุด` },
    { require: '*', name: '-- data', type: 'array of number', description: `ใช้สำหรับระบุค่าของข้อมูลแต่ละชุดใน chart โดยใส่ในรูปของ array ของ number โดยสำหรับ pie และ doughnut จะใช้ข้อมูลเพียงชุดเดียว` },
    { require: '', name: '-- label', type: 'text', description: `ใช้สำหรับระบุค่า label ของข้อมูลแต่ละชุดใน chart (จะใช้เมื่อกราฟที่แสดงเป็นประเภท line หรือ bar)` },
    { require: '*', name: 'chartLabel', type: 'array of text', description: `ใช้สำหรับระบุค่าที่ต้องการแสดงบนแกน X (เมื่อเป็นกราฟประเภท line หรือ bar)หรือระบุชื่อของชุดข้อมูล` },
    { require: '', name: 'chartColor', type: 'array of object', description: `ใช้สำหรับตั้งค่าสีให้กับข้อมูลแต่ละชุด` },
    { require: '', name: '-- backgroundColor', type: 'text', description: `ใช้สำหรับตั้งค่าสีของพื้นหลัง` },
    { require: '', name: '-- borderColor', type: 'text', description: `ใช้สำหรับตั้งค่าสีของเส้นขอบ` },
    { require: '', name: '-- pointBackgroundColor', type: 'text', description: `ใช้สำหรับตั้งค่าสีพื้นหลังของจุดทั้งหมด` },
    { require: '', name: '-- pointBorderColor', type: 'text', description: `ใช้สำหรับตั้งค่าสีเส้นขอบของจุดทั้งหมด` },
    { require: '', name: '-- pointHoverBackgroundColor', type: 'text', description: `ใช้สำหรับตั้งค่าให้เปลี่ยนสีพื้นหลังของจุดเมื่อมีเม้าส์ชี้ไปยังจุดนั้นๆ` },
    { require: '', name: '-- pointHoverBorderColor', type: 'text', description: `ใช้สำหรับตั้งค่าให้เปลี่ยนสีเส้นขอบของจุดเมื่อมีเม้าส์ชี้ไปยังจุดนั้นๆ` },
    { require: '', name: 'showLegend', type: 'boolean', description: `ใช้สำหรับตั้งค่าการแสดง label ของข้อมูลแต่ละชุด และเมื่อมีการคลิกบน label นี้จะเป็นการแสดง/ซ่อนชุดข้อมูลนั้น` },
    { require: '', name: 'yAxlesStartAtZero', type: 'boolean', description: `ใช้สำหรับตั้งค่าให้แกน Y เริ้มต้นจาก 0 (สำหรับกราฟประเภท line และ bar)` },
    { require: '', name: 'yAxlesMaxValue', type: 'boolean', description: `ใช้สำหรับตั้งค่าสูงสุดที่แกน Y แสดง (สำหรับกราฟประเภท line และ bar)` },
    { require: '', name: 'onChartClicked', type: 'function($event)', description: `ใช้สำหรับเรียกฟังก์ชั่นให้ทำงาน เมื่อมีการคลิกบน chart โดย event คือข้อมูลของสิ่งที่ถูกคลิกไป` },
    { require: '', name: 'onChartHovered', type: 'function($event)', description: `ใช้สำหรับเรียกฟังก์ชั่นให้ทำงาน เมื่อมีการชี้เม้าส์บน chart โดย event คือข้อมูลของสิ่งที่ถูกชี้ไป` }
];

const SYSTEMJSLINE: Array<any> = [
    `map: {`,
    `   ..........`,
    `   'ng2-charts': 'npm:ng2-charts',`,
    `   'chart.js': 'npm:chart.js/dist/Chart.bundle.min.js',`,
    `   'go-chart': 'go:chart/{version}',`,
    `   ..........`,
    `},`,
    `packages: {`,
    `   ..........`,
    `   'ng2-charts': {`,
    `      main: './ng2-charts.js',`,
    `      defaultExtension: 'js'`,
    `   },`,
    `   'chart.js': {`,
    `      defaultExtension: 'js'`,
    `   },`,
    `   'go-chart': {`,
    `      main: './chart.component.js',`,
    `      defaultExtension: 'js'`,
    `   },`,
    `   ..........`,
    `}`,
];

const APPMODULELINE: Array<any> = [
    `import { ChartsModule } from 'ng2-charts';`,
    `import { ChartComponent } from 'go-chart';`,
    ``,
    `@NgModule({`,
    `   declarations: [`,
    `   ..........`,
    `   ChartComponent`,
    `   ..........`,
    `],`,
    `   imports: [`,
    `   ..........`,
    `   ChartsModule`,
    `   ..........`,
    `]})`,
];

@Component({
    moduleId: module.id,
    selector: 'chart-document',
    templateUrl: './chart.document.html'
})
export class ChartDocument {

    private componentTag: string = '<go-chart>';
    private componentDescription: string = `ใช้สำหรับเรียกใช้ Chart เพื่อทำการสร้างกราฟหรือแผนภูมิ`;
    private version: string = '1.0';
    private releaseDate: string = '14/12/2016';
    private prefixSyntax: string = `<go-chart `;
    private attrSyntax: string = `chartType="chart_type" [chartData]="chart_data" [chartLabel]="chart_label"  [[chartColor]="chart_color"] [[showLegend]="show_chart_legend"] [[yAxleStartAtZero]="set_at_zero"] [[yAxlesMaxValue]="set_max_value"] 
        [(onChartClicked)="onClick($event)"] [(onChartHovered)="onHovered($event)"]]`;
    private suffixSyntax: string = `></go-chart>`;
    private chartdataSyntax: string = `chart_data:Array<any> = [ { data:'array_of_value_in_A', label:'label_of_A' } ];`;
    private chartcolorSyntax: string = `chart_color:Array<any> = [
        { backgroundColor:'bg_color', borderColor:'bd_color', pointBackgroundColor:'p_bg_color',
        pointBorderColor:'p_bd_color', pointHoverBackgroundColor:'p_hov_bg_color',
        pointHoverBorderColor:'p_hover_bd_color'}
        ];`;
    private attributeList = ATTRIBUTELIST;
    private appModuleLine = APPMODULELINE;
    private systemjsLine = SYSTEMJSLINE;
    private appModuleDetail: string = `app.module.ts`;
    private systemJSDetail: string = `systemjs.config.js`;

    //This is value for example
    public chartData: Array<any> = [
        { data: [20, 20, 30, 40, 50, 60], label: 'A' },
        { data: [20, 40, 60, 80, 20, 40], label: 'B' },
        { data: [20, 20, 40, 60, 70, 90], label: 'C' }
    ];

    public chartData2: Array<any> = [{ data: [10, 30, 50, 70, 80, 90] }];

    public chartLabel: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

    //    public lineChartColor: Array<any> = [
    //        { // grey
    //            backgroundColor: 'rgba(148,159,177,0.2)',
    //            borderColor: 'rgba(148,159,177,1)',
    //            pointBackgroundColor: 'rgba(148,159,177,1)',
    //            pointBorderColor: '#fff',
    //            pointHoverBackgroundColor: '#fff',
    //            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    //        },
    //        { // red
    //            backgroundColor: 'rgba(255,0,0,0.2)',
    //            borderColor: 'rgba(255,0,0,1)',
    //            pointBackgroundColor: 'rgba(255,0,0,0.2)',
    //            pointBorderColor: 'rgba(255,0,0,1)',
    //            pointHoverBackgroundColor: 'rgba(255,0,0,1)',
    //            pointHoverBorderColor: 'rgba(255,0,0,0.2)'
    //        },
    //        { // grey
    //            backgroundColor: 'rgba(148,159,177,0.2)',
    //            borderColor: 'rgba(148,159,177,1)',
    //            pointBackgroundColor: 'rgba(148,159,177,1)',
    //            pointBorderColor: '#fff',
    //            pointHoverBackgroundColor: '#fff',
    //            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    //        }
    //    ];

    data_code: string = `public chartData: Array<any> = [<br>
        { data: [20, 20, 30, 40, 50, 60], label: 'A' },<br>
        { data: [20, 40, 60, 80, 20, 40], label: 'B' },<br>
        { data: [20, 20, 40, 60, 70, 90], label: 'C' }<br>
    ];`;

    data_code_2: string = `public chartData2: Array<any> = [{ data: [10, 30, 50, 70, 80, 90] }];`;

    label_code: string = `public chartLabel: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];`;
    code_1: string = `<go-chart chartType="line" [chartData]='chartData' 
                    [chartLabel]='chartLabel' [showLegend]='true'></go-chart>`;
    code_2: string = `<go-chart chartType="bar" [chartData]='chartData'
                    [chartLabel]='chartLabel' [showLegend]='false'
                    [yAxlesStartAtZero]='true' [yAxlesMaxValue]=90></go-chart>`;
    code_3: string = `<go-chart chartType="doughnut"
                    [chartData]='chartData2' [chartLabel]='chartLabel'
                    [showLegend]='true'></go-chart>`;
    code_4: string = `<go-chart chartType="pie" [chartData]='chartData2'
                    [chartLabel]='chartLabel' [showLegend]='true'></go-chart>`;

}