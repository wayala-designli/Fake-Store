import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Toast, {ToastConfig} from 'react-native-toast-message';
import {COLORS} from '@constants';

import styles from './styles';
import {WarningToast} from '@assets/index';

const toastConfig: ToastConfig = {
  warningToast: ({props}) => (
    <TouchableOpacity
      onPress={() => Toast.hide()}
      activeOpacity={0.7}
      style={[styles.generalToastWrapper, styles.warningToastWrapper]}>
      <WarningToast color={COLORS.WHITE} />
      <Text style={styles.generalToastMessage}>{props.text}</Text>
    </TouchableOpacity>
  ),
};

export default toastConfig;
