import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BASE_API_URL } from './constants/injection';
import { environment } from './environnement/environnement';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideHttpClient(),
    {
    provide: BASE_API_URL,
    useValue: environment.BASE_API_URL
  }]
};
