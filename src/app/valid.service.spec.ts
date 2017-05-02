import { TestBed, inject } from '@angular/core/testing';

import { ValidService } from './valid.service';

describe('ValidService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidService]
    });
  });

  it('should ...', inject([ValidService], (service: ValidService) => {
    expect(service).toBeTruthy();
  }));
});
