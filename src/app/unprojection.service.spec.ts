import { TestBed } from '@angular/core/testing';

import { UnprojectionService } from './unprojection.service';

describe('UnprojectionService', () => {
  let service: UnprojectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnprojectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
