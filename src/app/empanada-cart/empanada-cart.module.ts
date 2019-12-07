import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpanadaCartPageRoutingModule } from './empanada-cart-routing.module';

import { EmpanadaCartPage } from './empanada-cart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpanadaCartPageRoutingModule
  ],
  declarations: [EmpanadaCartPage]
})
export class EmpanadaCartPageModule {}
