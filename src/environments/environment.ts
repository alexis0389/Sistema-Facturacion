// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlAPI: 'https://localhost:7265/api',
  firebase: {
    projectId: 'facturacion-a4770',
    appId: '1:701610286219:web:4b1ab1fbde83962e38c88e',
    storageBucket: 'facturacion-a4770.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyBel7DdDciQlAdxsQo-zv0F_LB6dIvSwo0',
    authDomain: 'facturacion-a4770.firebaseapp.com',
    messagingSenderId: '701610286219',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
