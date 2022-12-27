import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpisekComponent } from './spisek.component';

describe('SpisekComponent', () => {
  let component: SpisekComponent;
  let fixture: ComponentFixture<SpisekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpisekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpisekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
