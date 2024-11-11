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
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
});
