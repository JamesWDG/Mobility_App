import React, {memo, useState} from 'react';
import {Keyboard} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../config/Colors';
import styles from './Dropdown.style';
import {PressableOpacity} from 'react-native-pressable-opacity';
import Container from '../container/Container';
import fonts from '../../config/Fonts';
import GeneralStyles from '../../config/GeneralStyle';

const Dropdown = ({
  value,
  options,
  onSelect,
  disabled,
  width = '100%',
  valuesWidth = '100%',
  optionsHeight = 90,
  optionsWidth = '92%',
  color = colors.black,
  borderRadius = 10,
  marginBottom,
  marginTop,
  borderWidth = 1,
  textAlign = 'left',
  paddingLeft = 8,
  keyboardStatus = false,
  rightIcon = 10,
  fontSize = 14,
  marginLeft = 2,
  marginRight = 0,
  backgroundColor = colors?.c_F5F5F5,
  fontFamily = fonts.gabaritoRegular,
  scrollEnabled = true,
  placeholder = '',
  defaultTextStyle = GeneralStyles.color(colors?.c_F5F5F5),
}) => {
  const [isOpen, setIsOpen] = useState(false);
  /**
   * Renders a dropdown component.
   *
   * @param {Object} props - The component props.
   * @param {string} props.value - The selected value of the dropdown.
   * @param {Array} props.options - The options to be displayed in the dropdown.
   * @param {function} props.onSelect - The function to be called when an option is selected.
   * @param {boolean} props.disabled - Indicates if the dropdown is disabled.
   * @param {string} [props.width='100%'] - The width of the dropdown.
   * @param {string} [props.valuesWidth='100%'] - The width of the selected value.
   * @param {number} [props.optionsHeight=90] - The height of the dropdown options.
   * @param {string} [props.optionsWidth='90%'] - The width of the dropdown options.
   * @param {string} [props.color='#000000'] - The color of the dropdown text.
   * @param {number} [props.borderRadius=12] - The border radius of the dropdown.
   * @param {number} [props.marginBottom] - The bottom margin of the dropdown.
   * @param {number} [props.borderWidth=1] - The border width of the dropdown.
   * @param {string} [props.textAlign='left'] - The text alignment of the dropdown text.
   * @param {number} [props.paddingLeft=15] - The left padding of the dropdown text.
   * @param {boolean} [props.keyboardStatus=false] - Indicates if the keyboard should be dismissed when the dropdown is pressed.
   * @returns {React.Element} The rendered dropdown component.
   */ return (
    <PressableOpacity
      activeOpacity={1}
      disabledOpacity={1}
      disabled={keyboardStatus ? false : true}
      onPress={() => (keyboardStatus ? Keyboard.dismiss() : null)}>
      <ModalDropdown
        disabled={disabled}
        scrollEnabled={scrollEnabled}
        showsVerticalScrollIndicator={true}
        renderRightComponent={() => (
          <Container extraStyle={[styles.icon, {right: rightIcon}]}>
            <Entypo
              name={isOpen ? 'chevron-small-up' : 'chevron-small-down'}
              size={20}
              color={colors.c_818181}
            />
          </Container>
        )}
        initialScrollIndex={10}
        collapsable
        saveScrollPosition
        animated={true}
        style={[
          styles.style,
          {
            width: valuesWidth,
            marginBottom: marginBottom,
            marginTop: marginTop,
            borderRadius: borderRadius,
            // borderWidth: borderWidth,
            backgroundColor: backgroundColor,
          },
        ]}
        textStyle={[
          styles.textStyle,
          {
            width: width,
            color: color,
            textAlign: textAlign,
            paddingLeft: paddingLeft,
            fontSize: fontSize,
            marginLeft: marginLeft,
            marginRight: marginRight,
            fontFamily: fontFamily,
          },
        ]}
        dropdownTextHighlightStyle={styles.dropdownTextHighlightStyle}
        dropdownStyle={[
          styles.dropdownStyle,
          {height: optionsHeight, width: optionsWidth},
        ]}
        dropdownTextStyle={styles.dropdownTextStyle}
        defaultValue={value || placeholder}
        defaultTextStyle={defaultTextStyle}
        options={options}
        onDropdownWillShow={() => setIsOpen(true)}
        onDropdownWillHide={() => setIsOpen(false)}
        onSelect={onSelect}
      />
    </PressableOpacity>
  );
};

export default memo(Dropdown);
