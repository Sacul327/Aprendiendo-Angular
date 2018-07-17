import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RazasService, razas } from '../../service/razas.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  
  raza: any[] = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute,
              private _razasService: RazasService) {

   }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>{
      this.termino = params['termino'];
      this.raza = this._razasService.buscarPerros(params['termino']);
      console.log(this.raza);
      });
  }

}
