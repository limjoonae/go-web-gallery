import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Car } from './assets/model/car';
import { CarService } from './service/car.service';
import { TreeService } from './service/tree.service';
	
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
  providers: [ CarService, TreeService ],
  encapsulation: ViewEncapsulation.None
})
export class ContentComponent implements OnInit {

  // **datetimepicker*
  private dateFrom:Date;
  private dateTo:Date;

  // ** Datagrid *
  cars: Car[] = [
    {"vin": "ee8a89d8","year": "1987","brand": "Fiat","color":"Maroon"},
    {"vin": "642b3edc","year": "1968","brand": "Renault","color":"White"},
    {"vin": "39980f30","year": "1986","brand": "VW","color":"Red"},
    {"vin": "1241c403","year": "1964","brand": "Jaguar","color":"Yellow"}
];
  selectedCar: Car;
  displayDialog: boolean;
  selectedFile: any;
  filesTree: any[];

  // galleria
  images: any[] = [
    {source:'./app/content/assets/images/datagrid/Fiat-big.gif', alt:'Fiat Logo', title:'Fiat'},
    {source:'./app/content/assets/images/datagrid/Renault-big.gif', alt:'Renault Logo', title:'Renault'},
    {source:'./app/content/assets/images/datagrid/VW-big.gif', alt:'VW for Logo', title:'VW'},
    {source:'./app/content/assets/images/datagrid/Jaguar-big.gif', alt:'Jaguar Logo', title:'Jaguar'}
  ];

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
        {title:'Date Started', name:'startDate', dateFormat: 'dd/mm/yy'}
  ]; 

  textbox_1: number;

  private dataOfTable: Array<any> = [
        {'name':'Abc', 'surname':'<b>Cba</b>', 'no':'02', 'startDate':new Date('2015/7/8')},
        {'name':'Bar', 'surname':'<i>Foo</i>', 'no':'03', 'startDate':new Date('2015/7/7')},
        {'name':'Buff', 'no':'01', 'startDate':new Date('2015/7/6')},
  ];

  // **upload*
  private message_sets = { chooseLabel: "choose me", deleteLabel: "delete it" }; 
  private show_opts = { showDragandDropBox: true };

  constructor(
    private carService: CarService,
    private treeService: TreeService
  ) {}

  activeIndex: number = 1;

  ngOnInit() {
      // this.carService.getCarsLarge().then(cars => this.cars = cars);
      this.treeService.getFiles().then(filesTree => this.filesTree = filesTree);
      this.stepItems = [
            {label: '', command: (event: any) => {this.activeIndex = 0;} },
            {label: '', command: (event: any) => {this.activeIndex = 1;} },
            {label: '', command: (event: any) => {this.activeIndex = 2;} },
            {label: '', command: (event: any) => {this.activeIndex = 3;} } 
      ];
      // console.log('car: ', this.cars);
  }

  selectCar(car: Car) {
      this.selectedCar = car;
      this.displayDialog = true;
  }
    
  onDialogHide() {
      this.selectedCar = null;
  }
  dialogVisible: boolean;
  showCar(car: Car) {
        this.selectedCar = car;
        this.displayDialog = true;
    }
  // primeng dialog
  display: boolean = false;
  showDialog() {
      this.display = true;
  }
  msgs: any[];
  nodeSelect(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Node Selected', detail: event.node.label});
    }

  private stepItems: any[];
  // ** progressbar *
  private progress_1: number = 0;
  startProgress() {
      this.progress_1 = 50;
  }
  completeProgress() {
      this.progress_1 = 100;
  }

  //*registeration  
  private user_name : string;
  private dept_name : string;
  private user_email : string;
  
  
  private registerDialogDisplay : boolean = false;
  private errorDialogDisplay : boolean = false;
  private title: string = "Registeration Comfirm";
  private errorTitle : string = "Error";
  private isShowHeader: boolean = true;
  private isDraggable: boolean = false;
  private isClosable: boolean = false;
  private isResponsive: boolean = true;    
  private isModal: boolean = true;
  private width: number = 400;
  private height: number = 200;
  //private body: string = '';

  submitData(){          
 if(this.user_name != undefined && this.dept_name != undefined && this.user_email != undefined && this.mailSyntaxCheck(this.user_email)){
    console.log(this.user_name);
    console.log(this.dept_name);
    console.log(this.user_email);
    this.user_name = undefined;
    this.dept_name = undefined;
    this.user_email = undefined; 
    this.registerDialogDisplay = true;  
  }
  else{
    this.errorDialogDisplay = true;
    }
  }

  clearText(){          
 
    this.user_name = undefined;
    this.dept_name = undefined;
    this.user_email = undefined; 
    
  }
  
  mailSyntaxCheck(mail:string) : boolean{
    let result : boolean;
    let assignCheck : boolean = false;
    let stop : number = 0;
    for(let i = 0 ; i < mail.length ; i++){
      if(mail.substring(i,i + 1) == "@"){
        stop = i;
        assignCheck = true;
        break;
      }  
  }
    for(let i = stop ; i < mail.length; i++){
      if(mail.substring(i,i + 1) == '.' && i != (mail.length - 1) && assignCheck){
        result = true;
        break;
      }
      else result = false;
    }
    return result;
  }
}
