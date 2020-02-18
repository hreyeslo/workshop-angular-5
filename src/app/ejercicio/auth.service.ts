import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  CanActivate,
  CanActivateChild,
  CanLoad,
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Route,
  UrlSegment
} from "@angular/router";

export interface User {
  name?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService
  implements CanActivate, CanActivateChild, CanLoad, Resolve<User> {

  constructor() {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // Validar parámetro access
    return true;
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // Validar parámetro access
    return true;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    // Validar parámetro auth
    return true;
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return Promise.resolve({
      name: "Angular"
    });
  }
}
