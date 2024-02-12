import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiderEmpruntComponent } from './valider-emprunt.component';

describe('ValiderEmpruntComponent', () => {
  let component: ValiderEmpruntComponent;
  let fixture: ComponentFixture<ValiderEmpruntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValiderEmpruntComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValiderEmpruntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
