import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Card } from "../../models/card.model";
import { CardsProvider } from "../../providers/cards";
 

@IonicPage()
@Component({
  selector: 'page-add-tarjeta',
  templateUrl: 'add-tarjeta.html',
})
export class AddTarjetaPage {
  public tarjeta: Card;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController,
    public cardPrivider: CardsProvider
  ) {
    console.log("Iniciando add tarjeta");
    this.tarjeta = new Card('','','','','');
  }  
  onSubmit(){ 
    console.log(this.tarjeta);
    
    //this.showPrompt("Tarjeta agregada exitósamente");
  }
  showPrompt(title:string, message: string = null) {
    const prompt = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
}
