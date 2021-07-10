import { Injectable } from '@angular/core';
import { PELICULAS } from '../mock-peliculas';
import { Pelicula } from '../entidades/pelicula';
import { Genero } from '../entidades/genero';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


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
    return this.http.get<Pelicula[]>('http://localhost:3001/angular5/peliculas')
      .pipe(
        catchError(this.handleError)
      )
  }

  modificarPelicula(pelicula:Pelicula):Observable<any>{
     const id_pelicula = pelicula.id_pelicula;
     
     const url = `http://localhost:3001/angular5/peliculas/${id_pelicula}`;
     return this.http.put<any>(url,pelicula,httpOptions)
     .pipe(
        catchError(this.handleError)
      )
  }

  obtenerGeneros():Observable<Genero[]>{
    return this.http.get<Genero[]>('http://localhost:3001/angular5/generos')
    .pipe(
      catchError(this.handleError)
    )
  }

  obtenerPeliculaXId(id:number):Observable<Pelicula>{
    return this.http.get<Pelicula>(`http://localhost:3001/angular5/peliculas/${id}`)
    .pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse){
    console.log(`El backend retorno un error cuyo código es ${error.status}, y que consiste en ${error.message}`);

    return throwError("Algo salio mal, intenta mas tarde");
  }
  
}
