import { TestBed } from '@angular/core/testing';

import { ButtonMoverService } from './button-mover.service';

describe('ButtonMoverService', () => {
  let service: ButtonMoverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButtonMoverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
