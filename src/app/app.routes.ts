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
import { Create } from './pages/personal/create/create';
import { Advertise } from './pages/personal/advertise/advertise';
import { Demand } from './pages/personal/demand/demand';
import { Supply } from './pages/personal/supply/supply';
import { Edit } from './pages/personal/edit/edit';

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
      // Left sidebar routes
      { path: 'potential', component: Potential },
      { path: 'projects', component: Projects },
      { path: 'neurons', component: Neurons },
      { path: 'kutumb', component: Kutumb },
      { path: 'future', component: Future },
      // Top navbar routes
      { path: 'create', component: Create },
      { path: 'advertise', component: Advertise },
      { path: 'demand', component: Demand },
      { path: 'supply', component: Supply },
      { path: 'edit', component: Edit },
    ]
  },
  // Fallback
  { path: '**', redirectTo: '/' }
];
