import { CurrencyPipe } from '@angular/common';
import { Component, Signal } from '@angular/core';
import { TeslaFormService } from '../../services/tesla-form.service';
import { TeslaColor } from '../../types/tesla-color.type';
import { TeslaConfig } from '../../types/tesla-config.type';
import { TeslaModel } from '../../types/tesla-model.type';

type Step1FormValues = {
  model: TeslaModel;
  color: TeslaColor;
};

type Step2FormValues = {
  config: TeslaConfig;
  towHitch: boolean;
  yoke: boolean;
};

@Component({
  selector: 'tesla-form-step-3',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './tesla-form-step-3.component.html',
  host: { class: 'block' },
})
export class TeslaFormStep3Component {
  modelFormValues = this.teslaFormService.modelFormValues as Signal<Step1FormValues>;
  configFormValues = this.teslaFormService.configFormValues as Signal<Step2FormValues>;
  totalPrice = this.teslaFormService.totalPrice;

  constructor(private teslaFormService: TeslaFormService) {}
}
