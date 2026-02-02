import { Routes } from '@angular/router';
import { LandingLayout } from './layout/landing-layout/landing-layout';
import { MainLayout } from './layout/main-layout/main-layout';
import { Landing } from './pages/landing/landing';
import { Register } from './pages/register/register';
import { Dashboard } from './layout/pages/dashboard/dashboard';
import { Analytics } from './layout/pages/analytics/analytics';
import { Projects } from './layout/pages/projects/projects';

export const routes: Routes = [
  // Landing page with simple layout (navbar + content + footer)
  {
    path: '',
    component: LandingLayout,
    children: [
      { path: '', component: Landing }
    ]
  },
  // Register page
  {
    path: 'register',
    component: Register
  },
  // App routes with full layout (navbar + sidebar + content + chat + footer)
  {
    path: 'app',
    component: MainLayout,
    children: [
      { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: Dashboard },
      { path: 'analytics', component: Analytics },
      { path: 'projects', component: Projects },
      { path: 'reports', component: Dashboard }
    ]
  },
  // Fallback
  { path: '**', redirectTo: '/' }
];
