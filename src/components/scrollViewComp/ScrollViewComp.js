import React, {memo} from 'react';
import {ScrollView} from 'react-native';
import Container from '../container/Container';
import {styles} from './ScrollViewComp.style';

/* A custom scroll view component that wraps the native ScrollView component.
 * It adds a `Container` component around the scroll view and accepts all the
 * props that the native `ScrollView` component accepts.
 *
 * @param {boolean} horizontal - Whether the scroll view should be horizontal or not. Defaults to false.
 * @param {React.ReactNode} children - The children of the scroll view.
 * @param {ViewStyle} contentContainerStyle - The style of the content container.
 * @param {ViewStyle} style - The style of the scroll view.
 * @param {function} onScroll - The on scroll event handler.
 * @param {boolean} showsVerticalScrollIndicator - Whether to show the vertical scroll indicator or not. Defaults to false.
 * @param {boolean} showsHorizontalScrollIndicator - Whether to show the horizontal scroll indicator or not. Defaults to false.
 * @param {React.MutableRefObject<ScrollView> | React.RefObject<ScrollView>} _ref - The ref of the scroll view.
 * @param {function} scrollsToTop - The on scroll to top event handler.
 * @param {number} scrollEventThrottle - The throttle value for the scroll event. Defaults to 16.
 * @param {function} onMomentumScrollEnd - The on momentum scroll end event handler.
 * @param {boolean} pagingEnabled - Whether to enable paging or not. Defaults to false.
 * @param {boolean | "never" | "always" | "handled"} keyboardShouldPersistTaps - Whether the keyboard should persist taps or not. Defaults to "never".
 */

const ScrollViewComp = ({
  horizontal = false,
  children,
  contentContainerStyle,
  style,
  onScroll,
  showsVerticalScrollIndicator = false,
  showsHorizontalScrollIndicator = false,
  _ref,
  scrollsToTop = () => {},
  scrollEventThrottle = 16,
  onMomentumScrollEnd = () => {},
  pagingEnabled = false,
  keyboardShouldPersistTaps,
}) => {
  return (
    <Container style={'container'}>
      <ScrollView
        ref={_ref}
        keyboardShouldPersistTaps={keyboardShouldPersistTaps}
        onMomentumScrollEnd={onMomentumScrollEnd}
        horizontal={horizontal}
        onScroll={onScroll}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
        style={style || styles.flex}
        scrollEventThrottle={scrollEventThrottle}
        onScrollToTop={scrollsToTop}
        scrollsToTop={true}
        scrollEnabled={true}
        nestedScrollEnabled={true}
        pagingEnabled={pagingEnabled}
        contentContainerStyle={contentContainerStyle || styles.scrollView}>
        {children}
      </ScrollView>
    </Container>
  );
};

export default memo(ScrollViewComp);
