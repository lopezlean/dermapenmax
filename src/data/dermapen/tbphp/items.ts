import type ItemInterface from "~/interfaces/item.interface";

import m1 from "~/images/tbphp/m1.jpg";
import p20rl from "~/images/tbphp/p20rl.jpg";

const items: ItemInterface[] = [
  {
    image: m1,
    url: "https://amzn.to/46wtjjE",
    reviewsUrl: "https://amzn.to/3ZZxjqx",
    preTitle: "El mejor calidad precio",
    slug: "/tbphp/tbphp-m1",
    title: "TBPHP M1 Derma pen eléctrico",
    excerpt:
      " Derma pen eléctrico en Aguja Pantalla LCD con pantalla LCD y 7 Niveles de Velocidad,incluye 12 cartuchos (plata)",
    description: `<ul class="a-unordered-list a-vertical a-spacing-mini">  <li class="a-spacing-mini"><span class="a-list-item"> Derma pen eléctrica de nueva versión equipada con pantalla LCD que indica 7 niveles de velocidad. Puede ajustar fácilmente los 7 engranajes de velocidad de 6,000 rpm a 24,000 rpm presionando brevemente el botón de encendido. Al girar el dial,Longitud de la aguja: 025 mm a partir.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Vienen con 12 cartuchos sellados individualmente (12 pines x 6, 36 pines x 6) que son seguros, convenientes e higiénicos. Estos cartuchos de agujas son desechables y de un solo uso. Por favor, no comparta con otros para evitar infecciones cruzadas.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> La Derma pen facial ​admite modos con cable e inalámbricos (viene con un cable USB sin cargador). El diseño compacto y liviano es ideal para llevarlo contigo mientras viajas.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> cartuchos profesionales de acero inoxidable, cartuchos endurecidos sin colorantes y carcasa de metal completo, batería recargable de iones de litio y diseño ergonómico, una operación con un solo botón es muy fácil, incluso los principiantes pueden dominarlos rápidamente.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Cárguelo durante 4 a 6 horas para el primer uso.  </span></li>  </ul>`,

    features: {
      brand: "TBPHP",
      model: "M1",
      battery: "Bateria de litio incorporada",
      wireless: "Si",
      rpm: "6000-24.000",
      speed: "7 velocidades",
      ledDisplay: "Si",
      other: "",
    },
    stars: 4.3,
    reviews: 695,
    reviewItems: [],
    advantages: [
      "Precio",
      "Cupon de 5% de descuentos en la primer entrega",
      "incluye 12 cartuchos",
    ],
    disadvantages: ["Cartuchos no compatibles con otras marcas"],
  },
  {
    image: p20rl,
    reviewsUrl: "https://amzn.to/3Fjbp89",
    reviewItems: [],
    preTitle: "Incluye 3 pilas recargables",
    url: "https://amzn.to/3FkZDu2",
    title: "TBPHP P20RL",
    slug: "/tbphp/p20rl",
    excerpt:
      "Derma pen Recargables con pantalla LCD y 8 niveles incluye 25 Cartuchos y 3 pilas, Metal",
    description: `<ul class="a-unordered-list a-vertical a-spacing-mini">  <li class="a-spacing-mini"><span class="a-list-item"> <b>【8 NIVELES DE VELOCIDAD Y OPCIONES AJUSTABLES】</b>Puede ajustar fácilmente los 8 engranajes, hasta 6000 ~ 26000 giros por minuto.Longitud de la aguja: 025 mm a partir.Puede seleccionar fácilmente el nivel de velocidad y la longitud que se adapten a sus necesidades, vea claramente el nivel en la pantalla LCD.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> <b>【FÁCIL DE USAR EN CASA】</b>cartuchos profesionales de acero inoxidable, cartuchos endurecidos sin colorantes y carcasa de metal completo, batería recargable de iones de litio y diseño ergonómico, una operación con un solo botón es muy fácil, incluso los principiantes pueden dominarlos rápidamente. Haga clic en el botón durante 1 segundos para encender la máquina y haga clic nuevamente para cambiar entre 8 velocidades. Se pueden editar tanto con cables como inalámbricos.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> <b>【25 Cartuchos Envueltos Individualmente】</b>Los kits de microagujas están equipados con 25 cartuchos de microagujas desechables, envueltos individualmente para mayor seguridad y comodidad. Higiénico y práctico, el cartucho se puede reemplazar después de cada uso. Con 5 piezas x 12 agujas,5 piezas x 24 agujas,5 piezas x 36 agujas,5 piezas x 42 agujas,5 piezas x Nano agujas.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> <b>【4 luces diferentes】</b>Hay 4 colores de fotones (luz azul, luz verde, luz blanca, luz naranja). Para obtener una descripción detallada de las diferentes funciones de los fotones de color, consulte la descripción.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> <b>【Carga y Portabilidad por USB】</b>Diseño recargable, operación con cable e inalámbrica.conveniente para el uso. Equipado con 2 baterías de litio adicionales.  </span></li>  </ul>`,

    features: {
      brand: "TBPHP",
      model: "P20RL",
      battery: "3 baterias de litio incorporada de 500mAh",
      wireless: "Si",
      rpm: "6000-24.000",
      speed: "7 velocidades",
      ledDisplay: "Si",
      other: "",
    },
    stars: 4.3,
    reviews: 695,
    advantages: [
      "Posibilidad de usarlo conectado a la corriente eléctrica",
      "Cupon de 5% de descuentos en la primer entrega",
      "incluye 25 cartuchos",
    ],
    disadvantages: [],
  },
];

export default items;
