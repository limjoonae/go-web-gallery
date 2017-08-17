import {Component} from '@angular/core';

@Component({
    template: `
<div class="container">
    <div class="col-md-3">
        <gettingstart-menu></gettingstart-menu>
    </div>
    <div class="col-md-9">
        <div class="tab-content">
            <div role="tabpanel" class="tab-pane active">
                <small class="text-muted">*หมายเหตุ: เพื่อประสิทธิภาพในการใช้งาน โปรดเรียกใช้ url {{webcdn}} สำหรับการใช้งานแบบ Production</small><br>
                <small class="text-muted">*หมายเหตุ: สำหรับเลข version ของ library แต่ละตัวให้เรียกใช้ตาม version update ปัจจุบัน</small>
                <h3 class="card-header "><strong>Existing Angular Project</strong></h3>
                <h5 class="card-header ">systemjs.config.js</h5>
                <div class="card-block">
                    <p *ngFor="let data of howToSystemjs">
                            {{data.data}} <br>
                        <code *ngIf="data.code != null"> {{data.code}} </code> 
                    </p>
                    <object data="file/systemjs.txt"></object> <br>
                </div>

                <h5 class="card-header ">app.module.ts</h5>
                <div class="card-block">
                    <p> {{importAppModule}} </p>
                    <object data="file/appModuleTS.txt"></object> <br>                        
                </div>

                <h5 class="card-header ">index.html</h5>
                <div class="card-block">
                    <p> {{indexData}} </p>
                    <object data="file/indexFile.txt"></object> <br>
                </div>
            </div>
        </div>
    </div>
</div>
    `
})

export class ExistingProjectComponent {
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
}