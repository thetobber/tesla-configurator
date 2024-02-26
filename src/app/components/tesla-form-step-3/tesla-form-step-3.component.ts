import { Component } from '@angular/core';
import { TeslaFormService } from '../../services/tesla-form.service';

@Component({
  selector: 'tesla-form-step-3',
  standalone: true,
  imports: [],
  templateUrl: './tesla-form-step-3.component.html',
  host: { class: 'block' },
})
export class TeslaFormStep3Component {
  form = this.teslaFormService.configForm;
  options = this.teslaFormService.options;

  constructor(private teslaFormService: TeslaFormService) {}
}
