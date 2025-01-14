import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './Signup.styles';
import ScreenBg from '../../components/screenBg/ScreenBg';
import Container from '../../components/container/Container';
import {LocalImage} from '../../components/localImage/LocalImage';
import {images} from '../../config/Images';
import Title from '../../components/title/Title';
import labels from '../../assets/labels/English.labels';
import ToggleSwitch from '../../components/toggleSwitch/ToggleSwitch';
import RadioButton from '../../components/radioButton/RadioButton';
import colors from '../../config/Colors';
import Button from '../../components/button/Button';
import fonts from '../../config/Fonts';
import GeneralStyles from '../../config/GeneralStyle';
import Input from '../../components/input/Input';
import Icon from 'react-native-vector-icons/AntDesign';
import EmailIcon from 'react-native-vector-icons/Fontisto';
import PasswordIcon from 'react-native-vector-icons/Feather';
import ScrollViewComp from '../../components/scrollViewComp/ScrollViewComp';
import ProfileImageCropper from '../../components/profileImageCropper/ProfileImageCropper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Utility from '../../utils/Utility';
const data = [
  {
    id: 1,
    //   label: 'English',
    desc: 'Accept Terms of Service and Privacy Policy',
    value: 'english',
  },
];
const Signup = ({navigation}) => {
  // States
  const [selectedId, setSelectedId] = useState(1);
  const [isState, setIsState] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    profileImage  : ''
  });
  const [securePassword, setSecurePassword] = useState(true);
  const [secureConfirmPassword, setSecureConfirmPassword] = useState(true);
  const [selectedValue, setSelectedValue] = useState('');
  const insets = useSafeAreaInsets()
  return (
    
    <ScreenBg>
      <SafeAreaView style={{flex : 1}}>
      <ScrollViewComp>
        <Container extraStyle={styles.mainContainerStyles(insets?.top)}>
          <LocalImage
            source={images.splashLogo}
            otherStyle={styles.imageContainer}
            resizeMode="contain"
          />
          <Container extraStyle={styles.innerContainer}>
            <Title
              text={labels.signUp}
              fontSize={24}
              fontFamily={fonts.poppinsSemiBold}
              fontWeight={600}
            />
            {/* <Title
            text={labels.mobilityMadeEasyLLC}
            fontSize={24}
            fontFamily={fonts.poppinsSemiBold}
            fontWeight={600}
            otherStyles={GeneralStyles.marginTop(6)}
          /> */}
            <Title
              text={labels.enterYourCredentialsToCreate}
              fontSize={16}
              fontWeight={300}
              otherStyles={{marginTop : 12 , textAlign : "center"}}
            />
            <ProfileImageCropper extraStyle={styles.profileIconStyles}
            state={isState}
            setState={setIsState}
            />
            <Input
              marginLeft={18}
              VectorIcon={() => (
                <Icon name="user" size={20} color={colors.gray} />
              )}
              placeholder={labels.yourName}
              value={isState.name}
              onChangeText={t =>
                setIsState(prevState => ({...prevState, name: t}))
              }
              otherStyles={styles.inputStyles}
            />
            <Input
              marginLeft={18}
              VectorIcon={() => (
                <EmailIcon name="email" size={20} color={colors.gray} />
              )}
              placeholder={labels.emailAddress}
              value={isState.email}
              onChangeText={t =>
                setIsState(prevState => ({...prevState, email: t}))
              }
              otherStyles={styles.inputStyles}
            />

            <Input
              icon={images?.usFlagImage}
              coloredIcon={true}
              colorStyle={{backgroundColor: 'blue'}}
              paddingHorizontal={0}
              circleStyle={styles.circleStyles}
              marginLeft={8}
              iconStyles={styles.iconStyles}
              placeholder={labels.phoneNumber}
              value={isState.phone}
              onChangeText={t =>
                setIsState(prevState => ({...prevState, phone: t}))
              }
              otherStyles={styles.inputStyles}
            />
            <Input
              marginLeft={18}
              VectorIcon={() => (
                <PasswordIcon name="lock" size={20} color={colors.gray} />
              )}
              placeholder={labels.password}
              value={isState.password}
              onChangeText={t =>
                setIsState(prevState => ({...prevState, password: t}))
              }
              RightVectorIcon={
                !securePassword
                  ? () => (
                      <PasswordIcon name="eye" size={20} color={colors.gray} />
                    )
                  : () => (
                      <PasswordIcon
                        name="eye-off"
                        size={20}
                        color={colors.gray}
                      />
                    )
              }
              otherStyles={styles.inputStyles}
              secureEntry={securePassword}
              rightIconPress={() => setSecurePassword(!securePassword)}
            />
            <Input
              VectorIcon={() => (
                <PasswordIcon name="lock" size={20} color={colors.gray} />
              )}
              placeholder={labels.confirmPassword}
              value={isState.confirmPassword}
              onChangeText={t =>
                setIsState(prevState => ({...prevState, confirmPassword: t}))
              }
              rightIconPress={() =>
                setSecureConfirmPassword(!secureConfirmPassword)
              }
              RightVectorIcon={
                !secureConfirmPassword
                  ? () => (
                      <PasswordIcon name="eye" size={20} color={colors.gray} />
                    )
                  : () => (
                      <PasswordIcon
                        name="eye-off"
                        size={20}
                        color={colors.gray}
                      />
                    )
              }
              otherStyles={styles.inputStyles}
              secureEntry={secureConfirmPassword}
            />

            <RadioButton
              data={data}
              marginTop={0}
              padding={0}
              width={'100%'}
              selectedValue={selectedValue}
              trueOrFalse={true}
              setSelectedValue={setSelectedValue}
            />
            <Button
              text={labels.select}
              otherStyles={GeneralStyles.marginTop(40)}
              onPress={()=>{
                if(Utility.validateSignupSchema(isState)){
                  navigation.navigate("rules" , {params : isState?.profileImage})
                }
              }}
            />
              <Container extraStyle={styles.notAUserText}>
                <Title text={labels.alreadyHaveAnAccount} />
                <Pressable onPress={() => navigation.navigate('signin')}>
                  <Title
                    text={labels.signIn}
                    color={colors.c_7939FE}
                    fontWeight={600}
                  />
                </Pressable>
              </Container>
            <Container extraStyle={GeneralStyles.marginBottom(40)}/>
          </Container>
        </Container>
      </ScrollViewComp></SafeAreaView>
    </ScreenBg>
  );
};

export default Signup;
