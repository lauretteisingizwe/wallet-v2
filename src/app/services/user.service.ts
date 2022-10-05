import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// Importing service for calling APIS
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs';
import { response } from 'express';
//const axios = require('axios');
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
const formData = new FormData();
@Injectable({
  providedIn: 'root',
})
// This is a service to get and manage user data
export class UserService {

  private apiUrl = 'http://localhost:3300/';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.apiUrl + 'users');
  }

  deleteUsers(id: any) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  addUsers(data: any) {
    return this.http.post(this.apiUrl + 'users', data);
  }
  registerUser(data: any) {
    return this.http.post(this.apiUrl + 'users', data);
  }
}
