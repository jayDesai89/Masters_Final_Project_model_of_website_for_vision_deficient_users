import { TestBed } from '@angular/core/testing';

import { WindowserviceService } from './windowservice.service';

describe('WindowserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WindowserviceService = TestBed.get(WindowserviceService);
    expect(service).toBeTruthy();
  });
});
