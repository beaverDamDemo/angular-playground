import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajAvtoComponent } from './dodaj-avto.component';

describe('DodajAvtoComponent', () => {
  let component: DodajAvtoComponent;
  let fixture: ComponentFixture<DodajAvtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodajAvtoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajAvtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
