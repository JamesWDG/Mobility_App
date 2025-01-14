import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React, {useState} from 'react';
import ScreenBg from '../../components/screenBg/ScreenBg';
import ScrollViewComp from '../../components/scrollViewComp/ScrollViewComp';
import PrimaryHeader from '../../components/primaryHeader/PrimaryHeader';
import labels from '../../assets/labels/English.labels';
import Container from '../../components/container/Container';
import Title from '../../components/title/Title';
import colors from '../../config/Colors';
import TouchableContainer from '../../components/touchableContainer/TouchableContainer';
import {LocalImage} from '../../components/localImage/LocalImage';
import {images} from '../../config/Images';
import Button from '../../components/button/Button';
import GeneralStyles from '../../config/GeneralStyle';

const data = ['Withdrawls', 'Refunds', 'Upcoming Transfers', 'Transfered'];

const dummyData = [1, 2, 3, 4, 5, 6, 7];
const Wallet = ({navigation}) => {
  const [selectedOptions, setSelectedOptions] = useState('Withdrawls');
  return (
    <ScreenBg>
      <SafeAreaView style={{flex: 1}}>
        <PrimaryHeader goBack={true} title={labels.ewallet} rightImage={true} />

        <Container extraStyle={{flex: 1, paddingBottom: 300}}>
          <Container extraStyle={{marginTop: 40, alignItems: 'center'}}>
            <Title text={labels.totalBalance} fontWeight={300} />
            <Title
              text={`$324,45,567`}
              otherStyles={{marginVertical: 10}}
              fontSize={30}
              fontWeight={700}
            />
            <Container
              extraStyle={{
                paddingVertical: 10,
                borderRadius: 30,
                paddingHorizontal: 20,
                backgroundColor: colors.c_EDE7FD,
              }}>
              <Title
                text={`-324,7`}
                fontSize={18}
                color={colors.c_7939FE}
                fontWeight={300}
              />
            </Container>
            <Button
              text={labels.payNow}
              fWeight={700}
              otherStyles={{marginTop: 20, width: 150}}
              onPress={() =>
                navigation.navigate('AppStack', {screen: 'Payment'})
              }
              // onPress={() => {
              //   if (Utility.validateLoginSchema(isState)) {
              //     navigation.navigate("verifyOTP")
              //   }
              // }}
            />
          </Container>

          <Container
            extraStyle={{
              flexGrow: 1,
              height: 40,
              flexGrow: 1,
              marginTop: 40,
            }}>
            <ScrollViewComp
              horizontal={true}
              contentContainerStyle={{
                flexGrow: 1,
              }}>
              {data.map((ele, index) => {
                return (
                  <TouchableContainer
                    extraStyle={{
                      borderBottomWidth: 5,
                      borderColor:
                        selectedOptions == ele
                          ? colors.c_7939FE
                          : colors.c_E8E8E8,
                      paddingHorizontal: 20,
                      paddingBottom: 15,
                    }}
                    onPress={() => setSelectedOptions(ele)}>
                    <Title
                      text={ele}
                      fontSize={14}
                      // otherStyles={{paddingHorizontal: 20, paddingBottom: 10}}
                    />
                  </TouchableContainer>
                );
              })}
            </ScrollViewComp>
          </Container>
          <Container>
            <FlatList
              data={dummyData}
              contentContainerStyle={{flexGrow: 1}}
              renderItem={({item}) => {
                return (
                  <Container
                    extraStyle={{
                      // backgroundColor: 'red',
                      borderBottomWidth: 1,
                      borderColor: colors.c_ecf0f1,
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      padding: 20,
                    }}>
                    <Container
                      extraStyle={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 5,
                      }}>
                      <LocalImage
                        source={
                          item % 2 == 0
                            ? images.leftChevron
                            : images.rightChevron
                        }
                        height={30}
                        width={30}
                        otherStyle={{
                          height: 15,
                          width: 15,
                        }}
                      />

                      <Container>
                        <Title
                          text="iTunes Gift Card#2344454"
                          fontWeight={600}
                        />
                        <Title text="Today 13:45" fontSize={12} />
                      </Container>
                    </Container>
                    <Title text={item % 2 == 0 ? '-$1333,45' : '$1333,45'} />
                  </Container>
                );
              }}
            />
          </Container>
        </Container>
      </SafeAreaView>
    </ScreenBg>
  );
};

export default Wallet;
