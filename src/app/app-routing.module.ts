import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const img1 = '../assets/img/Artboard-1.jpeg'
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'home-principal',
    loadChildren: () => import('./home-principal/home-principal.module').then( m => m.HomePrincipalPageModule)
  },  {
    path: 'cadastro2',
    loadChildren: () => import('./cadastro2/cadastro2.module').then( m => m.Cadastro2PageModule)
  },
  {
    path: 'cadastro3',
    loadChildren: () => import('./cadastro3/cadastro3.module').then( m => m.Cadastro3PageModule)
  },
  {
    path: 'cadastro-finalizar',
    loadChildren: () => import('./cadastro-finalizar/cadastro-finalizar.module').then( m => m.CadastroFinalizarPageModule)
  },
  {
    path: 'administrar-glicemia',
    loadChildren: () => import('./administrar-glicemia/administrar-glicemia.module').then( m => m.AdministrarGlicemiaPageModule)
  },
  {
    path: 'historico',
    loadChildren: () => import('./historico/historico.module').then( m => m.HistoricoPageModule)
  },
  {
    path: 'medicamentos',
    loadChildren: () => import('./medicamentos/medicamentos.module').then( m => m.MedicamentosPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
