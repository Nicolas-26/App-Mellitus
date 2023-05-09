import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroFinalizarPage } from './cadastro-finalizar.page';

describe('CadastroFinalizarPage', () => {
  let component: CadastroFinalizarPage;
  let fixture: ComponentFixture<CadastroFinalizarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastroFinalizarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
