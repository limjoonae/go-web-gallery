import { Component, Input } from '@angular/core';

const _ATTRIBUTELIST: Array<any> = [
    { require: '*', name: 'value', type: 'array', description: `ใช้สำหรับระบุข้อมูลให้ tree`},
    { require: '', name: 'selectionMode', type: 'string', description: `ใช้สำหรับระบุประเภทในการเลือก tree มี 3 ประเภท ดังนี้  "single", "multiple", "checkbox"`},
    { require: '', name: 'selection', type: 'any', description: `ใช้สำหรับรับ output ที่เลือกจาก tree`},
    { require: '', name: 'style', type: 'string', description: `ใช้สำหรับใส่ style inline ให้ tree`},
    { require: '', name: 'styleClass', type: 'string', description: `ใช้สำหรับใส่ style class ให้ tree`},
];

const _ATTRIBUTETREENODELIST: Array<any> = [
  { require: '', name: 'label', type: 'string', description: `ใช้สำหรับระบุ label ของโหนด tree`},
  { require: '', name: 'data', type: 'any', description: `ใช้ระบุข้อมูลที่แสดงในโหนด`},
  { require: '', name: 'icon', type: 'string', description: `ใช้สำหรับระบุ icon ของโหนดถัดไป`},
  { require: '', name: 'expandedIcon', type: 'string', description: `ใช้สำหรับระบุ icon เมื่อ expanded`},
  { require: '', name: 'collapsedIcon', type: 'string', description: `ใช้สำหรับระบุ icon เมื่อ collapsed `},
  { require: '', name: 'children', type: 'array', description: `ใช้สำหรับระบุข้อมูลระดับลูกของ tree`},
  { require: '', name: 'leaf', type: 'boolean', description: `ฬช้สำหรับระบุว่าโหนดมีลูก สำหรับการโหลดแบบ lazy`},
  { require: '', name: 'style', type: 'string', description: `ใช้สำหรับใส่ style inline ให้โหนด`},
  { require: '', name: 'styleClass', type: 'string', description: `ใช้สำหรับใส่ style class ให้โหนด`},
  { require: '', name: 'expanded', type: 'boolean', description: `ใช้สำหรับระบุว่าต้องการให้โหนด expanded หรือ collapsed `},

];

const _ATTRIBUTEEVENTELIST: Array<any> = [
  { require: '', name: 'onNodeSelect', type: 'function($event)', description: `จะส่ง Node ที่ถูกเลือกคืนมา`},
  { require: '', name: 'onNodeUnselect', type: 'function($event)', description: `จะส่ง Node ที่ไม่ถูกเลือกคืนมา`},
  { require: '', name: 'onNodeExpand', type: 'function($event)', description: `จะส่ง Node ที่ Expand คืนมา`},
  { require: '', name: 'onNodeCollapse', type: 'function($event)', description: `จะส่ง Node ที่ Collapse คืนมา`}  
];

const _ATTRSYNTAX: Array<any> = [
  { data: `` },
  { data: `   value = "array_of_data"` },
  { data: `   [selectionMode = "single_or_multiple_or_checkbox"]` },
  { data: `   [(selection) = "output"]` },
  { data: `   [style = "style_inline"]` },
  { data: `   [styleClass = "style_class"]` }
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
  { data: ` import { TreeModule } from 'primeng'; ` },
  { data: `@NgModule({ 
   imports: [  
           .................. 
           TreeModule
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

const _releaseUpdate: Array<any> = [
  { head: `Version`, data: `Update primeng version 4.0.0-rc.2` },
  { head: `Icon`, data: `สามารถใส่ไอคอน (จาก Font Awesome)` },
  { head: `selectionMode`, data: `สามารถเลือกตัวเลือกจาก Tree ให้สามารถเลือกแบบตัวเลือกเดี่ยว หรือหลายตัวเลือกได้` },
];

const _EXAMPLE1: Array<any> = [
  { data: `app.component.html` },
  { data: `` },
  { data: `<p-tree [value]="data" id='tree_basic'></p-tree>` },
];
const _EXAMPLE2: Array<any> = [
  { data: `app.component.ts  ` },
  { data: `` },
  { data: `private selectedFile: any;` },
  { data: `` },
  { data: `app.component.html` },
  { data: `` },
  { data: `<p-tree [value]="data" selectionMode="single" [(selection)]="selectedFile" id='tree_single'></p-tree>` },
  { data: `<div>Selected Node: <label *ngIf="selectedFile">{{selectedFile.label}}</label></div>` },
  { data: `` },
  { data: `` },
];
const _EXAMPLE3: Array<any> = [
  { data: `app.component.ts  ` },
  { data: `` },
  { data: `private selectedFiles: any;` },
  { data: `` },
  { data: `app.component.html` },
  { data: `` },
  { data: `<p-tree [value]="data" selectionMode="multiple" [(selection)]="selectedFiles" id='tree_multiple'> </p-tree>` },
  { data: `<div>Selected Nodes: <span *ngFor="let file of selectedFiles">{{file.label}} </span></div>` },
];
const _EXAMPLE4: Array<any> = [
  { data: `app.component.ts  ` },
  { data: `` },
  { data: `private selectedFiles2: any;` },
  { data: `` },
  { data: `app.component.html` },
  { data: `` },
  { data: `<p-tree [value]="data" selectionMode="checkbox" [(selection)]="selectedFiles2" id='tree_checkbox'></p-tree>` },
  { data: `<div>Selected Nodes: <span *ngFor="let file of selectedFiles2">{{file.label}} </span></div>` },

];

const _DATA1: Array<any> = [
  `
private data =
  [
    {
      "label": "Documents",
      "data": "Documents Folder",
      "expandedIcon": "fa-folder-open",
      "collapsedIcon": "fa-folder",
      "children": [{
        "label": "Work",
        "data": "Work Folder",
        "expandedIcon": "fa-folder-open",
        "collapsedIcon": "fa-folder",
        "children": [{"label": "Expenses.doc", "icon": "fa-file-word-o", "data": "Expenses Document"}, {"label": "Resume.doc", "icon": "fa-file-word-o", "data": "Resume Document"}]
       },
       {
        "label": "Home",
        "data": "Home Folder",
        "expandedIcon": "fa-folder-open",
        "collapsedIcon": "fa-folder",
        "children": [{"label": "Invoices.txt", "icon": "fa-file-word-o", "data": "Invoices for this month"}]
       }]
     },
     {
       "label": "Pictures",
       "data": "Pictures Folder",
       "expandedIcon": "fa-folder-open",
       "collapsedIcon": "fa-folder",
       "children": [
          {"label": "barcelona.jpg", "icon": "fa-file-image-o", "data": "Barcelona Photo"},
          {"label": "logo.jpg", "icon": "fa-file-image-o", "data": "PrimeFaces Logo"},
          {"label": "primeui.png", "icon": "fa-file-image-o", "data": "PrimeUI Logo"}]
        },
        {
          "label": "Movies",
          "data": "Movies Folder",
          "expandedIcon": "fa-folder-open",
          "collapsedIcon": "fa-folder",
          "children": [{
              "label": "Al Pacino",
              "data": "Pacino Movies",
              "children": [{"label": "Scarface", "icon": "fa-file-video-o", "data": "Scarface Movie"}, {"label": "Serpico", "icon": "fa-file-video-o", "data": "Serpico Movie"}]
            },
            {
              "label": "Robert De Niro",
              "data": "De Niro Movies",
              "children": [{"label": "Goodfellas", "icon": "fa-file-video-o", "data": "Goodfellas Movie"}, {"label": "Untouchables", "icon": "fa-file-video-o", "data": "Untouchables Movie"}]
            }]
       }
  ]`
];



@Component({
    selector: 'doc-tree',
    templateUrl: './tree.document.html'
})
export class TreeDocument  { 
    private componentTag: string = 'Tree'
    private version: string = '2.0'; 
    private componentDescription: string = `Tree เป็น component ที่ช่วยแสดงรายการเป็นลำดับขั้น โดยสามารถเลือกรายการที่ต้องการได้ และสามารถเลือกได้มากกว่า 1 รายการ`
    private releaseDate: string = '29 March 2017';
    private creditURL: string = 'https://www.primefaces.org/primeng/#/tree';
    private credit: string = 'primeng (4.0.0-rc.2)';   

    private prefixSyntax: string = '<p-tree';
    private attrSyntaxList: Array<any> = _ATTRSYNTAX;
    private suffixSyntax: string = '></p-tree>';
    private attributeList = _ATTRIBUTELIST;
    private attributeTreeNodeList = _ATTRIBUTETREENODELIST;
    private attributeEventList = _ATTRIBUTEEVENTELIST;
    private systemjs = _SYSTEMJS;
    private appModule = _APPMODULE;
    private styleLine_html = _styleLine_html;
    private styleLine_css = _styleLine_css;

    private codeExample1 = _EXAMPLE1;
    private codeExample2 = _EXAMPLE2;
    private codeExample3 = _EXAMPLE3;
    private codeExample4 = _EXAMPLE4;
    private data1 = _DATA1;

    private item1 =
        [
            {
                "label": "Documents",
                "data": "Documents Folder",
                "expandedIcon": "fa-folder-open",
                "collapsedIcon": "fa-folder",
                "children": [{
                        "label": "Work",
                        "data": "Work Folder",
                        "expandedIcon": "fa-folder-open",
                        "collapsedIcon": "fa-folder",
                        "children": [{"label": "Expenses.doc", "icon": "fa-file-word-o", "data": "Expenses Document"}, {"label": "Resume.doc", "icon": "fa-file-word-o", "data": "Resume Document"}]
                    },
                    {
                        "label": "Home",
                        "data": "Home Folder",
                        "expandedIcon": "fa-folder-open",
                        "collapsedIcon": "fa-folder",
                        "children": [{"label": "Invoices.txt", "icon": "fa-file-word-o", "data": "Invoices for this month"}]
                    }]
            },
            {
                "label": "Pictures",
                "data": "Pictures Folder",
                "expandedIcon": "fa-folder-open",
                "collapsedIcon": "fa-folder",
                "children": [
                    {"label": "barcelona.jpg", "icon": "fa-file-image-o", "data": "Barcelona Photo"},
                    {"label": "logo.jpg", "icon": "fa-file-image-o", "data": "PrimeFaces Logo"},
                    {"label": "primeui.png", "icon": "fa-file-image-o", "data": "PrimeUI Logo"}]
            },
            {
                "label": "Movies",
                "data": "Movies Folder",
                "expandedIcon": "fa-folder-open",
                "collapsedIcon": "fa-folder",
                "children": [{
                        "label": "Al Pacino",
                        "data": "Pacino Movies",
                        "children": [{"label": "Scarface", "icon": "fa-file-video-o", "data": "Scarface Movie"}, {"label": "Serpico", "icon": "fa-file-video-o", "data": "Serpico Movie"}]
                    },
                    {
                        "label": "Robert De Niro",
                        "data": "De Niro Movies",
                        "children": [{"label": "Goodfellas", "icon": "fa-file-video-o", "data": "Goodfellas Movie"}, {"label": "Untouchables", "icon": "fa-file-video-o", "data": "Untouchables Movie"}]
                    }]
            }
        ];
    private item2 =
        [
            {
                "label": "Documents",
                "data": "Documents Folder",
                "expandedIcon": "fa-folder-open",
                "collapsedIcon": "fa-folder",
                "children": [{
                        "label": "Work",
                        "data": "Work Folder",
                        "expandedIcon": "fa-folder-open",
                        "collapsedIcon": "fa-folder",
                        "children": [{"label": "Expenses.doc", "icon": "fa-file-word-o", "data": "Expenses Document"}, {"label": "Resume.doc", "icon": "fa-file-word-o", "data": "Resume Document"}]
                    },
                    {
                        "label": "Home",
                        "data": "Home Folder",
                        "expandedIcon": "fa-folder-open",
                        "collapsedIcon": "fa-folder",
                        "children": [{"label": "Invoices.txt", "icon": "fa-file-word-o", "data": "Invoices for this month"}]
                    }]
            },
            {
                "label": "Pictures",
                "data": "Pictures Folder",
                "expandedIcon": "fa-folder-open",
                "collapsedIcon": "fa-folder",
                "children": [
                    {"label": "barcelona.jpg", "icon": "fa-file-image-o", "data": "Barcelona Photo"},
                    {"label": "logo.jpg", "icon": "fa-file-image-o", "data": "PrimeFaces Logo"},
                    {"label": "primeui.png", "icon": "fa-file-image-o", "data": "PrimeUI Logo"}]
            },
            {
                "label": "Movies",
                "data": "Movies Folder",
                "expandedIcon": "fa-folder-open",
                "collapsedIcon": "fa-folder",
                "children": [{
                        "label": "Al Pacino",
                        "data": "Pacino Movies",
                        "children": [{"label": "Scarface", "icon": "fa-file-video-o", "data": "Scarface Movie"}, {"label": "Serpico", "icon": "fa-file-video-o", "data": "Serpico Movie"}]
                    },
                    {
                        "label": "Robert De Niro",
                        "data": "De Niro Movies",
                        "children": [{"label": "Goodfellas", "icon": "fa-file-video-o", "data": "Goodfellas Movie"}, {"label": "Untouchables", "icon": "fa-file-video-o", "data": "Untouchables Movie"}]
                    }]
            }
        ];

        private item3 =
        [
            {
                "label": "Documents",
                "data": "Documents Folder",
                "expandedIcon": "fa-folder-open",
                "collapsedIcon": "fa-folder",
                "children": [{
                        "label": "Work",
                        "data": "Work Folder",
                        "expandedIcon": "fa-folder-open",
                        "collapsedIcon": "fa-folder",
                        "children": [{"label": "Expenses.doc", "icon": "fa-file-word-o", "data": "Expenses Document"}, {"label": "Resume.doc", "icon": "fa-file-word-o", "data": "Resume Document"}]
                    },
                    {
                        "label": "Home",
                        "data": "Home Folder",
                        "expandedIcon": "fa-folder-open",
                        "collapsedIcon": "fa-folder",
                        "children": [{"label": "Invoices.txt", "icon": "fa-file-word-o", "data": "Invoices for this month"}]
                    }]
            },
            {
                "label": "Pictures",
                "data": "Pictures Folder",
                "expandedIcon": "fa-folder-open",
                "collapsedIcon": "fa-folder",
                "children": [
                    {"label": "barcelona.jpg", "icon": "fa-file-image-o", "data": "Barcelona Photo"},
                    {"label": "logo.jpg", "icon": "fa-file-image-o", "data": "PrimeFaces Logo"},
                    {"label": "primeui.png", "icon": "fa-file-image-o", "data": "PrimeUI Logo"}]
            },
            {
                "label": "Movies",
                "data": "Movies Folder",
                "expandedIcon": "fa-folder-open",
                "collapsedIcon": "fa-folder",
                "children": [{
                        "label": "Al Pacino",
                        "data": "Pacino Movies",
                        "children": [{"label": "Scarface", "icon": "fa-file-video-o", "data": "Scarface Movie"}, {"label": "Serpico", "icon": "fa-file-video-o", "data": "Serpico Movie"}]
                    },
                    {
                        "label": "Robert De Niro",
                        "data": "De Niro Movies",
                        "children": [{"label": "Goodfellas", "icon": "fa-file-video-o", "data": "Goodfellas Movie"}, {"label": "Untouchables", "icon": "fa-file-video-o", "data": "Untouchables Movie"}]
                    }]
            }
        ];

        private item4 =
        [
            {
                "label": "Documents",
                "data": "Documents Folder",
                "expandedIcon": "fa-folder-open",
                "collapsedIcon": "fa-folder",
                "children": [{
                        "label": "Work",
                        "data": "Work Folder",
                        "expandedIcon": "fa-folder-open",
                        "collapsedIcon": "fa-folder",
                        "children": [{"label": "Expenses.doc", "icon": "fa-file-word-o", "data": "Expenses Document"}, {"label": "Resume.doc", "icon": "fa-file-word-o", "data": "Resume Document"}]
                    },
                    {
                        "label": "Home",
                        "data": "Home Folder",
                        "expandedIcon": "fa-folder-open",
                        "collapsedIcon": "fa-folder",
                        "children": [{"label": "Invoices.txt", "icon": "fa-file-word-o", "data": "Invoices for this month"}]
                    }]
            },
            {
                "label": "Pictures",
                "data": "Pictures Folder",
                "expandedIcon": "fa-folder-open",
                "collapsedIcon": "fa-folder",
                "children": [
                    {"label": "barcelona.jpg", "icon": "fa-file-image-o", "data": "Barcelona Photo"},
                    {"label": "logo.jpg", "icon": "fa-file-image-o", "data": "PrimeFaces Logo"},
                    {"label": "primeui.png", "icon": "fa-file-image-o", "data": "PrimeUI Logo"}]
            },
            {
                "label": "Movies",
                "data": "Movies Folder",
                "expandedIcon": "fa-folder-open",
                "collapsedIcon": "fa-folder",
                "children": [{
                        "label": "Al Pacino",
                        "data": "Pacino Movies",
                        "children": [{"label": "Scarface", "icon": "fa-file-video-o", "data": "Scarface Movie"}, {"label": "Serpico", "icon": "fa-file-video-o", "data": "Serpico Movie"}]
                    },
                    {
                        "label": "Robert De Niro",
                        "data": "De Niro Movies",
                        "children": [{"label": "Goodfellas", "icon": "fa-file-video-o", "data": "Goodfellas Movie"}, {"label": "Untouchables", "icon": "fa-file-video-o", "data": "Untouchables Movie"}]
                    }]
            }
        ];

    private selectedFile: any;    
    private selectedFiles: any;
    private selectedFiles2: any;

    private releaseUpdate = _releaseUpdate;
}