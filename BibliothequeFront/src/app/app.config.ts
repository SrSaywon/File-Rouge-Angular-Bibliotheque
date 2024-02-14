import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { environment } from './environnement/environnement';
import { BASE_API_URL } from './constants/injection';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {authInterceptor} from "./interceptors/auth.interceptor";


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideHttpClient(withInterceptors([authInterceptor])),
    {
      provide: BASE_API_URL,
      useValue: environment.BASE_API_URL
    }]

};
