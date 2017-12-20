import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayeeItemComponent } from './payee-item.component';

describe('PayeeItemComponent', () => {
  let component: PayeeItemComponent;
  let fixture: ComponentFixture<PayeeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayeeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayeeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
