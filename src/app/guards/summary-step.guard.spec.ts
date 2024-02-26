import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { summaryStepGuard } from './summary-step.guard';

describe('summaryStepGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => summaryStepGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
