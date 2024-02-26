import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TeslaFormService } from '../services/tesla-form.service';

export const summaryStepGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const teslaFormService = inject(TeslaFormService);

  if (!teslaFormService.modelForm.valid) {
    return router.parseUrl('');
  }

  if (!teslaFormService.configForm.valid) {
    return router.parseUrl('config');
  }

  return true;
};
