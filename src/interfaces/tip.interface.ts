interface TipInterface {
  slug: string;
  data: {
    title: string;
    excerpt?: string;
    image: string;
    imageAlt?: string;
    tags?: string[];
  };
}

export default TipInterface;
