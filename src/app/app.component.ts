import {Component, HostBinding, OnInit} from '@angular/core';
import {AuthService} from './services/auth/auth.service';
import {OAuthService} from 'angular-oauth2-oidc';
import {SnackbarService} from './services/snackbar/snackbar.service';
import {ErrorConstant} from './constants/error-constants';
import {InfoConstant} from './constants/info-constants';
import {BreadcrumbService} from './services/breadcrumb/breadcrumb.service';
import {DarkModeService} from './services/darkmode/dark-mode.service';
import {OverlayContainer} from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @HostBinding('class') componentCssClass: string | undefined;

  constructor(
    // private authService: AuthService,
    // private oauthService: OAuthService,
    private snackBarService: SnackbarService,
    private breadcrumbService: BreadcrumbService,
    public darkModeService: DarkModeService,
    private overlayContainer: OverlayContainer
  ) {}

  ngOnInit(): void {
    // console.log("token expired in ", this.authService.getExpiryTokenTime());
    
    // this.oauthService.setupAutomaticSilentRefresh();
    this.darkModeService.getDarkMode().subscribe(isDarkTheme => {
      this.changeMode(isDarkTheme);
    });
    // console.log('token expired in ', this.authService.getExpiryTokenTime());
    // this.oauthService.events.subscribe(e => {
    //   console.log('oauth event', e);
    //   if (e.type == 'token_expires') {
    //     this.snackBarService.showSnackBarForInfo("Token expired");
    //     console.log('token expired --');
    //   } else if (e.type === 'token_refreshed') {
    //     console.log('token refrshed');
    //     this.snackBarService.showSnackBarForSuccess(InfoConstant.REFRESH_TOKEN_INFO);
    //   } else if (e.type === 'silent_refresh_error') {
    //     console.log('Silent refresh error', e);
    //     this.snackBarService.showSnackBarForError(ErrorConstant.REFRESH_TOKEN_ERROR);
    //   } else if (e.type === 'silently_refreshed') {
    //     this.snackBarService.showSnackBarForSuccess("silently refreshed token");
    //     console.log('silently token refreshed');
    //   } else if (e.type === 'session_terminated') {
    //     this.snackBarService.showSnackBarForError('Session terminated. Please login again');
    //     console.log('session terminated');
    //   } else if (e.type === 'session_error') {
    //     this.snackBarService.showSnackBarForError('Session error');
    //     console.log('session error');
    //   }
    // });
  }

  changeMode(isDarkTheme: boolean): void {
    this.componentCssClass = isDarkTheme ? 'dark-theme' : '';
    const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    const themeClass = isDarkTheme ? 'dark-theme' : null;
    if (themeClass) {
      overlayContainerClasses.add(themeClass);
    } else {
      overlayContainerClasses.remove('dark-theme');
    }
  }
}
