import { Injectable, Provider } from "@angular/core";
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    accessToken = localStorage.getItem('user');

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.accessToken) {
            return next.handle(req.clone({ setHeaders: { 'X-Authorization': this.accessToken }}));
        }

        return next.handle(req.clone());
    }

}

export const appInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
};