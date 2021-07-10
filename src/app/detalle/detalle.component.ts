import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from '../entidades/pelicula';
import { Genero } from '../entidades/genero';
import { PeliculaService } from '../servicios/pelicula.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  //@Input()
  pelicula:Pelicula= {id_pelicula:0,titulo:'',director:'',genero:'',foto:''};
  
  id: number = 0;
  
  generos:Genero[] = [];
  id_genero:number = 1;

  constructor(
    private svcPelicula:PeliculaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => this.id= params['id_pelicula_param'])
    this.getPeliculaXId();
   // this.pelicula.titulo = '';
   this.getGeneros();
  }


  getPeliculaXId(){
    this.svcPelicula.obtenerPeliculaXId(this.id)
      .subscribe(data => this.pelicula = data)
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
      .subscribe(data => {
        if(data.affectedRows === 1){
          localStorage.setItem('mensaje','OK');
          this.router.navigate(["/listado"])
        }
      })
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
