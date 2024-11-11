import {useEffect, useState} from 'react';
import NetInfo, {NetInfoStateType} from '@react-native-community/netinfo';

export const useNetworkCheck = () => {
  const [connectionType, setConnectionType] = useState<
    NetInfoStateType | unknown
  >();
  const [isConnected, setIsConnected] = useState<boolean | null>(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setConnectionType(state.type);
      setIsConnected(state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  return {isConnected, connectionType};
};
