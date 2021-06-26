import { Injectable } from '@angular/core';
import { PELICULAS } from '../mock-peliculas';
import { Pelicula } from '../entidades/pelicula';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EjemploService {

  constructor(private http:HttpClient) { }
}
