import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { environment } from 'src/environments/environment.prod';
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { AngularFireStorageModule } from '@angular/fire/compat/storage'
import { FirebaseathInterceptor } from './firebaseath.interceptor';
import { MaterialModule } from './material/material.module';
import { AuthService } from './core/services/auth/auth.service';
import { AngularFireModule } from '@angular/fire/compat';
import firebase from 'firebase/compat/app';

firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CoreModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
    CoreModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: FirebaseathInterceptor, multi: true,},
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }