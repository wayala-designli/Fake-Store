import {Product} from './Product';
export type TabNavParamList = {};

export type StackParamList = {
  Products: undefined;
  Details: {product: Product};
};
