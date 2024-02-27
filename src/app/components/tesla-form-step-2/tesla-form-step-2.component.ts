import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TeslaFormService } from '../../services/tesla-form.service';

@Component({
  selector: 'tesla-form-step-2',
  standalone: true,
  imports: [ReactiveFormsModule, CurrencyPipe],
  templateUrl: './tesla-form-step-2.component.html',
  host: { class: 'block' },
})
export class TeslaFormStep2Component {
  configForm = this.teslaFormService.configForm;
  configFormValues = this.teslaFormService.configFormValues;

  options = this.teslaFormService.options;

  constructor(private teslaFormService: TeslaFormService) {}
}
