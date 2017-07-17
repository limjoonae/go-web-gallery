"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var GettingStartComponent = (function () {
    function GettingStartComponent() {
        this.releaseDate = '14 July 2017';
        this.prerequisiteInstall = [
            {},
        ];
        this.setupNodejs = [
            { data: "1.\t\u0E17\u0E33\u0E01\u0E32\u0E23\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07 Node.js \u0E2B\u0E25\u0E31\u0E07\u0E08\u0E32\u0E01\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07\u0E41\u0E25\u0E49\u0E27 \u0E08\u0E30\u0E44\u0E14\u0E49 Node \u0E41\u0E25\u0E30\u0E15\u0E31\u0E27 npm (Node Package Manager) \u0E0B\u0E36\u0E48\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E15\u0E31\u0E27\u0E0A\u0E48\u0E27\u0E22\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23 library/dependency package \u0E15\u0E48\u0E32\u0E07\u0E46 \u0E21\u0E32\u0E14\u0E49\u0E27\u0E22" },
            { code: "node \u2013v", data: "2.\t\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E27\u0E48\u0E32\u0E40\u0E23\u0E32\u0E17\u0E33\u0E01\u0E32\u0E23\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07 Node.js \u0E2A\u0E21\u0E1A\u0E39\u0E23\u0E13\u0E4C\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48 \u0E42\u0E14\u0E22\u0E01\u0E32\u0E23\u0E40\u0E0A\u0E47\u0E04 version \u0E14\u0E49\u0E27\u0E22\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07\u0E19\u0E35\u0E49" },
            { code: "npm -v", data: "3.\t\u0E15\u0E23\u0E27\u0E08\u0E40\u0E0A\u0E47\u0E04 version npm " },
        ];
        this.setupGit = [
            { data: "1. \u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07 Git \u0E42\u0E14\u0E22\u0E04\u0E25\u0E34\u0E01\u0E02\u0E27\u0E32\u0E17\u0E35\u0E48 installer \u0E40\u0E25\u0E37\u0E2D\u0E01 Run as administrator \u0E41\u0E25\u0E49\u0E27\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07\u0E15\u0E32\u0E21 Default Setting \u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 (\u0E14\u0E39\u0E27\u0E34\u0E18\u0E35\u0E01\u0E32\u0E23\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21\u0E17\u0E35\u0E48 <a href=\"http://www.artit-k.com/dev-install-git-for-windows\" target=\"_blank\" ><strong>\u0E25\u0E34\u0E49\u0E07\u0E04\u0E4C\u0E19\u0E35\u0E49</strong></a>)" },
            { data: "2.\t\u0E2B\u0E25\u0E31\u0E07\u0E08\u0E32\u0E01\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07 Git \u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22 \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A version \u0E02\u0E2D\u0E07 git \u0E44\u0E14\u0E49 \u0E42\u0E14\u0E22\u0E43\u0E19 Git GUI \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E14\u0E39\u0E44\u0E14\u0E49\u0E17\u0E35\u0E48\u0E40\u0E21\u0E19\u0E39 Help > About Git Gui" },
            { code: "git version \u0E2B\u0E23\u0E37\u0E2D git --version", data: "\u0E2A\u0E48\u0E27\u0E19\u0E02\u0E2D\u0E07 Git bash \u0E08\u0E30\u0E40\u0E1B\u0E47\u0E19\u0E2B\u0E19\u0E49\u0E32 Command Prompt \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A version \u0E44\u0E14\u0E49\u0E14\u0E49\u0E27\u0E22\u0E01\u0E32\u0E23\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07" },
        ];
        // setProxy: Array<any> = [
        //     { data: `1. เปิด command prompt แล้ว set proxy ของ git ด้วยคำสั่งนี้`, code: `git config --global http.proxy http://ยูเซอร์LAN:พาสเวิร์ดLAN@10.182.255.166:8080`},
        //     { data: `2. set proxy ของ npm`, code: `npm config set registry http://registry.npmjs.org -g`},
        // ];
        this.createProjectAngular = [
            { data: "1. \u0E40\u0E1B\u0E34\u0E14 command prompt \u0E41\u0E25\u0E49\u0E27\u0E44\u0E1B\u0E22\u0E31\u0E07 path \u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E08\u0E30\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E04 \u0E41\u0E25\u0E49\u0E27\u0E17\u0E33\u0E01\u0E32\u0E23 clone \u0E42\u0E1B\u0E23\u0E40\u0E08\u0E04\u0E15\u0E31\u0E49\u0E07\u0E15\u0E49\u0E19 \u0E14\u0E49\u0E27\u0E22\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07\u0E19\u0E35\u0E49", code: "git clone http://10.182.247.74/go-webframework/go-starter-project.git \u0E0A\u0E37\u0E48\u0E2D\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E04" },
            { data: "2. \u0E40\u0E1B\u0E34\u0E14 command prompt \u0E02\u0E36\u0E49\u0E19\u0E21\u0E32\u0E43\u0E19 root path project \u0E41\u0E25\u0E49\u0E27\u0E23\u0E31\u0E19\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07", code: "npm install" },
            { data: "3. \u0E2A\u0E15\u0E32\u0E23\u0E4C\u0E17\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E04\u0E14\u0E49\u0E27\u0E22\u0E04\u0E33\u0E2A\u0E31\u0E48\u0E07", code: "npm start" },
            { data: "browser \u0E08\u0E30\u0E16\u0E39\u0E01\u0E40\u0E1B\u0E34\u0E14\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34 \u0E41\u0E25\u0E30\u0E41\u0E2A\u0E14\u0E07\u0E04\u0E33\u0E27\u0E48\u0E32 Hello Angular" },
        ];
        this.howToSystemjs = [
            { code: "'npm:': 'http://10.182.247.73/go-cdn-dev/node_modules/4.0.0/',", data: "1.\t\u0E01\u0E33\u0E2B\u0E19\u0E14 path \u0E17\u0E35\u0E48\u0E0A\u0E37\u0E48\u0E2D npm \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E23\u0E35\u0E22\u0E01\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19 library \u0E2B\u0E25\u0E31\u0E01\u0E02\u0E2D\u0E07 Angular \u0E14\u0E31\u0E07\u0E19\u0E35\u0E49" },
            { code: "'go:': 'http://10.182.247.73/go-cdn-dev/dist/go/2.1.0/',", data: "2.\t\u0E01\u0E33\u0E2B\u0E19\u0E14 path \u0E17\u0E35\u0E48\u0E0A\u0E37\u0E48\u0E2D go \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E23\u0E35\u0E22\u0E01\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19 component \u0E14\u0E31\u0E07\u0E19\u0E35\u0E49" },
            { code: "'lib:': 'http://10.182.247.73/go-cdn-dev/dist/lib/1.0.0/'", data: "3.\t\u0E01\u0E33\u0E2B\u0E19\u0E14 path \u0E17\u0E35\u0E48\u0E0A\u0E37\u0E48\u0E2D lib \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E23\u0E35\u0E22\u0E01\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19 component \u0E14\u0E31\u0E07\u0E19\u0E35\u0E49" },
            { data: "4. \u0E27\u0E32\u0E07 path \u0E17\u0E31\u0E49\u0E07 2 \u0E25\u0E07\u0E43\u0E19 paths" },
            { data: "5.\t\u0E27\u0E32\u0E07 path \u0E02\u0E2D\u0E07 gomodule \u0E41\u0E25\u0E30 libmodule \u0E25\u0E07\u0E43\u0E19 map" },
            { data: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E27\u0E32\u0E07\u0E41\u0E25\u0E49\u0E27\u0E08\u0E30\u0E44\u0E14\u0E49\u0E14\u0E31\u0E07\u0E19\u0E35\u0E49" }
        ];
        this.importAppModule = "import 'gomodule' \u0E41\u0E25\u0E30 'libmodule' \u0E43\u0E19 app.module.ts \u0E14\u0E31\u0E07\u0E19\u0E35\u0E49";
        this.indexData = "\u0E43\u0E2A\u0E48 styles \u0E43\u0E19\u0E44\u0E1F\u0E25\u0E4C index.html \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E35\u0E48\u0E08\u0E30\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E43\u0E0A\u0E49 component \u0E44\u0E14\u0E49\u0E40\u0E15\u0E47\u0E21\u0E1B\u0E23\u0E30\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E20\u0E32\u0E1E \u0E14\u0E31\u0E07\u0E19\u0E35\u0E49";
        this.generateSshKey = [
            { data: '1. เปิดโปรแกรม Git GUI' },
            { data: '2. ไปที่เมนู Help เลือก show SSH Key' },
            { data: '3. โปรแกรมจะแสดงหน้าต่างใหม่ขึ้นมา ให้กดที่ปุ่ม Generate Key โปรแกรมจะ generate ssh key ขึ้นมา เมื่อ key ขึ้นมาแล้วให้ copy key ไว้' },
            { data: '4. ไปที่ gitlab', link: 'http://10.182.247.74/' },
            { data: '5. ไปที่เมนู setting > SSH Keys' },
            { data: '6. วาง key ที่ copy มาจาก Git GUI แล้วตั้งชื่อ title ' },
            { data: '7. กด Add key' }
        ];
    }
    return GettingStartComponent;
}());
GettingStartComponent = __decorate([
    core_1.Component({
        selector: 'getting-start',
        templateUrl: './getting-start.component.html',
        styles: ["\n            object{\n                background-color:#eee;\n                overflow:auto;\n                margin:0 0 1em;\n                padding:.5em 1em;\n            }\n    "]
    })
], GettingStartComponent);
exports.GettingStartComponent = GettingStartComponent;
//# sourceMappingURL=getting-start.component.js.map