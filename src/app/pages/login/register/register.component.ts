import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  register: any;//form

  ngOnInit(): void {
    this.register = new FormGroup({
      "firstName": new FormControl(null),
      "lastName": new FormControl(null), 
      "emailId": new FormControl(null),
      "mobileNumber": new FormControl(null),
      "Password": new FormControl(null),
    });
    SubmitData()
    {
      console.log(this.register.value);
    }
  }

}
function SubmitData() {
  console
}

