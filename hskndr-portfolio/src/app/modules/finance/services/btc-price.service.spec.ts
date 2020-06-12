import { TestBed } from '@angular/core/testing';

import { BtcPriceService } from './btc-price.service';

describe('BtcPriceService', () => {
  let service: BtcPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BtcPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
