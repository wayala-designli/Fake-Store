import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {productZustandStorage} from './persiste-store-mmkv';
import {Product} from '@domain/models/Product';

export interface UserState {
  offlineProducts: Product[];
  setProducts: (products: Product[]) => void;
}

const useProductStore = create<UserState>()(
  persist(
    set => ({
      offlineProducts: [],
      setProducts: productList =>
        set(() => ({
          offlineProducts: productList,
        })),
    }),
    {
      name: 'product-storage',
      storage: createJSONStorage(() => productZustandStorage),
    },
  ),
);

export default useProductStore;
