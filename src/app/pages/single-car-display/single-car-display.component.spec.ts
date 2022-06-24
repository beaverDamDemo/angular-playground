import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCarDisplayComponent } from './single-car-display.component';

describe('SingleCarDisplayComponent', () => {
  let component: SingleCarDisplayComponent;
  let fixture: ComponentFixture<SingleCarDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCarDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCarDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
