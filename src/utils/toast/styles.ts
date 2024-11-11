import {StyleSheet} from 'react-native';
import {COLORS} from '@constants';

export default StyleSheet.create({
  generalToastWrapper: {
    width: '80%',
    top: 20,
    borderWidth: 0.4,
    borderColor: '#888888',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#343434',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
  },
  messageContent: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    marginRight: '10%',
  },
  generalToastMessage: {
    marginLeft: 4,
    color: COLORS.BLACK,
    fontSize: 13,
    width: '90%',
  },
  warningToastWrapper: {
    backgroundColor: COLORS.YELLOW,
  },
});
