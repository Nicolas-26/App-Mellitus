import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroFinalizarPageRoutingModule } from './cadastro-finalizar-routing.module';

import { CadastroFinalizarPage } from './cadastro-finalizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroFinalizarPageRoutingModule
  ],
  declarations: [CadastroFinalizarPage]
})
export class CadastroFinalizarPageModule {}
