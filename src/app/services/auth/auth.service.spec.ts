import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { OAuthService, UrlHelperService } from 'angular-oauth2-oidc';
import { of } from 'rxjs';
import { User } from 'src/app/models/user';

describe('AuthService', () => {
  let service: AuthService;
  let oauthServiceSpy: jasmine.SpyObj<OAuthService>;

  beforeEach(() => {
    const oauthSpy = jasmine.createSpyObj('OAuthService', 
      ['loadDiscoveryDocumentAndLogin', 'getAccessToken', 
        'hasValidAccessToken', 'getIdentityClaims', 
        'getAccessTokenExpiration', 'logOut', 
        'setupAutomaticSilentRefresh']);

    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: OAuthService, useValue: oauthSpy },
        { provide: UrlHelperService, useValue: jasmine.createSpyObj('UrlHelperService', ['']) }
      ]
    });

    service = TestBed.inject(AuthService);
    oauthServiceSpy = TestBed.inject(OAuthService) as jasmine.SpyObj<OAuthService>;
    oauthServiceSpy.loadDiscoveryDocumentAndLogin.and.returnValue(Promise.resolve(true));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call loadDiscoveryDocumentAndLogin on login', () => {
    service.configureOkta();
    expect(oauthServiceSpy.loadDiscoveryDocumentAndLogin).toHaveBeenCalled();
  });

  it('should return access token', () => {
    const token = 'test-token';
    oauthServiceSpy.getAccessToken.and.returnValue(token);
    expect(service.getToken()).toBe(token);
  });

  it('should check if access token is valid', () => {
    oauthServiceSpy.hasValidAccessToken.and.returnValue(true);
    expect(service.isValidToken()).toBeTrue();
  });

  it('should return identity claims', () => {
    const claims: User = { name: 'Test User', firstName: 'Test', 
      lastName: 'User', userID: '', exp: 0, auth_time: 0, admin: false };
    oauthServiceSpy.getIdentityClaims.and.returnValue(claims);
    expect(service.getUserDetails()).toEqual(claims);
  });

  it('should return access token expiration', () => {
    expect(service.getExpiryTokenTime()).toBeDefined();
  });

  it('should call logOut on logout', () => {
    service.logOut();
    expect(oauthServiceSpy.logOut).toHaveBeenCalled();
  });

});
