import { getParseErrors } from '@angular/compiler/public_api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RazasService {

  raza:razas[]=[{
    productId:1,
    razaPerro:"Pastor suizo",
    tamanio:"Tamaño: grande",          
    description:"El carácter del pastor blanco suizo está marcado por la confianza en sí mismo. La raza es serena, pero cuando la situación lo exige sus instintos protectores lo pondrán alerta y listo para servir.",
    imageUrl:"assets/img/pastor-blanco-suizo.jpg"
 },
{
    productId:2,
    razaPerro:"Pastor aleman negro", 
    tamanio:"Tamaño: grande",     
    description:"De la mezcla de las distintas clases de perros sale los diferentes colores que hoy en día se conocen de la raza pastor alemán.",
    imageUrl:"assets/img/pastornegrosolido.jpg"
 },
 {
  productId:3,
  razaPerro:"Galgo Español", 
  tamanio:"Tamaño: grande",     
  description:"Tiene un físico ligero y estilizado, con patas largas y pecho voluminoso, que le permite alcanzar grandes velocidades.",
  imageUrl:"assets/img/galgoespaniol.jpg"
 },
 {
  productId:4,
  razaPerro:"chihuahua", 
  tamanio:"Tamaño: muy chico",     
  description:"Tiene un físico ligero y estilizado, con patas largas y pecho voluminoso, que le permite alcanzar grandes velocidades.",
  imageUrl:"assets/img/chihuahua.jpg"
 },
 {
  productId:5,
  razaPerro:"bulldog", 
  tamanio:"Tamaño: chico",     
  description:"Tiene un físico ligero y estilizado, con patas largas y pecho voluminoso, que le permite alcanzar grandes velocidades.",
  imageUrl:"assets/img/bulldog.jpg"
 }
];
getRazas(): razas[] {
  return this.raza;
}

// Necesitamos que nos regrese un solo heroe
getPerro(index: string) {
  return this.raza[ index ];
  
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

constructor() {
console.log(' Servicio listo para ser usado ');
}

}
export interface razas {
  productId: number;
  razaPerro: string;
  tamanio: string;
  description: string;
  imageUrl: string;
}