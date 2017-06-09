import { Component, OnInit } from '@angular/core';

const PAGELIST: Array<any> = [
  {routerLink: 'accordion', menuName: 'Accordion'},
  {routerLink: 'autocomplete', menuName: 'Auto Complete'},
  {routerLink: 'badge', menuName: 'Badge'},
  {routerLink: 'button', menuName: 'Button'},
  {routerLink: 'chart', menuName: 'Chart'},
  {routerLink: 'checkbox', menuName: 'Check Box'},
  {routerLink: 'datagrid', menuName: 'Datagrid'},
  {routerLink: 'datatable', menuName: 'Datatable'},
  {routerLink: 'datetimepicker', menuName: 'Datetime Picker'},
  {routerLink: 'dialog', menuName: 'Dialog'},
  {routerLink: 'galleria', menuName: 'Galleria'},
  {routerLink: 'imagegallery', menuName: 'Image Gallery'},
  {routerLink: 'panel', menuName: 'Panel'},
  {routerLink: 'progressbar', menuName: 'Progress Bar'},
  {routerLink: 'pulldownmenu', menuName: 'Pulldown Menu'},
  {routerLink: 'radiobutton', menuName: 'Radio Button'},
  {routerLink: 'selectbox', menuName: 'Select Box'},
  {routerLink: 'sidebar', menuName: 'Side Bar'},
  {routerLink: 'steps', menuName: 'Steps'},
  {routerLink: 'tabview', menuName: 'Tabview'},
  {routerLink: 'table', menuName: 'Table'},
  {routerLink: 'textarea', menuName: 'Text Area'},
  {routerLink: 'textbox', menuName: 'Text Box'},
  {routerLink: 'texteditor', menuName: 'Text Editor'},
  {routerLink: 'tooltip', menuName: 'Tooltip'},
  {routerLink: 'tree', menuName: 'Tree'},
  {routerLink: 'upload', menuName: 'Upload'},

];

@Component({
  moduleId: module.id,
  selector: 'web-gallery-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //** * Registeration
  private registerDialogDisplay : boolean = false;
  private title: string = "Registeration";
  private isShowHeader: boolean = true;
  private isDraggable: boolean = true;
  private isClosable: boolean = true;
  private isResponsive: boolean = true;    
  private isModal: boolean = true;
  private width: number = 600;
  private height: number = 450;
  private body: string = '';

  private user_name : string;
  private dept_name : string;
  private user_email : string;

  pageList = PAGELIST;
  constructor() { }

  ngOnInit() {
  }
  //**Register */
  registerDialog(){
    this.registerDialogDisplay = true;
  }
  
  submitData(){          
 if(this.user_name != undefined && this.dept_name != undefined && this.user_email != undefined){
    console.log(this.user_name);
    console.log(this.dept_name);
    console.log(this.user_email);
    this.user_name = undefined;
    this.dept_name = undefined;
    this.user_email = undefined; 
    }
 this.registerDialogDisplay = false;
  }
}
