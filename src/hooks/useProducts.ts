import {Product} from '@domain/models/Product';
import {products} from '@mocks';
import {useEffect, useState} from 'react';
import {useNetworkCheck} from './useNetworkCheck';
import useProductStore from '@store/productStore';
import {errorMessage} from '@constants';
import { showWarningToast } from '@utils/';

export const useProducts = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const {isConnected} = useNetworkCheck();
  const {offlineProducts, setProducts} = useProductStore();

  useEffect(() => {
    onGetProducts();
  }, []);

  useEffect(() => {
    if (!isConnected && products.length > 0) {
      setProductList(offlineProducts);
      setIsLoading(false);
      showWarningToast(errorMessage.networkError);
    }
  }, [isConnected, offlineProducts]);

  const onGetProducts = () => {
    setProductList(products);
    setProducts(products)
    setIsLoading(false);
  };

  return {productList, isLoading};
};
