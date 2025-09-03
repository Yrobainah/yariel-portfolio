import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Onepage } from './features/onepage/onepage';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, Onepage],
  template: `<app-onepage></app-onepage>`,
})
export class AppComponent {}
