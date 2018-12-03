import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalleCundinaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle-cundina',
  templateUrl: 'detalle-cundina.html',
})
export class DetalleCundinaPage {
  public cundina: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cundina = this.navParams.get('cundina'); 
  } 
  regresar(){
    this.navCtrl.pop();
  }
}
