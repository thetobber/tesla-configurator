import { Routes } from '@angular/router';
import { ConfigStepComponent } from './components/tesla-form/config-step/config-step.component';
import { ModelStepComponent } from './components/tesla-form/model-step/model-step.component';
import { SummaryStepComponent } from './components/tesla-form/summary-step/summary-step.component';
import { TeslaFormComponent } from './components/tesla-form/tesla-form.component';
import { configStepGuard } from './guards/config-step.guard';
import { TeslaFormService } from './services/tesla-form.service';
import { summaryStepGuard } from './guards/summary-step.guard';

export const routes: Routes = [
  {
    path: '',
    component: TeslaFormComponent,
    providers: [TeslaFormService],
    children: [
      {
        path: '',
        component: ModelStepComponent,
      },
      {
        path: 'config',
        component: ConfigStepComponent,
        canActivate: [configStepGuard],
      },
      {
        path: 'summary',
        component: SummaryStepComponent,
        canActivate: [summaryStepGuard],
      },
    ],
  },
];
