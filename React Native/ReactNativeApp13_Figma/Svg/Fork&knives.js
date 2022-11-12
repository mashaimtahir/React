import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {SvgXml} from 'react-native-svg';
const ForkandKnives = ({height, width, color}) => {
  const defaultColor = color ? color : 'white';
  const defaultHeight = height ? height : 14;
  const defaultWidth = width ? width : 14;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_704_6845)">
<path d="M17.4673 15.8942L10.5351 8.96194L2.43595 0.862793H1.803L1.67375 1.1912C1.33264 2.05802 1.18689 2.94459 1.25233 3.75495C1.32691 4.67867 1.67783 5.4784 2.2672 6.06778L8.58983 12.3904L9.42377 11.5565L15.269 18.0926C15.8505 18.674 16.8513 18.7086 17.4673 18.0926C18.0734 17.4864 18.0734 16.5003 17.4673 15.8942Z" fill=${defaultColor}/>
<path d="M5.65957 10.927L0.707715 15.8789C0.10166 16.4849 0.10166 17.4711 0.707715 18.0771C1.28345 18.6529 2.27944 18.7037 2.90601 18.0771L7.85789 13.1253L5.65957 10.927Z" fill=${defaultColor}/>
<path d="M17.1761 3.8061L14.3671 6.61505L13.6343 5.88227L16.4433 3.07329L15.7105 2.34052L12.9016 5.14946L12.1688 4.41668L14.9778 1.60774L14.245 0.875L10.5812 4.53888C10.1329 4.9871 9.8653 5.58225 9.82746 6.21475C9.81789 6.375 9.78157 6.53262 9.72131 6.68255L12.1014 9.0626C12.2513 9.00228 12.409 8.96599 12.5692 8.95643C13.2017 8.91869 13.7968 8.65098 14.245 8.20276L17.9089 4.53892L17.1761 3.8061Z" fill=${defaultColor}/>
</g>
<defs>
<clipPath id="clip0_704_6845">
<rect width="17.6789" height="17.6789" fill=${defaultColor} transform="translate(0.247803 0.863281)"/>
</clipPath>
</defs>
</svg>
`}
    />
  );
};

export default ForkandKnives;
