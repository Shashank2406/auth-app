import { TestBed, inject } from '@angular/core/testing';

import { PipeeService } from './pipee.service';

describe('PipeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PipeeService]
    });
  });

  it('should ...', inject([PipeeService], (service: PipeeService) => {
    expect(service).toBeTruthy();
  }));
});
