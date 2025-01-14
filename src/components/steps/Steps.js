import React from 'react';
import {StepItem} from './StepItem';
import Container from '../container/Container';

const Steps = ({item, index, stepperEvent = () => {}}) => {
  const handleEvent = index => () => {
    if (item?.selected) {
      stepperEvent(index);
    }
  };

  return (
    <Container>
      <StepItem item={item} index={index} handleEvent={handleEvent} />
    </Container>
  );
};

export default Steps;
