import React, {memo} from 'react';
import ToggleSwitch from 'toggle-switch-react-native';
import colors from '../../config/Colors';
const ToggleSwitchBox = ({
  onColor = colors.primary,
  offColor = colors.c_bdc3c7,
  size = 'small',
  value = false,
  onChange = () => {},
}) => {
  return (
    <ToggleSwitch
      isOn={value}
      onColor={onColor}
      offColor={offColor}
      size={size}
      onToggle={onChange}
    />
  );
};

export default memo(ToggleSwitchBox);