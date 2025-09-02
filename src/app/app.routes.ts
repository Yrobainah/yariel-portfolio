import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/onepage/onepage').then((m) => m.Onepage),
  },
  { path: '**', redirectTo: '' },
];
