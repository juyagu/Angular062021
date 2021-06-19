import { Component } from '@angular/core';

import { PELICULAS } from '../mock-peliculas';
import { Pelicula } from '../entidades/pelicula';

@Component({
    selector: 'app-listado',
    templateUrl: './listado.component.html'
})
export class ListadoComponent{
    peliculas:Pelicula[]=PELICULAS;
}