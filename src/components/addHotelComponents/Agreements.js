import {View, Text} from 'react-native';
import React, {useState} from 'react';
import ScrollViewComp from '../scrollViewComp/ScrollViewComp';
import Title from '../title/Title';
import Container from '../container/Container';
import TouchableContainer from '../touchableContainer/TouchableContainer';
import Input from '../input/Input';
import labels from '../../assets/labels/English.labels';
import SignatureExample from '../eSignature/Esignature';
import colors from '../../config/Colors';
import GeneralStyles from '../../config/GeneralStyle';
import moment from 'moment';

const Agreements = ({data}) => {
  const [readMoreVisible, setReadMoreVisible] = useState(false);
  const [isState, setIsState] = useState({
    name: '',
    address: '',
  });
  return (
    <ScrollViewComp contentContainerStyle={{gap: 15}}>
      <Title text="WAIVER OF LIABILITY" fontSize={22} />
      <Title text="Acceptance" fontSize={16} />
      <Title
        text="Please read this Waiver of Liability before applying any of the information on the website. By completing the form and registering as a vendor on the Mobility Made Easy LLC website, you certify your digital acceptance and acknowledgement of this Waiver of Liability."
        fontSize={14}
      />
      {readMoreVisible ? (
        <Container extraStyle={{height: 250}}>
          <ScrollViewComp
            contentContainerStyle={{gap: 15, marginTop: 15}}
            showsVerticalScrollIndicator>
            <Title text="Mobility Made Easy LLC, acting as an intermediary to facilitate connection and communication between vendors and customers, makes the website and website services available to allow Customers to find and transact directly with vendors. We are not legally responsible for what may happen between users of the Mobility Made Easy LLC website." />
            <Title text="California Legislation" />
            <Title text="To the fullest extent permitted by law, you release and promise not to sue Mobility Made Easy LLC for any claims, demands, causes of action, losses (economic or non-economic), damages, expenses, costs or liability of any nature arising out of your customers which services were provided." />
            <Title text="Vendors acknowledge and agree to provide service in accordance with California Statutes, codes and regulations." />
            <Title text="- California Civil Code. Division 3. Obligations:" />
            <Title text="- Part 1. Obligations In General 1427-1543" />
            <Title text="- Part 2. Contracts 1549-1701" />
            <Title text="- Part 3. Obligations Imposed By Law 1708-1725" />
            <Title text="- Part 4. Obligations Arising From Particular Transactions 1738-3273" />
            <Title text="- Title 3. Transfer Of Obligations 1457-1471." />
            <Title text="Assumption of Risk" />
            <Title text="Mobility Made Easy LLC is not responsible and you agree not to hold us (owners, founders, co-founders, executive team, employees, subsidiaries, affiliates, agents) liable for the following:" />
            <Title text="You fully release Mobility Made Easy LLC from all Claims you have or may have against you arising out of your use of the Services." />
            <Title text="You fully release and safeguard us against any unforeseen charges due to personal injury or property damage your customers may experience." />
            <Title text="You assume all risks related to your products and services listed on the platform such as cars, scooters, bikes, vacant rooms or guesthouses." />
            <Title text="You are fully responsible for performing a safety inspection on your listed products and services." />
            <Title text="You are aware of the significant risks, dangers and damages to renting and sharing a car, scooter, electric bicycles, bike, etc. You release Mobility Made Easy LLC from all liability related to those risks." />
            <Title text="You fully release Mobility Made Easy LLC from all injuries or damages that you may cause customers in connection with your property, including sickness, physical injury, property damage, disability, permanent paralysis, and death." />
            <Title text="Severability" />
            <Title text="I further agree that this Waiver of Liability is intended to be as broad and inclusive as permitted by law, and that if any portion is held invalid, the remaining portions will continue to have full legal force and effect." />
            <Title text="Governing Law and Jurisdiction" />
            <Title text="This Agreement shall be governed by the laws of the State of California, and any disputes arising out of or in connection with this Agreement shall be under the exclusive jurisdiction of the Courts of the State of California." />
            <Title text="Release" />
            <Title text="Acknowledgment of Understanding: I have read this Waiver of Liability, fully understand its terms, and understand that I am giving up substantial rights, including my right to sue. I confirm that I am e-signing the agreement freely and voluntarily, and intend my e-signature to be a complete and unconditional release of all liability to the greatest extent allowed by law." />
          </ScrollViewComp>
        </Container>
      ) : null}
      <TouchableContainer onPress={() => setReadMoreVisible(prev => !prev)}>
        <Title text={readMoreVisible ? 'Read less' : 'Read more'} />
      </TouchableContainer>

      <Title text="Release of Liability" fontSize={18} />
      <Container extraStyle={{gap: 10}}>
        <Container
          extraStyle={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            //   marginBottom: 15,
          }}>
          <Title text={`${labels?.date} : `} color={colors.gray} />
          <Title
            text={`${moment().format('YYYY-MM-DD')} `}
            otherStyles={GeneralStyles.flex(1)}
          />
        </Container>
        <Container
          extraStyle={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            //   marginBottom: 15,
          }}>
          <Title text={`${labels?.name} : `} color={colors.gray} />
          <Title text={`${data?.name} `} otherStyles={GeneralStyles.flex(1)} />
        </Container>
        <Container
          extraStyle={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            //   marginBottom: 15,
          }}>
          <Title text={`${labels?.address} : `} color={colors.gray} />
          <Title text={`${data?.name} `} otherStyles={GeneralStyles.flex(1)} />
        </Container>

        <Container>
          <Title text="E-Signature" fontSize={18} />
          <Title text={data?.name} fontSize={34} />
        </Container>
      </Container>
    </ScrollViewComp>
  );
};

export default Agreements;
