import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyassistantComponent } from './myassistant.component';

describe('MyassistantComponent', () => {
  let component: MyassistantComponent;
  let fixture: ComponentFixture<MyassistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyassistantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyassistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
