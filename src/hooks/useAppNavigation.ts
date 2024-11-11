import {StackParamList} from '@domain/models/ScreenTypes';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type NavigationType = NativeStackNavigationProp<
  StackParamList,
  keyof StackParamList
>;
export const useAppNavigation = () => {
  return useNavigation<NavigationType>();
};
