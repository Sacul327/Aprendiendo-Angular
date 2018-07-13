import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {

  constructor() { }
   razas:any[]=[{
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
            imageUrl:"assets/img/pastor-aleman-negro-solido.jpg"
         },
         {
          productId:3,
          razaPerro:"Galgo Español", 
          tamanio:"Tamaño: grande",     
          description:"Tiene un físico ligero y estilizado, con patas largas y pecho voluminoso, que le permite alcanzar grandes velocidades.",
          imageUrl:"assets/img/pastor-aleman-negro-solido.jpg"
         },
         {
          productId:4,
          razaPerro:"chihuahua", 
          tamanio:"Tamaño: muy chico",     
          description:"Tiene un físico ligero y estilizado, con patas largas y pecho voluminoso, que le permite alcanzar grandes velocidades.",
          imageUrl:"assets/img/pastor-aleman-negro-solido.jpg"
         },
         {
          productId:5,
          razaPerro:"bulldog", 
          tamanio:"Tamaño: chico",     
          description:"Tiene un físico ligero y estilizado, con patas largas y pecho voluminoso, que le permite alcanzar grandes velocidades.",
          imageUrl:"assets/img/pastor-aleman-negro-solido.jpg"
         }
        ]

  

}
