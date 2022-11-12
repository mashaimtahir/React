import React from 'react';
import {SvgXml} from 'react-native-svg';

const BackSign = ({height, width, color}) => {
  const defaultColor = color ? color : '#111719';
  const defaultHeight = height ? height : 14;
  const defaultWidth = width ? width : 14;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.65783 1L1.34204 6.91654L7.4255 13" stroke=${defaultColor} stroke-width="1.89474" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`}
    />
  );
};

export default BackSign;
