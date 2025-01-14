// App.js

import React, {memo, useState} from 'react';
import {View, Text, StyleSheet, Dimensions, PixelRatio} from 'react-native';
import {RadioButton} from 'react-native-paper';
import Container from '../container/Container';
import TouchableContainer from '../touchableContainer/TouchableContainer';
import Title from '../title/Title';
import GeneralStyles from '../../config/GeneralStyle';
import {styles} from './RadioButton.style';
const RadioButtons = ({
  color,
  data = [],
  marginTop = 20,
  padding = 16,
  width,
  selectedValue,
  setSelectedValue,
  onChange = () => {},
  trueOrFalse = false,
  marginLeft = 8,
}) => {
  return (
    <Container extraStyle={[styles.container]}>
      <Container extraStyle={styles.radioGroup(padding, width)}>
        {data.map(option => (
          <TouchableContainer
            key={option.value}
            extraStyle={styles.radioButton}
            onPress={() => {
              if (trueOrFalse) {
                setSelectedValue(selectedValue != '' ? '' : option.value);
              } else {
                setSelectedValue(option.value);
              }
            }}>
            <RadioButton.Android
              value={option.value}
              status={selectedValue === option.value ? 'checked' : 'unchecked'}
              onPress={() => {
                if (trueOrFalse) {
                  setSelectedValue(selectedValue != '' ? '' : option.value);
                } else {
                  setSelectedValue(option.value);
                }
              }}
              color={color}
            />
            <Container extraStyle={GeneralStyles.marginLeft(marginLeft)}>
              {option.label ? (
                <Title text={option.label} otherStyles={styles.radioLabel} />
              ) : null}
              <Title text={option.desc} otherStyles={styles.radioDescription} />
            </Container>
          </TouchableContainer>
        ))}
      </Container>
    </Container>
  );
};

export default memo(RadioButtons);
