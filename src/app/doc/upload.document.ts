import { Component, OnInit } from '@angular/core';

const ATTRIBUTELIST: Array<any> = [
    { require: '*', name: 'name', type: 'string', description: `กำหนดชื่อของ component` },
    { require: '*', name: 'url', type: 'string', description: `กำหนด path ที่จะนำไฟล์อัพโหลดขึ้นไป` },
    { require: '', name: 'multiple', type: 'boolean', description: `กำหนดจำนวนไฟล์ที่ต้องการอัพโหลดว่าสามารถอัพโหลดได้ทีละไฟล์หรือหลายไฟล์พร้อมกัน` },
    { require: '', name: 'accept', type: 'string', description: `กำหนดประเภทของไฟล์ที่แสดงตอนเลือกไฟล์ โดยสามารถดูได้จาก <strong><a href="http://www.iana.org/assignments/media-types/media-types.xhtml" target="_blank">ลิงค์นี้</a></strong>` },
    { require: '', name: 'fileTypeAllow', type: 'string', description: `กำหนดประเภทของไฟล์ที่สามารถเลือกเพื่อที่จะอัพโหลดได้ โดยสามารถดูได้จาก <strong><a href="http://www.iana.org/assignments/media-types/media-types.xhtml" target="_blank">ลิงค์นี้</a></strong>` },
    { require: '', name: 'autoUpload', type: 'boolean', description: `กำหนดให้สามารถทำการอัพโหลดไฟล์อัตโนมัติได้ เมื่อทำการเลือกไฟล์เสร็จสิ้น` },
    { require: '', name: 'maxFileSize', type: 'number', description: `กำหนดขนาดสูงสุดของแต่ละไฟล์ที่สามารถอัพโหลดได้ โดยให้กำหนดเป็นขนาดของ bytes (กำหนดค่าเริ่มต้นไว้ที่ 2 MB)` },
    { require: '', name: 'showImage', type: 'boolean', description: `กำหนดให้แสดงภาพตัวอย่างของไฟล์ที่เป็นประเภทภาพที่เลือกไว้` },
    { require: '', name: 'previewWidth', type: 'number', description: `กำหนดความกว้างของภาพตัวอย่างที่แสดง ซึ่งจะใช้งานเมื่อ showImage ถูกเปิดใช้งานอยู่(กำหนดค่าเริ่มต้นไว้ที่ 100)` },
    { require: '', name: 'speedCalculationTime', type: 'number', description: `ใช้กำหนดเวลา(ms)ของการคำนวณความเร็วอัพโหลดในแต่ละรอบ` },
    { require: '', name: 'canAbort', type: 'boolean', description: `กำหนดให้สามารถยกเลิกการอัพโหลดไฟล์ได้` },
    { require: '', name: 'messageSettings', type: 'Object', description: `ใช้กำหนดคำอธิบายต่างๆของตัว component` },
    { require: '', name: 'showOptions', type: 'Object', description: `ใช้กำหนดการแสดงของสิ่งต่างๆบน component` },
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
    { require: '', name: 'showAllFileChosen', type: 'boolean', description: `กำหนดให้แสดงชื่อไฟล์ที่ถูกเลือก` },
    { require: '', name: 'showProgressBar', type: 'boolean', description: `กำหนดให้แสดงแถบสถานะการอัพโหลด` },
    { require: '', name: 'showLatestFileNameChosen', type: 'boolean', description: `กำหนดให้แสดงชื่อไฟล์ที่ถูกเลือกล่าสุด` },
    { require: '', name: 'showBrowseButton', type: 'boolean', description: `กำหนดให้แสดงปุ่มเลือกไฟล์` },
    { require: '', name: 'showInvalidFileSizeError', type: 'boolean', description: `กำหนดให้แสดงข้อความผิดพลาดเมื่อไฟล์ที่เลือกมีขนาดไม่ถูกต้อง` },
    { require: '', name: 'showDragandDropBox', type: 'boolean', description: `กำหนดให้แสดงกล่อง Drag and Drop` },
    { require: '', name: 'showUploadStatusDialog', type: 'boolean', description: `กำหนดให้แสดงข้อความเมื่ออัพโหลดสำเร็จหรือล้มเหลว` }
];

@Component({
    selector: 'upload-example',
    templateUrl: './upload.document.html'
})
export class UploadDocument implements OnInit {

    private componentTag: string = '<go-upload>';
    private componentDescription: string = `ใช้สำหรับอัพโหลดไฟล์ขึ้นไปบน path ที่ต้องการ`;
    private version: string = '1.0';
    private releaseDate: string = '13/1/2017';
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

    private attributeList = ATTRIBUTELIST;
    private messageAttributeList = MSGATTRIBUTELIST;
    private showAttributeList = SHOWATTRIBUTELIST;
    private appModuleDetail: string = `app.module.ts`;
    private systemJSDetail: string = `systemjs.config.js`;

    uploadedFiles: any[] = [];
    status: string = '';
    private uploadedFileMessage = "รายชื่อไฟล์ที่อัพโหลดเสร็จสิ้น";
    private exampleDescription = "<h5>สำหรับตัวอย่างนี้ จะแบ่งออกเป็น 2 ส่วนได้แก่</h5> <p><strong>1.ส่วนด้านใน </strong>โดยจะประกอบด้วยส่วนที่ใช้เลือกไฟล์เพื่ออัพโหลดซึ่งได้มีการเตรียมไว้ให้<i>(รวมถึงการแสดงรายชื่อไฟล์เพื่อจะทำการอัพโหลด)</i></p> <p><strong>2.ส่วนด้านนอก </strong>โดยในส่วนนี้ จะเป็น<strong>\"รายชื่อไฟล์ที่อัพโหลดเสร็จสิ้น\"</strong>ซึ่งจะรับค่ามาจาก output ของส่วนใน component</p>";

    private code: string = `<go-upload name="demo" url="http://localhost:10050/upload" 
    [multiple]="true" accept="image/*,text/*" fileTypeAllow="image/*,text/*" 
    [autoUpload]="false" [maxFileSize]=50*1024*1024 [showImage]="true" 
    [previewWidth]="100" [speedCalculationTime]=1000 [canAbort]="true" 
    [messageSettings]="message_sets" [showOptions]="show_opts" 
    (onFinish)="onFinish($event)" (onError)="onError($event)"
    (onSelect)="onSelect($event)" (onDelete)="onDelete($event)"
    (onClear)="onClear($event)"></go-upload>`;

    private msgCode: string = `message_sets = { chooseLabel: "choose me", deleteLabel: "delete it" };`;
    private showCode: string = `show_opts = { showDragandDropBox: true };`;

    private message_sets = { chooseLabel: "choose me", deleteLabel: "delete it" };
    private show_opts = { showDragandDropBox: true };

    private dlpath = '';

    ngOnInit() {
        this.getDownloadedPath();
    }

    getDownloadedPath() {
        let paths = module.id.split('/');
        for (let i = 0; i < paths.length - 1; i++) {
            this.dlpath += paths[i] + '/';
        }
        this.dlpath += 'backend.zip';
    }

    onFinish(event: any) {
        this.status = 'อัพโหลดสำเร็จ';
        //console.log( this.status );
        for (let file of event.files) {
            this.uploadedFiles.push(file);
        }
    }

    onSelect(event: any) {
        this.status = 'เลือกไฟล์';
        //console.log( this.status );
    }

    onDelete(event: any) {
        this.status = 'ลบไฟล์';
        //console.log( this.status );
    }

    onClear(event: any) {
        this.status = 'ลบไฟล์ทั้งหมด';
        //console.log( this.status );
    }

    onError(event: any) {
        this.status = 'อัพโหลดผิดพลาด';
        //console.log( this.status );
    }

    clearCompletedList() {
        this.uploadedFiles = [];
    }
}