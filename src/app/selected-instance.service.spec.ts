import { TestBed } from '@angular/core/testing';

import { SelectedInstanceService } from './selected-instance.service';

describe('SelectedInstanceService', () => {
  let service: SelectedInstanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedInstanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
