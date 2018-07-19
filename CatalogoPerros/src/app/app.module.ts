import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadComponent } from './components/head/head.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { APP_ROUTING } from './lucas.routing';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { VideosComponent } from './components/videos/videos.component';
import { PerroComponent } from './components/perro/perro.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { PlacesComponent } from './components/places/places.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    BodyComponent,
    FooterComponent,
    CatalogoComponent,
    VideosComponent,
    PerroComponent,
    BuscadorComponent,
    PlacesComponent,
    AboutComponent,
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
