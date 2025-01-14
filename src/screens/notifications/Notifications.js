import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ImageBackground,
} from 'react-native';
import React from 'react';
import ScreenBg from '../../components/screenBg/ScreenBg';
import PrimaryHeader from '../../components/primaryHeader/PrimaryHeader';
import labels from '../../assets/labels/English.labels';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import Container from '../../components/container/Container';
import Title from '../../components/title/Title';
import Button from '../../components/button/Button';
import {styles} from './Notifications.styles';
import GeneralStyles from '../../config/GeneralStyle';
import colors from '../../config/Colors';
import {opacity} from 'react-native-reanimated/lib/typescript/Colors';
import {LocalImage} from '../../components/localImage/LocalImage';
import {images} from '../../config/Images';
const notification = [
  {
    name: 'John Doe',
    date_time: '2024-12-24 09:30:00',
    description: 'Meeting with the client to discuss the new project.',
  },
  // {
  //   name: 'Jane Smith',
  //   date_time: '2024-12-24 14:00:00',
  //   description: 'Reviewing the quarterly financial report.',
  // },
  // {
  //   name: 'Mark Johnson',
  //   date_time: '2024-12-25 10:15:00',
  //   description: 'Team brainstorming session for product ideas.',
  // },
  // {
  //   name: 'Sarah Lee',
  //   date_time: '2024-12-25 11:45:00',
  //   description: 'Preparing the marketing campaign strategy.',
  // },
  // {
  //   name: 'Michael Brown',
  //   date_time: '2024-12-26 13:00:00',
  //   description: 'Conference call with potential partners.',
  // },
  // {
  //   name: 'Emily Clark',
  //   date_time: '2024-12-26 16:30:00',
  //   description: 'Finalizing the proposal document for submission.',
  // },
  // {
  //   name: 'Chris Miller',
  //   date_time: '2024-12-27 08:00:00',
  //   description: 'Morning standup meeting with the development team.',
  // },
  {
    name: 'Anna Wilson',
    date_time: '2024-12-27 15:00:00',
    description: 'Training session on new software tools.',
  },
  {
    name: 'David Turner',
    date_time: '2024-12-28 07:45:00',
    description: 'Check-in with the sales team on current performance.',
  },
  {
    name: 'Olivia Harris',
    date_time: '2024-12-28 12:30:00',
    description: 'Client feedback review and action planning.',
  },
];

const Notifications = () => {
  return (
    <ScreenBg>
      <SafeAreaView>
        <PrimaryHeader
          goBack={true}
          title={labels.notifications}
          rightImage={true}
        />
        <FlatList
          data={notification}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={({item, index}) => (
            <Container extraStyle={styles.listItem} key={index}>
              <Container extraStyle={styles.listItemUpperContainer}>
                <ImageBackground
                  source={images.notification}
                  style={{
                    height: 44,
                    width: 44,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <FontIcon name="bell" size={20} color={colors.c_7939FE} />
                </ImageBackground>
                <Container extraStyle={GeneralStyles.gap(8)}>
                  <Title
                    text={item?.name}
                    fontSize={18}
                    fontWeight={600}
                    otherStyles={GeneralStyles.flexShrink(1)}
                  />
                  <Title
                    text={item?.date_time}
                    color={colors.c_666666}
                    otherStyles={GeneralStyles.flexShrink(1)}
                  />
                </Container>
              </Container>
              <Title
                text={item?.description}
                otherStyles={{flexShrink: 1, marginTop: 10}}
                color={colors.c_666666}
                numberOfLines={3}
              />
            </Container>
          )}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </SafeAreaView>
    </ScreenBg>
  );
};

export default Notifications;
