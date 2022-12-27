import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KacijaComponent } from './kacija.component';

describe('KacijaComponent', () => {
  let component: KacijaComponent;
  let fixture: ComponentFixture<KacijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KacijaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KacijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
