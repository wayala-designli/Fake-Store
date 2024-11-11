import {client} from '@api/client';
import { Product } from '@domain/models/Product';

export const getAllProducts = async (offset: number, limit: number): Promise<Product[]> => {
  try {
    const data = await client(`/products?offset=${offset}&limit=${limit}`);
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
