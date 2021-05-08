import { TestBed } from '@angular/core/testing';

import { ApiconnectService } from './apiconnect.service';

describe('ApiconnectService', () => {
  let service: ApiconnectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiconnectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
