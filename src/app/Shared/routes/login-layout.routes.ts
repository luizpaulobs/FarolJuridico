import { Routes } from '@angular/router';

export const LoginLayout_Routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../../Layout/layout-login/layout-login.component').then(
        (e) => e.LayoutLoginComponent
      ),
    children: [
      {
        path: '', // Quando o caminho for / (raiz), redireciona para /login
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        loadComponent: () =>
          import('../../autenticacao/login/login.component').then(
            (c) => c.LoginComponent
          ),
      },
      {
        path: 'autenticacao-duas-etapas',
        loadComponent: () =>
          import(
            '../../autenticacao/autenticacao-duas-etapas/autenticacao-duas-etapas.component'
          ).then((c) => c.AutenticacaoDuasEtapasComponent),
      },
    ],
  },
];
