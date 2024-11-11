import Toast from 'react-native-toast-message';
import {errorMessage} from '@constants';

const showWarningToast = (text = errorMessage.generalError) => {
  Toast.show({
    type: 'warningToast',
    props: {text},
  });
};

export {showWarningToast};
