import { TestBed } from '@angular/core/testing';

import { HandleroutingService } from './handlerouting.service';

describe('HandleroutingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HandleroutingService = TestBed.get(HandleroutingService);
    expect(service).toBeTruthy();
  });
});
