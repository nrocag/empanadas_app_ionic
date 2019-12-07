import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpanadaDetailPage } from './empanada-detail.page';

const routes: Routes = [
  {
    path: '',
    component: EmpanadaDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpanadaDetailPageRoutingModule {}
