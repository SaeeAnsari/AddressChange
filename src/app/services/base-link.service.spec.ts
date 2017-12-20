import { TestBed, inject } from '@angular/core/testing';

import { BaseLinkService } from './base-link.service';

describe('BaseLinkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseLinkService]
    });
  });

  it('should be created', inject([BaseLinkService], (service: BaseLinkService) => {
    expect(service).toBeTruthy();
  }));
});
