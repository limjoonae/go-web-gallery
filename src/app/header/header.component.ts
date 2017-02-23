import { Component, OnInit } from '@angular/core';

const PAGELIST: Array<any> = [
  {routerLink: 'autocomplete', menuName: 'Auto Complete'},
  {routerLink: 'badge', menuName: 'Badge'},
  {routerLink: 'button', menuName: 'Button'},
  {routerLink: 'chart', menuName: 'Chart'},
  {routerLink: 'checkbox', menuName: 'Check Box'},
  {routerLink: 'datetimepicker', menuName: 'Datetime Picker'},
  {routerLink: 'imagegallery', menuName: 'Image Gallery'},
  {routerLink: 'popup', menuName: 'Popup'},
  {routerLink: 'progressbar', menuName: 'Progress Bar'},
  {routerLink: 'pulldown', menuName: 'Pulldown Menu'},
  {routerLink: 'radiobutton', menuName: 'Radio Button'},
  {routerLink: 'selectbox', menuName: 'Select Box'},
  {routerLink: 'sidebar', menuName: 'Side Bar'},
  {routerLink: 'tab', menuName: 'Tab'},
  {routerLink: 'table', menuName: 'Table'},
  {routerLink: 'textarea', menuName: 'Text Area'},
  {routerLink: 'textbox', menuName: 'Text Box'},
  {routerLink: 'texteditor', menuName: 'Text Editor'},
  {routerLink: 'tooltip', menuName: 'Tool Tip'},
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

  pageList = PAGELIST;
  constructor() { }

  ngOnInit() {
  }

}
