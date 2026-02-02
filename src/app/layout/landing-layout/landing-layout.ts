import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-landing-layout',
  imports: [CommonModule, RouterOutlet, Navbar, Footer],
  templateUrl: './landing-layout.html',
  styleUrl: './landing-layout.scss'
})
export class LandingLayout {}
