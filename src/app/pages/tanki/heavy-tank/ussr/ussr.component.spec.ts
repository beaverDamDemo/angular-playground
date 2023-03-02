import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UssrComponent } from './ussr.component';

describe('UssrComponent', () => {
  let component: UssrComponent;
  let fixture: ComponentFixture<UssrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UssrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UssrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
