import {client} from '@api/client';
import { Product } from '@domain/models/Product';

export const getProductsByName = async (title: string, offset: number, limit: number): Promise<Product[]> => {
  try {
    const data = await client(`/products?title=${title}&offset=${offset}&limit=${limit}`);
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
