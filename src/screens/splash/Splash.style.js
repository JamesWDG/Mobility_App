import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
 imageContainer : {flex: 1, justifyContent: 'center', alignItems: 'center'},
 imageStyles : {height: 250, width: 250}
});

export default styles;
