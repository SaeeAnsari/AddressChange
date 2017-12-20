import { TestBed, inject } from '@angular/core/testing';

import { PayeeService } from './payee.service';

describe('PayeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PayeeService]
    });
  });

  it('should be created', inject([PayeeService], (service: PayeeService) => {
    expect(service).toBeTruthy();
  }));
});
