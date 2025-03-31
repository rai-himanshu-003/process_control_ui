// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  //http://processcontrol-devlbackend.pdp-compliance-regulations-devl-vpn3.us.i20.c01.johndeerecloud.com/
  base_api_url : "http://localhost:8082/",
  allowedUrls : ["http://localhost:4200"],
  supportEmail : "",
  messageTimeout : 4000,
  issuer_uri : "https://sso-dev.johndeere.com/oauth2/ausi7yqmlsQwMzsCq0h7",
  client_id : "0oa25vwill2pZgeAD0h8",
  redirect_uri : window.location.origin + '/dashboard',
  logout_url : window.location.origin + '/login'
};
