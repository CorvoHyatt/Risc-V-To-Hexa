import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TraductorComponent } from './traductor/traductor.component';

@NgModule({
  declarations: [
    AppComponent,
    TraductorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule, 
    CodemirrorModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
