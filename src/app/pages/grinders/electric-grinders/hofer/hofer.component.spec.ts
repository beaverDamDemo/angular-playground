import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoferComponent } from './hofer.component';

describe('HoferComponent', () => {
  let component: HoferComponent;
  let fixture: ComponentFixture<HoferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
