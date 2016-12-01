import {Injectable} from '@angular/core';
import {Observable, Observer} from "rxjs";

@Injectable()
export class AuthService {
  isAuthenticated: Boolean;

  constructor() {
  }

  login(username: string, password: string): Observable<Boolean> {
    return Observable.create((observer) => {
      this.isAuthenticated = true;
      observer.next(true);
      observer.complete();
    });
  }

  logout() {
    this.isAuthenticated = false;
  }
}
