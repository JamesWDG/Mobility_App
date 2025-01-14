import {View, Text} from 'react-native';
import React from 'react';
import Container from '../container/Container';
import Title from '../title/Title';
import labels from '../../assets/labels/English.labels';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../../config/Colors';
import TouchableContainer from '../touchableContainer/TouchableContainer';
const data = [
  {
    discount: 10,
    label: labels.for24Hours,
    desc: labels.guestHaveWholePlaceForThemselves24hours,
  },
  {
    discount: 15,
    label: labels.for7Days,
    desc: labels.guestHaveWholePlaceForThemselves7Days,
  },
  {
    discount: 20,
    label: labels.for30Days,
    desc: labels.guestHaveWholePlaceForThemselves30Days,
  },
];
const AddDiscount = ({selected, setSelected}) => {
  return (
    <Container extraStyle={{gap: 10}}>
      <Title
        text={labels.addDiscount}
        fontSize={22}
        fontWeight={600}
        otherStyles={{textAlign: 'center', marginBottom: 10}}
      />
      {data.map((ele, index) => {
        return (
          <TouchableContainer
            onPress={() =>
              setSelected(prev => {
                return {...prev, discount: ele};
              })
            }
            extraStyle={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 15,
              padding: 10,
              borderWidth: 0.2,
              borderRadius: 8,
              paddingHorizontal: 20,
              backgroundColor:
                selected?.discount?.label == ele?.label
                  ? colors.c_E8E8E8
                  : 'white',
            }}>
            {/* <Container> */}
            <Container
              extraStyle={{
                backgroundColor: colors.c_7939FE,
                paddingHorizontal: 14,
                borderRadius: 4,
                paddingVertical: 6,
              }}>
              <Title text={`${ele?.discount}%`} color={colors.white} />
            </Container>
            <Container
              extraStyle={{
                // flexDirection: 'row',
                // alignItems: 'center',
                justifyContent: 'space-between',
                flex: 1,
                gap: 5,
              }}>
              <Title text={ele?.label} fontSize={16} fontWeight={600} />
              <Title text={ele?.desc} />
            </Container>
            <Icon name="percentage" />
            {/* </Container> */}
          </TouchableContainer>
        );
      })}
    </Container>
  );
};

export default AddDiscount;
