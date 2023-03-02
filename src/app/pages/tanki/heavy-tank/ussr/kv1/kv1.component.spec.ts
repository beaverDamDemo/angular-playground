import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kv1Component } from './kv1.component';

describe('Kv1Component', () => {
  let component: Kv1Component;
  let fixture: ComponentFixture<Kv1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kv1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
