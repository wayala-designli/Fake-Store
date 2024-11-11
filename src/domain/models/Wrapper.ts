import {EdgeInsets} from 'react-native-safe-area-context';

export type IWrapperProps = {
  children: JSX.Element;
  backgroundColor?: string;
  barStyle?: 'default' | 'light-content' | 'dark-content';
};

export type IStyleWrapper = {
  backgroundColor?: string;
  insets: EdgeInsets;
};
