import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  barrio:barrios[]=[{
      barrioId:1,
      nombreBarrio:"EL BARRIO DE RIVER: CALLES CORTAS, BULEVARES Y TRANQUILIDAD BIEN DE BARRIO",
      description:"Aunque se tornen un poco caóticas los días de partido, el resto del tiempo estas callecitas son propiedad de unos pocos vecinos afortunados. La magia sucede en el triángulo que forman las avenidas Libertador, Figueroa Alcorta y Monroe. Allí, un boulevard y variadas calles cortas (muchas veces solo conducen de regreso a una suerte de rotonda principal) conforman un paseo tranquilísimo, en el que casas bajas -aunque no por eso menos espléndidas, en varios casos- contrastan con las torres que se erigen por detrás. Si bien han ido surgiendo algunos bares y restaurantes (New Jonathan es un bar clásico de clásicos de este barrio), lo cierto es que su tranquilidad radica en la cantidad de casas particulares y la vida bien vecinal, en la que son comunes escenas de sillas en la vereda y charlas de puerta a puerta.",
      imageUrl:"/assets/img/barrios/barrioRiver.jpg"
    },
    {
      barrioId:2,
      nombreBarrio:"EL BARRIO INGLÉS DE CABALLITO: UNA FRONDOSA ARBOLEDA Y UNA ARQUITECTURA EXQUISITA",
      description:"Son apenas seis manzanas, pero componen el oasis más perfecto en un barrio que en otros sectores puede ser muy movido y comercial. Con límite entre las avenidas Pedro Goyena y del Barco Centenera y las calles Valle y Emilio Mitre, este barrio, como su nombre lo indica, rebosa de antiguas casonas de estilo inglés, todas de una belleza y un cuidado tal que dan ganas de instalarse a vivir en alguna de inmediato. O al menos, a jugar a elegir en cuál nos quedaríamos. Acompañan el paseo árboles frondosos y sombra de la buena, así como la sensación de estar de viaje en algún otro país. Con custodia policial propia (contratada por los vecinos), además, es uno de los paseos más relajados de la ciudad. Tras recorrer las distintas manzanas y admirarse con su arquitectura, recomendamos sentarse a comer algo rico en la sucursal de Le Blé de Valle y Emilio Mitre, justo en un extremo del barrio. Sus mesas afuera permitirán compartir el momento con nuestro mejor amigo.",
      imageUrl:"/assets/img/barrios/caballito.jpg"
    },
    {
      barrioId:3,
      nombreBarrio:"BELGRANO R: VEREDAS ANCHAS, CALLES TRANQUILAS Y LA ESPECTACULAR MELIÁN",
      description:"A riesgo de sonar repetitiva, nuevamente elijo recomendar un barrio con mucha impronta inglesa. Pero es que si el barrio inglés de Caballito ofrecía casonas impactantes, Belgrano R redobla la apuesta en tamaño, cantidad y hasta en ancho de veredas (haciendo a más comodidad incluso para pasear y apreciarlas). Y aunque la mayoría de sus calles están repletas de casas señoriales, la recomendación de MALEVA hace énfasis en una particular: Melián. De esas avenidas atípicas, sin caos de tráfico ni permanente ruido, su espléndido boulevard genera una luz intermitente digna de dedicarle poesías. O, al menos, caminar bajo su sombra despacito y sin apuro, observando la arquitectura de un Buenos Aires de otro tiempo, al ritmo que nuestro perro elija en su exploración de esta parte del mundo.",
      imageUrl:"/assets/img/barrios/belgranoR.jpg"
    },
    {
      barrioId:4,
      nombreBarrio:"BELGRANO C: ENTRE EMBAJADAS Y TORRES (AQUÍ LOS QUE PASEAN  A SUS PERROS TE SALUDAN Y SE SABEN EL NOMBRE DE TU MASCOTA)",
      description:"La creencia popular es que su C es por comercial (aunque en realidad responde al nombre de la estación de tren, que alguna vez perteneció al Ferrocarril Central Argentino, y se distinguía de la estación de Belgrano R por el adjetivo “Central”), pero hay una gran porción del barrio que es absolutamente residencial y calma. Entre las avenidas Juramento, Cabildo, Libertador y Federico Lacroze se expande un mar de calles plenas de torres, varias casas, algunos colegios y unas cuantas y muy señoriales embajadas. Se suman al encanto sus variados árboles, que logran túneles increíbles como el de la subida de Virrey Loreto tras Luis María Campos, y que hacen a un paseo refrescante aún en pleno verano. En estas calles, los caminantes se conocen y hasta saludan a los perros por su nombre, haciendo a una versión de la vida citadina que parece combinar lo mejor de dos mundos: urbanismo y familiaridad.",
      imageUrl:"/assets/img/barrios/Belgranoc.jpg"
    },
    {
      barrioId:5,
      nombreBarrio:"SAAVEDRA: UN BARRIO CON RINCONES DETENIDOS EN EL TIEMPO (EL LUGAR PERFECTO PARA UN PASEO PERRUNO SIN RELOJ)",
      description:"La sensación es la de haber entrado en un túnel del tiempo. Alrededor del Parque Carlos Mugica (y a pasos del enorme Parque Sarmiento), las cuadras que se acercan hasta la avenida Crisólogo Larralde no parecen pertenecer a Saavedra. Casas bajas y casi sin rejas, algunas sencillas y algunas más arregladas, y todas con prolijos jardines delanteros (una moda que desgraciadamente va cayendo en desuso), generan una estética que recuerda a las ciudades de mar de otras décadas. En el medio, algunos autos estacionados, un salpicado de árboles y vecinos caminando o andando en bicicleta. Sea sábado a la tarde o miércoles a la mañana, aquí la calma impera sin distinción de agenda. Todo parece estar dado para un paseo sin reloj, de esos para los que cada tanto deberíamos poder hacernos el tiempo para ofrecerles a nuestros perros.",
      imageUrl:"/assets/img/barrios/saavedra.jpg"
    },
    {
      barrioId:6,
      nombreBarrio:"PUERTO MADERO: LA POSIBILIDAD DE SOLTARLOS UN RATO",
      description:"Es vox pópuli: Puerto Madero es uno de los barrios más seguros de la ciudad. Pero además, es también un barrio de veredas anchas y comodísimas y expandidos parques y reservas. Por eso, quizás sea de los lugares más aptos para que nuestras mascotas ejerciten por un rato su libertad. Si están entrenados y saben que no se irán corriendo apenas les suelten la correa, caminar por el largo de Juana Manso o Aimé Painé mientras el perro camina a su gusto será un buen ejercicio para ambos. Pero si aún están en período de prueba al respecto de la libertad, el Parque Micaela Bastidas, sobre Julieta Lanteri, es ideal: con unas escaleras que lo separan más todavía de la calle, provee resguardo y verde extendido por varios cientos de metros. Los fines de semana es un sector ideal para acercarse con un buen picnic y un libro. Eso sí, para entonces tengan la correa a mano: puede que sea la única forma de mantener a su perro alejado de la comida.",
      imageUrl:"/assets/img/barrios/Puertomadero.jpg"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
export interface barrios {
  barrioId: number;
  nombreBarrio: string;
  description: string;
  imageUrl: string;
}