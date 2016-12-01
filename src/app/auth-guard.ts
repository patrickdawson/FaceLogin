import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "./services/auth-service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(protected router: Router, protected authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | boolean {

    if (state.url !== '/login' && !this.authService.isAuthenticated) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
