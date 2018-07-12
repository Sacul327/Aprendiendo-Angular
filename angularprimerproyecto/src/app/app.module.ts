import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { headerComponent } from './components/header/header.component';
import { bodyComponent } from './components/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    bodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
