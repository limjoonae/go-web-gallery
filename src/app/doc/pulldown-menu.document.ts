import { Component, OnInit } from '@angular/core';

const ATTRIBUTELIST: Array<any> = [
    { require: '*', name: 'headLabel', type: 'text', description: `ใช้ระบุข้อความที่หัวเมนู`},
    { require: '*', name: 'pageList', type: 'array', description: `ใช้ในการรับค่าตัวแปร array ซึ่งประกอบด้วย key คือ menuName=ชื่อ Menu, routerLink=ชื่อ path, outerHref=url website ภายนอก, separated=ระบุว่าให้มีเส้นขั้นเมนูหรือไม่
        ซึ่งในส่วนของ routerLink กับ outerHref ให้ระบุเพียงอย่างใดอย่างหนึ่ง `},
];

const SYSTEMJSLINE: Array<any> = [
    `map: {`,
    ` 'go-pulldown-menu': 'go:pulldown-menu/{version}',`,
    `},`,
    ``,
    `packages: {`,
    ` 'go-pulldown-menu': {`,
    `    main: './pulldown-menu.js',`,
    `    defaultExtension: 'js'`,
    `  },`,    
];

const APPMODULELINE: Array<any> = [
    `import { PulldownMenuComponent } from 'go-pulldown-menu';`,
    `import { RouterModule, Routes } from '@angular/router';`,
    ``,
    `const appRoutes: Routes = [`,
    `  { path: '', component: AppComponent },`,
    `  { path: 'link_1', component: Link1Component },`,
    `  { path: 'link_2', component: Link2Component },`,
    `  { path: 'link_n', component: LinkNComponent },`,
    `  { path: '**', component: AppComponent }`,
    `];`,
    ``,
    `@NgModule({`,
    `   imports:      [ `,
    `       BrowserModule,`,
    `       RouterModule.forRoot(appRoutes, {useHash: true}), `,
    `   ],`,
    ``,
    `   declarations: [`,
    `       ..........`,
    `       PulldownMenuComponent,`,
    `       ..........`,
    `   ],`,
];

const APPCOMPONENTLINE: Array<any> = [
    `import { PageListModel } from 'go-pulldown-menu';`,
    ``,
    `const CONST_VAR_NAME: PageListModel[] = [`,
    `   {routerLink: 'menu_1', menuName: 'Menu 1'},`,
    `   {routerLink: 'menu_2', menuName: 'Menu 2'},`,
    `   {routerLink: 'menu_n', menuName: 'Menu N'},`,
    `   หรือ  `,
    `   {outerHref: 'outer_url', menuName: 'Anoter Name'},`,
    `   หรือ  `,
    `   {outerHref: 'outer_url', menuName: 'Anoter Name', separated: true},`,
    `],`,
    ``,
    `export class AppComponent {`,
    `   array_variable = CONST_VAR_NAME;`,
    `}`,
];

const STYLELINE: Array<any> = [
    `.navbar-nav .nav-item{`,
    `    margin-left: 1rem!important;`,
    `}`,
];

const PAGELIST: Array<any> = [
  {routerLink: 'badge', menuName: 'Badge'},
  {routerLink: 'checkbox', menuName: 'Check Box'},
  {routerLink: 'textarea', menuName: 'Text Area'},
  {routerLink: 'textbox', menuName: 'Text Box'},
  {routerLink: 'texteditor', menuName: 'Text Editor'},
  {outerHref: 'http://www.ascii.cl/htmlcodes.htm', menuName: 'Anoter Website'},
];

const PAGELIST2: Array<any> = [
  {routerLink: 'badge', menuName: 'Badge'},
  {routerLink: 'checkbox', menuName: 'Check Box'},
  {routerLink: 'textarea', menuName: 'Text Area'},
  {routerLink: 'textbox', menuName: 'Text Box'},
  {routerLink: 'texteditor', menuName: 'Text Editor'},
  {outerHref: 'http://www.ascii.cl/htmlcodes.htm', menuName: 'Anoter Website', separated: true},
];

@Component({
  selector: 'pulldown-menu-document',
  templateUrl: './pulldown-menu.document.html',
  styleUrls: ['./pulldown-menu.document.css']
})
export class PulldownMenuDocument implements OnInit {

  private componentTag: string = '<go-pulldown-menu>';
  private componentDescription: string = `Pulldown menu คือ เมนูที่แสดงรายการในลักษณะถูกดึงลง โดยการกดที่หัวเมนูหลัก  
      ตัวเมนูจะ hilight สีเมื่อผู้ใช้อยู่ในหน้าที่ตรงกับ url ของเมนูนั้นๆ 
      การใช้งานจะใช้ร่วมกับ routerLink ใน Angular 2 เพื่อความสะดวกในการ config path`;
  private version: string = '1.0';
  private releaseDate: string = '19/12/2016';
  private prefixSyntax: string = `<go-pulldown-menu `;
  private attrSyntax: string = `headLabel="text" [pageList]="array_variable"`;
  private suffixSyntax: string = `></go-pulldown-menu>`;
  private attributeList = ATTRIBUTELIST;
  private systemjsLine = SYSTEMJSLINE;
  private appModuleLine = APPMODULELINE;
  private appComponentLine = APPCOMPONENTLINE;

  pageList = PAGELIST;
  pageList2 = PAGELIST2;
  constructor() { }

  ngOnInit() {
  }

}
