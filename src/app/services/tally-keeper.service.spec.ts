import { TestBed } from '@angular/core/testing';

import { TallyKeeperService } from './tally-keeper.service';

describe('TallyKeeperService', () => {
  let service: TallyKeeperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TallyKeeperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
