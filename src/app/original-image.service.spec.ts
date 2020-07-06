import { TestBed } from '@angular/core/testing';

import { OriginalImageService } from './original-image.service';

describe('OriginalImageService', () => {
  let service: OriginalImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OriginalImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
