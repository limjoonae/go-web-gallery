import { Component, Input } from '@angular/core';

const _ATTRIBUTELIST: Array<any> = [
    { require: '', name: 'header', type: 'string', description: `ใช้สำหรับระบุ Title ของ dialog`},
    { require: '', name: 'draggable', type: 'boolean', description: `ใช้ระบุเพื่อให้ dialog สามารถเลื่อนได้`},
    { require: '', name: 'visible', type: 'boolean', description: `ใช้ระบุเพื่อกำหนดการแสดง dialog`},
    { require: '', name: 'closable', type: 'boolean', description: `ใช้ระบุเพื่อกำหนดการแสดงปุ่ม close`},
    { require: '', name: 'responsive', type: 'boolean', description: `ใช้ระบุเพื่อกำหนดให้ dialog สามารถ responsive ได้`},
    { require: '', name: 'showHeader', type: 'boolean', description: `ใช้ระบุเพื่อกำหนดให้ dialog แสดงส่วน header`},
    { require: '', name: 'modal', type: 'boolean', description: `ใช้ระบุเพื่อกำหนดให้มีการ lock screen`},
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
  { data: `   [header = "title"]` },
  { data: `   [draggable = "true_or_false"]` },
  { data: `   visible = "true_or_false"` },
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

const _styleLine_html: Array<any> = [
'<link rel="stylesheet" type="text/css" href="http://10.182.247.173/gos-cdn/node_modules/2.4.0/primeng/resources/themes/bootstrap/theme.css" />',
'<link rel="stylesheet" type="text/css" href="http://10.182.247.173/gos-cdn/node_modules/2.4.0/primeng/resources/primeng.min.css" />'
];

const _styleLine_css: Array<any> = [
  `@import url('http://10.182.247.173/gos-cdn/node_modules/2.4.0/primeng/resources/themes/bootstrap/theme.css');`,
  `@import url('http://10.182.247.173/gos-cdn/node_modules/2.4.0/primeng/resources/primeng.min.css');`
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
  { data: `import { DialogModule } from 'primeng';` },
  { data: `@NgModule({ 
   imports: [  
           .................. 
           DialogModule
           .................. 
   ] 
  }) `}
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
    private systemjs: Array<any> = _SYSTEMJS;
    private appModule : Array<any> = _APPMODULE;
    private styleLine_html = _styleLine_html;
    private styleLine_css = _styleLine_css;
    private releaseUpdate = _releaseUpdate;
    private releaseDay: string = '(29 March 2017)';
    
    private display: boolean = false;

    showDialog() {
        this.display = true;
    }

    private booleanArr: boolean[] = [true, false];

    private title: string = "Hello World";
    private isShowHeader: boolean = true;
    private isDraggable: boolean = true;
    private isClosable: boolean = true;
    private isResponsive: boolean = true;
    private isModal: boolean = true;
    private width: number = 300;
    private height: number;
    private body: string = '';

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
      this.isResponsive = this.stringToBoolean(value);
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
      '<p-dialog [header]="' + this.title + '"',
      '[modal] = "' + this.isModal + '"',
      '[closable] = "' + this.isClosable + '"',
      '[draggable] = "' + this.isDraggable + '"',
      '[responsive] = "' + this.isResponsive + '"',
      '[showHeader] = "' + this.isShowHeader + '"',
      '[width] = "' + this.width + '"',
      '[height] = "' + this.height + '"',
      '>',
      '' + this.body,
      `
<p-footer>
  <div class="ui-dialog-buttonpane ui-widget-content ui-helper-clearfix">
    <go-button label="no" iconName="close" buttonColor="primary" (click)="display=false" ></go-button>
    <go-button label="yes" iconName="check" buttonColor="primary" (click)="display=false" ></go-button>
  </div>
</p-footer>`,
      '</p-dialog>'];
    }

    private codeExample: Array<any> = [
      '<p-dialog [header]="' + this.title + '"',
      '[modal] = "' + this.isModal + '"',
      '[closable] = "' + this.isClosable + '"',
      '[draggable] = "' + this.isDraggable + '"',
      '[responsive] = "' + this.isResponsive + '"',
      '[showHeader] = "' + this.isShowHeader + '"',
      '[width] = "' + this.width + '"',
      '[height] = "' + this.height + '"',
      '>',
      '' + this.body,
      `
<p-footer>
  <div class="ui-dialog-buttonpane ui-widget-content ui-helper-clearfix">
    <go-button label="no" iconName="close" buttonColor="primary" (click)="display=false" ></go-button>
    <go-button label="yes" iconName="check" buttonColor="primary" (click)="display=false" ></go-button>
  </div>
</p-footer>`,
      '</p-dialog>'];
  
}