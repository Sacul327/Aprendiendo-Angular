import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RazasService } from '../../service/razas.service';

@Component({
  selector: 'app-perro',
  templateUrl: './perro.component.html',
  styleUrls: ['./perro.component.css']
})
export class PerroComponent{

  perro: any = {};

  constructor( private activarRuta: ActivatedRoute,
               private _razasService: RazasService ) {
    /* Esta funcion retornara un observador,un observador es como una promesa,
    es algo que esta pendiente de esos cambios.
    En parametros nos retorna los valores
    */
    this.activarRuta.params.subscribe( parametros => {
      console.log ( parametros );
      // Para ver el parámetro id podria ser, esto porque en la ruta mandamos el id:
      console.log ( parametros['id']);
      this.perro = this._razasService.getPerro( parametros['id']);
      console.log (this.perro);
    });

   }

}
