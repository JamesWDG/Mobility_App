import React from 'react';
import {StyleSheet} from 'react-native';
import Container from '../container/Container';
import colors from '../../config/Colors';

export const Divider = ({
  mT = 0,
  mB = 0,
  color = colors.c_EBEBEB,
  borderBottomWidth = 1,
}) => {
  return (
    <Container extraStyle={styles.divider(mT, mB, color, borderBottomWidth)} />
  );
};

const styles = StyleSheet.create({
  divider: (mT, mB, color, borderBottomWidth) => ({
    borderBottomWidth: borderBottomWidth,
    width: '100%',
    borderColor: color,
    marginTop: mT,
    marginBottom: mB,
  }),
});
