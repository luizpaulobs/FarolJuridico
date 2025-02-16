import { Routes } from '@angular/router';

export const CommonLayout_Routes: Routes = [
  {
    path: 'teste',
    loadChildren: () =>
      import('../../teste/teste.component').then((c) => c.TesteComponent),
  },
];
