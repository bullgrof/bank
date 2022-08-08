import { TestBed } from '@angular/core/testing';

import { EnrollsService } from './enrolls.service';

describe('EnrollsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnrollsService = TestBed.get(EnrollsService);
    expect(service).toBeTruthy();
  });
});
