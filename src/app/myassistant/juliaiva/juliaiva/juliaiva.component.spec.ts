import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuliaivaComponent } from './juliaiva.component';

describe('JuliaivaComponent', () => {
  let component: JuliaivaComponent;
  let fixture: ComponentFixture<JuliaivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuliaivaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuliaivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
