import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent{
  
  heroes:Heroe[]=[];

  constructor(private heroesService: HeroesService){
    console.log('Constructor');
   }

  ngOnInit() {
    this.heroes=this.heroesService.getHeroes();
    console.log(this.heroes);
    
  }

}
