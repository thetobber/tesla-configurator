import { Routes } from '@angular/router';
import { TeslaFormStep1Component } from './components/tesla-form-step-1/tesla-form-step-1.component';
import { TeslaFormStep2Component } from './components/tesla-form-step-2/tesla-form-step-2.component';
import { TeslaFormStep3Component } from './components/tesla-form-step-3/tesla-form-step-3.component';
import { TeslaFormComponent } from './components/tesla-form/tesla-form.component';
import { step1Guard } from './guards/step-1.guard';
import { step2Guard } from './guards/step-2.guard';
import { TeslaFormService } from './services/tesla-form.service';

export const routes: Routes = [
  {
    path: '',
    component: TeslaFormComponent,
    providers: [TeslaFormService],
    children: [
      {
        path: '',
        component: TeslaFormStep1Component,
      },
      {
        path: 'step-2',
        component: TeslaFormStep2Component,
        canActivate: [step1Guard],
      },
      {
        path: 'step-3',
        component: TeslaFormStep3Component,
        canActivate: [step2Guard],
      },
    ],
  },
];
