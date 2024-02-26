import { TestBed } from '@angular/core/testing';

import { SessionParamsService } from './session-params.service';

describe('SessionParamsService', () => {
  let service: SessionParamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionParamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
