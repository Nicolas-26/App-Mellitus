import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro3',
  templateUrl: './cadastro3.page.html',
  styleUrls: ['./cadastro3.page.scss'],
})
export class Cadastro3Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  voltarParaNome(){
    this.navCtrl.navigateForward('cadastro2')
  }

  verificar(){
    this.navCtrl.navigateForward('cadastro-finalizar')
  }
}
