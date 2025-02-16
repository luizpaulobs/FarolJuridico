import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CommonLayoutComponent } from './Layout/common-layout/common-layout.component';
import { CommonLayout_Routes } from './Shared/routes/common-layout.routes';

const appRoutes: Routes = [
  {
    path: '',
    component: CommonLayoutComponent,
    children: CommonLayout_Routes,
    //canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules,
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
      useHash: false,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
