export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  categoryName: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
};

export interface IProductCard{
  product: Product
}

export interface IProductsHeader {
  query: string
  setQuery: (value: string) => void
}