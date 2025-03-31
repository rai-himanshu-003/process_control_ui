import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '../environments/environment';

export const authCodeFlowConfig: AuthConfig = {
  issuer: environment.issuer_uri,
  redirectUri: environment.redirect_uri,
  clientId: environment.client_id,
  responseType: 'code',
  scope: 'openid profile offline_access pdp-dev',
  oidc: true,
  postLogoutRedirectUri: environment.logout_url,
  useSilentRefresh: true,
  sessionChecksEnabled: true, // Enable session checks
  timeoutFactor: 0.75, // Start silent refresh 75% of the way through the token's lifespan
  showDebugInformation: true, // Optional for debugging
};

