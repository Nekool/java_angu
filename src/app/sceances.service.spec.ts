import { TestBed } from '@angular/core/testing';

import { SceancesService } from './sceances.service';

describe('SceancesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SceancesService = TestBed.get(SceancesService);
    expect(service).toBeTruthy();
  });
});
