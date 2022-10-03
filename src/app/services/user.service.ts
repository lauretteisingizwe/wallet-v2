import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// Importing service for calling APIS
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs';
import { response } from 'express';
//const axios = require('axios');
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
const formData = new FormData()
@Injectable({
  providedIn: 'root'
})
// This is a service to get and manage user data 
export class UserService {
  
   // throw new Error('Method not implemented.');
 // }
  private apiUrl = "http://localhost:3300/users";
  rooturl= "http://localhost:3300/users";
  rootUrl: any;
  Url: any;
 constructor(private http: HttpClient) { }
 getUsers() {
  return this.http.get(this.rooturl);
 }
 deleteUsers() {
  return this.http.delete('${this.url}/${id}')
 }
addUsers(){
  return this.http.post(this.Url.data, null)
}
registerUser(data: any){
  return this.http.post(this.apiUrl+"users",data);
}
}




