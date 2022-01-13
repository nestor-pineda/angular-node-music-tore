import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: `user-profile/:id`,
    loadChildren: () =>
      import('./pages/user-profile/user-profile.module').then(
        (m) => m.UserProfileModule
      ),
    // canActivate: [AuthGuard] //Con esto protegemos esta ruta
  },
  {
    path: `register-user`,
    loadChildren: () =>
      import('./pages/signup/signup.module').then((m) => m.SignupModule),
  },
  {
    path: `signin`,
    loadChildren: () =>
      import('./pages/signin/signin.module').then((m) => m.SigninModule),
  },
  { path: '', redirectTo: '/log-in', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
