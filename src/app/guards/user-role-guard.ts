import { Injectable } from '@angular/core';
import { CanActivateChild, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserRoleGuard implements CanActivateChild {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivateChild(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const user: User = this.authService.getUserDetails();
    
    user.admin = true;
    if (user.admin) {
      return true;
    } else {
      this.router.navigate(['/dashboard/blocked-user']);
      return false;
    }
  }
}
