import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsFromApiComponent } from './cars-from-api.component';

describe('CarsFromApiComponent', () => {
  let component: CarsFromApiComponent;
  let fixture: ComponentFixture<CarsFromApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsFromApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsFromApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
