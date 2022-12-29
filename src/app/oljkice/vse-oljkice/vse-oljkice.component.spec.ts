import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VseOljkiceComponent } from './vse-oljkice.component';

describe('VseOljkiceComponent', () => {
  let component: VseOljkiceComponent;
  let fixture: ComponentFixture<VseOljkiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VseOljkiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VseOljkiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
