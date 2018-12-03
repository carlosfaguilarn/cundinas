import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TARJETAS } from "../tarjetas.data";
import { AddTarjetaPage } from "../index.pages";
import { CardsProvider } from "../../providers/cards";
import { HISTORIAL } from '../historial.data';
import { User } from "../../models/user.model";

@IonicPage()
@Component({
  selector: 'page-tarjetas',
  templateUrl: 'tarjetas.html',
})
export class TarjetasPage {
  public tarjetas: any[];
  public token: string;
  public identity: User;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public cardProvider: CardsProvider
  ){
    this.tarjetas = [{}];
    console.log(this.tarjetas);
    this.token = localStorage.getItem('token');
    this.identity = JSON.parse(localStorage.getItem('identity'));
    this.getCards();
  }
  
  getCards(){  
    this.cardProvider.getCards(this.identity.id_openpay).subscribe(
      response => {
        if(!response['cards']){
          console.log("No hay tarjetas");
        }else{
          this.tarjetas = response['cards'];
          console.log(response['cards']);

        }
      }, error=>{
        var error = <any> error;
        console.log(error);
      }
    );
  }
  
  addTarjeta(){
    this.navCtrl.push(AddTarjetaPage);
  }
}
