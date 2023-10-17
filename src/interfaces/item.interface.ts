export interface ItemFeatureInterface {
  brand: string;
  model: string;
  battery: string;
  wireless: string;
  rpm: string;
  speed: string;
  ledDisplay: string;
  other: string;
}

export interface DescriptionWithFeaturesInterface {
  title: string;
  description: string | string[];
  image?: string;
}

export interface ReviewItemInterface {
  title: string;
  body: string;
  stars: number;
  name: string;
}

export default interface ItemInterface {
  image: string;
  title: string;
  slug: string;
  preTitle: string;
  excerpt: string;
  description: string;
  descriptionWithFeatures?: DescriptionWithFeaturesInterface[];
  fullDescriptionMarkdown?: string;
  features: ItemFeatureInterface;

  reviewItems: ReviewItemInterface[];

  url: string;

  stars: number;
  reviews: number;
  reviewsUrl: string;

  advantages: string[];
  disadvantages: string[];
}
