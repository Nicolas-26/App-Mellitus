import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home-principal',
  templateUrl: './home-principal.page.html',
  styleUrls: ['./home-principal.page.scss'],
})
export class HomePrincipalPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  exercicios(){

  }

  receitas(){

  }

  Administrar(){
    this.navCtrl.navigateRoot('administrar-glicemia')
  }

  admMedicamentos(){
    this.navCtrl.navigateForward('medicamentos')
  }
}
