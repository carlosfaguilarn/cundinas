import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from "./global";

@Injectable()
export class NotificacionesProvider {
  public url: string;
  public token: string;

  constructor(private http: HttpClient){
    this.url = GLOBAL.url;
    this.token = localStorage.getItem('token');
  } 

  getNotifications() {  
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    });  

    return this.http.get(this.url+'usercundina/getpendientescliente', {headers});
  } 

  newCard(card) {
    let params = JSON.stringify(card);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    });  

    return this.http.post(this.url+'card/add', params, {headers});
  } 
  
  atenderSolicitud(cundina_id, status) {
    let params = JSON.stringify(status);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    });  

    return this.http.put(this.url+'usercundina/changeSolicitud/'+cundina_id, params, {headers});
  } 
}