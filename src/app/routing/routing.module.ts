import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule, Router } from '@angular/router';


import { ListadoComponent } from '../Listado/listado.component';
import { DetalleComponent } from '../detalle/detalle.component';


const routes: Routes = [
  { path: 'listado', component: ListadoComponent },
  { path:'', redirectTo: 'listado', pathMatch: 'full' },
  { path:'detalle/:id_pelicula_param', component: DetalleComponent }
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
