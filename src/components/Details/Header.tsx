import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useAppNavigation} from '@hooks/useAppNavigation';
import LeftArrow from '@assets/LeftArrow';
import {COLORS} from '@constants';

const Header = () => {
  const navigation = useAppNavigation();

  return (
    <TouchableOpacity
      style={styles.backOption}
      onPress={navigation.goBack}
      activeOpacity={0.6}>
      <LeftArrow />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backOption: {
    backgroundColor: COLORS.BACKGROUND,
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 2,
    paddingVertical: 8,
    borderRadius: '100%',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default Header;
