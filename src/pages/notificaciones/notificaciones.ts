import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotificacionesProvider } from '../../providers/notificaciones'; 
import { UserProvider } from "../../providers/user"; 
import { User } from '../../models/user.model';
import { Cundina } from '../../models/cundina.model';

@IonicPage()
@Component({
  selector: 'page-notificaciones',
  templateUrl: 'notificaciones.html',
})
export class NotificacionesPage {
  public users: any;
  public notificaciones: Notificacion;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public notificacionService: NotificacionesProvider,
    public userProvider: UserProvider
  ){
    this.getNotifications();
  } 

  responder(id, status, i){
    console.log(status);
    let data = {status: status};
    
    this.notificaciones.splice(i, 1);
    
    /*this.notificacionService.atenderSolicitud(id, data).subscribe(
      response => {
        if(!response['userCundina']){
          console.log("No se atendió la solicitud");
        }else{
          console.log("Status cambiado: "+status);
        }
      }, error=>{
        var error = <any> error;
        console.log(error);
      }
    );
*/
  }

  getNotifications(){  
    this.notificacionService.getNotifications().subscribe(
      response => {
        if(!response['userCundina']){
          console.log("No hay notificaciones");
        }else{
          this.notificaciones = response['userCundina'];
          console.log("notificaciones", response['userCundina']);
        }
      }, error=>{
        var error = <any> error;
        console.log(error);
      }
    );
  }
}

interface Notificacion{
  _id: string;
  cundina: Cundina
  user_admin: User;
  user: User;
  status: string;
}