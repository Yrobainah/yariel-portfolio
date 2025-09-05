import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
})
export class Navbar implements OnInit {
  isDark = true;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    const stored = localStorage.getItem('theme');
    if (stored === 'light') this.disableDark();
    else this.enableDark(); // mismo look de la captura
  }

  enableDark() {
    this.isDark = true;
    this.document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
  disableDark() {
    this.isDark = false;
    this.document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
  toggleDark() {
    this.isDark ? this.disableDark() : this.enableDark();
  }
}
