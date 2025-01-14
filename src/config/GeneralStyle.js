import {Dimensions, StyleSheet} from 'react-native';
import colors from './Colors';
const {width, height} = Dimensions.get('window');

const GeneralStyles = StyleSheet.create({
  maxWidth: maxWidth => ({maxWidth: maxWidth}),
  flexShrink: flexShrink => ({flexShrink: flexShrink}),
  gap: gap => ({gap: gap}),
  width: width => ({width: width}),
  height: height => ({height: height}),
  flexGrow: flexGrow => ({flexGrow: flexGrow}),
  flex: flex => ({flex: flex}),
  flexDirection: direction => ({flexDirection: direction}),
  alignItems: alignItems => ({alignItems: alignItems}),
  marginTop: marginTop => ({marginTop: marginTop}),
  marginVertical: marginVertical => ({marginVertical: marginVertical}),
  justifyContent: justifyContent => ({justifyContent: justifyContent}),
  marginBottom: marginBottom => ({marginBottom: marginBottom}),
  textAlign: textAlign => ({textAlign: textAlign}),
  backgroundColor: backgroundColor => ({backgroundColor: backgroundColor}),
  color: color => ({color: color}),
  marginLeft: marginLeft => ({marginLeft: marginLeft}),
  marginRight: marginRight => ({marginRight: marginRight}),
  marginHorizontal: marginHorizontal => ({marginHorizontal: marginHorizontal}),
  paddingRight: paddingRight => ({paddingRight: paddingRight}),
  paddingLeft: paddingLeft => ({paddingLeft: paddingLeft}),
  paddingBottom: paddingBottom => ({paddingBottom: paddingBottom}),
  paddingTop: paddingTop => ({paddingTop: paddingTop}),
  borderColor: borderColor => ({borderColor: borderColor}),
  paddingHorizontal: pH => ({paddingHorizontal: pH}),
  paddingVertical: pV => ({paddingVertical: pV}),
  borderBottomWidth: borderBottomWidth => ({
    borderBottomWidth: borderBottomWidth,
  }),
  textTransform: textTransform => ({textTransform: textTransform}),
  centerCenter: {alignItems: 'center', justifyContent: 'center'},
});

export default GeneralStyles;
