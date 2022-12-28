import { TestBed } from '@angular/core/testing';

import { OljkiceService } from './oljkice.service';

describe('OljkiceService', () => {
  let service: OljkiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OljkiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
