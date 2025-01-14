import React from 'react';
import ViewShot from 'react-native-view-shot';
import styles from './Container.style';

const ViewShotContainer = ({style, extraStyle, children, viewRef = null}) => {
  return (
    <ViewShot
      style={[extraStyle]}
      ref={viewRef}
      options={{
        format: 'jpg',
        quality: 0.9,
        result: 'tmpfile',
        // useSoftwareBitmap: true,
      }}>
      {children}
    </ViewShot>
  );
};

export default ViewShotContainer;
