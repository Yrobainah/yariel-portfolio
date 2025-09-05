import { Component } from '@angular/core';
import { Navbar } from '../../core/components/navbar/navbar';
import { Home } from '../../sections/home/home';
import { About } from '../../sections/about/about';
import { Projects } from '../../sections/projects/projects';
import { Servicios } from '../../sections/servicios/servicios';
import { ContactComponent } from '../../sections/contact/contact';
import { Footer } from '../../core/components/footer/footer';
import { ScrollToTop } from '../../sections/scroll-to-top/scroll-to-top';

@Component({
  selector: 'app-onepage',
  imports: [
    Navbar,
    Home,
    About,
    Projects,
    Servicios,
    ContactComponent,
    Footer,
    ScrollToTop,
  ],
  templateUrl: './onepage.html',
  styleUrl: './onepage.scss',
})
export class Onepage {}
