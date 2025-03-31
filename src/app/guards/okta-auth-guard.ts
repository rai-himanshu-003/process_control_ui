import {Injectable} from '@angular/core';
import {CanActivateChild, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class OktaAuthGuard implements CanActivateChild {
  constructor(private authService: AuthService) {}

  canActivateChild(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // if (this.authService.isValidToken()) {
    //   return true;
    // } else {
    //   this.authService.configureOkta();
    //   return false;
    // }
    return true;
  }
}
