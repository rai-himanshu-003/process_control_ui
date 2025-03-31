import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, finalize, Observable, tap, throwError} from 'rxjs';
import {OAuthService} from 'angular-oauth2-oidc';
import {environment} from '../../environments/environment';
import {LoadingService} from '../services/loading/loading.service';
import {AppConstants} from '../constants/app-constant';
import {ErrorConstant} from '../constants/error-constants';
import {SnackbarService} from '../services/snackbar/snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authService: OAuthService,
    private loadingService: LoadingService,
    private snackBarService: SnackbarService
  ) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authReq = req;
    if (!req.url.includes(environment.issuer_uri)) {
      const token: string = this.authService.getAccessToken() || "";

      let url = req.url;
      if (!url.startsWith('../assets/')) {
        url = environment.base_api_url + url;
      }
      authReq = req.clone({
        url: url,
        headers: req.headers.set('Authorization', `Bearer ${token}`),
      });
      this.loadingService.setLoading(true);
    }
    /* eslint-disable */
    return next.handle(authReq).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event.body.status == AppConstants.SUCCESS && !!event.body.successMsg) {
            this.snackBarService.showSnackBarForSuccess(event.body.successMsg);
          }
        }
      }),
      finalize(() => this.loadingService.setLoading(false)),
      catchError((error: HttpErrorResponse) => this.handleError(error))
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log("error status ---------------" , error);
    
    if (error.status === 401) {
      console.error('Unauthorized');
      this.authService.logOut();
    } else if (error.error.status == AppConstants.FAILED) {
      this.snackBarService.showSnackBarForError(error.error.error[0].message);
    } else {
      this.snackBarService.showSnackBarForError(ErrorConstant.EXCEPTION_OCCURED);
    }
    return throwError(() => new Error('api error'));
  }
}
