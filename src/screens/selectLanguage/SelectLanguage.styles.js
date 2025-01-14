import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  mainContainerStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: width * 0.8,
    alignItems: 'center',
    marginTop: 25,
  },
  imageContainer: {height: 129, width: 111},
});
