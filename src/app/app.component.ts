import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Onepage } from './features/onepage/onepage';
import { ThemeService } from './core/services/theme/theme';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, Onepage],
  template: `<app-onepage></app-onepage>`,
})
export class AppComponent {
  constructor(private theme: ThemeService) {
    this.theme.init();
  }
}
