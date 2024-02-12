import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterAuteurComponent } from './ajouter-auteur.component';

describe('AjouterAuteurComponent', () => {
  let component: AjouterAuteurComponent;
  let fixture: ComponentFixture<AjouterAuteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterAuteurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjouterAuteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
