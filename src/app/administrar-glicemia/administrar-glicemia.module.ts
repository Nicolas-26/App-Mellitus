import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrarGlicemiaPageRoutingModule } from './administrar-glicemia-routing.module';

import { AdministrarGlicemiaPage } from './administrar-glicemia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministrarGlicemiaPageRoutingModule
  ],
  declarations: [AdministrarGlicemiaPage]
})
export class AdministrarGlicemiaPageModule {}
