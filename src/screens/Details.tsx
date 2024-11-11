import {Header} from '@components/Details';
import Wrapper from '@components/Wrapper';
import {COLORS, commonStyles, height, width} from '@constants';
import {StackParamList} from '@domain/models/ScreenTypes';
import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

type DetailsScreenRouteProp = RouteProp<StackParamList, 'Details'>;

const Details = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const detailsParams = route.params.product;

  return (
    <Wrapper>
      <View style={commonStyles.basicFlex}>
        <Header />
        <Image source={{uri: detailsParams.images[0]}} style={styles.image} />
        <ScrollView
          style={styles.container}
          bounces={false}
          showsVerticalScrollIndicator={false}>
          <View style={styles.titleContainer}>
            <Text style={styles.name}>{detailsParams.title}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>${detailsParams.price}</Text>
            </View>
          </View>
          <Text style={styles.category}>{detailsParams.category.name}</Text>
          <Text style={styles.subtitle}>{detailsParams.description}</Text>
        </ScrollView>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  image: {
    width: width,
    height: height * 0.4,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    width: '80%',
    alignSelf: 'center'
  },
  container: {
    backgroundColor: COLORS.WHITE,
    marginTop: -15,
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    paddingHorizontal: 15,
  },
  category: {
    color: COLORS.PUMPKIN,
    fontSize: 19,
    fontWeight: '700',
    marginBottom: 15,
  },
  subtitle: {
    color: COLORS.BLACK,
    fontSize: 18,
    marginBottom: 15,
    fontWeight: '400',
  },
  price: {
    fontSize: 20,
    color: COLORS.BLACK,
    fontWeight: '600',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginBottom: 15,
    marginTop: 20,
  },
  priceContainer: {
    backgroundColor: COLORS.YELLOW,
    paddingVertical: 13,
    borderRadius: '50%',
    paddingHorizontal: 7,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
export default Details;
