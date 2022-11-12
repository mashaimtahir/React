import React from 'react';
import {SvgXml} from 'react-native-svg';

const MovingArrow = ({height, width, color}) => {
  const defaultColor = color ? color : 'white';
  const defaultHeight = height ? height : 14;
  const defaultWidth = width ? width : 14;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 4L10 -2.62268e-07L10 8L16 4Z" fill="#5E5F65"/>
<path d="M-1.74846e-07 4L6 8L6 -2.62268e-07L-1.74846e-07 4Z" fill="#5E5F65"/>
</svg>
`}
    />
  );
};

export default MovingArrow;
