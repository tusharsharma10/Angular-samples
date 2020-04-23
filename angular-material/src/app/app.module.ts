import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import { FormComponent } from './template-form/form.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpDemoComponent } from './http-demo/http-demo.component'


import { LearnObservableComponent } from './observable/learn-observable/learn-observable.component';
import { HomeComponent } from './routing/home/home.component';
import { ArchiveComponent } from './routing/archive/archive.component';
import { NotFoundComponent } from './routing/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ReactiveFormComponent,
    HttpDemoComponent,
   
    LearnObservableComponent,
   
    HomeComponent,
   
    ArchiveComponent,
   
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
