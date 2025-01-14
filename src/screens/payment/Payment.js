import React, {useState} from 'react';
import {KeyboardAvoidingView, SafeAreaView} from 'react-native';
import {styles} from './Payment.styles'; // Make sure this points to the correct file
import Title from '../../components/title/Title';
import ScreenBg from '../../components/screenBg/ScreenBg';
import labels from '../../assets/labels/English.labels';
import Container from '../../components/container/Container';
import colors from '../../config/Colors';
import GeneralStyles from '../../config/GeneralStyle';
import fonts from '../../config/Fonts';
// import { Divider } from '../../components/divider/Divider';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
// import { keyboardTypes } from '../../constants/KeyboardTypes.constants';
import Utility from '../../utils/Utility';
import ScrollViewComp from '../../components/scrollViewComp/ScrollViewComp';
import PrimaryHeader from '../../components/primaryHeader/PrimaryHeader';
import {LocalImage} from '../../components/localImage/LocalImage';
import {images} from '../../config/Images';
// import SecondaryHeader from '../../components/secondaryHeader/SecondaryHeader';
// import CustomModal from '../../components/customModal/index'
import CustomModal from '../../components/customModal';
import PrimaryModal from '../../components/modals/primaryModal/PrimaryModal';
const Payment = ({navigation}) => {
  const [state, setState] = useState({
    cardHolderName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <ScreenBg>
      {/* <SecondaryHeader navigation={navigation} title={labels.payment} /> */}

      <SafeAreaView style={{flex: 1}}>
        <PrimaryHeader
          goBack={true}
          title={labels.paymentDetails}
          rightImage={true}
        />

        <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
          <ScrollViewComp>
            <Container extraStyle={styles.detailsContainer}>
              {/* <Divider mT={14} mB={0} color={colors.c_E4DFDF} /> */}
            </Container>

            <Container
              extraStyle={{
                alignItems: 'flex-start',
                marginTop: 40,
                paddingHorizontal: 20,
              }}>
              {/* <Container extraStyle={styles.textRow}> */}
              <LocalImage
                source={images.paymentImage}
                height={200}
                width={200}
                otherStyle={{
                  height: 200,
                  width: 200,
                  alignSelf: 'center',
                  marginBottom: 30,
                }}
                tintColor={colors.c_7939FE}
              />
              <Title
                text={labels.enterCardDetails}
                fontSize={20}
                fontWeight={600}
                fontFamily={fonts.gabaritoMedium}
                otherStyles={{marginBottom: 10, marginLeft: 10}}
              />

              {/* </Container> */}
              <Input
                placeholder={labels.cardHolderName}
                value={state.cardHolderName}
                maxLength={20}
                paddingHorizontal={12}
                keyboardType={'number-pad'}
                onChangeText={t => setState({...state, cardHolderName: t})}
              />
              <Input
                placeholder={labels.cardNumber}
                value={state.cardNumber}
                paddingHorizontal={12}
                maxLength={19}
                keyboardType={'number-pad'}
                onChangeText={t =>
                  setState({...state, cardNumber: Utility.cardNumberFormat(t)})
                }
              />
              <Container style={'spaceBetween'}>
                <Input
                  placeholder={labels.expiryDate}
                  value={state.expiryDate}
                  maxLength={5}
                  paddingHorizontal={12}
                  keyboardType={'number-pad'}
                  // keyboardType={keyboardTypes.numberPad}
                  otherStyles={GeneralStyles.width('48%')}
                  onChangeText={t =>
                    setState({...state, expiryDate: Utility.expiryDate(t)})
                  }
                />
                <Input
                  placeholder={labels.cvc}
                  value={state.cvv}
                  maxLength={3}
                  paddingHorizontal={12}
                  keyboardType={'number-pad'}
                  // keyboardType={keyboardTypes.numberPad}
                  otherStyles={GeneralStyles.width('48%')}
                  onChangeText={t => setState({...state, cvv: t})}
                />
              </Container>
            </Container>

            {/* <Container style={'flexEnd'}> */}
            <Container extraStyle={styles.btnContainer}>
              <Button
                text={labels.payNow}
                onPress={() =>
                  navigation.navigate('AppStack', {
                    screen: 'thankYou',
                    params: {
                      title: labels.thankYou,
                      description: labels.yourPaymentHasBeenSuccessfull,
                      btnText: labels.letStart,
                      onPress: () =>
                        navigation.navigate('TabStack', {screen: 'Home'}),
                    },
                  })
                }
              />
              <Button
                text={labels.save}
                otherStyles={GeneralStyles.marginTop(20)}
                onPress={() =>
                  setIsModalOpen(true)
                }
              />
            </Container>
            {/* </Container> */}
          </ScrollViewComp>
        </KeyboardAvoidingView>
      </SafeAreaView>

      <CustomModal open={isModalOpen} close={() => setIsModalOpen(false)}>
        <PrimaryModal
          iconVisible={true}
          icon={images.checkIcon}
          height={45}
          width={45}
          title={labels.yourAccountInfoHasBeenSavedSuccessfully}
        />
      </CustomModal>
    </ScreenBg>
  );
};

export default Payment;
