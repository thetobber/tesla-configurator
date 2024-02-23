import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  template: ` <h1>Hello from {{ name }}!</h1> `,
})
export class AppComponent {
  name = 'Angular';
}
