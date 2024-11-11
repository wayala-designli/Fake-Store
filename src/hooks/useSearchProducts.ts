/* eslint-disable react-hooks/exhaustive-deps */
import {Product} from '@domain/models/Product';
import {useEffect, useState} from 'react';

export const useSearchProducts = (productsList: Product[]) => {
  const [query, setQuery] = useState('');
  const [isFiltering, setIsFiltering] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const onHandleFilterProducts = (): Product[] => {
    if (!query) return productsList;

    return productsList.filter(
      product =>
        product?.name?.toLowerCase().includes(query?.toLowerCase()) ||
        product?.categoryName?.toLowerCase().includes(query?.toLowerCase()),
    );
  };

  useEffect(() => {
    if (!query) return setFilteredProducts(productsList);

    setIsFiltering(true);
    setFilteredProducts([]);
    const delayDebounceFn = setTimeout(() => {
      setFilteredProducts(onHandleFilterProducts());
      setIsFiltering(false);
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  useEffect(() => {
    if (productsList) setFilteredProducts(productsList);
  }, [productsList]);

  return {filteredProducts, setQuery, query, isFiltering};
};
