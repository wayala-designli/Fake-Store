import RootStack from '@navigation/RootStack';
import {NavigationContainer} from '@react-navigation/native';
import {toastConfig} from '@utils/';
import React, {useRef} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import RNBootSplash from 'react-native-bootsplash';

function App(): React.JSX.Element {
  const navigationRef = useRef(null);
  const onReady = () => {
    RNBootSplash.hide();
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef} onReady={onReady}>
        <RootStack />
      </NavigationContainer>
      <Toast
        config={toastConfig}
        autoHide
        visibilityTime={4500}
        bottomOffset={50}
        position="bottom"
      />
    </SafeAreaProvider>
  );
}

export default App;
