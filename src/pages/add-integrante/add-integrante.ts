import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user.model";
import { UserProvider } from "../../providers/user";
import { CundinaProvider } from "../../providers/cundina";

@IonicPage()
@Component({
  selector: 'page-add-integrante',
  templateUrl: 'add-integrante.html',
})
export class AddIntegrantePage {
  public clientes: Array<User>;
  public busqueda: string = "";
  public cundina_id: string;

  constructor(
    public userProvider: UserProvider, 
    public navParams: NavParams, 
    public cundinaProvider: CundinaProvider){
    this.getClients();
    this.cundina_id = this.navParams.get('cundina_id'); 
  }
  submit(cliente_id){
    let data = {cundina: this.cundina_id, user: cliente_id};
    console.log(data);

    this.cundinaProvider.addIntegrante(data).subscribe(
      response=>{
        if(!response['userCundina']){
          console.log('Error al guardar');
        }else{ 
          console.log(response['userCundina']);
        }
      },error=>{
        console.log('Error con el servidor');
      }
    );
  }

  getClients(){
    this.userProvider.getClients().subscribe(
      response=>{
        if(!response['users']){
          console.log('No hay clientes');
        }else{
          this.clientes = response['users'];
          console.log(this.clientes);
        }
      },error=>{
        console.log('Error', 'Error con el servidor');
      }
    );
  }
}
