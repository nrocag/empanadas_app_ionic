import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpanadaCartPage } from './empanada-cart.page';

const routes: Routes = [
  {
    path: '',
    component: EmpanadaCartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpanadaCartPageRoutingModule {}
