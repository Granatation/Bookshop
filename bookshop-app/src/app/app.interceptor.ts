import { Injectable, Provider } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    accessToken = localStorage.getItem('user');

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.accessToken) {
            req = req.clone({
                headers: new HttpHeaders({
                    'X-Authorization': this.accessToken,
                    'Content-Type': 'application/json'

                })
            });
        }

        return next.handle(req);
    }

}
export const appInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
};