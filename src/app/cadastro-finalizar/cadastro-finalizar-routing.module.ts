import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroFinalizarPage } from './cadastro-finalizar.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroFinalizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroFinalizarPageRoutingModule {}
