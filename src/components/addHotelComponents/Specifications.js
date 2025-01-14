import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Container from '../container/Container';
import Input from '../input/Input';
import labels from '../../assets/labels/English.labels';
import Title from '../title/Title';
import {TextInput} from 'react-native';
import {Divider} from '../divider/Divider';
import GeneralStyles from '../../config/GeneralStyle';
import {PercentageFinder} from '../../utils/percentage';
const data = [
  labels.basePrice,
  labels.guestServiceFee,
  labels.guestPriceAfterTaxes,
  labels.platformCharge20Percent,
  labels.youEarn80Percent,
];
const Specifications = ({isState = {}, setIsState = () => {}}) => {
  return (
    <Container>
      {/* <Input
        marginLeft={18}
        keyboardType={'number-pad'}
        placeholder={labels.charges}
        value={specificationCharges}
        onChangeText={t => setSpecificationCharges(t)}
      /> */}

      <Container
        extraStyle={{
          // backgroundColor: 'red',
          alignItems: 'center',
        }}>
        <TextInput
          style={{
            borderWidth: 0.2,
            width: 140,
            padding: 10,
            fontSize: 18,
            fontWeight: 600,
            textAlign: 'center',
            borderRadius: 8,
          }}
          value={isState?.price}
          onChangeText={text =>
            setIsState(prev => {
              return {...prev, price: text};
            })
          }
        />
      </Container>
      {isState?.price > 0 ? (
        <>
          <Title
            text={labels.guestPriceBeforeTaxes}
            fontSize={16}
            fontWeight={600}
            otherStyles={{marginTop: 10, textAlign: 'center'}}
          />
          <ScrollView contentContainerStyle={{gap: 20, marginTop: 20}}>
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
                <Title text={`$ ${isState?.price}`} />
              </Container>
              <Container
                extraStyle={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Title text={labels.guestServiceFee} />
                <Title
                  text={`$ ${Number(
                    PercentageFinder(5, isState?.price),
                  ).toFixed(3)}`}
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
                    Number(isState?.price) +
                    Number(
                      Number(PercentageFinder(5, isState?.price)).toFixed(3),
                    )
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
                      Number(isState?.price) +
                        PercentageFinder(5, isState?.price),
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
                      Number(isState?.price) +
                        PercentageFinder(5, isState?.price),
                    ) -
                    Number(
                      PercentageFinder(
                        20,
                        Number(isState?.price) +
                          PercentageFinder(5, isState?.price),
                      ),
                    )
                  }
                />
              </Container>
            </Container>
          </ScrollView>
        </>
      ) : null}
    </Container>
  );
};

export default Specifications;
