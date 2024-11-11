export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: {
    id: number;
    image: string;
    name: string;
  };
  images: string[];
  creationAt: string;
  updatedAt: string;
};

export interface IProductCard {
  product: Product;
}

export interface IProductsHeader {
  query: string;
  setQuery: (value: string) => void;
}
