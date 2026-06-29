import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../core/services/theme/theme';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  constructor(public theme: ThemeService) {}

  stats = [
    'Ingeniería Informática',
    'Java & Spring Boot',
    'Proyectos Full Stack',
    'A Coruña · España',
  ];
}
