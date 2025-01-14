import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './Login.style';
import labels from '../../assets/labels/English.labels';

const Login = ({navigation}) => {
  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        onPress={() => {
          navigation.replace('AppStack');
        }}>
        <Text>{labels.login}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
