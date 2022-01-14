import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformHustleComponent } from './platform-hustle.component';

describe('PlatformHustleComponent', () => {
  let component: PlatformHustleComponent;
  let fixture: ComponentFixture<PlatformHustleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatformHustleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformHustleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
