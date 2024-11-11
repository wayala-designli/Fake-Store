import {COLORS, height} from '@constants';
import {IProductCard} from '@domain/models/Product';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useAppNavigation} from '@hooks/useAppNavigation';
import { getImageType } from '@utils/';

const ProductCard = ({product}: IProductCard) => {
  const {title, price, images, category} = product;
  const navigation = useAppNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.card}
      onPress={() => navigation.navigate('Details', {product})}>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>${price}</Text>
      </View>
      <Image
        source={
          getImageType(images[0]) !== 'imgur'
            ? require('@assets/NoImageAvailable.jpg')
            : {uri: images[0]}
        }
        style={styles.image}
      />
      <View style={styles.container}>
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>
        <Text style={styles.category}>{category.name}</Text>
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
    fontSize: 17,
    color: COLORS.BLACK,
    fontWeight: '700',
    marginBottom: 10,
  },
  price: {
    fontSize: 15,
    color: COLORS.BLACK,
    fontWeight: '600',
  },
  container: {
    flex: 1,
    paddingBottom: 10,
    paddingHorizontal: 7,
    justifyContent: 'space-between',
  },
  card: {
    borderRadius: 10,
    borderColor: COLORS.BACKGROUND,
    borderWidth: 1,
    marginBottom: 10,
    flex: 1,
  },
  category: {
    fontSize: 14,
    color: COLORS.PUMPKIN,
    fontWeight: '600',
    marginBottom: 10,
  },
  priceContainer: {
    position: 'absolute',
    zIndex: 4,
    top: 5,
    right: 10,
    backgroundColor: COLORS.YELLOW,
    paddingVertical: 10,
    borderRadius: '50%',
    paddingHorizontal: 5,
  },
});

export default ProductCard;
