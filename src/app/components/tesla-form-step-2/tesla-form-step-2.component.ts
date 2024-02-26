import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TeslaFormService } from '../../services/tesla-form.service';

@Component({
  selector: 'tesla-form-step-2',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './tesla-form-step-2.component.html',
})
export class TeslaFormStep2Component {
  form = this.teslaFormService.configForm;
  options = this.teslaFormService.options;

  constructor(private teslaFormService: TeslaFormService) {}
}
