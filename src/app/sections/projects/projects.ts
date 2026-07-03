import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../core/services/theme/theme';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss'],
})
export class Projects {
  constructor(public themeService: ThemeService) {}
  projects: any[] = [
    {
      title: 'SmartInventory',
      description:
        'Sistema profesional de gestión de inventario desarrollado con Spring Boot y Angular. Incluye autenticación JWT, dashboard analítico, control de stock, arquitectura multicapa y despliegue con Docker.',
      image: 'assets/dashboard-desktop.png',
      url: 'https://github.com/Yrobainah/SmartInventory',
    },
    {
      title: 'Portfolio Angular',
      description:
        'Versión de mi portafolio personal desarrollada con Angular y Tailwind.',
      image: 'assets/projects/angular-portfolio.png',
      url: 'https://github.com/Yariel/portfolio-angular',
    },
    {
      title: 'TradeSphere',
      description:
        'Aplicación fullstack con Java + Spring Boot y Angular para gestión de productos.',
      image: 'assets/projects/tradesphere.png',
      url: 'https://github.com/Yariel/tradesphere',
    },
  ];

  activeIndex = 0;

  // Cambiar al siguiente proyecto
  next() {
    this.activeIndex = (this.activeIndex + 1) % this.projects.length;
  }

  // Cambiar al proyecto anterior
  prev() {
    this.activeIndex =
      (this.activeIndex - 1 + this.projects.length) % this.projects.length;
  }

  // Slide automático
  ngOnInit() {
    setInterval(() => {
      this.next();
    }, 5000); // cada 5s
  }
}
