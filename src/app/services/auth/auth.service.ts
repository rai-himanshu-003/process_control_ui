import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private oauthService: OAuthService) {
  }

  configureOkta(): void {
    this.oauthService
      .loadDiscoveryDocumentAndLogin()
      .then(res => {
        if (res) {
          const token: string = this.getToken();
          console.log('token recived ', token);
          const userDetails: User = this.getUserDetails();
          console.log('user details : ', userDetails);
          console.log('token expires in ', this.getExpiryTokenTime());
        }
      })
      .catch(err => {
        console.log('Unable to login', err);
      });
  }

  getToken(): string {
    return this.oauthService.getAccessToken();
  }

  isValidToken(): boolean {
    return this.oauthService.hasValidAccessToken();
  }

  getUserDetails(): User {

    const user: User = {
      userID: "QPU85FW",
      firstName: "Himanshu",
      lastName: "Rai",
      name: "Himanshu Rai",
      exp: 0,
      auth_time: 0,
      admin: true
    }
    // return this.oauthService.getIdentityClaims() as User;
    return user;
  }

  getExpiryTokenTime(): Date {
    return new Date(this.oauthService.getAccessTokenExpiration());
  }

  logOut(): void {
    this.oauthService.logOut();
  }
}
