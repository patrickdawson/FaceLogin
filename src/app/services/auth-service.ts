import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {ActionLogService} from "./action-log.service";

@Injectable()
export class AuthService {
  isAuthenticated: Boolean;

  constructor(private actionLog: ActionLogService) {
  }

  login(dataUrl: string): Observable<Boolean> {
    this.actionLog.addLog(`requested Login with data from: ${dataUrl}`);
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
