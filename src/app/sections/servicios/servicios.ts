import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../core/services/theme/theme';

interface Servicio {
  title: string;
  description: string;
  icon: string;
  features: string[];
  highlight?: boolean;
}

@Component({
  selector: 'app-servicios',
  imports: [CommonModule],
  templateUrl: './servicios.html',
  styleUrl: './servicios.scss',
})
export class Servicios {
  constructor(public themeService: ThemeService) {}
  services: Servicio[] = [
    {
      title: 'APIs & Backend',
      icon: '🧩',
      description:
        'Diseño y desarrollo de APIs REST seguras y escalables con Java + Spring Boot.',
      features: [
        'Autenticación JWT y roles',
        'Buenas prácticas y tests',
        'PostgreSQL / MySQL',
      ],
      highlight: true,
    },
    {
      title: 'Integración Frontend',
      icon: '🎯',
      description:
        'Integración de interfaces modernas con Angular o Vue + Tailwind.',
      features: [
        'Componentes reutilizables',
        'Accesibilidad y rendimiento',
        'SSR/SPA según necesidad',
      ],
    },
    {
      title: 'DevOps básico',
      icon: '⚙️',
      description:
        'Contenedorización y despliegues simples para acelerar releases.',
      features: [
        'Docker & Docker Compose',
        'Pipelines CI/CD básicos',
        'Environments y variables',
      ],
    },
  ];
}
