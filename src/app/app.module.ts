import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app/app.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {Router} from './app.routes';
import {AuthGuard} from "./auth-guard";
import {AuthService} from "./services/auth-service";
import {CordovaService} from "./services/cordova.service";
import {ToasterModule} from "angular2-toaster";

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    HomeComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ToasterModule,
    Router
  ],
  providers: [
    AuthGuard,
    AuthService,
    CordovaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
