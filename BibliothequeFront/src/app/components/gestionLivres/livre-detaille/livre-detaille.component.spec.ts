import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreDetailleComponent } from './livre-detaille.component';

describe('LivreDetailleComponent', () => {
  let component: LivreDetailleComponent;
  let fixture: ComponentFixture<LivreDetailleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivreDetailleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LivreDetailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
