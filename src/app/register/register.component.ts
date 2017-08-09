import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent  { 

    private ulcode: number;
    private servicename: string;    
    private projectname: string;
    private firstname: string;
    private lastname: string;
    private email: string;
    
    private registerDialogDisplay : boolean = false;
    private errorDialogDisplay : boolean = false;
    private title: string = "Registeration Comfirm";
    private errorTitle : string = "Error";
    private isShowHeader: boolean = true;
    private isDraggable: boolean = false;
    private isClosable: boolean = false;
    private isResponsive: boolean = true;    
    private isModal: boolean = true;
    private width: number = 300;
    private height: number = 200;
    //private body: string = '';

    private isValidEmail: boolean = true;

    submitData(){          
        if(this.isValidEmail){
            this.ulcode = undefined; 
            this.servicename = undefined;
            this.projectname = undefined;
            this.firstname = undefined;
            this.lastname = undefined;
            this.email = undefined; 
            this.registerDialogDisplay = true;  
        } else {
            this.errorDialogDisplay = true;
        }
    }

    clearText(){          
        this.ulcode = undefined; 
        this.servicename = undefined;
        this.projectname = undefined;
        this.firstname = undefined;
        this.lastname = undefined;
        this.email = undefined; 
    }

}
