import { Component } from '@angular/core';

const ATTRIBUTELIST: Array<any> = [
    { require: '*', name: 'progress', type: 'number', description: `ใช้สำหรับกำหนดค่าของขนาด progressbar ที่จะแสดงในปัจจุบัน โดยจะแสดงตามอัตราส่วนระหว่าง progressMin กับ progressMax` },
    { require: '', name: 'minProgress', type: 'number', description: `ใช้สำหรับกำหนดค่าต่ำสุดของ progressbar ที่จะให้ progressbar แสดงขึ้นมา (มีค่า default เป็น 0)` },
    { require: '', name: 'maxProgress', type: 'number', description: `ใช้สำหรับกำหนดค่าสูงสุดของ progressbar ที่จะให้ progressbar แสดงขึ้นมา (มีค่า default เป็น 100)` },
    { require: '', name: 'color', type: 'string', description: `ใช้กำหนดสีของ progressbar (มีค่า default เป็นสีแดง)` },
    { require: '', name: 'height', type: 'string', description: `ใช้กำหนดความสูงของ progressbar โดยใส่เป็นรูปแบบ 'Npx' เมื่อ N เป็นตัวเลขจำนวนเต็มบวก` },
    { require: '', name: 'lockOnLoad', type: 'boolean', description: `ใช้สำหรับแสดง Overlay ไม่ให้กดสิ่งใดๆบนหน้าจอได้ เมื่อ progressbar ยังแสดงอยู่` },
    { require: '', name: 'opacity', type: 'number', description: `ใช้กำหนดความเข้มของ Overlay โดยมีค่าอยู่ที่ 0(ไม่แสดง) ถึง 1(เข้มสุด) โดยมีค่า default ที่ 0.5` },
    { require: '', name: 'transitionSpeed', type: 'number', description: `ใช้กำหนดช่วงเวลาที่จะให้ progressbar เลื่อนจนเสร็จสิ้น โดยให้กำหนดในหน่วย ms(millisecond) (มีค่า default = 500)` },
];

const SYSTEMJSLINE: Array<any> = [
    `map: {`,
    `   ..........`,
    `   'go-progressbar': 'gos:progressbar/{version}',`,
    `   ..........`,
    `},`,
    `packages: {`,
    `   ..........`,
    `   'go-progressbar': {`,
    `      main: './progressbar.js',`,
    `      defaultExtension: 'js'`,
    `   },`,
    `   ..........`,
    `}`,
];

const APPMODULELINE: Array<any> = [
    `import { ProgressbarComponent } from 'go-progressbar';`,
    ``,
    `@NgModule({`,
    `   declarations: [`,
    `   ..........`,
    `   ProgressbarComponent`,
    `   ..........`,
    `],`
];


@Component({
    selector: 'progressbar-document',
    templateUrl: './progressbar.document.html'
})
export class ProgressbarDocument {

    private componentTag: string = '<go-progressbar>';
    private componentDescription: string = `ใช้สำหรับเรียก progressbar เพื่อแสดงสถานะการโหลดไฟล์หรือข้อมูลต่างๆ โดยสามารถกำหนดได้อย่างอิสระ`;
    private version: string = '1.0';
    private releaseDate: string = '20/2/2017';
    private prefixSyntax: string = `<go-progressbar `;
    private attrSyntax: string = `[progress]="progress_number" [[minProgress]="min_progress_number"] [[maxProgress]="max_progress_number"] [[lockOnLoad]="page_locked_on_loading"]
    [color="color_name"] [height="progressbar_height"] [[opacity]="opacity_range_0_to_1"] [[transitionSpeed]="speed_in_ms"]`;
    private suffixSyntax: string = `></go-progressbar>`;
    private attributeList = ATTRIBUTELIST;
    private appModuleLine = APPMODULELINE;
    private systemjsLine = SYSTEMJSLINE;
    private appModuleDetail: string = `app.module.ts`;
    private systemJSDetail: string = `systemjs.config.js`;

    main_title = 'Example';

    firstProgressbarDescription: string = `ปุ่มสำหรับ progressbar ลำดับที่หนึ่ง`;
    code_1: string = `<go-progressbar [progress]="progress_1" id="default_progressbar"></go-progressbar>`;
    code_button_1: string = `ตัวอย่างปุ่มกด: <button class="btn btn-primary btn-sm btn-block" (click)="addProgress_1(10)">เพิ่มค่า progress_1 เป็นจำนวน 10 จุด</button>`;
    code_exam_1: string = `<b>ฟังก์ชั่นการใช้งาน</b><br>
    progress_1: number = 0;<br>
    addProgress_1(val: number) {<br>
        this.progress_1 += val;<br>
    }`;
    progress_1: number = 0;
    addProgress_1(val: number) {
        this.progress_1 += val;
    }
    reduceProgress_1(val: number) {
        this.progress_1 -= val;
    }
    finishProgress_1() {
        this.progress_1 = 100;
    }
    resetProgress_1() {
        this.progress_1 = 0;
    }

    secondProgressbarDescription: string = `ปุ่มสำหรับ progressbar ลำดับที่สอง`;
    code_2: string = `<go-progressbar [progress]="progress_2" [minProgress]=200 [maxProgress]=1000 [color]="green" id="interval_progressbar">
    </go-progressbar>`;
    code_button_2: string = `ตัวอย่างปุ่มกด: <button class="btn btn-primary btn-sm btn-block" (click)="autoAddProgress_2(20)">เพิ่มค่า progress_2 อัตโนมัติ รอบละ 20 จุด</button>`;
    code_exam_2: string = `<b>ฟังก์ชั่นการใช้งาน</b><br>
    progress_2: number = 0;<br>
    autoAddProgress_2(val: number) {
        if (this.progress_2 < 1000)
        setTimeout(() => { this.autoAddProgress_2(val); this.progress_2 += val; }, 500);
    }`;
    progress_2: number = 0;
    isAutoAdd_2: boolean = false;
    addProgress_2(val: number) {
        this.progress_2 += val;
    }
    autoAddProgress_2(val: number) {
        this.isAutoAdd_2 = true;
        this.loopAddProgress_2(val);
    }
    loopAddProgress_2(val: number) {
        if (this.progress_2 < 1000 && this.isAutoAdd_2) {
            setTimeout(() => { this.loopAddProgress_2(val); this.isAutoAdd_2 ? this.progress_2 += val : null }, 500);
        }
        else this.isAutoAdd_2 = false;
    }
    stopAutoAddProgress_2() {
        this.isAutoAdd_2 = false;
    }
    resetProgress_2() {
        this.progress_2 = 0;
    }

    thirdProgressbarDescription: string = `ปุ่มสำหรับ progressbar ลำดับที่สาม`;
    code_3: string = `<go-progressbar [progress]="progress_3" color="black" height="5px" [lockOnLoad]="true" [opacity]="0.6" [transitionSpeed]="1000" id="lock_on_load_progressbar"></go-progressbar>`;
    code_button_3: string = `ตัวอย่างปุ่มกด: <button class="btn btn-primary btn-sm btn-block" (click)="autoAddProgress_3(10)">เพิ่มค่า progress_3 อัตโนมัติ ทุกวินาทีละ 10 หน่วย</button>`;
    code_exam_3: string = `<b>ฟังก์ชั่นการใช้งาน</b><br>
    progress_3: number = 0;<br>
    autoAddProgress_3(val: number) {
        if (this.progress_3 < 100)
            setTimeout(() => { this.autoAddProgress_3(val); this.progress_3 += val; }, 1000);
    }`;
    progress_3: number = 0;
    autoAddProgress_3(val: number) {
        if (this.progress_3 < 100)
            setTimeout(() => { this.autoAddProgress_3(val); this.progress_3 += val; }, 1000);
    }
    resetProgress_3() {
        this.progress_3 = 0;
    }

}