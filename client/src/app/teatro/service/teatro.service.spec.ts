import { TestBed } from '@angular/core/testing';

import { TeatroService } from './teatro.service';

describe('TeatroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeatroService = TestBed.get(TeatroService);
    expect(service).toBeTruthy();
  });
});
