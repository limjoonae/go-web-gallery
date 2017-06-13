import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

const _ATTRIBUTELIST: Array<any> = [
    { require: '*', name: 'model', type: 'array', description: `ใช้สำหรับระบุข้อมูลให้ step`},
    { require: '', name: 'activeIndex', type: 'number', description: `ใช้สำหรับระบุหมายเลขขั้นตอนที่ต้องการให้ active`},
    { require: '', name: 'readonly', type: 'boolean', description: `ใช้ระบุเพื่อต้องการให้ read only`},
    { require: '', name: 'style', type: 'string', description: `ใช้สำหรับระบุ style แบบ inline`},
    { require: '', name: 'styleClass', type: 'string', description: `ใช้สำหรับระบุ style class`}
];

// const _EVENTLIST: Array<any> = [
//     { require: '', name: 'onBeforeToggle', type: 'function($event)', description: `จะส่ง event ให้ก่อนที่ Content จะ toggle`},
//     { require: '', name: 'onAfterToggle', type: 'function($event)', description: `จะส่ง event ให้หลังจากที่ Content ถูก toggle`},
// ];

const _ATTRSYNTAX: Array<any> = [
  { data: `` },
  { data: `     model = "items"` },
  { data: `     [activeIndex = "number"]` },
  { data: `     [readonly = "true_or_false"]` },
  { data: `     [style = "style_inline"]` },
  { data: `     [styleClass = "style_class"]` }
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
  { data: `import { StepsModule } from 'primeng';` },
  { data: `import { RouterModule, Routes } from '@angular/router'` },
  { data: `` },
  { data: `
  const appRoutes: Routes = [
    { path: '', component: AppComponent},
  ];` 
},
  { data: `` },
  { data: `@NgModule({ 
   imports: [  
           .................. 
           StepsModule,
           RouterModule.forRoot(appRoutes, {useHash: true}),
           .................. 
   ] 
  }) `}
]

const _styleLine_html: Array<any> = [
'<link rel="stylesheet" type="text/css" href="http://10.182.247.173/gos-cdn/node_modules/2.4.0/primeng/resources/themes/bootstrap/theme.css" />',
'<link rel="stylesheet" type="text/css" href="http://10.182.247.173/gos-cdn/node_modules/2.4.0/primeng/resources/primeng.min.css" />'
];

const _styleLine_css: Array<any> = [
  `@import url('http://10.182.247.173/gos-cdn/node_modules/2.4.0/primeng/resources/themes/bootstrap/theme.css');`,
  `@import url('http://10.182.247.173/gos-cdn/node_modules/2.4.0/primeng/resources/primeng.min.css');`
];

const _EXAMPLE1: Array<any> = [
  { data: `app.component.ts` },
  { data: `
private items1 = [
    { label: 'Login' },
    { label: 'Select Round' },
    { label: 'Payment' },
    { label: 'Confirm' }
];
  ` },
  { data: `` },
  { data: `app.component.html` },
  { data: `` },
  { data: `<p-steps [model]="items1" ></p-steps>` },

]
const _EXAMPLE2: Array<any> = [
  { data: `app.component.ts` },
  { data: `` },
  { data: `private activeIndex: number = 1;` },
  { data: `
private items2: Array<any> = [
  {
    label: 'Step 1',
    command: (event: any) => {
      this.activeIndex = 0;
    }
  },
  {
    label: 'Step 2',
    command: (event: any) => {
      this.activeIndex = 1;
    }
  },
  {
    label: 'Step 3',
    command: (event: any) => {
      this.activeIndex = 2;
    }
  },
  {
    label: 'Step 4',
    command: (event: any) => {
      this.activeIndex = 3;
    }
  },
  {
    label: 'Step 5',
    command: (event: any) => {
      this.activeIndex = 4;
    }
  },
  {
    label: 'Step 6',
    command: (event: any) => {
      this.activeIndex = 5;
    }
  }
];
    ` },
  { data: `` },
  { data: `app.component.html` },
  { data: `` },
  { data: `<p-steps [model]="items2" [(activeIndex)]="activeIndex" [readonly]="false"></p-steps>` },
]
const _EXAMPLE3: Array<any> = [
  { data: `` },
]
const _EXAMPLE4: Array<any> = [
  { data: `` },
]


@Component({
    selector: 'doc-step',
    templateUrl: './step.document.html'
})
export class StepDocument  { 

  constructor(private router: Router) {}

    private componentTag: string = 'Step'
    private version: string = '1.0'; 
    private componentDescription: string = `Step เป็นเครื่องมือในการจัดขั้นตอน สามารถปรับให้เหมาะสมกับการใช้งานขั้นตอนต่าง ๆ ได้`
    private releaseDate: string = '29 March 2017';
    private creditURL: string = 'https://www.primefaces.org/primeng/#/steps';
    private credit: string = 'primeng (2.0.5)';   

    private prefixSyntax: string = '<p-steps ';
    private attrSyntaxList: Array<any> = _ATTRSYNTAX;
    private suffixSyntax: string = '>  </p-steps>';
    private attributeList = _ATTRIBUTELIST;
    // private eventList = _EVENTLIST;
    private systemjs = _SYSTEMJS;
    private appModule = _APPMODULE;
    private styleLine_html = _styleLine_html;
    private styleLine_css = _styleLine_css;

    private codeExample1 = _EXAMPLE1;
    private codeExample2 = _EXAMPLE2;
    private codeExample3 = _EXAMPLE3;
    private codeExample4 = _EXAMPLE4;

    private activeIndex: number = 1;
    private items1 = [
      {label: 'Login'},
      {label: 'Select Round'},
      {label: 'Payment'},
      {label: 'Confirm'}
    ];
    private items2: Array<any> = [{
                label: 'Step 1',
                command: (event: any) => {
                    this.activeIndex = 0;
                }
            },
            {
                label: 'Step 2',
                command: (event: any) => {
                    this.activeIndex = 1;
                }
            },
            {
                label: 'Step 3',
                command: (event: any) => {
                    this.activeIndex = 2;
                }
            },
            {
                label: 'Step 4',
                command: (event: any) => {
                    this.activeIndex = 3;
                }
            },
            {
                label: 'Step 5',
                command: (event: any) => {
                    this.activeIndex = 4;
                }
            },
            {
                label: 'Step 6',
                command: (event: any) => {
                    this.activeIndex = 5;
                }
            }

        ];
    


}