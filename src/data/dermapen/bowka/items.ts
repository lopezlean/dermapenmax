import type ItemInterface from "~/interfaces/item.interface";

import m1 from "~/images/bowka/m1.jpg";
const items: ItemInterface[] = [
  {
    url: "https://amzn.to/3Q0VKze",
    slug: "/bowka/bowka-m1",
    image: m1,
    reviewsUrl: "https://amzn.to/3PVaShH",
    preTitle: "El mejor precio",
    title: "Dermapen BOWKA Profesional Electrico",
    excerpt:
      "BOWKA Profesional Electrico Derma Pen Facial Cabezales Reafirmante Arrugas Estrías Cicatriz de acne Perdida de cabello para y corporal",
    description: `<ul class="a-unordered-list a-vertical a-spacing-mini">  <li class="a-spacing-mini"><span class="a-list-item"> Derma pen eléctrica de nueva versión equipada con pantalla LCD que indica 7 niveles de velocidad. Puede ajustar fácilmente los 7 engranajes de velocidad de 6,000 rpm a 24,000 rpm presionando brevemente el botón de encendido. Al girar el dial,Longitud de la aguja: 025 mm a partir.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Vienen con 12 cartuchos sellados individualmente (12 pines x 6, 36 pines x 6) que son seguros, convenientes e higiénicos. Estos cartuchos de agujas son desechables y de un solo uso. Por favor, no comparta con otros para evitar infecciones cruzadas.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> La Derma pen facial ​admite modos con cable e inalámbricos (viene con un cable USB sin cargador). El diseño compacto y liviano es ideal para llevarlo contigo mientras viajas.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> cartuchos profesionales de acero inoxidable, cartuchos endurecidos sin colorantes y carcasa de metal completo, batería recargable de iones de litio y diseño ergonómico, una operación con un solo botón es muy fácil, incluso los principiantes pueden dominarlos rápidamente.  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Cárguelo durante 4 a 6 horas para el primer uso.  </span></li>  </ul>`,

    features: {
      brand: "BOWKA",
      model: "M1",
      battery: "Se usa conectado a la corriente eléctrica",
      wireless: "No",
      rpm: "-",
      speed: "5 velocidades",
      ledDisplay: "No",
      other: "",
    },
    stars: 4.1,
    reviews: 240,
    reviewItems: [],
    advantages: ["Precio", "incluye 4 cartuchos"],
    disadvantages: ["Cartuchos no compatibles con otras marcas"],
  },
];

export default items;
