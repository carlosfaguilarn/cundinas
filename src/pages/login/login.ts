import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MenuPage } from "../index.pages";
import { AlertController } from 'ionic-angular';
import { UserProvider } from "../../providers/user";
import { User } from "../../models/user.model";
import { RegistroPage } from "../index.pages";
import { InicioPage } from '../inicio/inicio';

declare const window: any;

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public email: string;
  public password: string; 
  public user : any;
  public identity: User;

  constructor(
    public navCtrl: NavController, 
    public alertCtrl: AlertController,
    public userProvider: UserProvider
  ){   
    this.user = {email : "carlosf.aguilarn@gmail.com", password: "123456"};
    this.identity = new User('','','','','','','','Cliente','');
  }  
 
  onSubmit(){ 
    console.log(this.user);
    this.userProvider.signup(this.user).subscribe(
      response => {
        if(!response['user']){
          this.showPrompt("Error", 'No se puede acceder');
        }else{ 
          this.identity = response['user']; 
          localStorage.setItem('identity', JSON.stringify(this.identity));
          localStorage.setItem('token', (response['token']));
          this.navCtrl.push(MenuPage);
        }
      },
      error => {
          var errorMessage = <any> error;
          if(errorMessage != null){ 
            console.log(JSON.stringify(errorMessage));
            this.showPrompt('Error', 'No se puede ingresar');
          }
      }
    );
    
  }
  registrar(){
    this.navCtrl.push(RegistroPage);
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
  login(){
    // Loguear al usuario y conseguir sus datos
    this.userProvider.getUsers().subscribe(
        response => {
            //this.identity = response.user;
            console.log(this.identity);
            if(!this.identity){
                alert('El usuario no se ha logueado correctamente');
            }else{
                // Guardar al user en el local storage
                localStorage.setItem('identity', JSON.stringify(this.identity));
            }
        },
        error => {
            var errorMessage = <any> error;
            if(errorMessage != null){ 
                alert(errorMessage); 
            }
        }
    );
  }
}
