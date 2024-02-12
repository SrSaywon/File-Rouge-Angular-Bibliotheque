import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheLivreComponent } from './recherche-livre.component';

describe('RechercheLivreComponent', () => {
  let component: RechercheLivreComponent;
  let fixture: ComponentFixture<RechercheLivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RechercheLivreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RechercheLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
