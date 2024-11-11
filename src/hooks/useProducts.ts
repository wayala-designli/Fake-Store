import {Product} from '@domain/models/Product';
import {products} from '@mocks';
import {useEffect, useState} from 'react';

export const useProducts = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    onGetProducts();
  }, []);

  const onGetProducts = () => {
    setProductList(products);
    setIsLoading(false);
  };

  return {productList, isLoading};
};
