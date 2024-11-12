import React, {useEffect, useState} from 'react';
import {
  Image,
  View,
  Animated,
  StyleSheet,
} from 'react-native';
import {height, width} from '@constants';
import Dots from './Dots';
import {getImageType} from '@utils/';

interface Props {
  gallery: string[];
}

interface Gallery {
  url: string;
  width: number;
  freeHeight: boolean;
}

export const Gallery = ({gallery}: Props) => {
  const [modifyGallery, setGallery] = useState<Gallery[]>([]);
  const scrollX = new Animated.Value(0);

  useEffect(() => {
    const custom = gallery?.map((url: string) => ({
      url,
      width,
      freeHeight: true,
    }));
    setGallery(custom);
  }, [gallery]);

  if (gallery?.length === 0) {
    return null;
  }

  return (
    <View>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}>
        {modifyGallery.length > 0 &&
          modifyGallery?.map((item: Gallery) => (
            <View key={item.url}>
              <Image
                key={item.url}
                resizeMethod="scale"
                style={styles.productImage}
                source={
                  getImageType(item?.url ?? '') !== 'imgur'
                    ? require('@assets/NoImageAvailable.jpg')
                    : {uri: item.url}
                }
              />
            </View>
          ))}
      </Animated.ScrollView>
      {gallery?.length > 1 && <Dots items={gallery} scrollX={scrollX} />}
    </View>
  );
};

const styles = StyleSheet.create({
  productImage: {
    width: width,
    height: height * 0.4,
    alignSelf: 'center',
    marginTop: 0,
    overflow: 'hidden',
    resizeMode: 'stretch',
  },
});
