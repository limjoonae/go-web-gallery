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
                <h3 class="card-header "><strong> Download Installer </strong></h3>
                <div class="card-block">
                    <p>Download ตัว installer ทั้งหมดจากลิ้งค์ด้านล่าง</p>
                    <a [href]="downloadX32Path"><i class="fa fa-download"></i> Installer for Windows x32</a><br>
                    <a [href]="downloadX64Path"><i class="fa fa-download"></i> Installer for Windows x64</a>
                </div>
                <h3 class="card-header "><strong> การติดตั้ง Nodejs </strong></h3>
                <div class="card-block">
                    <p *ngFor="let data of setupNodejs"> 
                            {{data.data}} <br>
                        <code *ngIf="data.code != null"> {{data.code}} </code> 
                    </p>
                </div>
                <h3 class="card-header"><strong> การติดตั้ง Git (optional)</strong></h3>
                <div class="card-block">
                    <div *ngFor="let data of setupGit"> 
                        <p [innerHTML]="data.data"></p>
                        <code *ngIf="data.code != null"> {{data.code}} </code>
                    </div>
                </div>
                <h3 class="card-header"><strong> การ generate ssh key (optional)</strong></h3>
                <div class="card-block">
                    <div *ngFor="let data of generateSshKey"> 
                        <p> <span [innerHTML]="data.data"> </span> <a *ngIf="data.link != null" href="data.link">{{data.link}}</a></p>
                        <code *ngIf="data.code != null"> {{data.code}} </code>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `
})

export class PrerequisiteComponent {
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