import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TeslaFormService } from '../services/tesla-form.service';

export const configStepGuard: CanActivateFn = () => {
  const router = inject(Router);
  const teslaFormService = inject(TeslaFormService);

  if (!teslaFormService.modelForm.valid) {
    return router.parseUrl('/step-1');
  }

  return true;
};
