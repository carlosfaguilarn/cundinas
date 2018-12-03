import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { UserProvider } from "../../providers/user";
import { User } from "../../models/user.model";
import { AddIntegrantePage } from "../index.pages";
import { Cundina } from "../../models/cundina.model";
import { CundinaProvider } from "../../providers/cundina";
 
@IonicPage()
@Component({
  selector: 'page-add-cundina',
  templateUrl: 'add-cundina.html',
})
export class AddCundinaPage { 
  public cundina: Cundina;
  public integrante: string;
  public integrantes: any[];
  public clientes: Array<User>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController,
    public userProvider: UserProvider,
    public cundinaProvider: CundinaProvider
  ) {
    console.log("Iniciando add page");
    this.cundina = new Cundina('','','','','','','','','','','','');
    this.integrantes = [];
  }  
  onSubmit(){ 
    console.log(this.cundina); 
    this.cundinaProvider.newCundina(this.cundina).subscribe(
      response => {
        if(!response['cundina']){
          this.showPrompt("Error","No se creó la cundina");
        }else{ 
          this.showPrompt("Información", "La cundina fue creada exitósamente")
        }
      }, error=>{
        var error = <any> error;
        console.log(error);
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
