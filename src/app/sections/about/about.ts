import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  highlights = [
    'Backend Development con Java + Spring Boot',
    'API REST seguras y escalables (JWT, OAuth2)',
    'Integración Frontend-Backend (Angular, Vue 3)',
    'CI/CD y contenedores (Docker)',
  ];

  // Stats opcionales que se muestran como chips
  stats = [
    { label: 'Años de experiencia', value: '3+' },
    { label: 'Proyectos', value: '10+' },
  ];
}
