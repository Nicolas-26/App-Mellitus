import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdministrarGlicemiaPage } from './administrar-glicemia.page';

describe('AdministrarGlicemiaPage', () => {
  let component: AdministrarGlicemiaPage;
  let fixture: ComponentFixture<AdministrarGlicemiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdministrarGlicemiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
