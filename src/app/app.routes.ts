import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home')
  },

  {
    path: 'stock',
    loadComponent: () => import('./pages/stock/stock')
  },
  {
    path: 'reactive',
    loadComponent: () => import('./pages/reactive-forms/reactive-forms')
  },
  {
    path: 'users',
    loadComponent: () => import('./pages/users/users')
  },
  {
    path: 'reactivestock',
    loadComponent: () => import('./pages/reactive-stock/reactive-stock')
  },
  {
    path: '**',
    redirectTo: 'reactivestock'
  }
];
