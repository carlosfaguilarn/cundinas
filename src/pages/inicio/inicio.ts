import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user.model';

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {
  public user: User;
  public cundinas: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.user = new User('','','','','','','','','');
    this.cundinas = {
      "nombre": "Grupo 4-01",
      "turno": "4",
      "fecha_pago": "24/11/2018",
      "tipo": "card"
    } 
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad InicioPage');
    this.user = JSON.parse(localStorage.getItem('identity'));
    this.user.url_image = 'userhombre.png'
  }
}
