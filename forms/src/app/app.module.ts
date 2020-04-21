import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import {FormsModule} from '@angular/forms';
import { UdemyFormComponent } from './udemy-form/udemy-form.component';
import {SignupFormComponent} from './signup-form/signup-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { PasswordFormComponent } from './password-form/password-form.component';
import { PostComponent } from './post/post.component';
import {HttpModule} from '@angular/http';
import { PostService } from './services/post.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {NoopAnimationsModule} from '@angular/platform-browser/animations'
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    UdemyFormComponent,
    SignupFormComponent,
    PasswordFormComponent,
    PostComponent,

   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatCheckboxModule
    
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
