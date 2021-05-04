import { DataService } from './../data.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private authser: DataService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    console.log(this.authser.login);
    if (this.authser.login) {
      console.log('AuthGuard');
      return true;
    }
    else{
      this.router.navigate(['/login']);
    }
  }
}
