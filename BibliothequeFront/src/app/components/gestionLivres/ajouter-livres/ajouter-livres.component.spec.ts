import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterLivresComponent } from './ajouter-livres.component';

describe('AjouterLivresComponent', () => {
  let component: AjouterLivresComponent;
  let fixture: ComponentFixture<AjouterLivresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterLivresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjouterLivresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
