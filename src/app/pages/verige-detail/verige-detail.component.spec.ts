import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerigeDetailComponent } from './verige-detail.component';

describe('VerigeDetailComponent', () => {
  let component: VerigeDetailComponent;
  let fixture: ComponentFixture<VerigeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerigeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerigeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
