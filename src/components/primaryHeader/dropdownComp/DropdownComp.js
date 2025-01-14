import React, {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import Entypo from 'react-native-vector-icons/Entypo';
import labels from '../../assets/labels/English.labels';
import colors from '../../config/Colors';
import {LocalImage} from '../localImage/LocalImage';
import styles from './DropdownComp.style';

const DropdownComp = ({
  height = 50,
  width = '100%',
  marginTop = 7,
  paddingLeft = 15,
  textWidth = '80%',
  optionsData = [],
  optionsHeight = 150,
  placeholder = labels.select,
  valueField = 'title',
  labelField = 'title',
  borderWidth = 1,
  value = '',
  paddingH = 15,
  placeholderStyle,
  onChange = () => {},
  leftIcon,
  selectedTextStyle,
  renderItem,
  disabled = false,
}) => {
  const [focus, setFocus] = useState(false);

  return (
    <Dropdown
      style={styles.dropdown(
        height,
        width,
        marginTop,
        paddingLeft,
        borderWidth,
        paddingH,
      )}
      placeholderStyle={placeholderStyle || styles.placeholderStyle(textWidth)}
      selectedTextStyle={
        selectedTextStyle || styles.selectedTextStyle(textWidth)
      }
      iconStyle={styles.iconStyle}
      itemTextStyle={styles.itemTextStyle}
      data={optionsData}
      maxHeight={optionsHeight}
      labelField={labelField}
      valueField={valueField}
      placeholder={placeholder}
      value={value}
      disable={disabled}
      onChange={onChange}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      renderLeftIcon={() =>
        leftIcon && (
          <LocalImage source={leftIcon} otherStyle={styles.leftIcon} />
        )
      }
      renderRightIcon={() => (
        <Entypo
          name={focus ? 'chevron-small-up' : 'chevron-small-down'}
          size={20}
          color={colors.placeholder}
        />
      )}
      // renderItem={renderItem}
      // renderItem={item => {
      //   return (
      //     <Container extraStyle={styles.itemContainer(1)}>
      //       <Title otherStyle={styles.itemText} text={item?.title} />
      //       <LocalImage
      //         source={
      //           item?.title === value?.title ? images.radio : images.circle
      //         }
      //       />
      //     </Container>
      //   );
      // }}
    />
  );
};

export default DropdownComp;
