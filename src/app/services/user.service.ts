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
  getUsers() {
    throw new Error('Method not implemented.');
  }
  private apiUrl = "http://localhost:3000/users.json";

  constructor(private http: HttpClient) { }
};
//getUsers(): Observable<any>{
  //return this.http.get<any>(`this.http://localhost:5000/getUsers`);
 // }
//}

  // TODO: Implement Create user services
   //this.http.post(this.apiUrl,data, httpOptions)
      
    // return this.http.post(this."http://localhost:5000/users.json", httpOptions)
       //  subscribe((res: any) =>{
        //console.log()
    
