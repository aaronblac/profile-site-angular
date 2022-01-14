import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDevSectionComponent } from './web-dev-section.component';

describe('WebDevSectionComponent', () => {
  let component: WebDevSectionComponent;
  let fixture: ComponentFixture<WebDevSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebDevSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDevSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
