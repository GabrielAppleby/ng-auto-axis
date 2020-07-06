import { TestBed } from '@angular/core/testing';

import { LabeledPointService } from './labeled-point.service';

describe('LabeledPointServiceService', () => {
  let service: LabeledPointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabeledPointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
