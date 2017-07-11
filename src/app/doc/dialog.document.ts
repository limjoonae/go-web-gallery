import { Component, Input } from '@angular/core';

const _ATTRIBUTELIST: Array<any> = [
    { require: '*', name: 'visible', type: 'boolean', description: `ใช้ระบุว่าจะให้แสดง dialog หรือไม่ มีค่า default เป็น false`},
    { require: '', name: 'header', type: 'string', description: `ใช้สำหรับระบุ Title ของ dialog`},
    { require: '', name: 'draggable', type: 'boolean', description: `ใช้ระบุว่าให้ dialog สามารถเลื่อนได้หรือไม่ มีค่า default เป็น true`},
    { require: '', name: 'closable', type: 'boolean', description: `ใช้ระบุเพื่อกำหนดการแสดงปุ่มปิด(X) มีค่า default เป็น true`},
    { require: '', name: 'responsive', type: 'boolean', description: `ใช้ระบุเพื่อกำหนดให้ dialog สามารถ responsive ได้ มีค่า default เป็น false (*หมายเหตุ: ควรกำหนดค่าเป็น true เพื่อให้สามารถแสดงผลบน Mobile ได้)`},
    { require: '', name: 'showHeader', type: 'boolean', description: `ใช้ระบุเพื่อกำหนดให้ dialog แสดงส่วน header มีค่า default เป็น true`},
    { require: '', name: 'modal', type: 'boolean', description: `ใช้ระบุเพื่อกำหนดว่าจะให้ lock screen หรือไม่เมื่อแสดง dialog มีค่า default เป็น false`},
    { require: '', name: 'width', type: 'number', description: `ใช้สำหรับระบุความกว้างของ dialog`},
    { require: '', name: 'height', type: 'number', description: `ใช้สำหรับระบุความสูงของ dialog`},
    { require: '', name: 'minWidth', type: 'number', description: `ใช้สำหรับระบุความกว้างต่ำสุดของ dialog`},
    { require: '', name: 'minHeight', type: 'number', description: `ใช้สำหรับระบุความสูงต่ำสุดของ dialog`},
    { require: '', name: 'style', type: 'string', description: `ใช้สำหรับระบุ style inline`},
    { require: '', name: 'styleClass', type: 'string', description: `ใช้สำหรับระบุ style class`},
 
];

const _EVENTLIST: Array<any> = [
  { require: '', name: 'onBeforeShow', type: 'function($even)', description: `จะทำงานก่อนแสดง dialog`},
  { require: '', name: 'onAfterShow', type: 'function($even)', description: `จะทำงานหลังแสดง dialog`},
  { require: '', name: 'onBeforeHide', type: 'function($even)', description: `จะทำงานก่อนซ่อน dialog`},
  { require: '', name: 'onAfterHide', type: 'function($even)', description: `จะทำงานหลังซ่อน dialog`},
];

const _ATTRSYNTAX: Array<any> = [
  { data: `` },
  { data: `   visible = "true_or_false"` },
  { data: `   [header = "title"]` },
  { data: `   [draggable = "true_or_false"]` },
  { data: `   [closable = "true_or_false"]` },
  { data: `   [responsive = "true_or_false"]` },
  { data: `   [showHeader = "true_or_false"]` },
  { data: `   [modal = "true_or_false]` },
  { data: `   [width = "width_of_dialog"]` },
  { data: `   [height = "height_of_dialog"]` },
  { data: `   [minWidth = "minimum_width_of_dialog"]` },
  { data: `   [minHeight = "minimum_height_of_dialog"]` },
  { data: `   [style = "style_inline"]` },
  { data: `   [styleClass = "style_class"]` },
];

const _releaseUpdate: Array<any> = [
  { head: `Version`, data: `Update primeng version 4.0.0-rc.2` },
  { head: `Footer`, data: `สามารถใส่ footer ให้แก่ popup ได้` },
  { head: `Draggable`, data: `สามารถกำหนดให้สามารถเลื่อน popup ไปมาได้` },
  { head: `Responsive`, data: `สามารถกำหนด Responsive ให้แก่ popup ได้` },
  { head: `Width - Height`, data: `สามารถกำหนดความกว้างความสูงให้แก่ popup ได้` },
];

@Component({
    selector: 'doc-dialog',
    templateUrl: './dialog.document.html'
})
export class DialogDocument  { 
    private componentTag: string = 'Dialog'
    private version: string = '2.0'; 
    private componentDescription: string = `Dialog เป็นเหมือน message-popup ใช้แสดงการแจ้งเตือนสถานะต่าง ๆ `
    private releaseDate: string = '29 March 2017';
    private creditURL: string = 'https://www.primefaces.org/primeng/#/dialog';
    private credit: string = 'primeng (4.0.0-rc.2)';   

    private prefixSyntax: string = '<p-dialog';
    private attrSyntaxList: Array<any> = _ATTRSYNTAX;
    private suffixSyntax: string = '</p-dialog>';
    private attributeList: Array<any> = _ATTRIBUTELIST;
    private eventList = _EVENTLIST;
    private releaseUpdate = _releaseUpdate;
    private releaseDay: string = '(29 March 2017)';
    
    private display: boolean = false;
    private display2: boolean = false;
    private display3: boolean = false;

    showDialog() {
        this.display = !this.display;
    }

    showDialog2() {
        this.display2 = !this.display2;
    }

    showDialog3() {
        this.display3 = !this.display3;
    }

    private booleanArr: boolean[] = [true, false];

    private title: string = "Hello World";
    private title2:string = 'Responsive';
    private title3:string = 'Non-Responsive';
    private isShowHeader: boolean = true;
    private isDraggable: boolean = true;
    private isClosable: boolean = true;
    private isResponsive: boolean=true;
    private isModal: boolean = true;
    private width: number = 300;
    private height: number;
    private body: string = "This is Dialog Body";
    private res:boolean =!this.isResponsive;
    callTitle(value:any) {
      this.title = value;
      this.update();
    }

    callShowHeader(value: any){
      this.isShowHeader = this.stringToBoolean(value);
      this.update();
    }

    callDraggable(value: any){
      this.isDraggable = this.stringToBoolean(value);
      this.update();
    }

    callClosable(value: any){
      this.isClosable = this.stringToBoolean(value);
      this.update();
    }

    callResponsive(value: any){
      
      this.isResponsive= this.stringToBoolean(value);
      console.log(this.isResponsive);
      this.update();
    }

    callModal(value: any){
      this.isModal= this.stringToBoolean(value);
      this.update();
    }

    callWidth(value: any){
      this.width= value;
      this.update();
    }

    callHeight(value: any){
      this.height= value;
      this.update();
    }

    callBody(value: any){
      this.body= value;
      this.update();
    }

    stringToBoolean(status: string): boolean {
      if (status == "true") {
        return true;
      } else {
        return false;
      }
    }

    update(){
this.codeExample = [

      'app.component.ts',
      `
 private display: boolean = false;
 showDialog() {
   this.display = !this.display;
 }
`,
      '',
      'app.component.html',
      '',      
      `<go-button label="show" iconName="external-link-square" 
      buttonColor="primary" (click)="showDialog()" ></go-button>`,
      '',    
      '<p-dialog id="dialog_configuration"',
      '   [(visible)]="' + this.display + '"',
      '   header="' + this.title + '"',
      '   [showHeader]="' + this.isShowHeader + '"',
      '   [draggable]="' + this.isDraggable + '"',
      '   [closable]="' + this.isClosable + '"',
      '   [modal]="' + this.isModal + '"',
      '   width="' + this.width + '"',
      '   [height]="' + this.height + '"',
      '>',
      ' <p>' + this.body + '</p>',
      ` <p-footer>
    <div class="ui-dialog-buttonpane ui-widget-content ui-helper-clearfix">
      <go-button label="no" iconName="close" buttonColor="primary" (click)="showDialog()" ></go-button>
      <go-button label="yes" iconName="check" buttonColor="primary" (click)="showDialog()" ></go-button>
    </div>
  </p-footer>`,
      '</p-dialog>'];
    }

    private codeExample: Array<any> = [
      'app.component.ts',
      `
 private display: boolean = false;
 showDialog() {
   this.display = !this.display;
 }
`,
      '',
      'app.component.html',
      '',      
      `<go-button label="show" iconName="external-link-square" 
      buttonColor="primary" (click)="showDialog()" ></go-button>`,
      '',    
      '<p-dialog id="dialog_configuration"',
      '   [(visible)]="' + this.display + '"',
      '   header="' + this.title + '"',
      '   [showHeader]="' + this.isShowHeader + '"',
      '   [draggable]="' + this.isDraggable + '"',
      '   [closable]="' + this.isClosable + '"',
      '   [modal]="' + this.isModal + '"',
      '   width="' + this.width + '"',
      '   [height]="' + this.height + '"',
      '>',
      ' <p>' + this.body + '</p>',
      ` <p-footer>
    <div class="ui-dialog-buttonpane ui-widget-content ui-helper-clearfix">
      <go-button label="no" iconName="close" buttonColor="primary" (click)="showDialog()" ></go-button>
      <go-button label="yes" iconName="check" buttonColor="primary" (click)="showDialog()" ></go-button>
    </div>
  </p-footer>`,
      '</p-dialog>'];
  
}