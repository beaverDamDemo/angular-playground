import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Su85Component } from './su85.component';

describe('Su85Component', () => {
  let component: Su85Component;
  let fixture: ComponentFixture<Su85Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Su85Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Su85Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
