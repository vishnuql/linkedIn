import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegistrationService } from './api_services/registration.service';

@Injectable({
  providedIn: 'root'
})
export class AutGuard implements CanActivate {
  constructor(private registration: RegistrationService) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if( this.registration.user$) {
      return true;
    } else {
      return false;
    }
  }
  
}
