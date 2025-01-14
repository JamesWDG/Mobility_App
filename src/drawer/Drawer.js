import React, {useEffect, useState} from 'react';
import {ImageBackground} from 'react-native';
import labels from '../../assets/labels/English.labels';
import styles from './Drawer.style';
import {images} from '../../config/Images';
import Title from '../title/Title';
import Container from '../container/Container';
import Avatar from '../avatar/Avatar';
import colors from '../../config/Colors';
import {LocalImage} from '../localImage/LocalImage';
import TouchableContainer from '../touchableContainer/TouchableContainer';
import GeneralStyles from '../../config/GeneralStyle';
import fonts from '../../config/Fonts';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import ScrollViewComp from '../scrollViewComp/ScrollViewComp';
import CustomModal from '../customModal/index';
import LogoutModal from '../modals/logoutModal/LogoutModal';
import {showToast} from '../../utils/Toast';
import {selectUser, setClearStore} from '../../store/authSlice';
import {useDispatch, useSelector} from 'react-redux';
import {useLazyLogoutQuery} from '../../services/auth';
import {
  setEventData,
  setTempData,
  setTempServices,
} from '../../store/homeSlice';

const Drawer = props => {
  const [screens, setScreens] = useState([]);
  const [visible, setVisible] = useState(false);
  const [logoutUser, {isFetching: loading}] = useLazyLogoutQuery({});
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    setScreens(props?.guestTab ? guestScreens : venderScreens);
  }, [isFocused]);

  const guestScreens = [
    {
      id: 1,
      title: labels.myProfile,
      navigateTo: () => navigation.navigate('Profile'),
    },
    {
      id: 2,
      title: labels.requests,
      navigateTo: () => navigation.navigate('Requests'),
    },
    {
      id: 3,
      title: labels.invitations,
      navigateTo: () => navigation.navigate('Invitations'),
    },
    {
      id: 4,
      title: labels.upcomingEvents,
      navigateTo: () => {},
    },
    {
      id: 5,
      title: labels.nearby_Events,
      navigateTo: () =>
        navigation.navigate('AppStack', {
          screen: 'EventsDetails',
          params: {type: labels.nearByEvents},
        }),
    },
    {
      id: 6,
      title: labels.myInterestedEvents,
      navigateTo: () =>
        navigation.navigate('AppStack', {
          screen: 'EventsDetails',
          params: {type: labels.myInterestedEvents},
        }),
    },
    {
      id: 7,
      title: labels.paymentHistory,
      navigateTo: () =>
        navigation.navigate('AppStack', {
          screen: 'PaymentHistory',
        }),
    },
    {
      id: 8,
      title: labels.privacyPolicy,
      navigateTo: () =>
        navigation.navigate('AppStack', {
          screen: 'PrivacyPolicy',
        }),
    },
    {
      id: 9,
      title: labels.termsAndConditions,
      navigateTo: () =>
        navigation.navigate('AppStack', {
          screen: 'TermsAndConditions',
        }),
    },
    {
      id: 10,
      title: labels.helpAndSupport,
      navigateTo: () =>
        navigation.navigate('AppStack', {
          screen: 'HelpAndSupport',
        }),
    },
    {
      id: 11,
      title: labels.changeLanguage,
      navigateTo: () =>
        navigation.navigate('AppStack', {
          screen: 'ChangeLanguage',
          params: {appFlow: true},
        }),
    },
  ];

  const venderScreens = [
    {
      id: 1,
      title: labels.myProfile,
      navigateTo: () =>
        navigation.navigate('AppStack', {screen: 'VenderProfile'}),
    },
    {
      id: 2,
      title: labels.serviceBookings,
      navigateTo: () =>
        navigation.navigate('AppStack', {screen: 'VenderServiceBookings'}),
    },
    {
      id: 3,
      title: labels.venueBookings,
      navigateTo: () =>
        navigation.navigate('AppStack', {screen: 'VenderVenueBookings'}),
    },
    {
      id: 4,
      title: labels.myVenues,
      navigateTo: () =>
        navigation.navigate('AppStack', {screen: 'VenderMyVenues'}),
    },
    {
      id: 5,
      title: labels.myServices,
      navigateTo: () =>
        navigation.navigate('AppStack', {screen: 'VenderMyServices'}),
    },
    {
      id: 6,
      title: labels.requestService,
      navigateTo: () =>
        navigation.navigate('AppStack', {screen: 'RequestService'}),
    },
    {
      id: 7,
      title: labels.statistics,
      navigateTo: () => navigation.navigate('AppStack', {screen: 'statistics'}),
    },
    {
      id: 8,
      title: labels.accountSettings,
      navigateTo: () =>
        navigation.navigate('AppStack', {screen: 'AccountSettings'}),
    },
    {
      id: 9,
      title: labels.privacyPolicy,
      navigateTo: () =>
        navigation.navigate('AppStack', {
          screen: 'PrivacyPolicy',
        }),
    },
    {
      id: 10,
      title: labels.termsAndConditions,
      navigateTo: () =>
        navigation.navigate('AppStack', {
          screen: 'TermsAndConditions',
        }),
    },
    {
      id: 11,
      title: labels.helpAndSupport,
      navigateTo: () =>
        navigation.navigate('AppStack', {
          screen: 'HelpAndSupport',
        }),
    },
  ];

  const handleUserLogoutAccount = () => {
    logoutUser()
      .then(response => {
        // showToast(response?.data?.message);
        setVisible(false);
        dispatch(setClearStore());
        dispatch(setEventData({}));
        dispatch(setTempData({}));
        dispatch(setTempServices({}));
        setTimeout(() => {
          navigation.replace('AuthStack', {screen: 'Login'});
        }, 500);
      })
      .catch(error => {
        showToast(error?.data?.message);
      });
  };

  return (
    <ImageBackground source={images.drawerBg} style={styles.imageBg}>
      <ScrollViewComp>
        <TouchableContainer
          onPress={() => props.navigation.closeDrawer()}
          extraStyle={styles.crossContainer}>
          <LocalImage source={images.crossIcon} tintColor={colors.white} />
        </TouchableContainer>

        <Container extraStyle={styles.userContainer}>
          <Container extraStyle={styles.avatarContainer}>
            <Avatar
              source={images.userPH}
              height={55}
              width={55}
              borderRadius={10}
            />
          </Container>

          <Container extraStyle={styles.userMid}>
            <Title text={user?.fullName} fontSize={18} color={colors.white} />
            <Title text={user?.email} fontSize={12} color={colors.white} />
          </Container>
        </Container>

        {screens.map((item, index) => {
          return (
            <Container key={index} extraStyle={styles.drawerItem}>
              <Title
                text={item.title}
                fontSize={16}
                color={colors.white}
                fontFamily={fonts.gabaritoMedium}
                onPress={item.navigateTo}
              />
            </Container>
          );
        })}

        <Container extraStyle={styles.logoutContainer}>
          <TouchableContainer
            onPress={() => setVisible(true)}
            extraStyle={styles.logoutRow}>
            <LocalImage source={images.logout} />
            <Title
              text={labels.logout}
              fontSize={16}
              color={colors.white}
              fontFamily={fonts.gabaritoMedium}
              otherStyles={GeneralStyles.paddingLeft(5)}
            />
          </TouchableContainer>
        </Container>
      </ScrollViewComp>
      <CustomModal open={visible} close={() => setVisible(false)}>
        <LogoutModal
          loader={loading}
          cancelPress={() => setVisible(false)}
          yesPress={handleUserLogoutAccount}
        />
      </CustomModal>
    </ImageBackground>
  );
};

export default Drawer;
