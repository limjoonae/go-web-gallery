import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'page-getting-start',
    templateUrl: 'page-getting-start.html',
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

    releaseDate:string = '25 January 2017';
    setupNodejs:Array<any> = [
        {image: `image/1-nodejs.jpg`, data: `1. เข้าเว็บไซต์ https://nodejs.org `},
        {data: `2.	เปิดไฟล์ที่โหลดมา แล้วทำการติดตั้ง Node.js เมื่อทำการติดตั้ง Node.js จะได้ Node และตัว npm (Node Package Manager) ซึ่งเป็นตัวจัดการ package/module ต่าง ๆ ของ Node มาด้วย`},
        {code:`node –v`, data: `3.	ตรวจสอบว่าเราทำการติดตั้ง Node.js สมบูรณ์หรือไม่ โดยการเช็คเวอร์ชันด้วยคำสั่งนี้`},
        {code:`npm -v`, data: `4.	ตรวจเช็คเวอร์ชัน npm `},
    ];

    setupGit:Array<any> = [
        {image: `image/1-setupGit.jpg`, data: `1.	ติดตั้ง Git สำหรับ Windows โดยดาวน์โหลดจาก git-scm.com`},
        {data: `2.	คลิกขวา เลือก Run as administrator เพื่อเข้าสู่ขั้นตอนการติดตั้ง (ดูรายละเอียดการติดตั้งได้ที่ http://www.artit-k.com/dev-install-git-for-windows)`},
        {image: `image/setupGit-4.jpg`, data: `3.	หลังจากติดตั้ง Git เรียบร้อย สามารถตรวจสอบ version ของ git ได้ โดยใน Git GUI สามารถดูได้ที่เมนู Help > About Git Gui`},
        {code:`git version หรือ git --version`, data: `ส่วนของ Git bash จะเป็นหน้า Command Prompt สามารถตรวจสอบ version ได้ด้วยการพิมพ์คำสั่ง`},
    ];

    createProjectAngular:Array<any> = [
        { data: `1.	ไปยัง directory ที่ต้องการจะสร้างโปรเจค`},
        { image: `image/createProject001.png`, data: `2.	คลิกขวาเลือก Git Bash`},
        { code: `git clone https://github.com/angular/quickstart ชื่อโปรเจค`, data: `3.	พิมพ์คำสั่งเพื่อสร้างโปรเจคใหม่ ดังนี้ `},
        { data: `4.	เมื่อ clone เสร็จแล้ว จะได้โปรเจคใหม่ที่สามารถใช้งานได้`},
    ];

    howToSystemjs:Array<any> = [
        { data: `หากโปรเจคมีไฟล์ systemjs.config.js อยู่แล้ว สามารถแก้ไขไฟล์เพื่อเรียกใช้งาน Component ได้ ดังต่อไปนี้` },
        { code: `'npm:': 'http://10.182.247.173/gos-cdn/node_modules/2.4.0/'`, data: `1.	กำหนด path ที่ชื่อ npm เพื่อเรียกใช้งาน library หลักของ Angular2 ดังนี้`},
        { code: `'gos:': 'http://10.182.247.173/gos-cdn/'`, data: `2.	กำหนด path ที่ชื่อ gos เพื่อเรียกใช้งาน component ดังนี้`},
        { image: `image/systemjs001.jpg`, data: `วาง path ทั้ง 2 ดังรูปนี้`},
        { image: `image/systemjs002.jpg`, data: `3.	เมื่อต้องการเรียกใช้งาน component ให้นำ path ของcomponent ที่ต้องการมาวางในส่วน map ดังตัวอย่างในรูป`},
        { image: `image/systemjs003.jpg`, data: `และกำหนด defaultExtension ของcomponent ที่ต้องการ ดังตัวอย่างในรูป`},
        { data: `4.	Start project เพื่อใช้งาน component ต่อไป`},
        { data: ``}
    ];
    
}