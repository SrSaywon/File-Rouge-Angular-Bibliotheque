import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerLivreComponent } from './supprimer-livre.component';

describe('SupprimerLivreComponent', () => {
  let component: SupprimerLivreComponent;
  let fixture: ComponentFixture<SupprimerLivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupprimerLivreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupprimerLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
