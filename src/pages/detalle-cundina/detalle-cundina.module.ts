import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleCundinaPage } from './detalle-cundina';

@NgModule({
  declarations: [
    DetalleCundinaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleCundinaPage),
  ],
})
export class DetalleCundinaPageModule {}
