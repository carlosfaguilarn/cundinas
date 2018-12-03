import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cundina } from "../../models/cundina.model";

@IonicPage()
@Component({
  selector: 'page-detalle-cundina',
  templateUrl: 'detalle-cundina.html',
})
export class DetalleCundinaPage {
  public cundina: Cundina;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cundina = this.navParams.get('cundina'); 
  } 
  regresar(){
    this.navCtrl.pop();
  }
}
