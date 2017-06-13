import { Component, OnInit } from '@angular/core';

const ATTRIBUTELIST: Array<any> = [
    { require: '*', name: 'headLabel', type: 'text', description: `ใช้ระบุข้อความที่หัวเมนู`},
    { require: '*', name: 'pageList', type: 'array', description: `ใช้ในการรับค่าตัวแปร array ซึ่งประกอบด้วย key คือ menuName=ชื่อ Menu, routerLink=ชื่อ path, outerHref=url website ภายนอก, separated=ระบุว่าให้มีเส้นขั้นเมนูหรือไม่
        ซึ่งในส่วนของ routerLink กับ outerHref ให้ระบุเพียงอย่างใดอย่างหนึ่ง `},
];

const PAGELIST: Array<any> = [
  {routerLink: 'badge', menuName: 'Badge'},
  {routerLink: 'checkbox', menuName: 'Check Box'},
  {routerLink: 'textarea', menuName: 'Text Area'},
  {routerLink: 'textbox', menuName: 'Text Box'},
  {routerLink: 'texteditor', menuName: 'Text Editor'},
  {outerHref: 'http://www.ascii.cl/htmlcodes.htm', menuName: 'Another Website'},
];

const PAGELIST2: Array<any> = [
  {routerLink: 'badge', menuName: 'Badge'},
  {routerLink: 'checkbox', menuName: 'Check Box'},
  {routerLink: 'textarea', menuName: 'Text Area'},
  {routerLink: 'textbox', menuName: 'Text Box'},
  {routerLink: 'texteditor', menuName: 'Text Editor'},
  {outerHref: 'http://www.ascii.cl/htmlcodes.htm', menuName: 'Another Website', separated: true},
];

@Component({
  selector: 'pulldown-menu-document',
  templateUrl: './pulldown-menu.document.html'
})
export class PulldownMenuDocument implements OnInit {

  private componentTag: string = '<go-pulldown-menu>';
  private componentDescription: string = `Pulldown menu คือ เมนูที่แสดงรายการในลักษณะถูกดึงลง โดยการกดที่หัวเมนูหลัก  
      ตัวเมนูจะ hilight สีเมื่อผู้ใช้อยู่ในหน้าที่ตรงกับ url ของเมนูนั้นๆ 
      การใช้งานจะใช้ร่วมกับ RouterModule ใน Angular เพื่อความสะดวกในการ config path`;
  private version: string = '1.0';
  private releaseDate: string = '19/12/2016';
  private prefixSyntax: string = `<go-pulldown-menu `;
  private attrSyntax: string = `headLabel="text" [pageList]="array_variable"`;
  private suffixSyntax: string = `></go-pulldown-menu>`;
  private attributeList = ATTRIBUTELIST;

  pageList = PAGELIST;
  pageList2 = PAGELIST2;
  constructor() { }

  ngOnInit() {
  }

}
