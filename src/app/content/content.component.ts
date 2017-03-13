import { Component, OnInit } from '@angular/core';

// **popup*
import { ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal-bootstrap';

import { Directory } from 'go-tree/directory'; //**tree*
	
// **checkbox*
const DATA: any[] = [
  { value: '13', label: 'HTML', disable: '', readonly: '', checked: '' },
  { value: '14', label: 'CSS', disable: '', readonly: '', checked: '' },
  { value: '15', label: 'Bootstrap', disable: '', readonly: '', checked: '' }
];
// **radiobox*
const RDATA: any[] = [
  { value: '1', label: 'Male', disable: '', readonly: '', checked: '' },
  { value: '2', label: 'Female', disable: '', readonly: 'true', checked: '' }
];

// **pulldown*
const PAGELIST: Array<any> = [
  {routerLink: 'badge', menuName: 'Badge'},
  {routerLink: 'checkbox', menuName: 'Check Box'},
  {routerLink: 'textarea', menuName: 'Text Area'},
  {routerLink: 'textbox', menuName: 'Text Box'},
  {routerLink: 'texteditor', menuName: 'Text Editor'},
  {routerLink: 'popup', menuName: 'Popup'},
  {routerLink: 'progressbar', menuName: 'Progress Bar'},
  {routerLink: 'pulldown', menuName: 'Pulldown Menu'},
  {routerLink: 'radiobox', menuName: 'Radio Box'},
  {routerLink: 'sidebar', menuName: 'Side Bar'},
];

@Component({
  moduleId: module.id,
  selector: 'app-content',
  templateUrl: 'content.component.html',
  styleUrls: ['content.component.css'],
})
export class ContentComponent {

  // **datetimepicker*
  dateFrom:Date;
  dateTo:Date;

	datas = DATA; //**checkbox*
  data = RDATA; //**radioboxbox*

  private getValue: any = []; 
  private getLabel: any = []; 
 
  private textValueRadio(data: any): void{  
        this.getValue = data.value;
        this.getLabel = data.label;
  } 

  // public th: any;
  public chartData2: Array<any> = [{ data: [10, 30, 50, 70, 80, 90] }]; 
  public chartLabel: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

  // **image-gallery*
  private imgUrl = './app/content/assets/';
  ImgGallery = [
  { thumb: this.imgUrl + 'images/gallery/thumbs/img1.jpg', img: this.imgUrl + '/images/gallery/img1.jpg' },
  { thumb: this.imgUrl + 'images/gallery/thumbs/img2.jpg', img: this.imgUrl + '/images/gallery/img2.jpg' },
  { thumb: this.imgUrl + 'images/gallery/thumbs/img3.jpg', img: this.imgUrl + '/images/gallery/img3.jpg' },
  { thumb: this.imgUrl + 'images/gallery/thumbs/img4.jpg', img: this.imgUrl + '/images/gallery/img4.jpg' },
  { thumb: this.imgUrl + 'images/gallery/thumbs/img5.jpg', img: this.imgUrl + '/images/gallery/img5.jpg' }
  ];
  
  //**pulldown-menu*
  pageListArray = PAGELIST;

  //**ng-select*
  private items: Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
         'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
         'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',
         'Düsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',
         'Hamburg', 'Hannover', 'Helsinki', 'Kraków', 'Leeds', 'Leipzig', 'Lisbon',
         'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Málaga',
         'Naples', 'Palermo', 'Paris', 'Poznań', 'Prague', 'Riga', 'Rome',
         'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',
         'Zagreb', 'Zaragoza', 'Łódź'];

  private disabledSingle: boolean = false;
  private singleValue: any = {};

  public refreshSingleValue(value: any): void {
  this.singleValue = value;
  }
  //**end ng-select*

  // **auto-complete*
  private autoCompleteModel: any;
  googleGeoCode: string = "https://maps.googleapis.com/maps/api/geocode/json?address=:keyword";

  // **table*
  private tableColumns: Array<any> = [
        {title:'Name', name:'name'},
        {title:'Id', name:'no', sort:'asc'},
        {title:'Date Started', name:'startDate', dateFormat: 'dd-mm-yyyy'}
  ]; 
  private dataOfTable: Array<any> = [
        {'name':'Abc', 'surname':'<b>Cba</b>', 'no':'01', 'startDate':'01/01/2015'},
        {'name':'Bar', 'surname':'<i>Foo</i>', 'no':'02', 'startDate':'01/02/2015'},
        {'name':'Buff', 'no':'03', 'startDate':'02/01/2015'},
  ];

  // constructor(){}

  // **tree*
  private directories: Array<Directory>;

  constructor(
    overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal
  ) {
    
    overlay.defaultViewContainer = vcRef; 
 
    // **tree*
    let music2015 = new Directory('Music 2015', 'music2015', [],[],false);
    let music2016 = new Directory('Music 2016', 'music2016', [],[],false);
    let music2017 = new Directory('Music 2017', 'music2017', [],[],false);
    let music = new Directory('Music', 'music', [music2015, music2016, music2017],false);
    this.directories = [music];
  }
  // **upload*
  private message_sets = { chooseLabel: "choose me", deleteLabel: "delete it" }; 
  private show_opts = { showDragandDropBox: true };
  
  // **popup*
  openAlertPopup() {
    this.modal.alert() 
     .size('sm') 
     .isBlocking(true) 
     .showClose(true) 
     .title('Message Popup') 
     .body('Example Popup Alert') 
     .okBtn('OK') 
     .open() 
  }
  
  // ** progressbar *
  private progress_1: number = 0;
  startProgress() {
      this.progress_1 = 50;
  }
  completeProgress() {
      this.progress_1 = 100;
  }

}
