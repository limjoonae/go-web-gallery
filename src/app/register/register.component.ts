import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { UsersModel } from '../model/users.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit  { 

    users: UsersModel[] = [];
    user: UsersModel = {   ulCode: undefined,
                            serviceName: undefined,
                            projectName: undefined,
                            firstName: undefined,
                            lastName: undefined,
                            email: undefined };
    constructor(private usersService: UsersService){ }

    ngOnInit() {
        // this.usersService.getAllUsers().subscribe(
        //     users => { 
        //         this.users = users; 
        //         console.log('users: ', this.users);
        //     });
    }

    private ulcode: number;
    private servicename: string;    
    private projectname: string;
    private firstname: string;
    private lastname: string;
    private email: string;
    
    private dialogDisplay : boolean = false;
    private errorDialogDisplay : boolean = false;
    private title: string = "Registeration";
    private errorTitle : string = "Error";
    private isShowHeader: boolean = true;
    private isDraggable: boolean = false;
    private isClosable: boolean = false;
    private isResponsive: boolean = true;    
    private isModal: boolean = true;
    private width: number = 300;
    private height: number = 200;
    private dialogMessage: string = '';

    private isValidEmail: boolean = true;

    register() {
        this.usersService.register(this.user).subscribe(
            success => { 
                console.log('success: ', success);
                console.log('success: ', success["_body"]);
                this.dialogMessage = success["_body"];
                this.dialogDisplay = true;
            },
            error => { 
                console.log('success: ', error["_body"]);
                this.dialogMessage = error["_body"];
                this.dialogDisplay = true;
            }
        );
    }

    clearText(){          
        this.user = {   ulCode: undefined,
                        serviceName: undefined,
                        projectName: undefined,
                        firstName: undefined,
                        lastName: undefined,
                        email: undefined };
    }

}
