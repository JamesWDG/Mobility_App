import {View, Text} from 'react-native';
import React from 'react';
import Container from '../container/Container';
import Title from '../title/Title';
import {myCarsStepsData, stepsData} from '../../constants/stepperData';
import CommonCard from '../addHotelComponents/CommonCard';
import {houseFeatures} from '../../utils/addHotel.constants';
import TouchableContainer from '../touchableContainer/TouchableContainer';
import Icon from 'react-native-vector-icons/AntDesign';
import labels from '../../assets/labels/English.labels';
import colors from '../../config/Colors';
import GeneralStyles from '../../config/GeneralStyle';
import styles from '../addHotelComponents/addHotel.styles';
import {LocalImage} from '../localImage/LocalImage';
import PreviewEditComp from '../addHotelComponents/PreviewEditComp';
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
  return (
    <ScrollViewComp contentContainerStyle={GeneralStyles.gap(24)}>
      <Container>
        <PreviewEditComp
          title={stepsData[6]?.label}
          setSteps={() => setSelectedIndex(6)}
        />
        <Container extraStyle={styles.coverContainer}>
          {data?.images?.length > 0 && (
            <Container extraStyle={styles.bannerContainer}>
              <BannerComp data={data?.images} />
            </Container>
          )}
        </Container>
      </Container>
      {/* First Step */}
      <Container extraStyle={{gap: 12}}>
        <PreviewEditComp
          title={myCarsStepsData[0]?.label}
          setSteps={() => setSelectedIndex(0)}
        />
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
          <Title text={`${labels?.vehicleMake} : `} color={colors.gray} />
          <Title
            text={`${data?.vehicleMake[0]?.title} `}
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
          <Title text={`${labels?.vehicleModel} : `} color={colors.gray} />
          <Title
            text={`${data?.vehicleModel[0]?.model} `}
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
          <Title text={`${labels?.registrationYear} : `} color={colors.gray} />
          <Title
            text={`${moment(data?.registrationNumber).format('YYYY')} `}
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
          <Title text={`${labels?.licenseNumber} : `} color={colors.gray} />
          <Title
            text={`${data?.licenseNumber} `}
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
          <Title text={`${labels?.platenumber} : `} color={colors.gray} />
          <Title
            text={`${data?.platenumber} `}
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
          <Title text={`${labels?.vehiclesMileage} : `} color={colors.gray} />
          <Title
            text={`${data?.milage} `}
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
          <Title text={`${labels?.pickupTime} : `} color={colors.gray} />
          <Title
            text={`${moment(data?.startTime).format('DD-MM-YYYY')} `}
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
          <Title text={`${labels?.dropOffTime} : `} color={colors.gray} />
          <Title
            text={`${moment(data?.endTime).format('DD-MM-YYYY')} `}
            otherStyles={GeneralStyles.flex(1)}
          />
        </Container>
        {data?.description ? (
          <Container
            extraStyle={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              //   marginBottom: 15,
            }}>
            <Title text={`${labels?.description} : `} color={colors.gray} />
            <Title
              text={`${data?.description} `}
              otherStyles={GeneralStyles.flex(1)}
            />
          </Container>
        ) : null}
        {data?.importantNotes ? (
          <Container
            extraStyle={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              //   marginBottom: 15,
            }}>
            <Title text={`${labels?.importantNotes} : `} color={colors.gray} />
            <Title
              text={`${data?.importantNotes} `}
              otherStyles={GeneralStyles.flex(1)}
            />
          </Container>
        ) : null}
        {/* <CommonCard ele={data?.describeYourPlaceImage} /> */}
      </Container>

      {/* Second Step */}
      <Container extraStyle={{gap: 12}}>
        <PreviewEditComp
          title={myCarsStepsData[1]?.label}
          setSteps={() => setSelectedIndex(1)}
        />

        <Container>
          <Title text={labels.vehicleType} otherStyles={{marginBottom: 10}} />
          <CommonCard ele={data?.vehicleType[0]} />
        </Container>
        <Container extraStyle={GeneralStyles.gap(5)}>
          <Container
            extraStyle={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              //   marginBottom: 15,
            }}>
            <Title text={`${labels?.numOfSeats} : `} color={colors.gray} />
            <Title
              text={`${data?.numberOfSeats} `}
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
            <Title text={`${labels?.numOfDoors} : `} color={colors.gray} />
            <Title
              text={`${data?.numberOfDoors} `}
              otherStyles={GeneralStyles.flex(1)}
            />
          </Container>
          <Container>
            <Title text={labels.powertain} otherStyles={{marginVertical: 10}} />
            <CommonCard ele={data?.powertain[0]} />
          </Container>
          <Container>
            <Title
              text={labels.manualTypes}
              otherStyles={{marginVertical: 10}}
            />
            <CommonCard ele={data?.manualTypes[0]} />
          </Container>
        </Container>
      </Container>

      {/* Third Step */}
      <Container extraStyle={{gap: 12}}>
        <PreviewEditComp
          title={myCarsStepsData[2]?.label}
          setSteps={() => setSelectedIndex(2)}
        />
        <Container extraStyle={GeneralStyles.gap(8)}>
          <Title text={labels.features} fontSize={16} />
          <Container extraStyle={{flexDirection: 'row', gap: 12}}>
            {data?.features.map(ele => (
              <CommonCard ele={ele} />
            ))}
          </Container>
        </Container>

        {data?.list?.length
          ? data?.list.map((ele, index) => {
              return ele?.text ? (
                <Container
                  extraStyle={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    //   marginBottom: 15,
                  }}>
                  <Title
                    text={`${labels?.specialFeature}  ${index + 1} : `}
                    color={colors.gray}
                  />
                  <Title
                    text={`${ele?.text} `}
                    otherStyles={GeneralStyles.flex(1)}
                  />
                </Container>
              ) : null;
            })
          : null}

        <Container extraStyle={GeneralStyles.gap(8)}>
          <Title text={labels.disabilityFeatures} fontSize={16} />
          <Container extraStyle={{flexDirection: 'row', gap: 12}}>
            {data?.disabilityFeatures.map(ele => (
              <CommonCard ele={ele} />
            ))}
          </Container>
        </Container>
        {/* <Container
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
        </Container> */}
      </Container>

      {/* Fourth Step */}

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

      {/* Fifth Step */}
      <Container>
        <PreviewEditComp
          title={myCarsStepsData[5]?.label}
          setSteps={() => setSelectedIndex(5)}
        />
        <Container extraStyle={{gap: 15}}>
          {data?.discount.map(ele => {
            return (
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
                  <Title text={`${ele.discount}%`} color={colors.white} />
                </Container>
                <Container
                  extraStyle={{
                    // flexDirection: 'row',
                    // alignItems: 'center',
                    justifyContent: 'space-between',
                    flex: 1,
                    gap: 5,
                  }}>
                  <Title text={ele.label} fontSize={16} fontWeight={600} />
                  <Title text={ele?.desc} />
                </Container>
                <Icons name="percentage" />
                {/* </Container> */}
              </TouchableContainer>
            );
          })}
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
    </ScrollViewComp>
  );
};

export default Preview;
