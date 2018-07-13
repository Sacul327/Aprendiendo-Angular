import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent{

  videos:any[]=[{
    productId:1,
    tituloVideo:"video 1",         
    description:"El carácter del pastor blanco suizo está marcado por la confianza en sí mismo. La raza es serena, pero cuando la situación lo exige sus instintos protectores lo pondrán alerta y listo para servir.",
    imageUrl:"/assets/img/pastor-blanco-suizo.jpg"
 },
{
    productId:2,
    tituloVideo:"video 2",
    description:"De la mezcla de las distintas clases de perros sale los diferentes colores que hoy en día se conocen de la raza pastor alemán.",
    imageUrl:"/.assets/img/pastor-aleman-negro-solido.jpg"
 },
 {
  productId:3,
  tituloVideo:"video 3",     
  description:"Tiene un físico ligero y estilizado, con patas largas y pecho voluminoso, que le permite alcanzar grandes velocidades.",
  imageUrl:"assets/img/pastor-aleman-negro-solido.jpg"
 }
]

}
