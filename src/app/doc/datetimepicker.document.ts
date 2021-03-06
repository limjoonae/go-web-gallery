import { Component, Input, OnInit } from '@angular/core';

const _ATTRIBUTETABLELIST: Array<any> = [
    { require: '', name: 'inputId', type: 'string', description: `ใช้สำหรับระบุ id ให้ datetimepicker`},
    { require: '', name: 'defaultDate', type: 'date', description: `ใช้สำหรับระบุวันที่เริ่มต้นให้แก่ datetimepicker`},
    { require: '', name: 'style', type: 'string', description: `ใช้สำหรับระบุ style ให้ datetimepicker`},
    // { require: '', name: 'styleClass', type: 'string', description: `ใช้สำหรับระบุ style class ให้ datetimepicker`},
    { require: '', name: 'inputStyle', type: 'string', description: `ใช้สำหรับใส่ style ให้ input field`},
    // { require: '', name: 'inputStyleClass', type: 'string', description: `ใช้สำหรับใส่ style class ให้ input field`},
    { require: '', name: 'placeholder', type: 'string', description: `ใช้สำหรับระบุ placeholder ให้ datetimepicker`},
    { require: '', name: 'disabled', type: 'string', description: `ใช้ระบุเพื่อกำหนด disabled ให้ datetimepicker`},
    { require: '', name: 'dateFormat', type: 'string', description: `ใช้สำหรับระบุรูปแบบวันที่ใน input field ที่จะแสดงรวมทั้งรูปแบบที่ผู้ใช้ต้องกรอก(เช่น 'dd MM yy' ผู้ใช้ต้องกรอกตามรูปแบบเป็น '1 January 2017' เท่านั้น) โดยสามารถดูได้จากด้านล่าง`},
    { require: '', name: 'inline', type: 'boolean', description: `ใช้สำหรับกำหนดการแสดงปฏิทินในรูปแบบ inline (แสดงปฏิทินทั้้งตาราง)`},
    { require: '', name: 'selectOtherMonths', type: 'boolean', description: `ใช้ระบุเพื่อกำหนดให้สามารถเลือกวันที่ของเดือนอื่นที่แสดงนอกเหนือจากเดือนที่แสดงอยู่ได้`},
    { require: '', name: 'showIcon', type: 'boolean', description: `ใช้ระบุเพื่อกำหนดการแสดงปุ่มไอคอนซึ่งอยู่ถัดจาก input field`},
    { require: '', name: 'icon', type: 'string', description: `ใช้สำหรับระบุ icon ที่ต้องการให้แสดงในปุ่มไอคอนซึ่งอยู่ถัดจาก input field`},
    { require: '', name: 'readonlyInput', type: 'boolean', description: `ใช้ระบุเพื่อกำหนดให้ไม่สามารถระบุหรือไม่สามารถแก้ไขค่าใน input field โดยตรงได้`},
    { require: '', name: 'minDate', type: 'Date', description: `ใช้ระบุเพื่อกำหนดวันที่ต่ำที่สุดที่สามารถเลือกได้`},
    { require: '', name: 'maxDate', type: 'Date', description: `ใช้ระบุเพื่อกำหนดวันที่สูงที่สุดที่สามารถเลือกได้`},
    { require: '', name: 'disabledDates', type: 'Array<Date>', description: `ใช้สำหรับระบุวันที่ ที่ไม่ต้องการให้เลือกบนปฏิทิน`},
    { require: '', name: 'disabledDays', type: 'Array<number>', description: `ใช้สำหรับระบุวันในสัปดาห์ ที่ไม่ต้องการให้เลือกบนปฏิทิน เช่นระบุ [0,6] จะไม่สามารถเลือกวันอาทิตย์กับวันเสาร์ได้`},
    { require: '', name: 'monthNavigator', type: 'boolean', description: `ใช้ระบุเพื่อกำหนดให้ใช้งานตัวเลือกเดือนในปฏิทิน`},
    { require: '', name: 'yearNavigator', type: 'boolean', description: `ใช้ระบุเพื่อกำหนดให้ใช้งานตัวเลือกปีในปฏิทิน`},
    { require: '', name: 'yearRange', type: 'string', description: `ใช้ระบุเพื่อกำหนดช่วงปีที่ต้องการให้แสดงในรายการ (ใช้คู่กับ yearNavigator โดยกำหนดในรูปแบบของ "xxxx:yyyy" โดยที่ xxxx ต้องน้อยกว่า yyyy)`},
    { require: '', name: 'showTime', type: 'boolean', description: `ใช้ระบุเพื่อกำหนดให้แสดง time ในปฏิทิน`},
    { require: '', name: 'hourFormat', type: 'string', description: `ใช้ระบุเพื่อกำหนดรูปแบบเวลา ในแบบ 12 หรือ 24 ชั่วโมง`},
    // { require: '', name: 'locale', type: 'any', description: ``},
    { require: '', name: 'dataType', type: 'string', description: `ใช้ระบุเพื่อกำหนดให้คืนค่ากลับมาเป็นรูปแบบ Date หรือ string`},
    // { require: '', name: 'required', type: 'boolean', description: ``},
    { require: '', name: 'showSeconds', type: 'boolean', description: `ใช้ระบุเพื่อกำหนดให้แสดงวินาทีเมื่อกำหนดให้แสดงเวลา`},
    { require: '', name: 'stepHour', type: 'number', description: `ใช้ระบุเพื่อกำหนดจำนวนให้เมื่อเปลี่ยนเวลาเพิ่มขึ้นหรือลดลง เช่น เมื่อกำหนด 1 จะสามารเพิ่มหรือลดลงได้ทีละ 1 ชั่วโมง`},
    { require: '', name: 'stepMinute', type: 'number', description: `ใช้ระบุเพื่อกำหนดจำนวนให้เมื่อเปลี่ยนเวลาเพิ่มขึ้นหรือลดลง เช่น เมื่อกำหนด 1 จะสามารเพิ่มหรือลดลงได้ทีละ 1 นาที`},
    { require: '', name: 'stepSecond', type: 'number', description: `ใช้ระบุเพื่อกำหนดจำนวนให้เมื่อเปลี่ยนเวลาเพิ่มขึ้นหรือลดลง เช่น เมื่อกำหนด 1 จะสามารเพิ่มหรือลดลงได้ทีละ 1 วินาที`},
    { require: '', name: 'isBuddhistYear', type: 'boolean', description: `ใช้ระบุเพื่อกำหนดเปลี่ยนปีที่แสดงในปฏิทินเป็น พ.ศ.`},
    { require: '', name: 'calendarLanguage', type: 'string', description: `ใช้ระบุเพื่อกำหนดภาษาที่แสดงในปฏิทิน โดยสามารถกำหนดได้ดังนี้ 'th', 'en'`},
    { require: '', name: 'firstDayOfWeek', type: 'number', description: `ใช้ระบุเพื่อกำหนดวันที่แสดงเริ่มต้นของแต่ละอาทิตย์ในปฏิทิน เช่น กำหนดเป็น 1 ปฏิทินจะแสดงวันจันทร์เป็นวันแรก`},
    { require: '', name: 'date', type: 'Date', description: `ใช้ระบุเพื่อกำหนดค่าของวันที่ในปฏิทิน รวมถึงรับ output กลับมาจากปฏิทินเช่นกัน`},
    { require: '', name: 'dateChange', type: 'function($event)', description: `เมื่อมีการเลือกวันที่ในปฏิทินจะส่ง output คืนมา`},
    { require: '', name: '', type: '', description: ``},
];

const _ATTRSYNTAX: Array<any> = [
  { data: ``},  
  { data: `     inputId = "id_of_datetimepicker"` },
  { data: `     [defaultDate] = "default_date"` },
  { data: `     [style = "inline_style"] ` },
  // { data: `     [styleClass = "style_class"]` },
  { data: `     [inputStyle = "inline_style_of_input_field"] ` },
  // { data: `     [inputStyleClass = "style_class_of_input_field"]` },
  { data: `     [placeholder = "placeholder"]` },
  { data: `     [disabled = "true_or_false"]` },
  { data: `     [dateFormat = "date_format"]` },
  { data: `     [inline = "true_or_false"]` },
  { data: `     [selectOtherMonths = "true_or_false"]` },
  { data: `     [showIcon = "true_or_false"]` },
  { data: `     [icon = "icon"]` },
  { data: `     [readonlyInput = "true_or_false"]` },
  { data: `     [minDate = "minimum_date"]` },
  { data: `     [maxDate = "maximum_date"]` },
  { data: `     [disabledDates = "array_of_date"]` },
  { data: `     [disabledDays = "array_of_number"]` },
  { data: `     [monthNavigator = "true_or_false"]` },
  { data: `     [yearNavigator = "true_or_false"]` },
  { data: `     [yearRange = "range_of_year"]` },
  { data: `     [showTime = "true_or_false"]` },
  { data: `     [hourFormat = "12_or_24"]` },
  { data: `     [dataType = "date_or_string"]` },
  { data: `     [showSeconds = "true_or_false"]` },
  { data: `     [stepHour = "number"]` },
  { data: `     [stepMinute = "number"]` },
  { data: `     [stepSecond = "number"]` },
  { data: `     [isBuddhistYear = "true_or_false"]` },
  { data: `     [calendarLanguage = "th_or_en"]` },
  { data: `     [firstDayOfWeek = "number"]` },
  { data: `     [[(date)] = "date"]` },
  { data: `     (dateChange) = "date_output"` }
];

const _releaseUpdate: Array<any> = [
  { dateUpdate: "Version 2.1 (3 May 2017)"},
  { head: `style`, data: `เปลี่ยนรูปแบบการจัดวาง inputbox ให้มีขนาดพอดีกับความกว้างที่นำ component ไปวาง` },
  { dateUpdate: "Version 2.0 (4 April 2017)"},
  { head: `Version`, data: `Update primeng version 4.0.0-rc.2` },
  { head: `Icon`, data: `สามารถใส่ไอคอน (จาก Font Awesome)` },
];

const _EXAMPLE1: Array<any> = [
  { data: `app.component.ts` },  
  { data: `` },
  { data: `private basicDatetimepicker: Date;` },
  { data: `` },
  { data: `app.component.html` },
  { data: `` },
  { data: `<go-datetimepicker [(date)]="basicDatetimepicker" id="basicDatetimepicker"></go-datetimepicker>` },
  { data: `<p> <strong> Output: </strong> {{basicDatetimepicker|date}} </p>` },
  
]
const _EXAMPLE2: Array<any> = [
  { data: `app.component.ts` },  
  { data: `` },
  { data: `private thaiDateimepicker: Date;` },  
  { data: `` },  
  { data: `app.component.html` },
  { data: `` },
  { data: `<go-datetimepicker id="thaiDateimepicker" [(date)]="thaiDateimepicker" calendarLanguage="th" dateFormat="dd/mm/yy" [isBuddhistYear]="true"></go-datetimepicker> ` },
  { data: `<p> <strong> Output: </strong> {{thaiDateimepicker|date}} </p>` },
  { data: `` },
  
]
const _EXAMPLE3: Array<any> = [
  { data: `app.component.ts` },  
  { data: `` },
  { data: `private iconDatetimepicker: Date;` },
  { data: `` },
  { data: `app.component.html` },
  { data: `` },
  { data: `<go-datetimepicker id="iconDatetimepicker" [(date)]="iconDatetimepicker" [showIcon]="true"></go-datetimepicker>` },
  { data: `<p> <strong> Output: </strong> {{iconDatetimepicker|date}}</p>` },
];

const _EXAMPLE4: Array<any> = [
  { data: `app.component.ts` }, 
  { data: `` },
  { data: `private datefromDatetimepicker: Date;` },
  { data: `private datetoDatetimepicker: Date;` },
  { data: `` },
  { data: `app.component.html` },
  { data: `
<div class="form-group">
  Date from <go-datetimepicker id="datefromDatetimepicker"[(date)]="datefromDatetimepicker" [maxDate]="datetoDatetimepicker" [readonlyInput]="true"></go-datetimepicker>
  Date to <go-datetimepicker id="datetoDatetimepicker" [(date)]="datetoDatetimepicker" [minDate]="datefromDatetimepicker" [readonlyInput]="true"></go-datetimepicker>
</div>
    ` },
  { data: `<p> <strong> from: </strong> {{datefromDatetimepicker|date}} </p> ` },
  { data: `<p> <strong>  to </strong> {{datetoDatetimepicker|date}}</p>` },
  { data: `` },
];

const _EXAMPLE5: Array<any> = [
  { data: `app.component.ts` }, 
  { data: `` },
  { data: `private disableDatetimepicker: Date;
private invalidDates: Array<Date>;
ngOnInit() {
    let today = new Date();
    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today,invalidDate];
}
    ` },
  { data: `` },
  { data: `app.component.html` },
  { data: `` },
  { data: `<go-datetimepicker id="disableDatetimepicker" [(date)]="disableDatetimepicker" tabindex="0" [disabledDates]="invalidDates" [disabledDays]="[0,6]" readonlyInput="readonlyInput"></go-datetimepicker>` },
  { data: `<p> <strong> Output: </strong> {{disableDatetimepicker|date}}</p>` },
  { data: `` },
  
];

const _EXAMPLE6: Array<any> = [
  { data: `app.component.ts` },  
  { data: `` },
  { data: `private navigatorDatetimepicker: Date;` },
  { data: `` },
  { data: `app.component.html` },
  { data: `` },
  { data: `<go-datetimepicker id='navigatorDatetimepicker' [(date)]="navigatorDatetimepicker" [monthNavigator]="true" [yearNavigator]="true" yearRange="2000:2030" [firstDayOfWeek]="1"></go-datetimepicker>` },
  { data: `<p> <strong> Output: </strong> {{navigatorDatetimepicker|date}}</p>` },
  { data: `` },
  { data: `` },
];

const _EXAMPLE7: Array<any> = [
  { data: `app.component.ts` },  
  { data: `` },
  { data: `private dateAndTimepicker: Date;` },
  { data: `` },
  { data: `app.component.html` },
  { data: `` },
  { data: `<go-datetimepicker id="dateAndTimepicker" [(date)]="dateAndTimepicker" [showSeconds]="true" [showTime]="true" 
[stepHour]="1"  [stepMinute]="5"  [stepSecond]="5" [hourFormat]="12">` },
  { data: `<p> <strong> Output: </strong> {{dateAndTimepicker}}</p> ` },
  { data: `` },
  { data: `` },
];

const _EXAMPLE8: Array<any> = [
  { data: `app.component.ts` },  
  { data: `` },
  { data: `private inlineDateimepicker: Date;` },
  { data: `` },
  { data: `app.component.html` },
  { data: `` },
  { data: `<go-datetimepicker id="inlineDateimepicker" [(date)]="inlineDateimepicker" [inline]="true"></go-datetimepicker>` },
  { data: `<p> <strong> Output: </strong> {{inlineDateimepicker|date}}</p> ` },
  { data: `` },
  { data: `` },
];

@Component({
    selector: 'doc-datetimepicker',
    templateUrl: './datetimepicker.document.html'
})
export class DateTimePickerDocument implements OnInit {
    private componentTag: string = '<go-datetimepicker>';
    private version: string = '2.1'; 
    private componentDescription: string = `DateTimePicker ใช้สำหรับเป็นปฏิทินในการระบุวันที่และ/หรือเวลา โดยสามารถกำหนดรูปแบบของข้อมูลและการแสดงผลได้`
    private releaseDate: string = '3 May 2017';
    private creditURL: string = 'https://www.primefaces.org/primeng/#/calendar';
    private credit: string = 'primeng (4.0.0-rc.2)';   
    private releaseUpdate = _releaseUpdate;

    private prefixSyntax: string = '<go-datetimepicker';
    private attrSyntaxList: Array<any> = _ATTRSYNTAX;
    private suffixSyntax: string = '> </go-datetimepicker>';
    private attributeTableList: Array<any> = _ATTRIBUTETABLELIST;

    private codeExample1 = _EXAMPLE1;
    private codeExample2 = _EXAMPLE2;
    private codeExample3 = _EXAMPLE3;
    private codeExample4 = _EXAMPLE4;
    private codeExample5 = _EXAMPLE5;
    private codeExample6 = _EXAMPLE6;
    private codeExample7 = _EXAMPLE7;
    private codeExample8 = _EXAMPLE8;

    private basicDatetimepicker: Date;
    private thaiDateimepicker: Date;
    private iconDatetimepicker: Date;
    private datefromDatetimepicker: Date;
    private datetoDatetimepicker: Date;
    private disableDatetimepicker: Date;
    private navigatorDatetimepicker: Date;
    private dateAndTimepicker: Date;
    private inlineDateimepicker: Date;

    private invalidDates: Array<Date>;
    ngOnInit() {
        let today = new Date();
        let invalidDate = new Date();
        invalidDate.setDate(today.getDate() - 1);
        this.invalidDates = [today,invalidDate];
    }

}