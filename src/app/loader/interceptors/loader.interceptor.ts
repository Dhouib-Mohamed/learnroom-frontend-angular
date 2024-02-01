import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import {delay, Observable, of, switchMap} from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from '../loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    if (req.method === 'OPTIONS') {
      return next.handle(req);
    }

    this.loaderService.showLoader();

    return next.handle(req).pipe(
      switchMap((event) => {
        if (event.type === 4) {
          this.loaderService.hideLoader();
        }
        return of(event);
      }),
      finalize(() => {
        this.loaderService.hideLoader();
      })
    );

  }
}
