import { Injectable } from '@angular/core';

type ThemeMode = 'light' | 'dark' | 'system';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly key = 'theme';
  private readonly root = document.documentElement;
  private media = window.matchMedia('(prefers-color-scheme: dark)');

  /** Estado efectivo (true si el tema visible es oscuro) */
  isDark = false;
  /** Modo elegido por el usuario (o 'system') */
  mode: ThemeMode = 'system';

  constructor() {
    // Si quieres que reaccione a cambios del SO cuando el modo es 'system'
    this.media.addEventListener('change', () => {
      if (this.mode === 'system')
        this.apply(this.media.matches ? 'dark' : 'light');
    });
  }

  /** Llamar una vez (AppComponent/App bootstrap) */
  init() {
    const saved = (localStorage.getItem(this.key) as ThemeMode) || 'system';
    this.set(saved);
  }

  /** Cambia modo elegido por el usuario */
  set(mode: ThemeMode) {
    this.mode = mode;
    localStorage.setItem(this.key, mode);
    const effective =
      mode === 'system' ? (this.media.matches ? 'dark' : 'light') : mode;
    this.apply(effective);
  }

  /** Alterna entre light/dark manteniendo 'system' como light/dark actual */
  toggle() {
    this.set(this.isDark ? 'light' : 'dark');
  }

  /** Aplica el tema efectivo al <html> */
  private apply(effective: 'light' | 'dark') {
    this.isDark = effective === 'dark';
    this.root.classList.toggle('dark', this.isDark);
  }
}
