import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CesenComponent } from './cesen.component';

describe('CesenComponent', () => {
  let component: CesenComponent;
  let fixture: ComponentFixture<CesenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CesenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CesenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
