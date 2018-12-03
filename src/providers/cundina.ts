import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from "./global";

@Injectable()
export class CundinaProvider {
  public url: string;
  public token: string;
  constructor(private http: HttpClient){
    this.url = GLOBAL.url;
    this.token = localStorage.getItem('token');
  } 
 
  getCundinas(){  
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    });  
    return this.http.get(this.url+'cundina/getXAdmin', {headers});
  } 

  newCundina(cundina) {
    let params = JSON.stringify(cundina);
    let options = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.token
      }
    };
    return this.http.post(this.url+'cundina/add', params, options);
  } 

  addIntegrante(data) {
    let params = JSON.stringify(data);
    let options = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.token
      }
    };
    return this.http.post(this.url+'userCundina/add', params, options);
  } 

}