import { Component } from '@angular/core';
import { Navbar } from '../../core/components/navbar/navbar';
import { Home } from '../../sections/home/home';
import { About } from '../../sections/about/about';
import { Projects } from '../../sections/projects/projects';
import { Servicios } from '../../sections/servicios/servicios';

@Component({
  selector: 'app-onepage',
  imports: [Navbar, Home, About, Projects, Servicios],
  templateUrl: './onepage.html',
  styleUrl: './onepage.scss',
})
export class Onepage {}
