import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HISTORIAL } from "../historial.data";

/**
 * Generated class for the HistorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historial',
  templateUrl: 'historial.html',
})
export class HistorialPage {
  public historial : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.historial = HISTORIAL;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistorialPage');
  }

}
