import { Component, signal, input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ThemeService } from '../../services/theme/theme';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  isLandingPage = input<boolean>(false);
  protected readonly isMobileMenuOpen = signal(false);
  protected readonly themeService = inject(ThemeService);
  private readonly router = inject(Router);

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(value => !value);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  onRegister(): void {
    this.router.navigate(['/register']);
  }

  onContact(): void {
    console.log('Contact clicked');
  }

  onChat(): void {
    console.log('Chat clicked');
  }
}
