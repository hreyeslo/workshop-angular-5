import { Routes } from "@angular/router";

import { PublicComponent } from "./ejercicio/public/public.component";
import { PublicChildComponent } from "./ejercicio/public-child/public-child.component";
import { ForbiddenComponent } from './ejercicio/forbidden/forbidden.component';

import { AuthService } from './ejercicio/auth.service';

export const router: Routes = [
  {
    path: "",
    redirectTo: "public",
    pathMatch: "full"
  },
  {
    path: "public",
    component: PublicComponent,
    data: {
      access: true,
    },
    resolve: {},
    canActivate: [],
    canActivateChild: [],
    children: [
      {
        path: "child",
        component: PublicChildComponent,
        data: {
          access: true
        }
      }
    ]
  },
  {
    path: 'lazy',
    loadChildren: () => import('./ejercicio/lazy/lazy.module').then(m => m.LazyModule),
    data: {
      auth: true
    },
    canLoad: []
  },
  {
    path: '**',
    component: ForbiddenComponent,
    pathMatch: 'full'
  }
];
