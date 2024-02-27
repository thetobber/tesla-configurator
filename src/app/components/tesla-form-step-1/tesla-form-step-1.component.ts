import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TeslaFormService } from '../../services/tesla-form.service';

@Component({
  selector: 'tesla-form-step-1',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './tesla-form-step-1.component.html',
  host: { class: 'block' },
})
export class TeslaFormStep1Component {
  form = this.teslaFormService.modelForm;
  models = this.teslaFormService.models;
  colors = this.teslaFormService.colors;

  constructor(private teslaFormService: TeslaFormService) {}
}
