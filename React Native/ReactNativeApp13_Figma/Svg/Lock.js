import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {SvgXml} from 'react-native-svg';
const Lock = ({height, width, color}) => {
  const defaultColor = color ? color : 'white';
  const defaultHeight = height ? height : 14;
  const defaultWidth = width ? width : 14;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0548 7.66038V5.6923C12.0548 3.38872 10.1866 1.52055 7.88301 1.52055C5.57943 1.51047 3.70393 3.36947 3.69385 5.67397V5.6923V7.66038" stroke="#807A7A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.3762 18.4788H4.372C2.4525 18.4788 0.895996 16.9232 0.895996 15.0028V11.0712C0.895996 9.1508 2.4525 7.59521 4.372 7.59521H11.3762C13.2957 7.59521 14.8522 9.1508 14.8522 11.0712V15.0028C14.8522 16.9232 13.2957 18.4788 11.3762 18.4788Z" stroke="#807A7A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.87435 12.019V14.055" stroke="#807A7A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}
    />
  );
};

export default Lock;
