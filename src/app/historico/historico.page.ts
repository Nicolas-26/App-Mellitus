import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
})
export class HistoricoPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  adm(){
    this.navCtrl.navigateBack('administrar-glicemia')
  }

  home(){
    this.navCtrl.navigateBack('home-principal')
  }

}
