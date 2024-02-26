import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { configStepGuard } from './config-step.guard';

describe('configStepGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => configStepGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
