import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 25},
  stepsContainer: {width: '100%', paddingVertical: 20},
  stepsContentContainer: {flexGrow: 1, height: 40},
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    // marginBottom: 20,
  },
});

export default styles;
