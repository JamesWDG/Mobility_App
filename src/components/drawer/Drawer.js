import React from 'react';
import {Text, View} from 'react-native';
import labels from '../../assets/labels/English.labels';
import styles from './Drawer.style';

const Drawer = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>{labels.hello}</Text>
    </View>
  );
};

export default Drawer;
