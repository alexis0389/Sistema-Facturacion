import { TestBed } from '@angular/core/testing';

import { BillsDetailsService } from './bills-details.service';

describe('BillsDetailsService', () => {
  let service: BillsDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillsDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
