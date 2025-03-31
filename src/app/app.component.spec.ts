import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth/auth.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SnackbarService } from './services/snackbar/snackbar.service';
import { BreadcrumbService } from './services/breadcrumb/breadcrumb.service';
import { PcCommonModule } from './modules/pc-common/pc-common.module';

describe('AppComponent', () => {

  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let oauthServiceSpy: jasmine.SpyObj<OAuthService>;
  let snackBarServiceSpy: jasmine.SpyObj<SnackbarService>;

  beforeEach(async () => {
    const authServiceSpyObj = jasmine.createSpyObj('AuthService', ['getExpiryTokenTime']);
    const oauthServiceSpyObj = jasmine.createSpyObj('OAuthService', ['events']);
    const snackBarServiceSpyObj = jasmine.createSpyObj('SnackbarService', ['showSnackBarForWarning', 'showSnackBarForError']);

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        PcCommonModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: AuthService, useValue: authServiceSpyObj },
        { provide: OAuthService, useValue: oauthServiceSpyObj },
        { provide: SnackbarService, useValue: snackBarServiceSpyObj },
        BreadcrumbService
      ]
    }).compileComponents();

    authServiceSpy = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    oauthServiceSpy = TestBed.inject(OAuthService) as jasmine.SpyObj<OAuthService>;
    snackBarServiceSpy = TestBed.inject(SnackbarService) as jasmine.SpyObj<SnackbarService>;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
