import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadoComponent } from './Listado/listado.component';
import { DetalleComponent } from './detalle/detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
