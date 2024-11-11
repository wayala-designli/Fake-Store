import RootStack from '@navigation/RootStack';
import {NavigationContainer} from '@react-navigation/native';
import React, {useRef} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  const navigationRef = useRef(null);

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
