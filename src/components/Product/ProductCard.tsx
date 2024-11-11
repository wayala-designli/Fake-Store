import {COLORS, height, width} from '@constants';
import {IProductCard} from '@domain/models/Product';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useAppNavigation} from '@hooks/useAppNavigation';

const ProductCard = ({product}: IProductCard) => {
  const {name, price, imageUrl, categoryName, stockQuantity} = product;
  const navigation = useAppNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.card}
      onPress={() => navigation.navigate('Details', {product})}>
      <Image source={{uri: imageUrl}} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <Text style={[styles.subtitle, styles.categoryColor]}>
          {categoryName}
        </Text>
        <Text style={styles.subtitle}>
          <Text style={styles.price}>{stockQuantity}</Text> disponibles
        </Text>
        <Text style={styles.price}>${price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: height * 0.2,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    resizeMode: 'cover',
    alignSelf: 'center',
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    color: COLORS.BLACK,
    fontWeight: '700',
    marginBottom: 10,
  },
  price: {
    fontSize: 14,
    color: COLORS.BLACK,
    fontWeight: '700',
  },
  container: {
    paddingBottom: 10,
    paddingHorizontal: 7,
  },
  card: {
    borderRadius: 10,
    borderColor: COLORS.BACKGROUND,
    borderWidth: 1,
    marginBottom: 10,
    width: (width - 32) / 2,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.GREY,
    fontWeight: '500',
    marginBottom: 10,
  },
  categoryColor: {
    color: COLORS.PUMPKIN,
  },
});

export default ProductCard;
