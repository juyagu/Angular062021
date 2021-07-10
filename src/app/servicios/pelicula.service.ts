import { Injectable } from '@angular/core';
import { PELICULAS } from '../mock-peliculas';
import { Pelicula } from '../entidades/pelicula';
import { Genero } from '../entidades/genero';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'token'
  })
}


@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor(private http:HttpClient) { }
  // private http:HttpCliente = new HttpClient();

  getPeliculas():Observable<Pelicula[]>{
    //return PELICULAS;
    return this.http.get<Pelicula[]>('http://localhost:3001/angular5/peliculas');
  }

  modificarPelicula(pelicula:Pelicula):Observable<any>{
     const id_pelicula = pelicula.id_pelicula;
     
     const url = `http://localhost:3001/angular5/peliculas/${id_pelicula}`;
     return this.http.put<any>(url,pelicula,httpOptions)
  }

  obtenerGeneros():Observable<Genero[]>{
    return this.http.get<Genero[]>('http://localhost:3001/angular5/generos');
  }
  
}
