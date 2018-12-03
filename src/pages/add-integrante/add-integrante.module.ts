import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddIntegrantePage } from './add-integrante';

@NgModule({
  declarations: [
    AddIntegrantePage,
  ],
  imports: [
    IonicPageModule.forChild(AddIntegrantePage),
  ],
})
export class AddIntegrantePageModule {}
