import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CUNDINAS } from "../cundinas.data";
import { DetalleCundinaPage, AddCundinaPage } from "../index.pages";

@IonicPage()
@Component({
  selector: 'page-cundinas',
  templateUrl: 'cundinas.html'
})
export class CundinasPage {
  cundinas: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cundinas = CUNDINAS;
  }  
  abrirDetalle(cundina: any){
    console.log(cundina);
    this.navCtrl.push(DetalleCundinaPage, {'cundina':cundina});
  }
  addCundina(){
    this.navCtrl.push(AddCundinaPage);
  }
}