import { Component, Inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import { ThemeService } from '../../services/theme/theme';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
})
export class Navbar {
  isMenuOpen = false;

  constructor(
    @Inject(DOCUMENT) private doc: Document,
    public theme: ThemeService
  ) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.doc.body.classList.toggle('overflow-hidden', this.isMenuOpen); // lock scroll
  }
  closeMenu() {
    this.isMenuOpen = false;
    this.doc.body.classList.remove('overflow-hidden');
  }

  // cerrar con ESC
  @HostListener('document:keydown', ['$event'])
  onKey(e: KeyboardEvent) {
    if (e.key === 'Escape') this.closeMenu();
  }
}
