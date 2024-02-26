import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TeslaFormService } from '../../../services/tesla-form.service';

@Component({
  selector: 'model-step',
  standalone: true,
  imports: [AsyncPipe, ReactiveFormsModule],
  templateUrl: './model-step.component.html',
})
export class ModelStepComponent {
  form = this.teslaFormService.modelForm;
  models = this.teslaFormService.models;
  colors = this.teslaFormService.colors;

  constructor(private teslaFormService: TeslaFormService) {}
}
