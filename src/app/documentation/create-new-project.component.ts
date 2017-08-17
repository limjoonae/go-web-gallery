import { Component } from '@angular/core';

@Component ({
    template: `
<div class="container">
    <div class="col-md-3">
        <gettingstart-menu></gettingstart-menu>
    </div>
    <div class="col-md-9">
        <div class="tab-content">
            <div role="tabpanel" class="tab-pane active">
                <h3 class="card-header"><strong> การสร้าง Project Angular </strong></h3>
                <div class="card-block">
                    <div *ngFor="let data of createProjectAngular">
                        <p [innerHTML]="data.data"></p>
                        <pre><code *ngIf="data.code != null"> {{data.code}} </code></pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `
})

export class CreateNewProjectComponent {
    createProjectAngular:Array<any> = [
        { data: `1. ดาวน์โหลด starter project จาก <a href="https://github.com/limjoonae/go-starter-project" target="_blank">https://github.com/limjoonae/go-starter-project</a> โดยเลือกแบบ Download Zip หรือ 
        ดาวน์โหลดผ่าน git โดย เปิด command prompt แล้วไปยัง path ที่ต้องการจะสร้างโปรเจค แล้วทำการ clone โปรเจคตั้งต้น ด้วยคำสั่งนี้`, code: `git clone https://github.com/limjoonae/go-starter-project.git ชื่อโปรเจค`},
        { data: `2. เปิด command prompt ขึ้นมาใน root path project แล้วรันคำสั่ง` , code: `npm install โดยใช้ Internet ในการรัน`},
        { data: `3. กลับมาใช้ Intranet แล้วสตาร์ทโปรเจคด้วยคำสั่ง`, code: `npm start ที่ root path ของโปรเจคที่สร้าง`},
        { data: `browser จะถูกเปิดอัตโนมัติ และแสดงคำว่า Hello Angular`},
    ];
}