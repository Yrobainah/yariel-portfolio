import { Component } from '@angular/core';
import { Navbar } from '../../core/components/navbar/navbar';
import { Home } from '../../sections/home/home';
import { About } from '../../sections/about/about';

@Component({
  selector: 'app-onepage',
  imports: [Navbar, Home, About],
  templateUrl: './onepage.html',
  styleUrl: './onepage.scss',
})
export class Onepage {}
