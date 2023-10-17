import type ItemInterface from "~/interfaces/item.interface";

const items: ItemInterface[] = [
  {
    url: "https://amzn.to/45tNmOF",
    reviewsUrl: "https://amzn.to/45tNmOF",
    image: "/images/mrpin/e30.jpg",
    slug: "/mrpin/mrpin-e30",
    preTitle: "M",
    title: "Mr. Pin E30 Plus",
    excerpt:
      "Mr.Pin E30 plus es un dermapen inalámbrico con 20 piezas de cartuchos de repuesto diferentes tamaños – para el cuidado de la piel y el cabello",
    description: `<ul class="a-unordered-list a-vertical a-spacing-mini">  <li class="a-spacing-mini"><span class="a-list-item"> Todos nuestros productos son originales y certificados por certificaciones internacionales de calidad ISO - CE  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Batería integrada para que puedas trabajar en él de forma inalámbrica o cableada  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Cinco niveles de velocidad  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Cuerpo de metal antideslizante y cómodo para el dedo  </span></li>  <li class="a-spacing-mini"><span class="a-list-item"> Los cartuchos E30+ son los mismos que los cartuchos E30, M5, M7, N2  </span></li>  </ul>`,
    features: {
      brand: "Mr. pin",
      model: "E30 Plus",
      battery: "Bateria de 250mAh integrada",
      wireless: "Si",
      rpm: "8500",
      speed: "5 velocidades",
      ledDisplay: "No",
      other: "",
    },
    stars: 0,
    reviews: 0,
    advantages: [
      "20 cartuchos incluidos",
      "Cartuchos compatibles  con Dr. pen",
    ],
    disadvantages: [],
    reviewItems: [],
  },
];

export default items;
