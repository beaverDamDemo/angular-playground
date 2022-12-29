import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VVazahComponent } from './v-vazah.component';

describe('VVazahComponent', () => {
  let component: VVazahComponent;
  let fixture: ComponentFixture<VVazahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VVazahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VVazahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
