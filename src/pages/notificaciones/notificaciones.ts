import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotificacionesProvider } from '../../providers/notificaciones'; 
import { UserProvider } from "../../providers/user";

@IonicPage()
@Component({
  selector: 'page-notificaciones',
  templateUrl: 'notificaciones.html',
})
export class NotificacionesPage {
  public users: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public notificacionService: NotificacionesProvider,
    public userProvider: UserProvider
  ){
    this.userProvider.getUsers().subscribe(
      response => { // Success
        //this.users = response.results;
      },
      error =>{
        console.error(error);
      }  
    )
  } 

}
