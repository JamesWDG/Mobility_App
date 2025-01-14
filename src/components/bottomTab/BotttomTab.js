import React, {memo, useCallback, useEffect, useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import TabUI from './TabUI';
// import CustomModal from '../customModal';
// import CreateVenueOrServiceModal from '../modals/CreateVenueOrServiceModal/CreateVenueOrServiceModal';
import {tabRoutes} from '../../navigation/tab/TabRoutes';
import Container from '../container/Container';
import {styles} from './BotttomTab.style';
import {useDispatch, useSelector} from 'react-redux';
// import {setEventData, setTempData} from '../../store/homeSlice';
import labels from '../../assets/labels/English.labels';
// import {useLazyVenderDetailsQuery} from '../../services/request';
import {showToast} from '../../utils/Toast';

const BottomTab = ({navigation, state, guestTab}) => {
  const {bottom} = useSafeAreaInsets();
  const dispatch = useDispatch();
  // const user = useSelector(state => state?.auth?.user);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selected, setSelected] = useState('Home');
  const [userinfo, setUserInfo] = useState({});

  // const [venderDetails, {isLoading}] = useLazyVenderDetailsQuery();

  // useCallback(() => {
  // useEffect(() => {
  //   if (user?.id) getVenderDetails();
  // }, []);

  // }, [user?.id]);
  // const getVenderDetails = async () => {
  //   await venderDetails(user?.id)
  //     .unwrap()
  //     ?.then(resp => {
  //       setUserInfo(resp?.data);
  //     })
  //     ?.catch(err => showToast(err?.data?.message, 'error'));
  // };
  const handleNavigation = item => {
    if (item?.name === 'CreateEvent' && state.index !== 2) {
      dispatch(setTempData({}));
      dispatch(setEventData({}));
    }
    navigation.navigate(item?.name);
    setSelected(item.name);
  };

  const tabUI = useCallback(
    (item, isFocused, index) => {
      return (
        <TabUI
          item={item}
          isFocused={isFocused}
          navigation={navigation}
          index={index}
          handleNavigation={
            item.name != 'Plus'
              ? handleNavigation
              : () => {
                  if (userinfo?.company?.[0]?.venue) {
                    goToVenues();
                  } else if (userinfo?.company?.[0]?.service) {
                    goToServices();
                  } else {
                    setIsModalVisible(true);
                  }
                }
          }
          selected={selected}
        />
      );
    },
    [state, handleNavigation],
  );

  const goToVenues = () => {
    setIsModalVisible(false);
    navigation.navigate(labels.venues);
  };

  const goToServices = () => {
    setIsModalVisible(false);
    navigation.navigate(labels.services);
  };

  //Main
  return (
    <Container extraStyle={styles.container(bottom)}>
      <Container extraStyle={styles.elementContainer}>
        {/* {guestTab
          ? guestRoutes.map((route, index) => {
              const isFocused =
                route.name != 'Plus' ? state.index === index : index;
              return tabUI(route, isFocused, index);
            })
          : tabRoutes.map((route, index) => {
              const isFocused =
                route.name != 'Plus' ? state.index === index : index;
              return tabUI(route, isFocused, index);
            })} */}
            { tabRoutes.map((route, index) => {
              const isFocused =
                route.name != 'Plus' ? state.index === index : index;
              return tabUI(route, isFocused, index);
            })}
      </Container>
      {/* <CustomModal open={isModalVisible} close={() => setIsModalVisible(false)}>
        <CreateVenueOrServiceModal
          goToVenues={goToVenues}
          goToServices={goToServices}
        />
      </CustomModal> */}
    </Container>
  );
};

export default memo(BottomTab);
