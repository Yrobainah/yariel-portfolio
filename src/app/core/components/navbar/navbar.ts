import { Component, Inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
})
export class Navbar {
  isMenuOpen = false;
  isDark = true;

  constructor(@Inject(DOCUMENT) private doc: Document) {
    // tema por defecto oscuro
    this.doc.documentElement.classList.add('dark');
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.doc.body.classList.toggle('overflow-hidden', this.isMenuOpen); // lock scroll
  }
  closeMenu() {
    this.isMenuOpen = false;
    this.doc.body.classList.remove('overflow-hidden');
  }

  toggleDark() {
    this.isDark = !this.isDark;
    this.doc.documentElement.classList.toggle('dark', this.isDark);
  }

  // cerrar con ESC
  @HostListener('document:keydown', ['$event'])
  onKey(e: KeyboardEvent) {
    if (e.key === 'Escape') this.closeMenu();
  }
}
