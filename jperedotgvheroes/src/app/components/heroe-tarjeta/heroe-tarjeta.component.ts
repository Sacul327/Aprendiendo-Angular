// Input le indica a Angular que una propiedad va ser recibida desde afuera
// Output
// Usualmente cuando queremos emitir una salida con el output usamos el eventEmitter
import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number;

  // debemos indicarle que va emitir esta función
  @Output() heroeSeleccionado: EventEmitter<number>;
  constructor(private router: Router) {
    // Inicializo el eventemitter
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit() {
  }

  verHeroe() {
    console.log( this.index);
    this.router.navigate(['/heroe', this.index]);
    this.heroeSeleccionado.emit(this.index);
  }

}
