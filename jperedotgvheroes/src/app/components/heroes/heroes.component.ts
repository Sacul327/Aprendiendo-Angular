import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
// Necesitamos importar esto para poder recibir los parametros
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  constructor( private _heroesService: HeroesService,
               private ruta: Router) {
    console.log('Constructor');
    }


  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

  // Para saber que heroe vamos a mostrar
  verHeroe( index: number ) {
    console.log(index);
    this.ruta.navigate( ['/heroe', index]);
  }

  buscarHeroes( termino:string):Heroe[]{
    // Creo una variable de arreglo de heroe
    let heroeArr: Heroe[] = [];
    termino = termino.toLowerCase();
    for ( let heroe of this.heroes ){
      let nombre = heroe.nombre.toLowerCase();
      if ( nombre.indexOf( termino ) >= 0 ){
          console.log(heroeArr.push(heroe));
      }
    }
    return heroeArr;
  }

}


