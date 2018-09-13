import { MatInputModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CreateChallengeComponent } from './components/create-challenge/create-challenge.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { AppRouterModule } from './app.router-module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateChallengeComponent,
    RegistrationComponent,
    TopNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
