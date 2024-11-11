import {MMKV} from 'react-native-mmkv';
import {StateStorage} from 'zustand/middleware';

export const productStorage = new MMKV({
  id: 'product-storage',
});

export const productZustandStorage: StateStorage = {
  setItem: (name, value) => {
    return productStorage.set(name, value);
  },
  getItem: name => {
    const value = productStorage.getString(name);
    return value ?? null;
  },
  removeItem: name => {
    return productStorage.delete(name);
  },
};
