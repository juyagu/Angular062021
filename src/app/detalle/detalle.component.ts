import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from '../entidades/pelicula';
import { Genero } from '../entidades/genero';
import { PeliculaService } from '../servicios/pelicula.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input()
  pelicula:Pelicula= {id_pelicula:0,titulo:'',director:'',genero:'',foto:''};
  
  generos:Genero[] = [];
  id_genero:number = 1;

  constructor(private svcPelicula:PeliculaService) { }

  ngOnInit(): void {
   // this.pelicula.titulo = '';
   this.getGeneros();
  }

  getGeneros(){
    this.svcPelicula.obtenerGeneros()
      .subscribe(data => this.generos = data);
  }
  updateObjetoPeli(){
    this.pelicula.id_genero = this.id_genero;
  }

  actualizarPelicula(){
    this.pelicula.id_genero = Number(this.id_genero)
    this.svcPelicula.modificarPelicula(this.pelicula)
      .subscribe(data => console.log(data))
  }


  /*
    [propiedades] => <img [src]="pelicula.foto"
    (evento) => <tr (click)="funcionents()"
    [(ngModel)] =>  [] ()
  */


  /*
    ng-untouched => ng-touched
    ng-pristine => ng-dirty
    ng-valid => ng-invalid
  */

}
