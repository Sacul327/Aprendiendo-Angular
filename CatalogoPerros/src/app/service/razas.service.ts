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
    imageUrl:"assets/img/pastor-blanco-suizo.jpg",
    color: "Blanco",
    vida: "12 años"
 },
{
    productId:2,
    razaPerro:"Pastor Aleman negro", 
    tamanio:"Tamaño: grande",     
    description:"De la mezcla de las distintas clases de perros sale los diferentes colores que hoy en día se conocen de la raza pastor alemán.",
    imageUrl:"assets/img/pastornegrosolido.jpg",
    color:"Negro solido",
    vida: "12 años"
 },
 {
  productId:3,
  razaPerro:"Galgo Español", 
  tamanio:"Tamaño: grande",     
  description:"Tiene un físico ligero y estilizado, con patas largas y pecho voluminoso, que le permite alcanzar grandes velocidades.",
  imageUrl:"assets/img/galgoespaniol.jpg",
  color: "barcino o atigrado, negro, barquillo, tostado, canela, amarillo, rojo, blanco, berrendo o pío.",
  vida: "12 – 15 años"
 },
 {
  productId:4,
  razaPerro:"Chihuahua", 
  tamanio:"Tamaño: muy chico",     
  description:"Tiene un físico ligero y estilizado, con patas largas y pecho voluminoso, que le permite alcanzar grandes velocidades.",
  imageUrl:"assets/img/chihuahua.jpg",
  color: "Negro, blanco, chocolate, crema, gold.",
  vida: "12 – 20 años"
 },
 {
  productId:5,
  razaPerro:"Bulldog", 
  tamanio:"Tamaño: chico",     
  description:"Tiene un físico ligero y estilizado, con patas largas y pecho voluminoso, que le permite alcanzar grandes velocidades.",
  imageUrl:"assets/img/bulldog.jpg",
  color:"beige, rojizo, blanco, barcino o atigrado, manchado blanco y negro.",
  vida: " 8 – 10 years"
 },
 {
  productId:6,
  razaPerro:"Husky Siberiano", 
  tamanio:"Tamaño: Mediano-Grande",     
  description:"El husky siberiano es una raza de perro de trabajo originaria del noreste de Siberia (Chukotka, Rusia). Esta raza presenta un acusado parecido con el lobo. Originalmente fue criado por la tribu chukchi, en la que se utilizaba como perro de compañía para pastorear a los ciervos, tirar de los trineos y mantener calientes a los niños; en la actualidad se encuentra en muy diversas zonas del mundo.",
  imageUrl:"assets/img/siberian-husky_1549.jpg",
  color:"blanco, agoutí y blanco, negro y blanco, sable y blanco, rojo y blanco, gris y plata, siendo estos dos últimos más frecuentes en las hembras. ",
  vida: " macho 10 - 12 años / hembra 12 - 16 años."
 },
 {
  productId:7,
  razaPerro:"Shar Pei", 
  tamanio:"Tamaño: Chico-Mediano",     
  description:"El Shar Pei es una raza de perros de la que existen noticias desde aproximadamente el año 206 a. C. También fue el animal símbolo de la dinastía Han para esta dinastía y para otras personas provee energía, cariño y amor.8​ El significado de shar pei en chino es Piel de Arena.",
  imageUrl:"assets/img/sharpei_adult.jpg",
  color:"beige",
  vida: "9 – 11 años."
 },
 {
  productId:8,
  razaPerro:"Alaskan Malamute", 
  tamanio:"Tamaño: Grande",     
  description:"El malamute de Alaska o alaskan malamute es un perro originario de la zona ártica, una de las razas más antiguas dentro de los perros de trineo. Como perro de trineo es naturalmente fuerte. Es capaz de cargar pesos considerables (hasta 20 kg) durante decenas de kilómetros.",
  imageUrl:"assets/img/Alaskan_Malamute_Lead_Shot.jpg",
  color:"negros con blanco, cafés, rojizos, y recientemente se halló un color de malamute blanco.",
  vida: "10 – 12 años."
 },
 

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
  color: string;
  vida: string;
}