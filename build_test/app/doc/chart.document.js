"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ATTRIBUTELIST = [
    { require: '*', name: 'chartType', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E2D\u0E07 chart \u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07 \u0E44\u0E14\u0E49\u0E41\u0E01\u0E48 line, bar, pie, doughnut" },
    { require: '*', name: 'chartData', type: 'array of object', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E43\u0E2A\u0E48\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E02\u0E2D\u0E07 chart \u0E42\u0E14\u0E22\u0E41\u0E15\u0E48\u0E25\u0E30 object \u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19 array \u0E08\u0E30\u0E16\u0E37\u0E2D\u0E40\u0E1B\u0E47\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 1 \u0E0A\u0E38\u0E14" },
    { require: '*', name: '-- data', type: 'array of number', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E04\u0E48\u0E32\u0E02\u0E2D\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E41\u0E15\u0E48\u0E25\u0E30\u0E0A\u0E38\u0E14\u0E43\u0E19 chart \u0E42\u0E14\u0E22\u0E43\u0E2A\u0E48\u0E43\u0E19\u0E23\u0E39\u0E1B\u0E02\u0E2D\u0E07 array \u0E02\u0E2D\u0E07 number \u0E42\u0E14\u0E22\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A pie \u0E41\u0E25\u0E30 doughnut \u0E08\u0E30\u0E43\u0E0A\u0E49\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E1E\u0E35\u0E22\u0E07\u0E0A\u0E38\u0E14\u0E40\u0E14\u0E35\u0E22\u0E27" },
    { require: '', name: '-- label', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E04\u0E48\u0E32 label \u0E02\u0E2D\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E41\u0E15\u0E48\u0E25\u0E30\u0E0A\u0E38\u0E14\u0E43\u0E19 chart (\u0E08\u0E30\u0E43\u0E0A\u0E49\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E01\u0E23\u0E32\u0E1F\u0E17\u0E35\u0E48\u0E41\u0E2A\u0E14\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17 line \u0E2B\u0E23\u0E37\u0E2D bar)" },
    { require: '*', name: 'chartLabel', type: 'array of text', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E38\u0E04\u0E48\u0E32\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07\u0E1A\u0E19\u0E41\u0E01\u0E19 X (\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E1B\u0E47\u0E19\u0E01\u0E23\u0E32\u0E1F\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17 line \u0E2B\u0E23\u0E37\u0E2D bar)\u0E2B\u0E23\u0E37\u0E2D\u0E23\u0E30\u0E1A\u0E38\u0E0A\u0E37\u0E48\u0E2D\u0E02\u0E2D\u0E07\u0E0A\u0E38\u0E14\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25" },
    { require: '', name: 'chartColor', type: 'array of object', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E2A\u0E35\u0E43\u0E2B\u0E49\u0E01\u0E31\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E41\u0E15\u0E48\u0E25\u0E30\u0E0A\u0E38\u0E14" },
    { require: '', name: '-- backgroundColor', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E2A\u0E35\u0E02\u0E2D\u0E07\u0E1E\u0E37\u0E49\u0E19\u0E2B\u0E25\u0E31\u0E07" },
    { require: '', name: '-- borderColor', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E2A\u0E35\u0E02\u0E2D\u0E07\u0E40\u0E2A\u0E49\u0E19\u0E02\u0E2D\u0E1A" },
    { require: '', name: '-- pointBackgroundColor', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E2A\u0E35\u0E1E\u0E37\u0E49\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E02\u0E2D\u0E07\u0E08\u0E38\u0E14\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14" },
    { require: '', name: '-- pointBorderColor', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E2A\u0E35\u0E40\u0E2A\u0E49\u0E19\u0E02\u0E2D\u0E1A\u0E02\u0E2D\u0E07\u0E08\u0E38\u0E14\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14" },
    { require: '', name: '-- pointHoverBackgroundColor', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E43\u0E2B\u0E49\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E2A\u0E35\u0E1E\u0E37\u0E49\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E02\u0E2D\u0E07\u0E08\u0E38\u0E14\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E21\u0E35\u0E40\u0E21\u0E49\u0E32\u0E2A\u0E4C\u0E0A\u0E35\u0E49\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E08\u0E38\u0E14\u0E19\u0E31\u0E49\u0E19\u0E46" },
    { require: '', name: '-- pointHoverBorderColor', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E43\u0E2B\u0E49\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E2A\u0E35\u0E40\u0E2A\u0E49\u0E19\u0E02\u0E2D\u0E1A\u0E02\u0E2D\u0E07\u0E08\u0E38\u0E14\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E21\u0E35\u0E40\u0E21\u0E49\u0E32\u0E2A\u0E4C\u0E0A\u0E35\u0E49\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E08\u0E38\u0E14\u0E19\u0E31\u0E49\u0E19\u0E46" },
    { require: '', name: 'showLegend', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07 label \u0E02\u0E2D\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E41\u0E15\u0E48\u0E25\u0E30\u0E0A\u0E38\u0E14 \u0E41\u0E25\u0E30\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E21\u0E35\u0E01\u0E32\u0E23\u0E04\u0E25\u0E34\u0E01\u0E1A\u0E19 label \u0E19\u0E35\u0E49\u0E08\u0E30\u0E40\u0E1B\u0E47\u0E19\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07/\u0E0B\u0E48\u0E2D\u0E19\u0E0A\u0E38\u0E14\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E19\u0E31\u0E49\u0E19" },
    { require: '', name: 'yAxlesStartAtZero', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E43\u0E2B\u0E49\u0E41\u0E01\u0E19 Y \u0E40\u0E23\u0E34\u0E49\u0E21\u0E15\u0E49\u0E19\u0E08\u0E32\u0E01 0 (\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E01\u0E23\u0E32\u0E1F\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17 line \u0E41\u0E25\u0E30 bar)" },
    { require: '', name: 'yAxlesMaxValue', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14\u0E17\u0E35\u0E48\u0E41\u0E01\u0E19 Y \u0E41\u0E2A\u0E14\u0E07 (\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E01\u0E23\u0E32\u0E1F\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17 line \u0E41\u0E25\u0E30 bar)" },
    { require: '', name: 'onChartClicked', type: 'function($event)', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E40\u0E23\u0E35\u0E22\u0E01\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E43\u0E2B\u0E49\u0E17\u0E33\u0E07\u0E32\u0E19 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E21\u0E35\u0E01\u0E32\u0E23\u0E04\u0E25\u0E34\u0E01\u0E1A\u0E19 chart \u0E42\u0E14\u0E22 event \u0E04\u0E37\u0E2D\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E02\u0E2D\u0E07\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E04\u0E25\u0E34\u0E01\u0E44\u0E1B" },
    { require: '', name: 'onChartHovered', type: 'function($event)', description: "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E40\u0E23\u0E35\u0E22\u0E01\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E43\u0E2B\u0E49\u0E17\u0E33\u0E07\u0E32\u0E19 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E21\u0E35\u0E01\u0E32\u0E23\u0E0A\u0E35\u0E49\u0E40\u0E21\u0E49\u0E32\u0E2A\u0E4C\u0E1A\u0E19 chart \u0E42\u0E14\u0E22 event \u0E04\u0E37\u0E2D\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E02\u0E2D\u0E07\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E0A\u0E35\u0E49\u0E44\u0E1B" }
];
var SYSTEMJSLINE = [
    "map: {",
    "   ..........",
    "   'ng2-charts': 'npm:ng2-charts',",
    "   'chart.js': 'npm:chart.js/dist/Chart.bundle.min.js',",
    "   'go-chart': 'go:chart/{version}',",
    "   ..........",
    "},",
    "packages: {",
    "   ..........",
    "   'ng2-charts': {",
    "      main: './ng2-charts.js',",
    "      defaultExtension: 'js'",
    "   },",
    "   'chart.js': {",
    "      defaultExtension: 'js'",
    "   },",
    "   'go-chart': {",
    "      main: './chart.component.js',",
    "      defaultExtension: 'js'",
    "   },",
    "   ..........",
    "}",
];
var APPMODULELINE = [
    "import { ChartsModule } from 'ng2-charts';",
    "import { ChartComponent } from 'go-chart';",
    "",
    "@NgModule({",
    "   declarations: [",
    "   ..........",
    "   ChartComponent",
    "   ..........",
    "],",
    "   imports: [",
    "   ..........",
    "   ChartsModule",
    "   ..........",
    "]})",
];
var ChartDocument = (function () {
    function ChartDocument() {
        this.componentTag = '<go-chart>';
        this.componentDescription = "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E40\u0E23\u0E35\u0E22\u0E01\u0E43\u0E0A\u0E49 Chart \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E33\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E01\u0E23\u0E32\u0E1F\u0E2B\u0E23\u0E37\u0E2D\u0E41\u0E1C\u0E19\u0E20\u0E39\u0E21\u0E34";
        this.version = '1.0';
        this.releaseDate = '14/12/2016';
        this.prefixSyntax = "<go-chart ";
        this.attrSyntax = "chartType=\"chart_type\" [chartData]=\"chart_data\" [chartLabel]=\"chart_label\"  [[chartColor]=\"chart_color\"] [[showLegend]=\"show_chart_legend\"] [[yAxleStartAtZero]=\"set_at_zero\"] [[yAxlesMaxValue]=\"set_max_value\"] \n        [(onChartClicked)=\"onClick($event)\"] [(onChartHovered)=\"onHovered($event)\"]]";
        this.suffixSyntax = "></go-chart>";
        this.chartdataSyntax = "chart_data:Array<any> = [ { data:'array_of_value_in_A', label:'label_of_A' } ];";
        this.chartcolorSyntax = "chart_color:Array<any> = [\n        { backgroundColor:'bg_color', borderColor:'bd_color', pointBackgroundColor:'p_bg_color',\n        pointBorderColor:'p_bd_color', pointHoverBackgroundColor:'p_hov_bg_color',\n        pointHoverBorderColor:'p_hover_bd_color'}\n        ];";
        this.attributeList = ATTRIBUTELIST;
        this.appModuleLine = APPMODULELINE;
        this.systemjsLine = SYSTEMJSLINE;
        this.appModuleDetail = "app.module.ts";
        this.systemJSDetail = "systemjs.config.js";
        this.chart_color1 = [
            { backgroundColor: 'red',
                borderColor: 'black',
                pointBackgroundColor: 'blue',
                pointBorderColor: 'black',
                pointHoverBackgroundColor: 'red',
                pointHoverBorderColor: 'pink' },
            { backgroundColor: 'lightblue',
                borderColor: 'black',
                pointBackgroundColor: 'red',
                pointBorderColor: 'black',
                pointHoverBackgroundColor: 'lightblue',
                pointHoverBorderColor: 'green' },
            { backgroundColor: 'pink',
                borderColor: 'black',
                pointBackgroundColor: 'purple',
                pointBorderColor: 'blue',
                pointHoverBackgroundColor: 'pink',
                pointHoverBorderColor: 'red' }
        ];
        //This is value for example
        this.chartData = [
            { data: [20, 20, 30, 40, 50, 60], label: 'A' },
            { data: [20, 40, 60, 80, 20, 40], label: 'B' },
            { data: [20, 20, 40, 60, 70, 90], label: 'C' }
        ];
        this.chartData2 = [{ data: [10, 30, 50, 70, 80, 90] }];
        this.chartLabel = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
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
        this.data_code = "public chartData: Array<any> = [<br>\n        { data: [20, 20, 30, 40, 50, 60], label: 'A' },<br>\n        { data: [20, 40, 60, 80, 20, 40], label: 'B' },<br>\n        { data: [20, 20, 40, 60, 70, 90], label: 'C' }<br>\n    ];";
        this.color_code = "private chart_color1:Array<any> = [\n       {backgroundColor:'red', \n        borderColor:'black', \n        pointBackgroundColor:'blue', \n        pointBorderColor:'black',\n        pointHoverBackgroundColor:'red',\n         pointHoverBorderColor:'pink'},\n         { backgroundColor:'lightblue', \n        borderColor:'black', \n        pointBackgroundColor:'red', \n        pointBorderColor:'black',\n        pointHoverBackgroundColor:'lightblue',\n         pointHoverBorderColor:'green'} ,\n         { backgroundColor:'pink', \n        borderColor:'black', \n        pointBackgroundColor:'purple', \n        pointBorderColor:'blue',\n        pointHoverBackgroundColor:'pink',\n         pointHoverBorderColor:'red'} \n         ];";
        this.data_code_2 = "public chartData2: Array<any> = [{ data: [10, 30, 50, 70, 80, 90] }];";
        this.label_code = "public chartLabel: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];";
        this.code_1 = "<go-chart chartType=\"line\" [chartData]='chartData' \n                    [chartLabel]='chartLabel' [showLegend]='true' [chartColor]=\"chart_color1\"></go-chart>";
        this.code_2 = "<go-chart chartType=\"bar\" [chartData]='chartData'\n                    [chartLabel]='chartLabel' [showLegend]='false'\n                    [yAxlesStartAtZero]='true' [yAxlesMaxValue]=90 ></go-chart> ";
        this.code_3 = "<go-chart chartType=\"doughnut\"\n                    [chartData]='chartData2' [chartLabel]='chartLabel'\n                    [showLegend]='true'></go-chart>";
        this.code_4 = "<go-chart chartType=\"pie\" [chartData]='chartData2'\n                    [chartLabel]='chartLabel' [showLegend]='true'></go-chart> (onChartClicked) = \"myTest()\"\n                    \n                     ";
        this.click = false;
    }
    ChartDocument.prototype.myTest = function () {
        this.click = !this.click;
    };
    return ChartDocument;
}());
ChartDocument = __decorate([
    core_1.Component({
        selector: 'chart-document',
        templateUrl: './chart.document.html'
    })
], ChartDocument);
exports.ChartDocument = ChartDocument;
//# sourceMappingURL=chart.document.js.map