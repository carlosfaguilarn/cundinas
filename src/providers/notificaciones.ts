import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable()
export class NotificacionesProvider {
  constructor(private http: HttpClient){

  }

  getNotifications() {
    return this.http.get('https://randomuser.me/api/?results=25');
  } 
}