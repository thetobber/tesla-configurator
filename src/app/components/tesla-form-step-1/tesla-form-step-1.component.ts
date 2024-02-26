import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TeslaFormService } from '../../services/tesla-form.service';

@Component({
  selector: 'tesla-form-step-1',
  standalone: true,
  imports: [AsyncPipe, ReactiveFormsModule],
  templateUrl: './tesla-form-step-1.component.html',
})
export class TeslaFormStep1Component {
  form = this.teslaFormService.modelForm;
  models = this.teslaFormService.models;
  colors = this.teslaFormService.colors;

  constructor(private teslaFormService: TeslaFormService) {}
}
