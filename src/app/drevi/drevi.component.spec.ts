import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreviComponent } from './drevi.component';

describe('DreviComponent', () => {
  let component: DreviComponent;
  let fixture: ComponentFixture<DreviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DreviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DreviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
