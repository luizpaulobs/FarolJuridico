import { Routes } from '@angular/router';

export const CommonLayout_Routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../../Layout/common-layout/common-layout.component').then(
        (c) => c.CommonLayoutComponent
      ),
    children: [
      {
        path: '', // Quando o caminho for / (raiz), redireciona para /login
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () =>
          import('../../home/home.component').then((e) => e.HomeComponent),
      },
      {
        path: 'workflows',
        loadComponent: () =>
          import('../../workflows/workflows.component').then(
            (e) => e.WorkflowsComponent
          ),
      },
      {
        path: 'usuarios',
        loadComponent: () =>
          import('../../usuarios/usuarios.component').then(
            (c) => c.UsuariosComponent
          ),
      },
    ],
  },
];
