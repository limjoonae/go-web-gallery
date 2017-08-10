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
    private confirmDialogDisplay : boolean = false;
    private title: string = "Registeration";
    private isResponsive: boolean = true;    
    private isModal: boolean = true;
    private dialogMessage: string = '';
    private cancelButtonLabel: string = '';
    private showConfirmButton: boolean = false;

    private isValidEmail: boolean = true;

    showConfirmDialog() {
        this.title = 'Confirm';
        this.dialogMessage = 'Are you sure to register?';
        this.cancelButtonLabel = 'No';
        this.showConfirmButton = true;
        this.dialogDisplay = true;
    }

    register() {
        this.dialogDisplay = false;
        this.cancelButtonLabel = 'OK';
        this.showConfirmButton = false;
        this.usersService.register(this.user).subscribe(
            success => { 
                this.clearText();
                this.title = 'Successful';
                this.dialogMessage = success["_body"];
                this.dialogDisplay = true;
            },
            error => { 
                this.title = 'You cannot register';
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
