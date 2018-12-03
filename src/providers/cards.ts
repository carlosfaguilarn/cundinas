import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from "./global";

@Injectable()
export class CardsProvider {
  public url: string;
  public token: string;

  constructor(private http: HttpClient){
    this.url = GLOBAL.url;
    this.token = localStorage.getItem('token');
  } 

  getCards(userid) { 
    console.log(this.token);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    });  

    return this.http.get(this.url+'card/getTodas/'+userid, {headers});
  } 

  newCard(card) {
    let params = JSON.stringify(card);
    let options = {
      headers: {'Content-Type': 'application/json'}
    };
    return this.http.post(this.url+'card/add', params, options);
  } 
  
}