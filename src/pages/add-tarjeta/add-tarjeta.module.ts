import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTarjetaPage } from './add-tarjeta';

@NgModule({
  declarations: [
    AddTarjetaPage,
  ],
  imports: [
    IonicPageModule.forChild(AddTarjetaPage),
  ],
})
export class AddTarjetaPageModule {}
