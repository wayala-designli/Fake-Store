import {IStyleWrapper, IWrapperProps} from '@domain/models/Wrapper';
import {COLORS} from '@constants';
import React from 'react';
import {StatusBar, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Wrapper = ({
  children,
  backgroundColor = COLORS.WHITE,
  barStyle = 'dark-content',
}: IWrapperProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles({backgroundColor, insets}).container}>
      <StatusBar barStyle={barStyle} backgroundColor={backgroundColor} />
      {children}
    </View>
  );
};

const styles = ({backgroundColor, insets}: IStyleWrapper) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: backgroundColor,
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    },
  });

export default Wrapper;
