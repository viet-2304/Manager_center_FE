import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';

const appRouter = [
  {
    path: '',
    component: DefaultLayoutComponent,
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./authorization/authorization.module').then(
        (m) => m.AuthorizationModule
      ),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(appRouter, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
