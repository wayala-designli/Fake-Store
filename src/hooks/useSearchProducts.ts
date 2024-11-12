/* eslint-disable react-hooks/exhaustive-deps */
import {Product} from '@domain/models/Product';
import {useEffect, useState} from 'react';
import {useNetworkCheck} from './useNetworkCheck';
import {getProductsByName} from '@api/services';
import {showWarningToast} from '@utils/';
import {errorMessage} from '@constants';

export const useSearchProducts = (productsList: Product[]) => {
  const [query, setQuery] = useState('');
  const [isFiltering, setIsFiltering] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const {isConnected} = useNetworkCheck();
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isLoadingMoreFilteredProducts, setIsLoadingMore] = useState(false);
  const LIMIT = 20;

  const onGetProductsByName = async () => {
    if (!isConnected) return;
    try {
      const data = await getProductsByName(query, offset, LIMIT);
      if (offset === 0) {
        setFilteredProducts(data);
      } else {
        setFilteredProducts(prevItems => [...prevItems, ...data]);
      }
      if (data.length === 0 || data.length < LIMIT) {
        setHasMore(false);
      }
    } catch {
      showWarningToast(errorMessage.generalError);
    } finally {
      setIsLoadingMore(false);
      setIsFiltering(false);
    }
  };

  const onHandleFilterProducts = () => {
    if (!query) return setFilteredProducts(productsList);

    if (isConnected) return onGetProductsByName();

    setFilteredProducts(
      productsList.filter(
        product =>
          product?.title?.toLowerCase().includes(query?.toLowerCase()) ||
          product?.category.name?.toLowerCase().includes(query?.toLowerCase()),
      ),
    );
    setIsFiltering(false);
  };

  const loadMoreFilteredItems = () => {
    if (
      hasMore &&
      !isLoadingMoreFilteredProducts &&
      filteredProducts.length > 0 &&
      isConnected
    ) {
      setIsLoadingMore(true);
      setOffset(prevOffset => prevOffset + LIMIT);
    }
  };

  useEffect(() => {
    if (!query) return setFilteredProducts(productsList);

    setIsFiltering(true);
    setFilteredProducts([]);
    const delayDebounceFn = setTimeout(() => {
      onHandleFilterProducts();
      setIsFiltering(false);
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  useEffect(() => {
    if (productsList) setFilteredProducts(productsList);
  }, [productsList]);

  useEffect(() => {
    if (offset !== 0) onGetProductsByName();
  }, [offset, query]);

  return {
    filteredProducts,
    setQuery,
    query,
    isFiltering,
    loadMoreFilteredItems,
    isLoadingMoreFilteredProducts,
  };
};
