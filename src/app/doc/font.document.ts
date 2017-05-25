import { Component, OnInit } from '@angular/core';

const TYPEFACELIST:Array<any> = [
    'Athiti','Kanit','Maitree','Taviraj','Trirong'
]
const TYPEFACEMINILIST:Array<any> = [
    '','Kanit','','Taviraj','Trirong'
]

const TABLELIST: Array<any> = [
    { TypeFace: TYPEFACELIST, fontFamily: 'Regular' },
    { TypeFace: TYPEFACELIST, fontFamily: 'Bold' },
    { TypeFace: TYPEFACEMINILIST, fontFamily: 'BoldItalic' },
    { TypeFace: TYPEFACEMINILIST, fontFamily: 'Italic' },
    { TypeFace: TYPEFACEMINILIST, fontFamily: 'Black' },
    { TypeFace: TYPEFACEMINILIST, fontFamily: 'BlackItalic' },
    { TypeFace: TYPEFACEMINILIST, fontFamily: 'ExtraBold' },
    { TypeFace: TYPEFACEMINILIST, fontFamily: 'ExtraBoldItalic' },
    { TypeFace: TYPEFACELIST, fontFamily: 'ExtraLight' },
    { TypeFace: TYPEFACEMINILIST, fontFamily: 'ExtraLightItalic' },
    { TypeFace: TYPEFACELIST, fontFamily: 'Light' },
    { TypeFace: TYPEFACEMINILIST, fontFamily: 'LightItalic' },
    { TypeFace: TYPEFACELIST, fontFamily: 'Medium' },
    { TypeFace: TYPEFACEMINILIST, fontFamily: 'MediumItalic' },
    { TypeFace: TYPEFACELIST, fontFamily: 'SemiBold' },
    { TypeFace: TYPEFACEMINILIST, fontFamily: 'SemiBoldItalic' },
    { TypeFace: TYPEFACEMINILIST, fontFamily: 'Thin' },
    { TypeFace: TYPEFACEMINILIST, fontFamily: 'ThinItalic' },
];

@Component({
  selector: 'font-document',
  templateUrl: './font.document.html',
  styleUrls: ['./font.document.css']
})
export class FontDocument implements OnInit {

  private componentDescription: string = `Font คือรูปแบบตัวอักษร สามารถนำไปกำหนดแบบอักษรบน website ได้ เพียงแค่เรียกใช้งาน css เท่านั้น
  ช่วยให้สามารถแสดง font ได้ไม่ว่าจะเปิดบนเครื่องใดก็ตาม และลดพื้นที่ในที่ในการเก็บไฟล์ font บนเครื่องของ developer อีกด้วย
    `;
  private cdn_url: string = '{_cdnPath_}';
  private version: string = '1.0.0';
  private releaseDate: string = '28/12/2016';
  private credit: string = 'Google Font';
  private creditUrl: string = 'https://fonts.google.com/?subset=thai';
  private prefixSyntax: string = `font-family: `;
  private attrSyntax: string = `'{typeface}-{style}'`;
  private suffixSyntax: string = `;`;
  private tableList = TABLELIST;
  private gettingStartDetail = 'การใช้งานต้องทำการ import font.css ของ font แต่ละแบบเข้ามา โดยสามารถทำได้ 2 วิธีดังนี้';
  private htmlImport = `<link rel="stylesheet" type="text/css" href="` + this.cdn_url + `/fonts/` + this.version + `/{TypeFace}/font.css"/>`;
  private cssImport = `@import url('` + this.cdn_url + `/fonts/` + this.version + `/{TypeFace}/font.css');`;
  
  constructor() { }

  ngOnInit() {
    }

}