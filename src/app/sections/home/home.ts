import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
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
