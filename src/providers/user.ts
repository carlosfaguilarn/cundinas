import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from "./global";

@Injectable()
export class UserProvider {
  public url: string;
  public token: string;
  constructor(private http: HttpClient){
    this.url = GLOBAL.url;
    this.token = localStorage.getItem('token');
  }

  getUsers(){
    return this.http.get('https://randomuser.me/api/?results=25');
  }

  getClients(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    });  
    return this.http.get(this.url+'user/getClientes', {headers});
  } 

  register(user) {
    let params = JSON.stringify(user);
    let options = {
      headers: {'Content-Type': 'application/json'}
    };
    return this.http.post(this.url+'user/add', params, options);
  } 
  
  signup(user) {
    let params = JSON.stringify(user);
    let options = {
      headers: {'Content-Type': 'application/json'}
    };
    return this.http.post(this.url+'user/login', params, options);
  } 
}