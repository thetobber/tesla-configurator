import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'tesla-form',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './tesla-form.component.html',
  host: { class: 'block' },
})
export class TeslaFormComponent {}
