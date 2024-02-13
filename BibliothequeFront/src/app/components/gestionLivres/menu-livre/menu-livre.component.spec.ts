import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLivreComponent } from './menu-livre.component';

describe('MenuLivreComponent', () => {
  let component: MenuLivreComponent;
  let fixture: ComponentFixture<MenuLivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuLivreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
