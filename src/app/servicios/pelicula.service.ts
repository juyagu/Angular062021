import { Injectable } from '@angular/core';
import { PELICULAS } from '../mock-peliculas';
import { Pelicula } from '../entidades/pelicula';


@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor() { }


  getPeliculas():Pelicula[]{
    return PELICULAS;
  }

  modificarPelicula(id:number){
    console.log('Pelicula modificada');
  }
}
