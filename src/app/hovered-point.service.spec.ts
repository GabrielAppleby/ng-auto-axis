import { TestBed } from '@angular/core/testing';

import { HoveredPointService } from './hovered-point.service';

describe('HoveredPointService', () => {
  let service: HoveredPointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoveredPointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
