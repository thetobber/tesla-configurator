import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TeslaFormService } from '../../../services/tesla-form.service';

@Component({
  selector: 'config-step',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './config-step.component.html',
})
export class ConfigStepComponent {
  form = this.teslaFormService.configForm;
  options = this.teslaFormService.options;

  constructor(private teslaFormService: TeslaFormService) {}
}
