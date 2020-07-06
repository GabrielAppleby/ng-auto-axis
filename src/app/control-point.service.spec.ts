import { TestBed } from '@angular/core/testing';

import { ControlPointService } from './control-point.service';

describe('ControlPointService', () => {
  let service: ControlPointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlPointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
