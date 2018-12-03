import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCundinaPage } from './add-cundina';

@NgModule({
  declarations: [
    AddCundinaPage,
  ],
  imports: [
    IonicPageModule.forChild(AddCundinaPage),
  ],
})
export class AddCundinaPageModule {}