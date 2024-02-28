import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TeslaFormService } from '../services/tesla-form.service';

export const step1Guard: CanActivateFn = () => {
  const router = inject(Router);
  const teslaFormService = inject(TeslaFormService);

  if (!teslaFormService.modelFormValid()) {
    return router.parseUrl('/');
  }

  return true;
};
