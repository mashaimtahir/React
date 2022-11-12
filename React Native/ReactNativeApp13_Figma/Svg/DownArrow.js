import React from 'react';
import {SvgXml} from 'react-native-svg';

const DownArrow = ({height, width, color}) => {
  const defaultColor = color ? color : 'white';
  const defaultHeight = height ? height : 14;
  const defaultWidth = width ? width : 14;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.898205" d="M0 0H10L5 5L0 0Z" fill="#FCFCFC"/>
</svg>
`}
    />
  );
};

export default DownArrow;
