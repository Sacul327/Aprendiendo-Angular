import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { HeroesComponent } from '../heroes/heroes.component';
 

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})


export class HeroeComponent  {
// Creo un objeto
  heroe: any = {};
 
  constructor( private activarRuta: ActivatedRoute,
               private heroeService: HeroesService ) {
    /* Esta funcion retornara un observador,un observador es como una promesa,
    es algo que esta pendiente de esos cambios.
    En parametros nos retorna los valores
    */
    this.activarRuta.params.subscribe( parametros => {
      console.log ( parametros );
      // Para ver el parámetro id podria ser, esto porque en la ruta mandamos el id:
      console.log ( parametros['id']);
      this.heroe = this.heroeService.getHero( parametros['id']);
      console.log (this.heroe);
    });
 
   }
}
