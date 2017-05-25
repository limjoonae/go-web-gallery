import { Component } from '@angular/core';

const ATTRIBUTELIST: Array<any> = [
    { require: '*', name: 'elementId', type: 'text', description: `ใช้สำหรับระบุ id ให้กับ text editor` },
    { require: '', name: 'height', type: 'number', description: `ใช้สำหรับกำหนดความสูงให้กับ editor โดยมีค่าความสูงเริ่มต้นที่ 200` },
    { require: '', name: 'width', type: 'number', description: `ใช้สำหรับกำหนดความกว้างให้กับ editor โดยหากไม่กำหนดจะถือว่าให้ขยายเต็ม container ที่ครอบเอาไว้` },
    { require: '', name: 'editormode', type: 'text', description: `ใช้สำหรับกำหนดระดับฟังก์ชั่นที่ต้องการใช้งาน โดยจะแบ่งฟังก์ชั่นออกเป็น 3 ระดับคือ basic, standard และ full (มีค่าเริ่มต้นเป็น standard)` },
    {
        require: '', name: 'resize', type: 'boolean หรือ \'both\'', description: `ใช้สำหรับตั้งค่าให้สามารถปรับขนาดตัว editor เองได้โดยมีค่าดังนี้ 1.fault คือ ไม่ให้มีการปรับขนาดได้ 
        2.true คือ ปรับขนาดได้เฉพาะความสูง 3.\'both\' คือ ปรับขนาดได้ทั้งความสูงและความกว้าง` },
    { require: '', name: 'showMenubar', type: 'boolean', description: `ใช้สำหรับตั้งค่าการแสดง Menubar บนแถบเครื่องมือของ editor` },
    { require: '', name: 'showStatusbar', type: 'boolean', description: `ใช้สำหรับตั้งค่าการแสดง Statusbar บนแถบเครื่องมือของ editor` },
    { require: '', name: 'content', type: 'text', description: `ใช้สำหรับตั้งค่าข้อความใน text editor ตอนเริ่มใช้` },
    { require: '', name: 'onEditorChanged', type: 'function($event)', description: `ฟังก์ชั่นจะถูกเรียกเมื่อ editor เกิดการเปลี่ยนแปลง เช่น มีการพิมพ์เข้าไปใน editor โดยค่า event ที่ส่งออกมาคือ content ในตัว editor โดยจะอยู่ในรูปแบบโครงสร้างของ HTML` }
];

const SYSTEMJSLINE: Array<any> = [
    `map: {`,
    `   ..........`,
    `   'tinymce': 'npm:tinymce',`,
    `   'go-texteditor': 'go:texteditor/{version}',`,
    `   ..........`,
    `},`,
    `meta: {`,
    `   ..........`,
    `   'tinymce': {`,
    `      format: 'global'`,
    `   },`,
    `   ..........`,
    `},`,
    `packages: {`,
    `   ..........`,
    `   'tinymce': {`,
    `      main: './tinymce.min.js',`,
    `      defaultExtension: 'js'`,
    `   },`,
    `   'go-texteditor': {`,
    `      main: './texteditor.js',`,
    `      defaultExtension: 'js'`,
    `   },`,
    `   ..........`,
    `}`,
];

const APPMODULELINE: Array<any> = [
    `import { TextEditorComponent } from 'go-texteditor';`,
    ``,
    `@NgModule({`,
    `   declarations: [`,
    `   ..........`,
    `   TextEditorComponent`,
    `   ..........`,
    `],`,
];

@Component({
    selector: 'texteditor-document',
    templateUrl: './texteditor.document.html'
})
export class TextEditorDocument {


    private componentTag: string = '<go-texteditor>';
    private componentDescription: string = `สำหรับเรียกใช้งาน Rich Text Editor บนหน้าเว็บ`;
    private version: string = '1.0';
    private releaseDate: string = '7/12/2016';
    private prefixSyntax: string = `<go-texteditor `;
    private attrSyntax: string = `elementId="editor_id" [[height]="_height"] [[width]="_width"] 
        [editormode="mode_level"] [[resize]="resize_value"] [[showMenubar]="is_menubar_showed"] 
        [[showStatusbar]="is_statusbar_showed"] [content='text_editor_content'] 
        [(onEditorChanged)= "change_function($event)"]`;
    private suffixSyntax: string = `></go-texteditor>`;
    private attributeList = ATTRIBUTELIST;
    private appModuleLine = APPMODULELINE;
    private systemjsLine = SYSTEMJSLINE;
    private appModuleDetail: string = `app.module.ts`;
    private systemJSDetail: string = `systemjs.config.js`;

    code_1: string = `<go-texteditor elementId='editor_1' [height]='100' editormode='basic' content='basic editor' 
    (onEditorChanged)="change_1($event)"></go-texteditor>`;
    code_output_1: string = `change_1(event: any) { this.value_1 = event; }`;
    code_2: string = `	<go-texteditor elementId='editor_2' editormode='standard' [width]='400' 
    [showMenubar]='false' [resize]='true' content='standard editor'	(onEditorChanged)="change_2($event)">
    </go-texteditor>`;
    code_output_2: string = `change_2(event: any) { this.value_2 = event; }`;
    code_3: string = `<go-texteditor elementId='editor_3' editormode='full' [showStatusbar]='false' 
    content='full editor' (onEditorChanged)="change_3($event)"></go-texteditor>`;
    code_output_3: string = ` change_3(event: any) { this.value_3 = event; }`;

    value_1: string = '';
    value_2: string = '';
    value_3: string = '';

    change_1(event: any) { this.value_1 = event; }
    change_2(event: any) { this.value_2 = event; }
    change_3(event: any) { this.value_3 = event; }
}