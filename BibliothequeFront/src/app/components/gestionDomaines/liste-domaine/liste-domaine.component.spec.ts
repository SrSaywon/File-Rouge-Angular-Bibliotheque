import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDomaineComponent } from './liste-domaine.component';

describe('ListeDomaineComponent', () => {
  let component: ListeDomaineComponent;
  let fixture: ComponentFixture<ListeDomaineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeDomaineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeDomaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
