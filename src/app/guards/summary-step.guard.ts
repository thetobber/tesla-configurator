import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TeslaFormService } from '../services/tesla-form.service';

export const summaryStepGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const teslaFormService = inject(TeslaFormService);

  if (!teslaFormService.modelFormValid()) {
    return router.parseUrl('/');
  }

  if (!teslaFormService.configFormValid()) {
    return router.parseUrl('/step-2');
  }

  return true;
};
