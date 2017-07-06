import { Component, OnInit } from '@angular/core';

const ATTRIBUTELIST: Array<any> = [
    { require: '*', name: 'name', type: 'string', description: `กำหนดชื่อของ component` },
    { require: '*', name: 'url', type: 'string', description: `กำหนด path ที่จะนำไฟล์อัพโหลดขึ้นไป` },
    { require: '', name: 'multiple', type: 'boolean', description: `ใช้กำหนดว่าให้สามารถอัพโหลดได้ทีละหลายไฟล์พร้อมกันหรือไม่ มีค่า default เป็น true` },
    { require: '', name: 'accept', type: 'string', description: `กำหนดประเภทของไฟล์ที่แสดงตอนเลือกไฟล์ โดยสามารถดูได้จาก <strong><a href="http://www.iana.org/assignments/media-types/media-types.xhtml" target="_blank">ลิงค์นี้</a></strong>` },
    { require: '', name: 'fileTypeAllow', type: 'string', description: `กำหนดประเภทของไฟล์ที่สามารถอัพโหลดได้ โดยสามารถดูได้จาก <strong><a href="http://www.iana.org/assignments/media-types/media-types.xhtml" target="_blank">ลิงค์นี้</a></strong>` },
    { require: '', name: 'autoUpload', type: 'boolean', description: `กำหนดให้สามารถทำการอัพโหลดไฟล์อัตโนมัติได้ เมื่อทำการเลือกไฟล์เสร็จสิ้น มีค่า default เป็น false` },
    { require: '', name: 'maxFileSize', type: 'number', description: `กำหนดขนาดสูงสุดของแต่ละไฟล์ที่สามารถอัพโหลดได้ (มีค่าเริ่มต้นเป็น 2 MB) รูปแบบการกำหนดค่าคือ 2 * 1024 * 1024 (ได้ค่าเป็น bytes)` },
    { require: '', name: 'showImage', type: 'boolean', description: `กำหนดให้แสดงภาพตัวอย่างของไฟล์ที่เป็นประเภทภาพที่เลือกไว้ มีค่า default เป็น true` },
    { require: '', name: 'previewWidth', type: 'number', description: `กำหนดความกว้างของภาพตัวอย่างที่แสดง ซึ่งจะใช้งานเมื่อ showImage ถูกเปิดใช้งานอยู่(กำหนดค่าเริ่มต้นไว้ที่ 100)` },
    { require: '', name: 'speedCalculationTime', type: 'number', description: `ใช้กำหนดเวลาของการคำนวณความเร็วอัพโหลดในแต่ละรอบ หน่วยเป็น millisecond(ms) มีค่า default เป็น 500` },
    { require: '', name: 'canAbort', type: 'boolean', description: `กำหนดให้สามารถยกเลิกการอัพโหลดไฟล์ได้ มีค่า default เป็น true` },
    { require: '', name: 'messageSettings', type: 'Object', description: `ใช้กำหนด label ของปุ่ม และ message ต่างๆของ component ค่าที่สามาถกำหนดได้ดูได้จากหัวข้อ <strong>messageSettings Object</strong>` },
    { require: '', name: 'showOptions', type: 'Object', description: `ใช้กำหนดการแสดงผลของสิ่งต่างๆบน component ค่าที่สามาถกำหนดได้ดูได้จากหัวข้อ <strong>showOptions Object</strong>` },
    { require: '', name: 'onSelect', type: 'function($event)', description: `ฟังก์ชั่นนี้จะถูกเรียกใช้ เมื่อมีการเลือกไฟล์` },
    { require: '', name: 'onDelete', type: 'function($event)', description: `ฟังก์ชั่นนี้จะถูกเรียกใช้ เมื่อมีการลบไฟล์ที่เลือกไว้` },
    { require: '', name: 'onBeforeUpload', type: 'function($event)', description: `ฟังก์ชั่นนี้จะถูกเรียกใช้ เมื่อมีกำลังจะทำการอัพโหลดไฟล์` },
    { require: '', name: 'onUploading', type: 'function($event)', description: `ฟังก์ชั่นนี้จะถูกเรียกใช้ ขณะทำการอัพโหลดไฟล์` },
    { require: '', name: 'onFinish', type: 'function($event)', description: `ฟังก์ชั่นนี้จะถูกเรียกใช้ เมื่อการอัพโหลดไฟล์เสร็จสิ้น` },
    { require: '', name: 'onError', type: 'function($event)', description: `ฟังก์ชั่นนี้จะถูกเรียกใช้ เมื่อการอัพโหลดไฟล์ผิดพลาด` },
    { require: '', name: 'onClear', type: 'function($event)', description: `ฟังก์ชั่นนี้จะถูกเรียกใช้ เมื่อข้อมูลไฟล์ที่เลือกทั้งหมดถูกลบ` }
];

const MSGATTRIBUTELIST: Array<any> = [
    { require: '', name: 'invalidFileSizeMsg', type: 'string', description: `กำหนดคำอธิบายที่จะแสดงเมื่อขนาดไฟล์ไม่ถูกต้อง` },
    { require: '', name: 'chooseLabel', type: 'string', description: `กำหนดข้อความบนปุ่มสำหรับเลือกไฟล์` },
    { require: '', name: 'uploadLabel', type: 'string', description: `กำหนดข้อความบนปุ่มสำหรับอัพโหลดไฟล์ที่เลือก` },
    { require: '', name: 'deleteLabel', type: 'string', description: `กำหนดข้อความบนปุ่มสำหรับลบไฟล์ที่เลือก` },
    { require: '', name: 'clearLabel', type: 'string', description: `กำหนดข้อความบนปุ่มสำหรับลบไฟล์ทั้งหมดที่เลือกไว้` },
    { require: '', name: 'abortLabel', type: 'string', description: `กำหนดข้อความบนปุ่มสำหรับยกเลิกการอัพโหลดไฟล์ทั้งหมด` },
    { require: '', name: 'draganddropBoxMessage', type: 'string', description: `กำหนดข้อความในกล่อง drag and drop` },
    { require: '', name: 'latestFileChosenCaption', type: 'string', description: `กำหนดข้อความที่จะแสดงข้างหน้า'ชื่อไฟล์'ที่เลือก` },
    { require: '', name: 'uploadingMessage', type: 'string', description: `กำหนดข้อความบนแถบสถานะอัพโหลด เมื่อกำลังอัพโหลดไฟล์อยู่` },
    { require: '', name: 'uploadStatusComplete', type: 'string', description: `กำหนดคำอธิบายเมื่อการอัพโหลดสำเร็จ` },
    { require: '', name: 'uploadStatusFailure', type: 'string', description: `กำหนดคำอธิบายเมื่อการอัพโหลดล้มเหลว` }
];

const SHOWATTRIBUTELIST: Array<any> = [
    { require: '', name: 'showAllFileChosen', type: 'boolean', description: `กำหนดให้แสดงชื่อไฟล์ที่ถูกเลือก มีค่า default เป็น true` },
    { require: '', name: 'showProgressBar', type: 'boolean', description: `กำหนดให้แสดงแถบสถานะการอัพโหลด มีค่า default เป็น true` },
    { require: '', name: 'showLatestFileNameChosen', type: 'boolean', description: `กำหนดให้แสดงชื่อไฟล์ที่ถูกเลือกล่าสุด มีค่า default เป็น true` },
    { require: '', name: 'showBrowseButton', type: 'boolean', description: `กำหนดให้แสดงปุ่มเลือกไฟล์ มีค่า default เป็น true` },
    { require: '', name: 'showInvalidFileSizeError', type: 'boolean', description: `กำหนดให้แสดงข้อความเตือนเมื่อไฟล์ที่เลือกมีขนาดไม่ถูกต้อง มีค่า default เป็น true` },
    { require: '', name: 'showDragandDropBox', type: 'boolean', description: `กำหนดให้แสดงกล่อง Drag and Drop file มีค่า default เป็น false` },
    { require: '', name: 'showUploadStatusDialog', type: 'boolean', description: `กำหนดให้แสดงข้อความเมื่ออัพโหลดสำเร็จหรือล้มเหลว มีค่า default เป็น true` }
];

const _releaseUpdate_v_1_1: Array<any> = [
  { head: ``, data: `ปรับปรุงรูปแบบการแสดงผลไฟล์ที่ถูกเลือก` },
  { head: ``, data: `ปรับปรุงรูปแบบการแสดงข้อความในกล่องแสดง error mesaage` },
];

@Component({
    selector: 'upload-example',
    templateUrl: './upload.document.html'
})
export class UploadDocument implements OnInit {

    private componentTag: string = '<go-upload>';
    private componentDescription: string = `ใช้สำหรับอัพโหลดไฟล์ประเภทต่างๆขึ้นไปบน path ที่ต้องการ`;
    private version: string = '1.1';
    private releaseUpdate_v_1_1 = _releaseUpdate_v_1_1
    private releaseDate: string = '6 July 2017';
    private attributeList = ATTRIBUTELIST;
    private messageAttributeList = MSGATTRIBUTELIST;
    private showAttributeList = SHOWATTRIBUTELIST;
    private prefixSyntax: string = `<go-upload `;
    private attrSyntax: string = `name="component_name" url="upload_url_path"
     [[multiple]="is_multiple_upload"] [accept="file_type_accepted"] 
     [fileTypeAllow="file_type_allow"] [[autoUpload]="is_upload_auto"] 
     [[maxFileSize]="max_accepted_file_size"] [[showImage]="show_upload_image"] 
     [[previewWidth]="image_preview_width"] 
     [[speedCalculationTime]="speed_calculation_time"] 
     [[canAbort]="can_Abort_Upload"] 
     [[messageSettings]="message_settings"] [[showOptions]="show_options"] 
     [(onSelect)="onSelect($event)"] [(onDelete)="onDelete($event)"] 
     [(onBeforeUpload)="onBeforeUpload($event)"] 
     [(onUploading)="onUploading($event)"] [(onFinish)="onFinish($event)"] 
     [(onError)="onError($event)"] [(onClear)="onClear($event)"]`;
    private suffixSyntax: string = `></go-upload>`;


    private messageSettingsSyntax: string = `constDATA: messageSettings{} = 
    { invalidFileSizeMsg:'invalid_file_size_message', 
    chooseLabel:'choose_label', uploadLabel:'upload_label', 
    deleteLabel:'delete_label', clearLabel:'clear_label', 
    abortLabel:'abort_label', 
    draganddropBoxMessage:'drag_and_drop_box_message', 
    nonChosenMessage:'not_chosen_file_message', 
    latestFileChosenCaption:'file_caption', uploadingMessage:'uploading_message',
    uploadStatusComplete:'upload_complete_message', uploadStatusFailure:'upload_failure_message' };
    `;

    private showOptionsSyntax: string = `constDATA: showOptions{} = 
    { showAllFileChosen:'show_chosen_file', showProgressBar:'show_progress_bar', 
    showLatestFileNameChosen:'show_latest_chosen_file_name', 
    showBrowseButton:'show_browse_button', 
    showInvalidFileSizeError:'show_invalid_file_size_error_warning', 
    showDragandDropBox:'show_drag_and_drop_box',
    showUploadStatusDialog:'show_status_complete_or_failure' };
    `;

 
    private html_ex_default: string = `<strong>Basic Upload</strong> Status: {{status}}
<go-upload name="upload_default" 
	id="upload_default" url="http://localhost:10050/upload" 
    accept="image/*,text/*" fileTypeAllow="image/*,text/*"
    (onFinish)="onFinish($event)" (onSelect)="onSelect($event)" 
    (onDelete)="onDelete($event)" (onClear)="onClear($event)">
</go-upload>
<div class="row" *ngIf="uploadedFiles.length > 0" style="margin-top: 2rem;">
    <strong>{{uploadedFileMessage}}</strong> <button class="btn btn-danger btn-sm" (click)="clearCompletedList()">Clear</button>
    <div class="row" *ngFor="let file of uploadedFiles">
        <div class="col-md-12">
            <li>{{file.name}} - [{{file.size}} bytes]</li>
        </div>
    </div>
</div>`;

    private ts_ex_default: string = `uploadedFiles: any[] = [];

onFinish(event: any) {
    for (let file of event.files) {
        this.uploadedFiles.push(file);
    }
}

onSelect(event: any) {
    this.status = 'เลือกไฟล์';
}

onDelete(event: any) {
    this.status = 'ลบไฟล์';
}

onClear(event: any) {
    this.status = '';
}

clearCompletedList() {
    this.uploadedFiles = [];
}`;

    private html_ex_upload_set: string = `<strong>Set Option Upload</strong> Status: {{statusSet}}
<go-upload id="upload_set" name="upload_set" url="http://localhost:10050/upload" [multiple]="false" accept="image/*,application/*" fileTypeAllow="image/*,application/*"
    [maxFileSize]=2.5*1024*1024 [showImage]="false" [previewWidth]="100" [speedCalculationTime]=1000
    [messageSettings]="message_sets" [showOptions]="show_opts" (onFinish)="onFinishSet($event)"
    (onSelect)="onSelectSet($event)" (onDelete)="onDeleteSet($event)" (onClear)="onClearSet($event)">
</go-upload>
<div class="row" *ngIf="uploadedFilesSet.length > 0">
    <strong>{{uploadedFileMessage}}</strong> <button class="btn btn-danger btn-sm" (click)="clearCompletedList()">Clear</button>
    <div class="row" *ngFor="let file of uploadedFilesSet">
        <div class="col-md-12">
            <li>{{file.name}} - [{{file.size}} bytes]</li>
        </div>
    </div>
</div>`;

    private ts_ex_upload_set: string = `uploadedFilesSet: any[] = [];
message_sets = { chooseLabel: "Choose file", deleteLabel: "Delete it", invalidFileSizeMsg: "ขนาดไฟล์ไม่ถูกต้อง" };
show_opts = { showDragandDropBox: true };

onFinishSet(event: any) {
    for (let file of event.files) {
        this.uploadedFilesSet.push(file);
    }
}

onSelectSet(event: any) {
    this.status = 'เลือกไฟล์';
}

onDeleteSet(event: any) {
    this.status = 'ลบไฟล์';
}

onClearSet(event: any) {
    this.status = '';
}

clearCompletedListSet() {
    this.uploadedFilesSet = [];
}`;

    status: string = '';
    statusSet: string = '';
    private uploadedFileMessage = "รายชื่อไฟล์ที่อัพโหลดเสร็จสิ้น";
    uploadedFiles: any[] = [];
    uploadedFilesSet: any[] = [];

    private message_sets = { chooseLabel: "Choose file", deleteLabel: "Delete it", invalidFileSizeMsg: "ขนาดไฟล์ไม่ถูกต้อง"};
    private show_opts = { showDragandDropBox: true, showUploadStatusDialog: false };

    private dowloadBackendpath = '';

    ngOnInit() {
        this.getDownloadedPath();
    }

    getDownloadedPath() {
        let paths = module.id.split('/');
        for (let i = 0; i < paths.length - 1; i++) {
            this.dowloadBackendpath += paths[i] + '/';
        }
        this.dowloadBackendpath += 'backend.zip';
    }

    onFinish(event: any) {
        for (let file of event.files) {
            this.uploadedFiles.push(file);
        }
    }

    onSelect(event: any) {
        this.status = 'เลือกไฟล์';
    }

    onDelete(event: any) {
        this.status = 'ลบไฟล์';
    }

    onClear(event: any) {
        this.status = '';
    }

    clearCompletedList() {
        this.uploadedFiles = [];
    }

    onFinishSet(event: any) {
        for (let file of event.files) {
            this.uploadedFilesSet.push(file);
        }
    }

    onSelectSet(event: any) {
        this.statusSet = 'เลือกไฟล์';
    }

    onDeleteSet(event: any) {
        this.statusSet = 'ลบไฟล์';
    }

    onClearSet(event: any) {
        this.statusSet = '';
    }

    clearCompletedListSet() {
        this.uploadedFilesSet = [];
    }
}