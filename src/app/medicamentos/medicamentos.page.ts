import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.page.html',
  styleUrls: ['./medicamentos.page.scss'],
})
export class MedicamentosPage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  voltarHome(){
    this.nav.navigateBack('home-principal')
  }
}
