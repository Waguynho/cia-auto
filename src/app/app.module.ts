import { MessageService } from './service/message.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import {appRoutes} from './model/routes';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component'
import { AuthService } from './service/auth.service';
import { CarroComponent } from './carro/carro.component';
import { CarroAddComponent } from './carro/carro-add.component';
import { RouteGuard } from './guards/route.guard';
import {SaveFormGuard} from './guards/save-form.guard';
import { MessagesComponent } from './shared/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    PageNotFoundComponent,
    DashboardComponent,
    LoginComponent,
    CarroComponent,
    CarroAddComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [AuthService, RouteGuard, SaveFormGuard, MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
