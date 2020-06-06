import { TestBed } from '@angular/core/testing';

import { DatashareService } from './datashare.service';

describe('DatashareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatashareService = TestBed.get(DatashareService);
    expect(service).toBeTruthy();
  });
});
