import { getCurrencySymbol, getLocaleEraNames } from '@angular/common';
import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, NgModel } from '@angular/forms';
import { response } from 'express';
//import { ConsoleReporter } from 'jasmine';
import { firstValueFrom } from 'rxjs';

// Import user service
import { UserService } from 'src/app/services/user.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  Service: any;
  ngForm = NgForm;
  email = NgModel;
  firstname = NgModel;
  lastname = NgModel;
  phoenumber = NgModel;
  password = NgModel;
  delete = NgModel; 
  users: any;

  constructor(private userService: UserService) {}

  register: any; //form
  firstName!: string;
  lastName!: string;

  ngOnInit(): void {
    this.getUsers();
  }
  // When we submit user create form
  onSubmit(form: NgForm) {
    // So the form doesn't auto submit
    //$event.preventDefault();
    //console.log("Hello, We are sending our data to the API.");
    console.log('account created.');

    //TODO: console.log() or alert all the data inputed in the fields. using NG Form
    console.log(form.value);
    this.userService.registerUser(form.value).subscribe((response) =>{
      console.log("response",response);
      this.getUsers();
    });
  }

  getUsers(){
    this.userService.getUsers().subscribe((data) => {   
      this.users = data;
      console.log('result');
    });
  }

  deleteUsers(id: any){
    this.userService.deleteUsers(id).subscribe((data) => {
      this.users = data;
      console.log('result');
    });
  }
}
