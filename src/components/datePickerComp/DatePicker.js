import React from 'react';
import DatePicker from 'react-native-date-picker';

const DatePickerComp = ({
  value,
  openDate,
  closeDate,
  mode,
  onChange = () => {},
  minimumDate,
  maximumDate,
}) => {
  return (
    <DatePicker
      modal
      mode={mode}
      open={openDate}
      minimumDate={minimumDate}
      maximumDate={maximumDate}
      is24hourSource={'locale'}
      locale={'us'}
      date={value}
      onConfirm={onChange}
      onCancel={closeDate}
    />
  );
};

export default DatePickerComp;
