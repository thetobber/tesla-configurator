import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TeslaFormService } from '../../services/tesla-form.service';

@Component({
  selector: 'tesla-form',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgClass],
  templateUrl: './tesla-form.component.html',
  host: { class: 'block' },
})
export class TeslaFormComponent {
  modelFormValid = this.teslaFormService.modelFormValid;
  configFormValid = this.teslaFormService.configFormValid;
  imgUrl = this.teslaFormService.imgUrl;

  constructor(private teslaFormService: TeslaFormService) {}
}
