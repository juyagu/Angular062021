import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactivoComponent } from './reactivo/reactivo.component';
import { HttpClientModule } from '@angular/common/http';
import { PeliculasModule } from './peliculas/peliculas.module';
import { RoutingModule } from './routing/routing.module';

//import { EjemploService } from './servicios/ejemplo.service';

@NgModule({
  declarations: [
    AppComponent,
    ReactivoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PeliculasModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
