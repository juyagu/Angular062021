import { Component } from '@angular/core';

import { PELICULAS } from '../mock-peliculas';
import { Pelicula } from '../entidades/pelicula';

@Component({
    selector: 'app-listado',
    templateUrl: './listado.component.html'
})
export class ListadoComponent{
    peliculas:Pelicula[]=PELICULAS;
    peliculaSeleccionada:Pelicula = {id_pelicula:0,titulo:'',direccion:'',genero:'',foto:''};

    seleccionPelicula(peliculaParam:Pelicula){
        this.peliculaSeleccionada = peliculaParam;
    }
}