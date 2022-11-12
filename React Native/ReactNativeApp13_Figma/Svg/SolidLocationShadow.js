import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {SvgXml} from 'react-native-svg';
const SolidLocationShadow = ({height, width, color}) => {
  const defaultColor = color ? color : 'white';
  const defaultHeight = height ? height : 48;
  const defaultWidth = width ? width : 48;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.12" width="48" height="48" rx="12" fill="#5669FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.6645 12.671C22.3956 11.0841 25.7525 11.1118 28.458 12.7436C31.1368 14.4086 32.765 17.3802 32.7498 20.5768C32.6874 23.7524 30.9416 26.7375 28.7593 29.0451C27.4998 30.383 26.0908 31.566 24.5611 32.57C24.4035 32.6611 24.2309 32.7221 24.0519 32.75C23.8795 32.7427 23.7116 32.6917 23.5634 32.6018C21.228 31.0932 19.1792 29.1675 17.5154 26.9175C16.1232 25.0392 15.3323 22.77 15.25 20.418C15.2482 17.2153 16.9335 14.2578 19.6645 12.671ZM21.2427 21.7434C21.7021 22.876 22.7865 23.6147 23.9895 23.6147C24.7776 23.6204 25.5352 23.3047 26.0935 22.738C26.6518 22.1713 26.9644 21.4007 26.9616 20.5979C26.9658 19.3725 26.2443 18.2653 25.1341 17.7934C24.0238 17.3215 22.7438 17.5779 21.8916 18.4429C21.0395 19.3079 20.7833 20.6108 21.2427 21.7434Z" fill="#5669FF"/>
<path opacity="0.4" d="M24 36.5C27.4518 36.5 30.25 35.9404 30.25 35.25C30.25 34.5596 27.4518 34 24 34C20.5482 34 17.75 34.5596 17.75 35.25C17.75 35.9404 20.5482 36.5 24 36.5Z" fill="#5669FF"/>
</svg>
`}
    />
  );
};

export default SolidLocationShadow;
