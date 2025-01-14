import React, {Fragment} from 'react';
import Container from '../container/Container';
import TouchableContainer from '../touchableContainer/TouchableContainer';
import Title from '../title/Title';
import styles from './Steps.style';
import colors from '../../config/Colors';
import fonts from '../../config/Fonts';
import {LocalImage} from '../localImage/LocalImage';
import {images} from '../../config/Images';

export const StepItem = ({item, index, handleEvent}) => {
  return (
    <Container extraStyle={styles.stepsMainContainer(index)}>
      <Container>
        <Container
          extraStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'brown',
            flexDirection: 'row',
          }}>
          <Container extraStyle={styles.lineWrapper(index)}>
            <Container extraStyle={styles.lineStyling(item, index)} />
          </Container>

          <TouchableContainer
            activeOpacity={1}
            extraStyle={styles.stepWrapper(index)}
            onPress={handleEvent(index)}>
            <Container extraStyle={[styles.stepCircle(item)]}>
              {item?.completed ? (
                <LocalImage source={images.stepCompleted} />
              ) : item?.selected ? (
                <Container extraStyle={styles.selectedStep} />
              ) : (
                <Title
                  text={item?.step}
                  fontSize={13}
                  color={item?.selected ? colors.primary : colors.black}
                  fontFamily={fonts.gabaritoSemiBold}
                />
              )}
            </Container>
          </TouchableContainer>
        </Container>
        <Container extraStyle={{backgroundColor: 'blue'}}>
          <Container extraStyle={styles.stepTitleBox(index)}>
            <Title
              text={item?.label}
              fontSize={12}
              color={item?.selected ? colors.c_7939FE : colors.gray}
              fontFamily={fonts.gabaritoSemiBold}
              otherStyles={styles.label(index)}
            />
          </Container>
        </Container>
      </Container>
    </Container>
  );
};
