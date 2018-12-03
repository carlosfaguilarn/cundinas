import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CUNDINAS } from "../cundinas.data";
import { DetalleCundinaPage, AddCundinaPage, AddIntegrantePage } from "../index.pages";
import { User } from "../../models/user.model";
import { Cundina } from "../../models/cundina.model";
import { CundinaProvider } from "../../providers/cundina";

@IonicPage()
@Component({
  selector: 'page-cundinas',
  templateUrl: 'cundinas.html'
})
export class CundinasPage {
  public cundinas: any[];
  public identity: User;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public cundinaProvider: CundinaProvider
  ) {
    this.identity = JSON.parse(localStorage.getItem('identity'));
    this.getCundinas();
  }  

  getCundinas(){  
    this.cundinaProvider.getCundinas().subscribe(
      response => {
        if(!response['cundinas']){
          console.log("No hay cundinas");
        }else{
          this.cundinas = response['cundinas'];
          console.log(response['cundinas']);
        }
      }, error=>{
        var error = <any> error;
        console.log(error);
      }
    );
  }

  agregarIntegrante(cundina){
    this.navCtrl.push(AddIntegrantePage, {'cundina_id':cundina._id});
  }

  abrirDetalle(cundina: any){
    console.log(cundina);
    this.navCtrl.push(DetalleCundinaPage, {'cundina':cundina});
  }
  addCundina(){
    this.navCtrl.push(AddCundinaPage);
  }
}