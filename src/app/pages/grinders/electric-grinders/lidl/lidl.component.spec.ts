import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LidlComponent } from './lidl.component';

describe('LidlComponent', () => {
  let component: LidlComponent;
  let fixture: ComponentFixture<LidlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LidlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LidlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
