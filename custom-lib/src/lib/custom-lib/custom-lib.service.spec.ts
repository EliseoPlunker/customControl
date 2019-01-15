import { TestBed } from '@angular/core/testing';

import { CustomLibService } from './custom-lib.service';

describe('CustomLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomLibService = TestBed.get(CustomLibService);
    expect(service).toBeTruthy();
  });
});
