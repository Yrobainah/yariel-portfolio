import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private key = 'theme';
  private root = document.documentElement;
  constructor() {
    const saved = localStorage.getItem(this.key) || 'light';
    if (saved === 'dark') this.root.classList.add('dark');
  }
  toggle() {
    this.root.classList.toggle('dark');
    const isDark = this.root.classList.contains('dark');
    localStorage.setItem(this.key, isDark ? 'dark' : 'light');
  }
}
