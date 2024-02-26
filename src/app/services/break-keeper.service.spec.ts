import { TestBed } from '@angular/core/testing';

import { BreakKeeperService } from './break-keeper.service';

describe('BreakKeeperService', () => {
  let service: BreakKeeperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreakKeeperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
