import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


// Importing service for calling APIS
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
//const formData = new FormData()

@Injectable({
  providedIn: 'root'
})

// This is a service to get and manage user data 
export class UserService {
  private apiUrl = "http://localhost:3000/users";

  constructor(private http: HttpClient) { }

  // TODO: Implement Create user services
  /// this.http.post(this.apiUrl,data, httpOptions)
       // onSubmit(users {id: int, email: varchar, lastname: varchar, firstname, phonenumber: varchar, password: varchar})
      //this.http.post(this."http://localhost:3000/users.json", users)
         //subscribe((res: any) =>{
         // console.log(res)
         }; 
        //catchError(this.handleError('adduser', UserService)
      //);
  //}
       // this.UserService
       // .adduser
        //.subscribe(() => this.users.push(user));
  // TODO: Authentication
  // TODO: Get Logged in user data.
  
  // Get All Users / Search user by phonenumber
  // getUsers(): number[]{
  //   return [1, 2, 3, 4, 5];
  // }

  //getUsers(): Observable<any>{
    // this.http.get(this."http://localhost:3000/users");
 // }
//}

