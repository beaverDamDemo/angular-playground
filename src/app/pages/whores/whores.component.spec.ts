import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoresComponent } from './whores.component';

describe('WhoresComponent', () => {
  let component: WhoresComponent;
  let fixture: ComponentFixture<WhoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
