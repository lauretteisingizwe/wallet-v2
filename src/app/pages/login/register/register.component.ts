import { getCurrencySymbol, getLocaleEraNames } from '@angular/common';
import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm} from '@angular/forms';
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
  getUsers: any;

  constructor(private userService: UserService) { }

  register: any;//form
  users:any;
  firstName! : string;

  ngOnInit(){ 
    this.userService.getUsers();
  
  }
  

  // When we submit user create form
  onSubmit(form: NgForm) {
    // So the form doesn't auto submit
  //$event.preventDefault();
    //console.log("Hello, We are sending our data to the API.");
  // console.log("account created.");
    
 // console.log("this.registration");

    //TODO: console.log() or alert all the data inputed in the fields. using NG Form
    console.log(form.value)
    }
      }
  
     

    
 //getUsers(){
 //this.Service.getUsers().subscribe((response) => {
 //console.log(res)
 //}, (error) =>{
  console.log('Error', Error);
   
 
// }
      
 
