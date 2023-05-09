import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-finalizar',
  templateUrl: './cadastro-finalizar.page.html',
  styleUrls: ['./cadastro-finalizar.page.scss'],
})
export class CadastroFinalizarPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  voltarParaCodigo(){
    this.navCtrl.navigateForward('cadastro3')
  }

  PaginaInicial(){
    this.navCtrl.navigateForward('home-principal')
  }
}
