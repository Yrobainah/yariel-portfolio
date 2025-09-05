import { Component } from '@angular/core';
import { Navbar } from '../../core/components/navbar/navbar';
import { Home } from '../../sections/home/home';

@Component({
  selector: 'app-onepage',
  imports: [Navbar, Home],
  templateUrl: './onepage.html',
  styleUrl: './onepage.scss',
})
export class Onepage {}
