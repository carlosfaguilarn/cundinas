import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-add-cundina',
  templateUrl: 'add-cundina.html',
})
export class AddCundinaPage { 
  public cundina: any;
  public integrante: string;
  public integrantes: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    console.log("Iniciando add page");
    this.cundina = {
      "titulo" : "",
      "inicio":"",
      "fin":"",
      "periodo":"",
      "cantidad":"",
      "integrantes":""
    }
    this.integrantes = [];
  }  
  onSubmit(){
    //Enviar datos de cundina por Web services
    this.cundina.integrantes = this.integrantes;
    console.log(this.cundina);
    this.showPrompt("Cundina creada exitósamente");
  }
  agregarIntegrante(){
    this.integrantes.push(this.integrante);
    this.showPrompt("Integrante añadido correctamente");
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
