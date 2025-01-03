import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../security/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteActivateLoginService implements CanActivate {

  constructor(private authService :AuthService,private router: Router) { }
  isUserLogin(){
    return this.authService.isUserLogin();
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.isUserLogin())
      return true;
    else {
      this.router.navigateByUrl("/login");
      return false;
    }
  }
}
