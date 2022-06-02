import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { LoginService } from '../services/Login/login.service';
@Injectable({
  providedIn: 'root'
})
export class GuardsGuard implements CanActivate {

  private constructor (
    private loginService :LoginService,
    private router :Router
  ) {

  }

  redirect(){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(!this.loginService.isLoggedIn()){
        this.router.navigate(['/public/login'])
        return false;
      }else{
        return true;
      }





  }
}


