import { MainShellComponent } from './shared/layouts/main-shell/main-shell.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainShellComponent,
    children: [
      {
        path: 'products',
        loadChildren: () =>
          import('./features/products/products.module').then(
            (m) => m.ProductsModule
          ),
      },
      {
        path: 'coupons',
        loadChildren: () =>
          import('./features/coupons/coupons.module').then(
            (m) => m.CouponsModule
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./features/users/users.module').then((m) => m.UsersModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
