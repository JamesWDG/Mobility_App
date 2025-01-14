import {View, Text, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import Container from '../../components/container/Container';
import ScreenBg from '../../components/screenBg/ScreenBg';
import ProfileImageCropper from '../../components/profileImageCropper/ProfileImageCropper';
import {styles} from './Profile.styles';
import PrimaryHeader from '../../components/primaryHeader/PrimaryHeader';
import labels from '../../assets/labels/English.labels';
import Title from '../../components/title/Title';
import Button from '../../components/button/Button';
import GeneralStyles from '../../config/GeneralStyle';
const Profile = ({navigation}) => {
  const [isState, setIsState] = useState({
    profileImage: '',
  });
  return (
    <ScreenBg>
      <SafeAreaView style={{flex: 1}}>
        <PrimaryHeader goBack={true} title={labels.profile} rightImage={true} />
        <Container extraStyle={{alignItems: 'center', paddingHorizontal: 20 }}>
          <Container >
            <ProfileImageCropper
              extraStyle={styles.profileIconStyles}
              state={isState}
              setState={setIsState}
            />

            <Title text="John Doe" fontSize={24} fontWeight={700} />
            <Title text="@JohnDoe18" />
          </Container>
          <Container extraStyle={{width: '100%' ,marginTop : 50}}>
            <Button
              text={labels.signOut}
              otherStyles={GeneralStyles.marginTop(40)}
                onPress={()=>{
                //   if(Utility.validateSignupSchema(isState)){
                    navigation.navigate("AuthStack" , {screen : "signin"})
                //   }
                }}
            />
          </Container>
        </Container>
      </SafeAreaView>
    </ScreenBg>
  );
};

export default Profile;
