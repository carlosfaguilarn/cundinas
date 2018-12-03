import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user.model";
import { UserProvider } from "../../providers/user";
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  public user: User;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public userProvider: UserProvider,
    public alertCtrl: AlertController
  ) {
    this.user = new User('','','','','','','','Cliente','');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  onSubmit(){
    this.userProvider.register(this.user).subscribe(
      response => {
        if(!response['user']){
          console.log(response['user']);
          this.showPrompt('Información','No se registró al usuario');
        }else{
          this.showPrompt('Información','Usuario registrado correctamente');
        }
      },
      error => {
          var errorMessage = <any> error;
          if(errorMessage != null) this.showPrompt('Error', JSON.stringify(errorMessage));
      }
    );
  }
  showPrompt(title:string, message:string) {
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
