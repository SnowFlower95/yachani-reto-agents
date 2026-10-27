import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', loadComponent: () => import('./features/access/access').then((m) => m.Access) },
  {
    path: 'registro',
    loadComponent: () => import('./features/access/access').then((m) => m.Access),
    data: { register: true },
  },
  {
    path: 'app/inicio-estudiante',
    loadComponent: () => import('./features/dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: 'app/inicio-tutor',
    loadComponent: () => import('./features/dashboard/dashboard').then((m) => m.Dashboard),
    data: { tutor: true },
  },
  { path: '**', redirectTo: 'login' },
];
