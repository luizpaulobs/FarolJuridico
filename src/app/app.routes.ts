import { Routes } from '@angular/router';

export const App_Routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/teste' },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./pages/welcome/welcome.routes').then((m) => m.WELCOME_ROUTES),
  },
  {
    path: 'teste',
    loadComponent: () =>
      import('./teste/teste.component').then((c) => c.TesteComponent),
  },
];
