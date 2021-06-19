import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from '../entidades/pelicula';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input()
  pelicula:Pelicula= {id_pelicula:0,titulo:'',direccion:'',genero:'',foto:''};
  
  constructor() { }

  ngOnInit(): void {
    this.pelicula.titulo = '';
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
