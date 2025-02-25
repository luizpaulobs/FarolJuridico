import { Routes } from '@angular/router';

export const App_Routes: Routes = [
  {
    path: 'autenticacao',
    loadChildren: () =>
      import('./Shared/routes/login-layout.routes').then(
        (r) => r.LoginLayout_Routes
      ),
  },
  {
    path: 'common',
    loadChildren: () =>
      import('./Shared/routes/common-layout.routes').then(
        (r) => r.CommonLayout_Routes
      ),
  },
  { path: '**', pathMatch: 'full', redirectTo: 'autenticacao/login' },
];
