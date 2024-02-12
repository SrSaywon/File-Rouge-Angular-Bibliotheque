import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierLivreComponent } from './modifier-livre.component';

describe('ModifierLivreComponent', () => {
  let component: ModifierLivreComponent;
  let fixture: ComponentFixture<ModifierLivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierLivreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifierLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
