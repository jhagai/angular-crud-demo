import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DatepickerModule, ModalModule} from "ngx-bootstrap";
import {FormsModule} from "@angular/forms";
import {LoginComponent} from './login/login.component';
import {ExtendedInputComponent} from './common/extended-input/extended-input.component';
import {HttpModule, JsonpModule} from "@angular/http";
import {RouterModule, Routes} from "@angular/router";
import {LoggedComponent} from './logged/logged.component';
import {LoginService} from "./login.service";

const appRoutes: Routes = [
  {path: 'logged', component: LoggedComponent},
  {path: '**', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ExtendedInputComponent,
    LoggedComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    FormsModule,
    DatepickerModule.forRoot(),
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoginService

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
