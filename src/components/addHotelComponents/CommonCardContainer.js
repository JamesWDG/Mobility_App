import {View, Text} from 'react-native';
import React from 'react';
import Container from '../container/Container';
import CommonCard from './CommonCard';
import styles from './addHotel.styles';

const CommonCardContainer = ({data, onChange, selected, single = true}) => {
  console.log('selected', selected);
  return (
    <Container extraStyle={styles.commonCardContainerStyles}>
      {data?.map((ele, index) => {
        return (
          <CommonCard
            onChange={item => onChange(item)}
            selected={
              // typeof selected == 'string'
              // ?
              single
                ? selected == ele?.title
                : selected?.find(
                    item => item?.title == ele?.title && item?.id == ele?.id,
                  )
              // : selected.includes(ele?.title)
            }
            ele={ele}
            index={index}
          />
        );
      })}
    </Container>
  );
};

export default CommonCardContainer;
