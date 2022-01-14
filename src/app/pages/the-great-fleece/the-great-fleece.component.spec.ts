import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheGreatFleeceComponent } from './the-great-fleece.component';

describe('TheGreatFleeceComponent', () => {
  let component: TheGreatFleeceComponent;
  let fixture: ComponentFixture<TheGreatFleeceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheGreatFleeceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheGreatFleeceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
