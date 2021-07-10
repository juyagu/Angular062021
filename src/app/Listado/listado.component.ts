import { Component,OnInit } from '@angular/core';

import { PELICULAS } from '../mock-peliculas';
import { Pelicula } from '../entidades/pelicula';
import { EjemploService } from '../servicios/ejemplo.service';
import { PeliculaService } from '../servicios/pelicula.service';
import { Router } from '@angular/router'; 

@Component({
    selector: 'app-listado',
    templateUrl: './listado.component.html',
    providers: [EjemploService]
})
export class ListadoComponent implements OnInit{
    //peliculaSeleccionada:Pelicula = {id_pelicula:0,titulo:'',director:'',genero:'',foto:''};
    peliculaSeleccionada:number=0;
    peliculas:Pelicula[] = [];
    mensaje:string='';

    //servicioEjemplo = new EjemploService();

    // Voy a injectar una instancia de EjemploService, y al mismo tiempo la voy a aguardar en el atributo privado de clase svcEjemplo
    /*
        private svcEjemplo:EjemploService = new EjemploService(parametros);
        private servicioPelicula:PeliculaService = new PeliculaService();
        
    */
    constructor(private svcEjemplo: EjemploService, private servicioPelicula:PeliculaService,private router: Router){}
    
    //peliculas:Pelicula[]=PELICULAS;
    ngOnInit(){
        this.obtenerPeliculas();
        if(localStorage.getItem('mensaje') !== null){
            this.mensaje = localStorage.getItem('mensaje') || '';
            localStorage.removeItem('mensaje');
        }
    }
    
    obtenerPeliculas(){
        //this.peliculas = this.servicioPelicula.getPeliculas();
        try{
            this.servicioPelicula.getPeliculas()
            .subscribe(data => this.peliculas = data)
        }catch(err){
            console.log(err)
        }
        
    }

    seleccionPelicula(peliculaParam:number){
        //this.peliculaSeleccionada = peliculaParam;
        this.router.navigate(['/detalle/'+ peliculaParam])
    }

    modificarPelicula(){
        //this.servicioPelicula.modificarPelicula(55);
    }




}