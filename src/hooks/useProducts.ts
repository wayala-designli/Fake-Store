/* eslint-disable react-hooks/exhaustive-deps */
import {Product} from '@domain/models/Product';
import {useEffect, useState} from 'react';
import {useNetworkCheck} from './useNetworkCheck';
import useProductStore from '@store/productStore';
import {errorMessage} from '@constants';
import {showWarningToast} from '@utils/';
import {getAllProducts} from '@api/services';

export const useProducts = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const {isConnected} = useNetworkCheck();
  const {offlineProducts, setProducts} = useProductStore();
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const LIMIT = 20;

  useEffect(() => {
    if (!isConnected && offlineProducts.length > 0) {
      setProductList(offlineProducts);
      setIsLoading(false);
    }
  }, [isConnected, offlineProducts]);

  useEffect(() => {
    onGetProducts();
  }, [offset, isConnected]);

  const onGetProducts = async () => {
    if (!isConnected) return;
    try {
      const data = await getAllProducts(offset, LIMIT);
      if (offset === 0) {
        setProductList(data);
        setProducts(data);
      } else {
        setProductList(prevItems => [...prevItems, ...data]);
        setProducts([...offlineProducts, ...data]);
      }
      if (data.length === 0 || data.length < LIMIT) {
        setHasMore(false);
      }
    } catch {
      showWarningToast(errorMessage.generalError);
      setProductList([]);
    } finally {
      setIsLoadingMore(false);
      setIsLoading(false);
    }
  };

  const loadMoreItems = () => {
    if (hasMore && !isLoadingMore && productList.length > 0 && isConnected) {
      setIsLoadingMore(true);
      setOffset(prevOffset => prevOffset + LIMIT);
    }
  };

  const onRefresh = () => {
    setOffset(0);
    setHasMore(true);
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  return {
    productList,
    isLoading,
    loadMoreItems,
    onRefresh,
    isRefreshing,
    isLoadingMore,
  };
};
