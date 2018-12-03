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
  public card_num: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController,
    public cardProvider: CardsProvider
  ) {
    console.log("Iniciando add tarjeta");
    this.tarjeta = new Card('','','','','');
    this.card_num = {n1:'',n2:'',n3:'',n4:''};
  }  
  onSubmit(){ 
    this.tarjeta.card_number = this.card_num.n1+this.card_num.n2+this.card_num.n3+this.card_num.n4;
    console.log(this.tarjeta);
    this.cardProvider.newCard(this.tarjeta).subscribe(
      response => {
        if(!response['card']){
          this.showPrompt("Error", 'No se agregó la tarjeta');
        }else{ 
          this.showPrompt("Tarjeta agregada exitósamente");
        }
      },
      error => {
          var errorMessage = <any> error;
          if(errorMessage != null){ 
            console.log(JSON.stringify(errorMessage));
            this.showPrompt('Error', 'Error con el servidor');
          }
      }
    );
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
