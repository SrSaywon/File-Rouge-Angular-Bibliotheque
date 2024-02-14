import {HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import {inject} from "@angular/core";
import {AuthenticationService} from "../services/authentication.service";
import {Observable} from "rxjs";

export const authInterceptor: HttpInterceptorFn = (req : HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
  const yourService = inject(AuthenticationService);
  const token = "bearer " + yourService.getToken();
  if (token) {
    const cloned = req.clone({
      setHeaders: {
        authorization: token,      },    });    return next(cloned);  } else {
    return next(req);
  }
};
