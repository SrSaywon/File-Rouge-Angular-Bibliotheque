import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierAuteurComponent } from './modifier-auteur.component';

describe('ModifierAuteurComponent', () => {
  let component: ModifierAuteurComponent;
  let fixture: ComponentFixture<ModifierAuteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierAuteurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifierAuteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
