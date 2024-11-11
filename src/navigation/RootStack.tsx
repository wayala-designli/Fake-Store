import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackParamList} from '@domain/models/ScreenTypes';
import {Details, Products} from '@screens/index';

const Stack = createNativeStackNavigator<StackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        contentStyle: {backgroundColor: 'transparent'},
        headerShown: false,
      }}>
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default RootStack;
