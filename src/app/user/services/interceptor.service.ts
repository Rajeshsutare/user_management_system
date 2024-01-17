import { Injectable } from '@angular/core';
import { LoaderService } from './loader.service';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, delay, finalize } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService {
  constructor(private _loaderService: LoaderService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this._loaderService.loadingStatus.next(true);
    let reClone = request.clone({
      setHeaders: {
        'content-type': 'application/json',
        authorization: 'JWT token from localStorage',
      },
    });

    return next.handle(request).pipe(
      delay(100),
      finalize(() => {
        this._loaderService.loadingStatus.next(false);
      })
    );
  }
}
