import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {OAuthModule, OAuthService} from 'angular-oauth2-oidc';
import {authCodeFlowConfig} from './auth-config';
import {AllowOriginInterceptor} from './interceptor/allow-origin-interceptor';
import {AuthInterceptor} from './interceptor/auth-interceptor';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {PcCommonModule} from './modules/pc-common/pc-common.module';
import { environment } from '../environments/environment';

// export function initializeApp(oauthService: OAuthService): () => Promise<void> {
//   return async () => {
//     oauthService.configure(authCodeFlowConfig);
//     await oauthService.loadDiscoveryDocumentAndTryLogin();
//   };
// }

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: environment.allowedUrls,
        sendAccessToken: false,
      },
    }),
    PcCommonModule,
  ],
  providers: [
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initializeApp,
    //   deps: [OAuthService],
    //   multi: true,
    // },
    {provide: HTTP_INTERCEPTORS, useClass: AllowOriginInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
