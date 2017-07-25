import { Component, Input } from '@angular/core';

@Component({
    selector: 'getting-start',
    templateUrl: './getting-start.component.html',
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

    releaseDate:string = '14 July 2017';
    prerequisiteInstall: Array<any> = [
        {},
    ];
    setupNodejs:Array<any> = [
        { data: `1.	ทำการติดตั้ง Node.js หลังจากติดตั้งแล้ว จะได้ Node และตัว npm (Node Package Manager) ซึ่งเป็นตัวช่วยจัดการ library/dependency package ต่างๆ มาด้วย`},
        { code:`node –v`, data: `2.	ตรวจสอบว่าเราทำการติดตั้ง Node.js สมบูรณ์หรือไม่ โดยการเช็ค version ด้วยคำสั่งนี้`},
        { code:`npm -v`, data: `3.	ตรวจเช็ค version npm `},
    ];

    setupGit:Array<any> = [
        { data: `1. ติดตั้ง Git โดยคลิกขวาที่ installer เลือก Run as administrator แล้วติดตั้งตาม Default Setting ทั้งหมด (ดูวิธีการติดตั้งเพิ่มเติมที่ <a href="http://www.artit-k.com/dev-install-git-for-windows" target="_blank" ><strong>ลิ้งค์นี้</strong></a>)`},
        { data: `2.	หลังจากติดตั้ง Git เรียบร้อย สามารถตรวจสอบ version ของ git ได้ โดยใน Git GUI สามารถดูได้ที่เมนู Help > About Git Gui`},
        { code:`git version หรือ git --version`, data: `ส่วนของ Git bash จะเป็นหน้า Command Prompt สามารถตรวจสอบ version ได้ด้วยการพิมพ์คำสั่ง`},
    ];

    // setProxy: Array<any> = [
    //     { data: `1. เปิด command prompt แล้ว set proxy ของ git ด้วยคำสั่งนี้`, code: `git config --global http.proxy http://ยูเซอร์LAN:พาสเวิร์ดLAN@10.182.255.166:8080`},
    //     { data: `2. set proxy ของ npm`, code: `npm config set registry http://registry.npmjs.org -g`},
    // ];

    createProjectAngular:Array<any> = [
        { data: `1. ดาวน์โหลด starter project จาก <a href="https://github.com/limjoonae/go-starter-project" target="_blank">https://github.com/limjoonae/go-starter-project</a> โดยเลือกแบบ Download Zip หรือ 
        ดาวน์โหลดผ่าน git โดย เปิด command prompt แล้วไปยัง path ที่ต้องการจะสร้างโปรเจค แล้วทำการ clone โปรเจคตั้งต้น ด้วยคำสั่งนี้`, code: `git clone https://github.com/limjoonae/go-starter-project.git ชื่อโปรเจค`},
        { data: `2. เปิด command prompt ขึ้นมาใน root path project แล้วรันคำสั่ง` , code: `npm install โดยใช้ Internet ในการรัน`},
        { data: `3. กลับมาใช้ Intranet แล้วสตาร์ทโปรเจคด้วยคำสั่ง`, code: `npm start ที่ root path ของโปรเจคที่สร้าง`},
        { data: `browser จะถูกเปิดอัตโนมัติ และแสดงคำว่า Hello Angular`},
    ];
    
    public webcdn = 'https://webcdn.cpall.co.th';
    public devwebcdn = 'http://dev-webcdn.cpall.co.th';
    howToSystemjs:Array<any> = [
        { code: `'npm:': '` + this.devwebcdn +`/node_modules/4.0.0/',`, data: `1.	กำหนด path ที่ชื่อ npm เพื่อเรียกใช้งาน library หลักของ Angular ดังนี้`},
        { code: `'go:': '` + this.devwebcdn +`/dist/go/2.1.0/',`, data: `2.	กำหนด path ที่ชื่อ go เพื่อเรียกใช้งาน component ดังนี้`},
        { code: `'lib:': '` + this.devwebcdn +`/dist/lib/1.0.0/'`, data: `3.	กำหนด path ที่ชื่อ lib เพื่อเรียกใช้งาน component ดังนี้`},
        { data: `4. วาง path ทั้ง 2 ลงใน paths`},
        { data: `5.	วาง path ของ gomodule และ libmodule ลงใน map`},
        { data: `เมื่อวางแล้วจะได้ดังนี้`}
    ];

    importAppModule: string = `import 'gomodule' และ 'libmodule' ใน app.module.ts ดังนี้`;
    indexData: string = `ใส่ styles ในไฟล์ index.html เพื่อที่จะสามารถใช้ component ได้เต็มประสิทธิภาพ ดังนี้`;

    generateSshKey: Array<any> = [
        { data: '1. เปิดโปรแกรม Git GUI' }, 
        { data: '2. ไปที่เมนู Help เลือก show SSH Key'},
        { data: '3. โปรแกรมจะแสดงหน้าต่างใหม่ขึ้นมา ให้กดที่ปุ่ม Generate Key โปรแกรมจะ generate ssh key ขึ้นมา เมื่อ key ขึ้นมาแล้วให้ copy key ไว้'},
        { data: '4. ไปที่ gitlab', link: 'http://10.182.247.74/'},
        { data: '5. ไปที่เมนู setting > SSH Keys'},
        { data: '6. วาง key ที่ copy มาจาก Git GUI แล้วตั้งชื่อ title '},
        { data: '7. กด Add key'}
    ];

    private downloadX32Path = '';
    private downloadX64Path = '';

    ngOnInit() {
        this.getDownloadedPath();
    }

    getDownloadedPath() {
        let paths = module.id.split('/');
        for (let i = 0; i < paths.length - 1; i++) {
            this.downloadX32Path += paths[i] + '/';
            this.downloadX64Path += paths[i] + '/';
        }
        this.downloadX32Path += 'installerX32.zip';
        this.downloadX64Path += 'installerX64.zip';
    }
}