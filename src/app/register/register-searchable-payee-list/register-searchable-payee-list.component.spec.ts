import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSearchablePayeeListComponent } from './register-searchable-payee-list.component';

describe('RegisterSearchablePayeeListComponent', () => {
  let component: RegisterSearchablePayeeListComponent;
  let fixture: ComponentFixture<RegisterSearchablePayeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSearchablePayeeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSearchablePayeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
