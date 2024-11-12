import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {commonStyles, COLORS} from '@constants';
import {ProductNotFound} from '@assets/index';

interface IEmptyProducts {
  isLoading: boolean;
}

const EmptyProducts = ({isLoading}: IEmptyProducts) => {
  if (isLoading) {
    return (
      <View style={[commonStyles.centerContainer, commonStyles.basicFlex]}>
        <ActivityIndicator
          testID="loading-indicator"
          color={COLORS.BLACK}
          size="large"
        />
      </View>
    );
  }

  return (
    <View style={[commonStyles.basicFlex, commonStyles.centerContainer]}>
      <Text style={styles.title}>No products found</Text>
      <ProductNotFound />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: COLORS.GREY,
    fontSize: 16,
    lineHeight: 22,
    marginTop: 13,
  },
});

export default EmptyProducts;
