import { Component } from '@angular/core';

const ATTRIBUTELIST: Array<any> = [
    { require: '*', name: 'opened', type: 'boolean', description: `ใช้สำหรับตั้งค่าให้ sidebar เปิดออกมา(true) หรือปิดกลับเข้าไป(false) โดยตอนประกาศค่าเริ่มต้นให้ประกาศเป็น false ด้วยเสมอ` },
    { require: '', name: 'position', type: 'string', description: `ใช้สำหรับกำหนดตำแหน่งที่ sidebar อยู่โดยจะแบ่งออกเป็น 4 ตำแหน่ง ได้แก่ ด้านซ้ายของหน้าจอ(left), ด้านขวาของหน้าจอ(right), ด้านบนของหน้าจอ(top) และ ด้านล่างของหน้าจอ(bottom)` },
    { require: '', name: 'closeOnClickOutside', type: 'boolean', description: `ใช้สำหรับตั้งค่าให้สามารถปิด sidebar ได้โดยการคลิกส่วนอื่นที่อยู่ด้านนอก Sidebar` },
    { require: '', name: 'showBackdrop', type: 'boolean', description: `ใช้สำหรับตั้งค่าให้ทำการล็อกพื้นที่ข้างนอกที่ไม่ใช่ sidebar ไม่ให้สามารถกดได้` },
    { require: '', name: 'trapFocus', type: 'boolean', description: `ใช้สำหรับตั้งค่าให้ focus สามารถใช้ได้เฉพาะใน sidebar เท่านั้น (กล่าวคือ เมื่อมีการกด Tab จะทำการ focus เฉพาะภายใน sidebar เท่านั้น)` },
    { require: '', name: 'autoFocus', type: 'boolean', description: `ใช้สำหรับตั้งค่าให้ทำการ focus ใน sidebar ทันทีที่มีการแสดง` },
    { require: '', name: 'onOpened', type: 'function()', description: `ฟังก์ชั่นนี้จะถูกเรียกใช้งาน  เมื่อ sidebar เปิดขึ้นมา` },
    { require: '', name: 'onClosed', type: 'function()', description: `ฟังก์ชั่นนี้จะถูกเรียกใช้งาน  เมื่อ sidebar ปิดลงไป` }
];

const SYSTEMJSLINE: Array<any> = [
    `map: {`,
    `   ..........`,
    `   'ng-sidebar': 'npm:ng-sidebar',`,
    `   'go-sidebar': 'go:sidebar/{version}',`,
    `   ..........`,
    `},`,
    `packages: {`,
    `   ..........`,
    `   'ng-sidebar': {`,
    `      main: './lib/index.js',`,
    `      defaultExtension: 'js'`,
    `   },`,
    `   'go-sidebar': {`,
    `      main: './sidebar.component.js',`,
    `      defaultExtension: 'js'`,
    `   },`,
    `   ..........`,
    `}`,
];

const APPMODULELINE: Array<any> = [
    `import { SidebarModule } from 'ng-sidebar';`,
    `import { SidebarComponent } from 'go-sidebar';`,
    ``,
    `@NgModule({`,
    `   declarations: [`,
    `   ..........`,
    `   SidebarComponent`,
    `   ..........`,
    `],`,
    `   imports: [`,
    `   ..........`,
    `   SidebarModule`,
    `   ..........`,
    `],`,
];


@Component({
    selector: 'sidebar-document',
    templateUrl: './sidebar.document.html'
})
export class SidebarDocument {


    private componentTag: string = '<go-sidebar>';
    private componentDescription: string = `ใช้สำหรับเรียก Sidebar ที่สามารถเรียกออกมาแสดงและซ่อนจากหน้าเว็บได้`;
    private version: string = '1.0';
    private releaseDate: string = '7/12/2016';
    private prefixSyntax: string = `<go-sidebar `;
    private attrSyntax: string = `[(opened)]="_opened" [position="sidebar_position"] [[closeOnClickOutside]="can_close_by_click_outside"] 
        [[showBackdrop]="show_backdrop"] [[animate]="show_with_animation"] [[trapfocus]="trapfocus_on_sidebar"]
        [[autofocus]="autofocus_on_sidebar"] [(onOpened)="onSidebarOpen()"] [(onClosed)="onSidebarClose()"]`;
    private suffixSyntax: string = `></go-sidebar>`;
    private attributeList = ATTRIBUTELIST;
    private appModuleLine = APPMODULELINE;
    private systemjsLine = SYSTEMJSLINE;
    private appModuleDetail: string = `app.module.ts`;
    private systemJSDetail: string = `systemjs.config.js`;

    main_title = 'Example';

    open_1: boolean = false;
    open_2: boolean = false;
    open_3: boolean = false;
    open_4: boolean = false;
    open_5: boolean = false;

    html_1: string = `<button class="btn btn-primary" *ngIf="!open_1" (click)="toggleSidebar_1()">Open Sidebar Default</button>
<button class="btn btn-secondary" *ngIf="open_1" (click)="toggleSidebar_1()">Close Sidebar Default</button>

<go-sidebar [(opened)]="open_1">
    <nav class="nav nav-pills nav-stacked">
        <a class="nav-link" href="#" (click)="toggleSidebar_1()">Menu 1</a>
        <a class="nav-link" href="#" (click)="toggleSidebar_1()">Menu 2</a>
        <a class="nav-link" href="#" (click)="toggleSidebar_1()">Menu 3</a>
    </nav>
</go-sidebar>`;
    ts_1: string = `private open_1: boolean = false;
private toggleSidebar_1(): void {
    this.open_1 = !this.open_1;
}
`;
    html_2: string = `<button class="btn btn-primary" (click)="toggleSidebar_2()">Open Sidebar with Lock Screen</button>

<go-sidebar [(opened)]="open_2" position="top" [showBackdrop]='true' closeOnClickOutside="true">
    <nav class="nav nav-pills nav-stacked">
        <a class="nav-link" href="#" (click)="toggleSidebar_2()">Menu 4</a>
        <a class="nav-link" href="#" (click)="toggleSidebar_2()">Menu 5</a>
        <a class="nav-link" href="#" (click)="toggleSidebar_2()">Menu 6</a>
    </nav>
</go-sidebar>`;
    ts_2: string = `private open_2: boolean = false;
private toggleSidebar_2(): void {
    this.open_2 = !this.open_2;
}
`;
    html_3: string = `<button class="btn btn-primary" *ngIf="!open_3" (click)="toggleSidebar_3()">Open Sidebar Right Position</button>
<button class="btn btn-secondary" *ngIf="open_3" (click)="toggleSidebar_3()">Close Sidebar Right Position</button>

<go-sidebar [(opened)]="open_3" position='right'>
    <nav class="nav nav-pills nav-stacked">
        <a class="nav-link" href="#" (click)="toggleSidebar_3()">Menu 7</a>
        <a class="nav-link" href="#" (click)="toggleSidebar_3()">Menu 8</a>
        <a class="nav-link" href="#" (click)="toggleSidebar_3()">Menu 9</a>
    </nav>
</go-sidebar>`;
    ts_3: string = `private open_3: boolean = false;
private toggleSidebar_3(): void {
    this.open_3 = !this.open_3;
}
`;
    html_4: string = `<button class="btn btn-primary" *ngIf="!open_4" (click)="toggleSidebar_4()">Open Sidebar with Return Result</button>
<button class="btn btn-secondary" *ngIf="open_4" (click)="toggleSidebar_4()">Close Sidebar with Return Result</button>
<p>{{sidebarMessage}}</p>

<go-sidebar [(opened)]="open_4" (onOpened)="openFinish()" (onClosed)="closeFinish()">
    <nav class="nav nav-pills nav-stacked">
        <a class="nav-link" href="#" (click)="toggleSidebar_4()">Menu 10</a>
        <a class="nav-link" href="#" (click)="toggleSidebar_4()">Menu 11</a>
        <a class="nav-link" href="#" (click)="toggleSidebar_4()">Menu 12</a>
    </nav>
</go-sidebar>`;
    ts_4: string = `private open_4: boolean = false;
private toggleSidebar_4(): void {
    this.open_4 = !this.open_4;
}
private sidebarMessage: string;
private openFinish(): void { this.sidebarMessage = 'เปิดเสร็จสิ้น' };
private closeFinish(): void { this.sidebarMessage = 'ปิดเรียบร้อย' };
`;
     html_5: string = `<button class="btn btn-primary" *ngIf="!open_5" (click)="toggleSidebar_5()">Open Sidebar with Return Result</button>
<button class="btn btn-secondary" *ngIf="open_5" (click)="toggleSidebar_5()">Close Sidebar with Return Result</button>
<p>{{sidebarMessage}}</p>

<go-sidebar [(opened)]="open_5" position="bottom" closeOnClickOutside="true">
    <nav class="nav nav-pills nav-stacked">
        <a class="nav-link" href="#" (click)="toggleSidebar_5()">Menu 13</a>
        <a class="nav-link" href="#" (click)="toggleSidebar_5()">Menu 14</a>
        <a class="nav-link" href="#" (click)="toggleSidebar_5()">Menu 15</a>
    </nav>
</go-sidebar>`;
    ts_5: string = `private open_5: boolean = false;
private toggleSidebar_5(): void {
    this.open_5 = !this.open_5;
}
`;

    private toggleSidebar_1() {
        this.open_1 = !this.open_1;
    }
    private toggleSidebar_2() {
        this.open_2 = !this.open_2;
    }
    private toggleSidebar_3() {
        this.open_3 = !this.open_3;
    }
    private toggleSidebar_4() {
        this.open_4 = !this.open_4;
    }
    private toggleSidebar_5() {
        this.open_5 = !this.open_5;
    }

    sidebarMessage: string;
    openFinish() { this.sidebarMessage = 'เปิดเสร็จสิ้น' };
    closeFinish() { this.sidebarMessage = 'ปิดเรียบร้อย' };


}