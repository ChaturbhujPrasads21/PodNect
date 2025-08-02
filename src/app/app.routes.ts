// src/app/routes.ts
import { Routes } from '@angular/router';

import { Login } from './component/auth/login/login';
import { Signup } from './component/auth/signup/signup';

import { Dashboard } from './component/dashboard/dashboard';
import { Mains } from './component/mains/mains/mains';

import { Auth } from './component/auth/auth/auth';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default redirect
  { path: 'home', component: Mains },                  // Main landing page
  { path: 'dashboard', component: Dashboard },

  { path: 'auth', component: Auth, children: [
      { path: 'login', component: Login },
      { path: 'signup', component: Signup },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  }
];
