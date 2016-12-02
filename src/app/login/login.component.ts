import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth-service";
import {Router} from "@angular/router";
import {CordovaService} from "../services/cordova.service";
import {ToasterService} from "angular2-toaster";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = "Login";

  constructor(private authService: AuthService,
              private router: Router,
              private toasterService: ToasterService,
              private cordova: CordovaService) {
  }

  ngOnInit() {
    if (this.authService.isAuthenticated) {
      this.router.navigate(['/home']);
    }
  }

  login() {
    this.cordova.camera.getPicture()
    .then(fileUri => this.authService.login(fileUri)
      .subscribe((auth) => {
        if (auth) {
          this.router.navigate(['/home']);
          this.toasterService.pop("info", "Login erfolgreich");
        }
      }, () => {
        this.toasterService.pop("error", "Login fehlgeschlagen");
      }));
  }
}
