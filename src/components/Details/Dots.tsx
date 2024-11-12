import React from 'react';
import {View, Animated, StyleSheet} from 'react-native';
import {COLORS, height, width} from '@constants';

const Dots = ({items, scrollX}: any) => {
  return (
    <View style={styles.containerDots}>
      <View style={styles.dots}>
        {items?.map((_: any, index: any) => (
          <Dot key={index} index={index} scrollX={scrollX} />
        ))}
      </View>
    </View>
  );
};

const Dot = ({index, scrollX}: any) => {
  const dotPosition = Animated.divide(scrollX, width);

  const opacity = dotPosition.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.3, 1, 0.3],
    extrapolate: 'clamp',
  });

  const dotSize = dotPosition.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [8 * 0.8, 25, 8 * 0.8],
    extrapolate: 'clamp',
  });

  const dotHeight = dotPosition.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [8 * 0.8, 10, 8 * 0.8],
    extrapolate: 'clamp',
  });

  const dotColor = dotPosition.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [COLORS.WHITE, COLORS.WHITE, COLORS.WHITE],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      key={`dot-${index}`}
      opacity={opacity}
      style={{
        ...styles.dot,
        width: dotSize,
        height: dotHeight,
        backgroundColor: dotColor,
      }}
    />
  );
};

const styles = StyleSheet.create({
  containerDots: {
    height: 20,
    position: 'absolute',
    top: height * 0.35,
    width: width ,
  },
  dots: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 10,
    marginHorizontal: 15,
  },
  dot: {
    borderRadius: 30,
    marginHorizontal: 6,
  },
});

export default Dots;
