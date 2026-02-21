import { Routes } from '@angular/router';
import { LandingLayout } from './layout/landing-layout/landing-layout';
import { Landing } from './pages/landing/landing';
import { Register } from './pages/register/register';
import { PersonalLayout } from './layout/personal-layout/personal-layout';
import { Potential } from './pages/personal/potential/potential';
import { Projects } from './pages/personal/projects/projects';
import { Neurons } from './pages/personal/neurons/neurons';
import { Kutumb } from './pages/personal/kutumb/kutumb';
import { Future } from './pages/personal/future/future';

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

  // Personal Dashboard
  {
    path: 'personal',
    component: PersonalLayout,
    children: [
      { path: '', redirectTo: 'potential', pathMatch: 'full' },
      { path: 'potential', component: Potential },
      { path: 'projects', component: Projects },
      { path: 'neurons', component: Neurons },
      { path: 'kutumb', component: Kutumb },
      { path: 'future', component: Future }
    ]
  },
  // Fallback
  { path: '**', redirectTo: '/' }
];
