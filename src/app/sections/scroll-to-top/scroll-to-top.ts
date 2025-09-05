import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-to-top',
  imports: [CommonModule],
  templateUrl: './scroll-to-top.html',
  styleUrl: './scroll-to-top.scss',
})
export class ScrollToTop {
  visible = false;

  @HostListener('window:scroll')
  onScroll() {
    this.visible = window.scrollY > 300;
  }

  toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
