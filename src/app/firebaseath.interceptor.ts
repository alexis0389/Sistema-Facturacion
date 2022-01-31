import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class FirebaseathInterceptor implements HttpInterceptor {

  constructor( private auth: AngularFireAuth) {}

    async getToken(){
      let user = await this.auth.currentUser;
      if(!user){
        await this.wait();
        user = await this.auth.currentUser;
      }
      if(!user) return "";
      return await user.getIdToken()
    }

    wait(){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(0);
        }, 500);
      })
    }

   intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return from(this.getToken())
    .pipe(
      switchMap(token => {
        if(token)
        {
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`
            }
          })
        }
        return next.handle(request)
      })
    )
  }
}
