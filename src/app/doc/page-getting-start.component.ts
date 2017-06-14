import { Component, Input } from '@angular/core';

@Component({
    selector: 'page-getting-start',
    templateUrl: './page-getting-start.html',
    styles: [`
            object{
                background-color:#eee;
                overflow:auto;
                margin:0 0 1em;
                padding:.5em 1em;
            }
    `]
})
export class GettingStartComponent  { 

    releaseDate:string = '14 June 2017';
    prerequisiteInstall: Array<any> = [
        {},
    ];
    setupNodejs:Array<any> = [
        { data: `1.	ทำการติดตั้ง Node.js เมื่อทำการติดตั้ง Node.js จะได้ Node และตัว npm (Node Package Manager) ซึ่งเป็นตัวจัดการ package/module ต่าง ๆ ของ Node มาด้วย`},
        { code:`node –v`, data: `2.	ตรวจสอบว่าเราทำการติดตั้ง Node.js สมบูรณ์หรือไม่ โดยการเช็ค version ด้วยคำสั่งนี้`},
        { code:`npm -v`, data: `3.	ตรวจเช็ค version npm `},
    ];

    setupGit:Array<any> = [
        { data: `1. ติดตั้ง Git โดยคลิกขวาที่ installer เลือก Run as administrator แล้วติดตั้งตาม Default Setting ทั้งหมด (ดูวิธีการติดตั้งเพิ่มเติมที่ <a href="http://www.artit-k.com/dev-install-git-for-windows" target="_blank" ><strong>ลิ้งค์นี้</strong></a>)`},
        { data: `2.	หลังจากติดตั้ง Git เรียบร้อย สามารถตรวจสอบ version ของ git ได้ โดยใน Git GUI สามารถดูได้ที่เมนู Help > About Git Gui`},
        { code:`git version หรือ git --version`, data: `ส่วนของ Git bash จะเป็นหน้า Command Prompt สามารถตรวจสอบ version ได้ด้วยการพิมพ์คำสั่ง`},
    ];

    createProjectAngular:Array<any> = [
        { data: `1. เปิด command prompt แล้วไปยัง path ที่ต้องการจะสร้างโปรเจค แล้วทำการ clone โปรเจคตั้งต้น ด้วยคำสั่งนี้`, code: `git clone http://10.182.247.74/go-webframework/go-starter-project.git ชื่อโปรเจค`},
        { data: `2. เปิด command prompt ขึ้นมาใน root path project แล้วรันคำสั่ง` , code: `npm --proxy http://aduser:adpass@10.182.255.166:8080 install
  หมายเหตุ aduser = user lan, adpass = password ของ user lan`},
        { data: `3. สตาร์ทโปรเจคด้วยคำสั่ง`, code: `npm start`},
        { data: `browser จะถูกเปิดอัตโนมัติ และแสดงคำว่า Hello Angular`},
    ];

    setProxy: Array<any> = [
        { data: `1. เปิด command prompt แล้ว set proxy ของ git ด้วยคำสั่งนี้`, code: `git config --global http.proxy http://aduser:adpass@10.182.255.166:8080
  หมายเหตุ aduser = user lan, adpass = password ของ user lan`},
        { data: `2. set proxy ของ npm`, code: `npm config set registry http://registry.npmjs.org -g`},
    ];
    

    howToSystemjs:Array<any> = [
        { code: `'npm:': 'http://10.182.247.73/go-cdn-dev/node_modules/4.0.0/',`, data: `1.	กำหนด path ที่ชื่อ npm เพื่อเรียกใช้งาน library หลักของ Angular ดังนี้`},
        { code: `'go:': 'http://10.182.247.73/go-cdn-dev/dist/go/1.0.0/',`, data: `2.	กำหนด path ที่ชื่อ go เพื่อเรียกใช้งาน component ดังนี้`},
        { code: `'lib:': 'http://10.182.247.73/go-cdn-dev/dist/lib/1.0.0/'`, data: `3.	กำหนด path ที่ชื่อ lib เพื่อเรียกใช้งาน component ดังนี้`},
        { data: `4. วาง path ทั้ง 2 ลงใน paths`},
        { data: `5.	วาง path ของ gomodule และ libmodule ลงใน map`},
        { data: `เมื่อวางแล้วจะได้ดังนี้`}
    ];

    importAppModule: string = `import 'gomodule' และ 'libmodule' ใน app.module.ts ดังนี้`;
    indexData: string = `ใส่ styles ในไฟล์ index.html เพื่อที่จะสามารถใช้ component ได้เต็มประสิทธิภาพ ดังนี้`;

    
}