import { Component,OnInit } from '@angular/core';

import { PELICULAS } from '../mock-peliculas';
import { Pelicula } from '../entidades/pelicula';
import { EjemploService } from '../servicios/ejemplo.service';
import { PeliculaService } from '../servicios/pelicula.service';

@Component({
    selector: 'app-listado',
    templateUrl: './listado.component.html',
    providers: [EjemploService]
})
export class ListadoComponent implements OnInit{
    peliculaSeleccionada:Pelicula = {id_pelicula:0,titulo:'',director:'',genero:'',foto:''};
    peliculas:Pelicula[] = [];

    //servicioEjemplo = new EjemploService();

    // Voy a injectar una instancia de EjemploService, y al mismo tiempo la voy a aguardar en el atributo privado de clase svcEjemplo
    /*
        private svcEjemplo:EjemploService = new EjemploService(parametros);
        private servicioPelicula:PeliculaService = new PeliculaService();
        
    */
    constructor(private svcEjemplo: EjemploService, private servicioPelicula:PeliculaService){}
    
    //peliculas:Pelicula[]=PELICULAS;
    ngOnInit(){
        this.obtenerPeliculas();
    }
    
    obtenerPeliculas(){
        //this.peliculas = this.servicioPelicula.getPeliculas();
        this.servicioPelicula.getPeliculas()
            .subscribe(data => this.peliculas = data)
    }

    seleccionPelicula(peliculaParam:Pelicula){
        this.peliculaSeleccionada = peliculaParam;
    }

    modificarPelicula(){
        //this.servicioPelicula.modificarPelicula(55);
    }




}