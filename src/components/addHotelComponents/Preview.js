import {View, Text} from 'react-native';
import React from 'react';
import Container from '../container/Container';
import Title from '../title/Title';
import {stepsData} from '../../constants/stepperData';
import CommonCard from './CommonCard';
import {houseFeatures} from '../../utils/addHotel.constants';
import TouchableContainer from '../touchableContainer/TouchableContainer';
import Icon from 'react-native-vector-icons/AntDesign';
import labels from '../../assets/labels/English.labels';
import colors from '../../config/Colors';
import GeneralStyles from '../../config/GeneralStyle';
import styles from './addHotel.styles';
import {LocalImage} from '../localImage/LocalImage';
import PreviewEditComp from './PreviewEditComp';
import ScrollViewComp from '../scrollViewComp/ScrollViewComp';
import moment from 'moment';
import {PercentageFinder} from '../../utils/percentage';
import {Divider} from '../divider/Divider';
import Icons from 'react-native-vector-icons/FontAwesome5';
import BannerComp from '../bannerComp/BannerComp';
import {images} from '../../config/Images';

export const bannersData = [
  {
    id: 1,
    image: images.venueCover,
  },
  {
    id: 2,
    image: images.venueCover,
  },
  {
    id: 3,
    image: images.venueCover,
  },
  {
    id: 4,
    image: images.venueCover,
  },
];
const Preview = ({steps, data, setSelectedIndex}) => {
  console.log(data);
  return (
    <ScrollViewComp contentContainerStyle={GeneralStyles.gap(24)}>
      <Container>
        <PreviewEditComp
          title={stepsData[7]?.label}
          setSteps={() => setSelectedIndex(7)}
        />
        <Container extraStyle={styles.coverContainer}>
          {data?.images?.length > 0 && (
            <Container extraStyle={styles.bannerContainer}>
              <BannerComp data={data?.images} borderRadius={20} />
            </Container>
          )}
        </Container>
      </Container>
      <Container>
        <PreviewEditComp
          title={stepsData[0]?.label}
          setSteps={() => setSelectedIndex(0)}
        />
        <CommonCard ele={data?.describeYourPlaceImage} />
      </Container>
      <Container>
        <PreviewEditComp
          title={stepsData[1]?.label}
          setSteps={() => setSelectedIndex(1)}
        />
        <Container extraStyle={GeneralStyles.gap(5)}>
          <Container
            extraStyle={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              //   marginBottom: 15,
            }}>
            <Title text={`${labels?.name} : `} color={colors.gray} />
            <Title
              text={`${data?.name} : `}
              otherStyles={GeneralStyles.flex(1)}
            />
          </Container>
          <Container
            extraStyle={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              //   marginBottom: 15,
              // backgroundColor: 'red',
            }}>
            <Title text={`${labels?.description} : `} color={colors.gray} />
            <Title
              text={data?.description || data?.description}
              otherStyles={GeneralStyles.flex(1)}
            />
          </Container>
        </Container>
      </Container>

      {/* Third Step */}
      <Container>
        <PreviewEditComp
          title={stepsData[2]?.label}
          setSteps={() => setSelectedIndex(2)}
        />
        <Container
          extraStyle={styles.guestRow('ele?.title', data?.guestHave?.title)}>
          <Container extraStyle={styles.guestRowContainer}>
            <Title
              text={data?.guestHave?.title}
              fontSize={18}
              fontWeight={600}
              color={
                'ele?.title' == data?.guestHave?.title
                  ? colors.white
                  : colors.black
              }
            />
            <Title
              text={data?.guestHave?.description}
              color={
                'ele?.title' == data?.guestHave?.title
                  ? colors.white
                  : colors.black
              }
            />
          </Container>
          <LocalImage
            source={data?.guestHave?.image}
            tintColor={
              ' ele?.title' == data?.guestHave?.title
                ? colors.white
                : colors.black
            }
            //   otherStyle={{height: 30, width: 30}}
          />
        </Container>
      </Container>

      {/* Fourth Step */}
      <Container>
        <PreviewEditComp
          title={stepsData[3]?.label}
          setSteps={() => setSelectedIndex(3)}
        />

        <Container extraStyle={GeneralStyles.gap(8)}>
          {data?.placeLocatedData.map((ele, index) => (
            <Container
              key={index}
              extraStyle={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                //   marginBottom: 15,
              }}>
              <Title
                text={`${ele?.title} : `}
                color={colors.gray}
                otherStyles={GeneralStyles.textTransform('capitalize')}
              />
              <Title
                text={`${ele?.count}  `}
                otherStyles={GeneralStyles.flex(1)}
              />
            </Container>
          ))}
          <Container
            extraStyle={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              //   marginBottom: 15,
            }}>
            <Title
              text={`${labels.checkin} : `}
              color={colors.gray}
              otherStyles={GeneralStyles.textTransform('capitalize')}
            />
            <Title
              text={`${moment(data?.startTime).format('hh:mm:ss A')}  `}
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
            <Title
              text={`${labels.checkout} : `}
              color={colors.gray}
              otherStyles={GeneralStyles.textTransform('capitalize')}
            />
            <Title
              text={`${moment(data?.endTime).format('hh:mm:ss A')}  `}
              otherStyles={GeneralStyles.flex(1)}
            />
          </Container>
        </Container>
      </Container>

      {/* Fifth Step */}

      <Container>
        <PreviewEditComp
          title={stepsData[4]?.label}
          setSteps={() => setSelectedIndex(4)}
        />

        <Container extraStyle={GeneralStyles.gap(10)}>
          <Container extraStyle={GeneralStyles.gap(15)}>
            <Container extraStyle={GeneralStyles.gap(8)}>
              <Title text={labels.features} fontSize={16} />
              <Container extraStyle={{flexDirection: 'row', gap: 12}}>
                {data?.features.map(ele => (
                  <CommonCard ele={ele} />
                ))}
              </Container>
            </Container>
            <Container extraStyle={GeneralStyles.gap(8)}>
              <Title text={labels.specialFeatures} fontSize={16} />
              <Container extraStyle={{flexDirection: 'row', gap: 12}}>
                {data?.specialfeatures.map(ele => (
                  <CommonCard ele={ele} />
                ))}
              </Container>
            </Container>
            <Container extraStyle={GeneralStyles.gap(8)}>
              <Title text={labels.safties} fontSize={16} />
              <Container extraStyle={{flexDirection: 'row', gap: 12}}>
                {data?.safties.map(ele => (
                  <CommonCard ele={ele} />
                ))}
              </Container>
            </Container>
            <Container extraStyle={GeneralStyles.gap(8)}>
              <Title text={labels.disabilities} fontSize={16} />
              <Container extraStyle={{flexDirection: 'row', gap: 12}}>
                {data?.disabilities.map(ele => (
                  <CommonCard ele={ele} />
                ))}
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>

      {/* Sixth Step */}

      <Container>
        <PreviewEditComp
          title={stepsData[5]?.label}
          setSteps={() => setSelectedIndex(5)}
        />
        <Container extraStyle={{gap: 20}}>
          <Container
            extraStyle={{
              borderWidth: 0.2,
              padding: 20,
              borderRadius: 8,
              gap: 15,
            }}>
            <Container
              extraStyle={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Title text={labels.basePrice} />
              <Title text={`$ ${data?.price}`} />
            </Container>
            <Container
              extraStyle={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Title text={labels.guestServiceFee} />
              <Title
                text={`$ ${Number(PercentageFinder(5, data?.price)).toFixed(
                  3,
                )}`}
              />
            </Container>
            <Divider mT={10} />
            <Container
              extraStyle={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Title text={labels.guestPriceAfterTaxes} />
              <Title
                text={`$ ${
                  Number(data?.price) +
                  Number(Number(PercentageFinder(5, data?.price)).toFixed(3))
                }`}
              />
            </Container>
          </Container>

          <Container
            extraStyle={{
              borderWidth: 0.2,
              padding: 20,
              borderRadius: 8,
              gap: 10,
            }}>
            <Container
              extraStyle={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Title text={labels.platformCharge20Percent} />
              <Title
                // text={`$ ${
                //   Number(20 / 100) *
                //   (Number(price) + Number(Number.parseFloat(5 / 100) * price))
                // }`}
                text={`$ ${Number(
                  PercentageFinder(
                    20,
                    // Number(
                    Number(data?.price) + PercentageFinder(5, data?.price),
                    // ),
                  ),
                ).toFixed(3)}`}
              />
            </Container>
          </Container>
          <Container
            extraStyle={{
              borderWidth: 0.2,
              padding: 20,
              borderRadius: 8,
              gap: 10,
            }}>
            <Container
              extraStyle={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Title text={labels.youEarn80Percent} />
              <Title
                // text={`$ ${
                //   Number(price) +
                //   Number(Number.parseFloat(5 / 100) * price) -
                //   Number(20 / 100) *
                //     (Number(price) + Number(Number.parseFloat(5 / 100) * price))
                // }`}
                text={
                  Number(
                    Number(data?.price) + PercentageFinder(5, data?.price),
                  ) -
                  Number(
                    PercentageFinder(
                      20,
                      Number(data?.price) + PercentageFinder(5, data?.price),
                    ),
                  )
                }
              />
            </Container>
          </Container>
        </Container>
      </Container>

      {/* Seventh Step */}
      <Container>
        <PreviewEditComp
          title={stepsData[6]?.label}
          setSteps={() => setSelectedIndex(5)}
        />
        <TouchableContainer
          onPress={() => {}}
          extraStyle={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 15,
            padding: 10,
            borderWidth: 0.2,
            borderRadius: 8,
            paddingHorizontal: 20,
            backgroundColor: colors.white,
          }}>
          {/* <Container> */}
          <Container
            extraStyle={{
              backgroundColor: colors.c_7939FE,
              paddingHorizontal: 14,
              borderRadius: 4,
              paddingVertical: 6,
            }}>
            <Title text={`${data?.discount?.discount}%`} color={colors.white} />
          </Container>
          <Container
            extraStyle={{
              // flexDirection: 'row',
              // alignItems: 'center',
              justifyContent: 'space-between',
              flex: 1,
              gap: 5,
            }}>
            <Title
              text={data?.discount?.label}
              fontSize={16}
              fontWeight={600}
            />
            <Title text={data?.discount?.desc} />
          </Container>
          <Icons name="percentage" />
          {/* </Container> */}
        </TouchableContainer>
      </Container>
    </ScrollViewComp>
  );
};

export default Preview;
