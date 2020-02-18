import { Routes } from "@angular/router";

import { PublicComponent } from "./ejercicio/public/public.component";
import { PublicChildComponent } from "./ejercicio/public-child/public-child.component";

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
      access: true
    },
    children: [
      {
        path: "",
        redirectTo: "child",
        pathMatch: "full"
      },
      {
        path: "child",
        component: PublicChildComponent,
        data: {
          access: true
        }
      }
    ]
  }
];
