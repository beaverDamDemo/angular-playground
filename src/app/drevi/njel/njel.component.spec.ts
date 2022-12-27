import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NjelComponent } from './njel.component';

describe('NjelComponent', () => {
  let component: NjelComponent;
  let fixture: ComponentFixture<NjelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NjelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NjelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
