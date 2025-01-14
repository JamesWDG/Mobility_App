import {View, Text} from 'react-native';
import React from 'react';
import Container from '../container/Container';
import Title from '../title/Title';
import labels from '../../assets/labels/English.labels';
import {guestHave} from '../../utils/addHotel.constants';
import {LocalImage} from '../localImage/LocalImage';
import GeneralStyles from '../../config/GeneralStyle';
import colors from '../../config/Colors';
import TouchableContainer from '../touchableContainer/TouchableContainer';
import styles from './addHotel.styles';

const GuestWant = ({GuestHave = {}, setGuestHave = () => {}}) => {
  return (
    <Container extraStyle={{gap: 20}}>
      <Title
        text={labels.whatWillTheGuestHave}
        fontSize={22}
        otherStyles={styles.whatWillGuestHaveStyles}
        fontWeight={600}
      />
      <Container>
        {guestHave.map((ele, index) => {
          return (
            <TouchableContainer
              key={index}
              onPress={() => {
                console.log(ele.title);
                setGuestHave(prev => {
                  return {...prev, guestHave: ele};
                });
              }}
              extraStyle={styles.guestRow(
                ele?.title,
                GuestHave?.guestHave?.title,
              )}>
              <Container extraStyle={styles.guestRowContainer}>
                <Title
                  text={ele?.title}
                  fontSize={18}
                  fontWeight={600}
                  color={
                    ele?.title == GuestHave?.guestHave?.title
                      ? colors.white
                      : colors.black
                  }
                />
                <Title
                  text={ele?.description}
                  color={
                    ele?.title == GuestHave?.guestHave?.title
                      ? colors.white
                      : colors.black
                  }
                />
              </Container>
              <LocalImage
                source={ele?.image}
                tintColor={
                  ele?.title == GuestHave?.guestHave?.title
                    ? colors.white
                    : colors.black
                }
                //   otherStyle={{height: 30, width: 30}}
              />
            </TouchableContainer>
          );
        })}
      </Container>
    </Container>
  );
};

export default GuestWant;
