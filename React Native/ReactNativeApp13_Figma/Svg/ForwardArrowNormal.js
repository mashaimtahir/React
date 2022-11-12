import React from 'react';
import {SvgXml} from 'react-native-svg';

const ForwardArrowNormal = ({height, width, color}) => {
  const defaultColor = color ? color : '#5669FF';
  const defaultHeight = height ? height : 11;
  const defaultWidth = width ? width : 7;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L5.5 5.5L1 10" stroke=${defaultColor} stroke-width="2" stroke-linecap="round"/>
</svg>
`}
    />
  );
};

export default ForwardArrowNormal;
