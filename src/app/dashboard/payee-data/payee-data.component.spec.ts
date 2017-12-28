import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayeeDataComponent } from './payee-data.component';

describe('PayeeDataComponent', () => {
  let component: PayeeDataComponent;
  let fixture: ComponentFixture<PayeeDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayeeDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayeeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
