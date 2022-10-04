import { getCurrencySymbol, getLocaleEraNames } from '@angular/common';
import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, NgModel} from '@angular/forms';
import { response } from 'express';
//import { ConsoleReporter } from 'jasmine';
import { firstValueFrom } from 'rxjs';

// Import user service
import { UserService } from 'src/app/services/user.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  getUsers:  any;
  Service: any;
ngForm= NgForm ;  
email= NgModel ; 
firstname= NgModel;
lastname= NgModel;
phoenumber= NgModel;
password= NgModel;
users= NgModel;

  constructor(private user: UserService) { }

  register: any;//form
  //users:any;
  firstName! : string;
  lastName! : string;


  ngOnInit(): void{ 
    console.warn(this.register.Value)
    this.Service.getUsers(this.register.Value).subscribe(()=> {
      console.warn("result")

    }
      );
     
  }
   // When we submit user create form
  onSubmit(form: NgForm) {
    // So the form doesn't auto submit
  //$event.preventDefault();
    //console.log("Hello, We are sending our data to the API.");
   console.log("account created.");
    
    //TODO: console.log() or alert all the data inputed in the fields. using NG Form
    console.log(form.value)
    //this.registerUsers(form.value).subscribe((response: any) =>{
    //Console.log("response",response);
      //console.log(response.ValueForm)
    //});
  
    
    }
  registerUsers(value: any) {
    //throw new Error('Method not implemented.');
  }
 //     }
 //getUsers(){
//this.Service.getUsers().subscribe((response: any) => {
// console.log(res)
 //}, (error) =>{
 // console.log('Error', Error);
   
 
      
 
}  
