import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAddressComponent } from './register-address.component';

describe('RegisterAddressComponent', () => {
  let component: RegisterAddressComponent;
  let fixture: ComponentFixture<RegisterAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
