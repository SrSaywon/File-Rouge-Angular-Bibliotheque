import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerLecteurComponent } from './supprimer-lecteur.component';

describe('SupprimerLecteurComponent', () => {
  let component: SupprimerLecteurComponent;
  let fixture: ComponentFixture<SupprimerLecteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupprimerLecteurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupprimerLecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
