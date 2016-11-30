import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent}
];

export const Router: ModuleWithProviders = RouterModule.forRoot(routes);
