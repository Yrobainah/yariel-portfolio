import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../core/services/theme/theme';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  constructor(public theme: ThemeService) {}
  skills = [
    'Java',
    'Spring Boot',
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'SQL',
    'Git',
    'Docker',
  ];
}
