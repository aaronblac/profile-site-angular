import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDevSectionComponent } from './game-dev-section.component';

describe('GameDevSectionComponent', () => {
  let component: GameDevSectionComponent;
  let fixture: ComponentFixture<GameDevSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameDevSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDevSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
