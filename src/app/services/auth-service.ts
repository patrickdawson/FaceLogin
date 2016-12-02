import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {ActionLogService} from "./action-log.service";
import {MsCognitiveApiAdapter} from "./ms-cognitive-api-adapter";

@Injectable()
export class AuthService {
    isAuthenticated: Boolean;

    constructor(private actionLog: ActionLogService,
                private msApiAdapter: MsCognitiveApiAdapter) {
    }

    login(image: any): Observable<Boolean> {
        this.actionLog.addLog(`requested Login with data from image`);
        return Observable.create((observer) => {
            this.msApiAdapter.faceToPersonId(image).then((name) => {
                console.log(name);
                if (name) {
                    observer.next(true);
                    this.isAuthenticated = true;
                } else {
                    observer.next(false);
                }
                observer.complete();
            });
        });
    }

    logout() {
        this.isAuthenticated = false;
    }
}
