import {Dimensions} from 'react-native';

export const Colors = {
  green: '#22A45D',
  black: '#010F07',
  grey: '#868686',
  lightgrey: '#F1F1F1',
  offwhite: '#FBFBFB',
  white: '#FFFFFF',
  orange: '#EF9920',
  primaryblue: '#4285F4',
  blue: '#395998',
};

export const FontSize = {
  H1: Dimensions.get('screen').width * 0.067, // 34 // verified
  H2: Dimensions.get('screen').width * 0.059, // 28
  H3: Dimensions.get('screen').width * 0.054, // 24
  Headline: Dimensions.get('screen').width * 0.056, // 30
  Subhead: Dimensions.get('screen').width * 0.047, // 20 // Verified
  Body: Dimensions.get('screen').width * 0.04, // 16 // verified
  Caption: Dimensions.get('screen').width * 0.033, // 12 // verified
  Button: Dimensions.get('screen').width * 0.036, // 14
};
