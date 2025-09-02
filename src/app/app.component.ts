import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Navbar } from './core/components/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, Navbar],
  template: `<div class="min-h-dvh flex flex-col">
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  </div>`,
})
export class AppComponent {}
