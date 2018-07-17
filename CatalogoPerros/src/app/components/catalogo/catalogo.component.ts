import { Component, OnInit } from '@angular/core';
import { razas, RazasService } from '../../service/razas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})

export class CatalogoComponent {

  raza: razas[] = [];
  constructor( private _razasService: RazasService,
               private ruta: Router) {
    console.log('Constructor');
    }


  ngOnInit() {
    this.raza = this._razasService.getRazas();
    console.log(this.raza);
  }

  // Para saber que heroe vamos a mostrar
  verPerro( index: number ) {
    console.log(index);
    this.ruta.navigate( ['/perro', index]);
  }
  buscarPerros( termino:string):razas[]{
    // Creo una variable de arreglo de heroe
    let razaArr: razas[] = [];
    termino = termino.toLowerCase();
    for ( let raz of this.raza ){
      let nombre = raz.razaPerro.toLowerCase();
      if ( nombre.indexOf( termino ) >= 0 ){
          console.log(razaArr.push(raz));
      }
    }
    return razaArr;
  }

}

