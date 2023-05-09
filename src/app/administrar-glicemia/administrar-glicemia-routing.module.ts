import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrarGlicemiaPage } from './administrar-glicemia.page';

const routes: Routes = [
  {
    path: '',
    component: AdministrarGlicemiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrarGlicemiaPageRoutingModule {}
