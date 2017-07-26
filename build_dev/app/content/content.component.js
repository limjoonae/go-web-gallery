"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var car_service_1 = require("./service/car.service");
var tree_service_1 = require("./service/tree.service");
// **checkbox*
var DATA = [
    { value: '13', label: 'HTML', disable: '', readonly: '', checked: '' },
    { value: '14', label: 'CSS', disable: '', readonly: '', checked: '' },
    { value: '15', label: 'Bootstrap', disable: '', readonly: '', checked: '' }
];
// **radiobox*
var RDATA = [
    { value: '1', label: 'Male', disable: '', readonly: '', checked: '' },
    { value: '2', label: 'Female', disable: '', readonly: 'true', checked: '' }
];
// **pulldown*
var PAGELIST = [
    { routerLink: 'badge', menuName: 'Badge' },
    { routerLink: 'checkbox', menuName: 'Check Box' },
    { routerLink: 'textarea', menuName: 'Text Area' },
    { routerLink: 'textbox', menuName: 'Text Box' },
    { routerLink: 'texteditor', menuName: 'Text Editor' },
    { routerLink: 'popup', menuName: 'Popup' },
    { routerLink: 'progressbar', menuName: 'Progress Bar' },
    { routerLink: 'pulldown', menuName: 'Pulldown Menu' },
    { routerLink: 'radiobox', menuName: 'Radio Box' },
    { routerLink: 'sidebar', menuName: 'Side Bar' },
];
var ContentComponent = (function () {
    function ContentComponent(carService, treeService) {
        this.carService = carService;
        this.treeService = treeService;
        // ** Datagrid *
        this.cars = [
            { "vin": "ee8a89d8", "year": "1987", "brand": "Fiat", "color": "Maroon" },
            { "vin": "642b3edc", "year": "1968", "brand": "Renault", "color": "White" },
            { "vin": "39980f30", "year": "1986", "brand": "VW", "color": "Red" },
            { "vin": "1241c403", "year": "1964", "brand": "Jaguar", "color": "Yellow" }
        ];
        // galleria
        this.images = [
            { source: './image/content/images/datagrid/Fiat-big.gif', alt: 'Fiat Logo', title: 'Fiat' },
            { source: './image/content/images/datagrid/Renault-big.gif', alt: 'Renault Logo', title: 'Renault' },
            { source: './image/content/images/datagrid/VW-big.gif', alt: 'VW for Logo', title: 'VW' },
            { source: './image/content/images/datagrid/Jaguar-big.gif', alt: 'Jaguar Logo', title: 'Jaguar' }
        ];
        this.datas = DATA; //**checkbox*
        this.data = RDATA; //**radioboxbox*
        this.getValue = [];
        this.getLabel = [];
        // public th: any;
        this.chartData2 = [{ data: [10, 30, 50, 70, 80, 90] }];
        this.chartLabel = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
        // **image-gallery*
        this.imgUrl = './image/content/images/';
        this.ImgGallery = [
            { thumb: this.imgUrl + 'gallery/thumbs/img1.jpg', img: this.imgUrl + 'gallery/img1.jpg' },
            { thumb: this.imgUrl + 'gallery/thumbs/img2.jpg', img: this.imgUrl + 'gallery/img2.jpg' },
            { thumb: this.imgUrl + 'gallery/thumbs/img3.jpg', img: this.imgUrl + 'gallery/img3.jpg' },
            { thumb: this.imgUrl + 'gallery/thumbs/img4.jpg', img: this.imgUrl + 'gallery/img4.jpg' },
            { thumb: this.imgUrl + 'gallery/thumbs/img5.jpg', img: this.imgUrl + 'gallery/img5.jpg' }
        ];
        //**pulldown-menu*
        this.pageListArray = PAGELIST;
        //**ng-select*
        this.items = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
            'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
            'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',
            'Düsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',
            'Hamburg', 'Hannover', 'Helsinki', 'Kraków', 'Leeds', 'Leipzig', 'Lisbon',
            'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Málaga',
            'Naples', 'Palermo', 'Paris', 'Poznań', 'Prague', 'Riga', 'Rome',
            'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',
            'Zagreb', 'Zaragoza', 'Łódź'];
        this.disabledSingle = false;
        this.singleValue = {};
        this.googleGeoCode = "https://maps.googleapis.com/maps/api/geocode/json?address=:keyword";
        // **table*
        this.tableColumns = [
            { title: 'Name', name: 'name' },
            { title: 'Id', name: 'no', sort: 'asc' },
            { title: 'Date Started', name: 'startDate', dateFormat: 'dd/mm/yy' }
        ];
        this.dataOfTable = [
            { 'name': 'Abc', 'surname': '<b>Cba</b>', 'no': '02', 'startDate': new Date('2015/7/8') },
            { 'name': 'Bar', 'surname': '<i>Foo</i>', 'no': '03', 'startDate': new Date('2015/7/7') },
            { 'name': 'Buff', 'no': '01', 'startDate': new Date('2015/7/6') },
        ];
        // **upload*
        this.message_sets = { chooseLabel: "choose me", deleteLabel: "delete it" };
        this.show_opts = { showDragandDropBox: true };
        this.activeIndex = 1;
        // primeng dialog
        this.display = false;
        // ** progressbar *
        this.progress_1 = 0;
        this.registerDialogDisplay = false;
        this.errorDialogDisplay = false;
        this.title = "Registeration Comfirm";
        this.errorTitle = "Error";
        this.isShowHeader = true;
        this.isDraggable = false;
        this.isClosable = false;
        this.isResponsive = true;
        this.isModal = true;
        this.width = 300;
        this.height = 200;
    }
    ContentComponent.prototype.textValueRadio = function (data) {
        this.getValue = data.value;
        this.getLabel = data.label;
    };
    ContentComponent.prototype.refreshSingleValue = function (value) {
        this.singleValue = value;
    };
    ContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.carService.getCarsLarge().then(cars => this.cars = cars);
        this.treeService.getFiles().then(function (filesTree) { return _this.filesTree = filesTree; });
        this.stepItems = [
            { label: '', command: function (event) { _this.activeIndex = 0; } },
            { label: '', command: function (event) { _this.activeIndex = 1; } },
            { label: '', command: function (event) { _this.activeIndex = 2; } },
            { label: '', command: function (event) { _this.activeIndex = 3; } }
        ];
    };
    ContentComponent.prototype.selectCar = function (car) {
        this.selectedCar = car;
        this.displayDialog = true;
    };
    ContentComponent.prototype.onDialogHide = function () {
        this.selectedCar = null;
    };
    ContentComponent.prototype.showCar = function (car) {
        this.selectedCar = car;
        this.displayDialog = true;
    };
    ContentComponent.prototype.showDialog = function () {
        this.display = true;
    };
    ContentComponent.prototype.nodeSelect = function (event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Selected', detail: event.node.label });
    };
    ContentComponent.prototype.startProgress = function () {
        this.progress_1 = 50;
    };
    ContentComponent.prototype.completeProgress = function () {
        this.progress_1 = 100;
    };
    //private body: string = '';
    ContentComponent.prototype.submitData = function () {
        if (this.user_name != undefined && this.dept_name != undefined && this.user_email != undefined) {
            this.user_name = undefined;
            this.dept_name = undefined;
            this.user_email = undefined;
            this.registerDialogDisplay = true;
        }
        else {
            this.errorDialogDisplay = true;
        }
    };
    ContentComponent.prototype.clearText = function () {
        this.user_name = undefined;
        this.dept_name = undefined;
        this.user_email = undefined;
    };
    return ContentComponent;
}());
ContentComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-content',
        templateUrl: 'content.component.html',
        styleUrls: ['content.component.css'],
        providers: [car_service_1.CarService, tree_service_1.TreeService],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [car_service_1.CarService,
        tree_service_1.TreeService])
], ContentComponent);
exports.ContentComponent = ContentComponent;
//# sourceMappingURL=content.component.js.map