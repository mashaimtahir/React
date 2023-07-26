import React from 'react';
import {SvgXml} from 'react-native-svg';

const DeliveryTime = ({height, width, color}) => {
  const defaultColor = color ? color : '#868686';
  const defaultHeight = height ? height : 20;
  const defaultWidth = width ? width : 20;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.33333 9.99992C3.33333 13.6818 6.3181 16.6666 9.99999 16.6666C13.6819 16.6666 16.6667 13.6818 16.6667 9.99992C16.6667 6.31802 13.6819 3.33325 9.99999 3.33325C6.3181 3.33325 3.33333 6.31802 3.33333 9.99992ZM10.0352 5.92584H9.9726C9.77907 5.92584 9.61816 6.07485 9.60332 6.26781L9.28273 10.4355C9.2691 10.6126 9.38317 10.7745 9.55456 10.8212L12.976 11.7543C13.0003 11.7609 13.0253 11.7643 13.0504 11.7643C13.2067 11.7643 13.3333 11.6376 13.3333 11.4814V11.326C13.3333 11.1931 13.2621 11.0703 13.1467 11.0044L10.7407 9.62955L10.4037 6.25936C10.3848 6.07003 10.2255 5.92584 10.0352 5.92584Z" fill="#22A45D"/>
</svg>`}
    />
  );
};

export default DeliveryTime;
