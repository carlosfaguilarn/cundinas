import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from "./global";

@Injectable()
export class UserProvider {
  public url: string;
  constructor(private http: HttpClient){
    this.url = GLOBAL.url;
  }

  getUsers(){
    return this.http.get('https://randomuser.me/api/?results=25');
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