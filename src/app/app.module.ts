import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app/app.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {Router} from './app.routes';

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
    Router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
