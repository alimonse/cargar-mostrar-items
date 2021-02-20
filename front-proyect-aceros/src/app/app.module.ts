import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AcerosRestService} from "./aceros/servicios/aceros.rest.service";
import {HttpClientModule} from "@angular/common/http";
import { NotFoundComponent } from './rutas/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,


  ],
  providers: [
    AcerosRestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
