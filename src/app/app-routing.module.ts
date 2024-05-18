import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseModule } from './pages/browse/browse.module';
import { LoginModule } from './pages/login/login.module';
import { MainModule } from './pages/main/main.module';
import { RegisterModule } from './pages/register/register.module';
import { authGuard } from './common/services/auth.guard';

const routes: Routes = [
  {
    path: 'browse',
    loadChildren: () => import('./pages/browse/browse.module').then(m=>BrowseModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m=>LoginModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then(m=>MainModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m=>RegisterModule)
  },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  { 
    path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule),
    canActivate: [authGuard]
   },
  {
    path: 'namemod', loadChildren: () => import('./pages/namemod/namemod.module').then(m => m.NamemodModule),
    canActivate: [authGuard]
   },
  {
    path: 'apply', loadChildren: () => import('./pages/applications/applications.module').then(m => m.ApplicationsModule),
    canActivate: [authGuard]
  },
  {
    path: '**',
    loadChildren: () => import('./pages/notfound/notfound.module').then(m => m.NotfoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
