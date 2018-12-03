import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { InicioPage, CundinasPage, HistorialPage, TarjetasPage, NotificacionesPage } from "../index.pages";
import { CUNDINAS } from "../cundinas.data";
import { HISTORIAL } from "../historial.data";
import { TARJETAS } from "../tarjetas.data";

import { User } from "../../models/user.model";


@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage { 
  tab1: any;
  tab2: any;
  tab3: any;
  tab4: any;
  tab5: any;
  total_cundinas: number;
  total_historial: number;
  total_tarjetas: number;
  total_users: number;
  public user: User;
  constructor() {
    this.user = JSON.parse(localStorage.getItem('identity'));
    this.total_cundinas = CUNDINAS.length;
    this.total_historial = HISTORIAL.length;
    this.total_tarjetas = TARJETAS.length;
    this.total_users = 10;
    this.tab1 = InicioPage;
    this.tab2 = CundinasPage;
    this.tab3 = HistorialPage;
    this.tab4 = TarjetasPage; 
    this.tab5 = NotificacionesPage;

  } 
}