import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListadoComponent } from '../Listado/listado.component';
import { DetalleComponent } from '../detalle/detalle.component';



@NgModule({
  declarations: [
    ListadoComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ListadoComponent,
    DetalleComponent
  ]
})
export class PeliculasModule { }
