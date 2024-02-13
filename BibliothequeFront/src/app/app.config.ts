import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { environment } from './environnement/environnement';
import { BASE_API_URL } from './constants/injection';
import { provideHttpClient } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideHttpClient(),
    {

      provide: BASE_API_URL,
      useValue: environment.BASE_API_URL
    }]

};
