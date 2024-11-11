import {StyleSheet} from 'react-native';
import {height, width} from './dimensions';

export const commonStyles = StyleSheet.create({
  basicFlex: {
    flex: 1,
  },
  expandedAll: {
    width,
    height,
  },
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingMoreContainer: {
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
