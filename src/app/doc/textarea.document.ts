import { Component, OnInit } from '@angular/core';

const ATTRIBUTELIST: Array<any> = [
    { require: '*', name: 'goId', type: 'text', description: `ใช้สำหรับระบุ id ของ text area`},
    { require: '*', name: 'goName', type: 'text', description: `ใช้สำหรับระบุ name ของ text area`},
    { require: '', name: 'label', type: 'text', description: `ใช้สำหรับใส่ข้อความใน label ของ text area`},
    { require: '', name: 'defaultValue', type: 'text', description: `ใช้กำหนดข้อความที่ต้องการรับ-ส่งใน textarea`},
    { require: '', name: 'row', type: 'number', description: `ใช้กำหนดความสูงของ text area หากไม่กำหนด จะมีความสูง = 2 บรรทัด`},
    { require: '', name: 'require', type: 'boolean', description: `ใช้กับ text area ที่จำเป็นต้องระบุค่า โดย
        หากระบุค่า require ="true" จะแสดง * หลัง label`},
    { require: '', name: 'disable', type: 'boolean', description: `ใช้กำหนดเพื่อปิดการใช้งาน textarea โดย
        หากระบุค่า disable="true" จะไม่สามารถแก้ไขข้อความใน textarea ได้`},
    { require: '', name: 'readonly', type: 'boolean', description: `ใช้กำหนดให้ไม่สามารถแก้ไขข้อมูลใน text area ได้`},
    { require: '', name: 'maxlength', type: 'number', description: `ใช้กำหนดความยาวตัวอักษรสูงสุดที่สามารถพิมพ์ได้ใน text area 
        หากไม่ระบุจะมีค่า = 524288 ตัวอักษร`},
    { require: '', name: 'colorTheme', type: 'text', description: `ใช้กำหนดสีของ text area โดยค่าที่สามารถระบุได้ ประกอบด้วย
        success=สีเขียว, info=สีฟ้า, warning=สีส้ม, danger=สีแดง`}
];

@Component({
  selector: 'textarea-document',
  templateUrl: './textarea.document.html',
  styleUrls: ['./textarea.document.css']
})
export class TextareaDocument implements OnInit {

  private componentTag: string = '<go-textarea>';
  private componentDescription: string = `Text area ใช้ในการรับค่าและแสดงผลข้อความ`;
  private version: string = '1.0';
  private releaseDate: string = '10/02/2016';
  private prefixSyntax: string = `<go-textarea `;
  private attrSyntax: string = `goId="textarea_id" goName="textarea_name" [ defaultValue="text" or [(defaultValue)]="text_parameter" ] [label="label_name"] [row="row_num"] [require="true_or_false"] [disable="true_or_false"] [readonly="true_or_false"] [maxlength="number"] [colorTheme="text"] `;
  private suffixSyntax: string = `></go-textarea>`;
  private attributeList = ATTRIBUTELIST;

  paramText = '{{wording}}';
  wording = 'I have an Apple';
  
  constructor() { }

  ngOnInit() {
  }

}
