import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import {AppComponent} from './app/app.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {Router} from './app.routes';
import {AuthGuard} from "./auth-guard";
import {AuthService} from "./services/auth-service";
import {CordovaService} from "./services/cordova.service";
import {ToasterModule} from "angular2-toaster";
import {ActionLogService} from "./services/action-log.service";
import {MsCognitiveApiAdapter} from './services/ms-cognitive-api-adapter';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
      JsonpModule,
    ToasterModule,
    Router,
  ],
  providers: [
    ActionLogService,
    AuthGuard,
    AuthService,
    CordovaService,
    MsCognitiveApiAdapter
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
