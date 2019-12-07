import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpanadaDetailPageRoutingModule } from './empanada-detail-routing.module';

import { EmpanadaDetailPage } from './empanada-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpanadaDetailPageRoutingModule
  ],
  declarations: [EmpanadaDetailPage]
})
export class EmpanadaDetailPageModule {}
