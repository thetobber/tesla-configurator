import { TestBed } from '@angular/core/testing';

import { TeslaFormService } from './tesla-form.service';

describe('TeslaFormService', () => {
  let service: TeslaFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeslaFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
