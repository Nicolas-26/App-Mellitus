import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-administrar-glicemia',
  templateUrl: './administrar-glicemia.page.html',
  styleUrls: ['./administrar-glicemia.page.scss'],
})
export class AdministrarGlicemiaPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  voltarHome(){
    this.navCtrl.navigateBack('home-principal')
  }

  historico(){
    this.navCtrl.navigateForward('historico')
  }

  Salvar(){

  }

  home(){
    this.navCtrl.navigateBack('home-principal')
  }
}
