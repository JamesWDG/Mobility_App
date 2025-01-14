import React, {memo, useEffect, useState} from 'react';
import styles from './BannerComp.style';
import Swiper from 'react-native-swiper';
import Avatar from '../avatar/Avatar';
import Container from '../container/Container';
import FastImage from 'react-native-fast-image';

const BannerComp = ({data, borderRadius = 0}) => {
  const [state, setState] = useState({});

  useEffect(() => {
    setState(data);
  }, [data]);

  // console.log('data:--->', JSON.stringify(data));

  return (
    <Swiper
      containerStyle={styles.wrapper}
      showsButtons={false}
      autoplay={true}
      activeDotStyle={styles.activeDotStyle}
      dotStyle={styles.dotStyle}
      loop={false}>
      {state?.length > 0 &&
        state?.map(item => {
          return (
            <>
              <Avatar
                style={styles.itemImage}
                // borderRadius={40}
                source={item || item?.image}
                borderRadius={borderRadius}

                // resizeMode={FastImage.resizeMode.contain}
                // source={{
                //   uri: item?.image
                //     ? item?.image
                //     : `https://picsum.photos/200/300?graysc`,
                // }}
              />
            </>
          );
        })}
    </Swiper>
  );
};

export default memo(BannerComp);
