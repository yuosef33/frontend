import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthService} from '../security/auth.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteActivateLogoutService implements CanActivate {

  constructor(private authService :AuthService,private router: Router) { }
  isUserLogin(){
    return this.authService.isUserLogin();
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.isUserLogin()) {
      this.router.navigateByUrl("/products");
      return false;
    }
    else {

      return true;
    }
  }
}
