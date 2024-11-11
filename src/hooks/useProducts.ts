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
  const [error, setError] = useState<string | null>(null);
  const [offset, setOffset] = useState(0);
  const limit = 20;

  useEffect(() => {
    onGetProducts();
  }, []);

  useEffect(() => {
    if (!isConnected && offlineProducts.length > 0) {
      setProductList(offlineProducts);
      setIsLoading(false);
      showWarningToast(errorMessage.networkError);
    }
  }, [isConnected, offlineProducts]);

  const onGetProducts = async () => {
    try {
      const data = await getAllProducts(offset, limit);
      setProducts(data);
      setProductList(data);
    } catch {
      showWarningToast(errorMessage.generalError);
    } finally {
      setIsLoading(false);
    }
  };

  return {productList, isLoading};
};
