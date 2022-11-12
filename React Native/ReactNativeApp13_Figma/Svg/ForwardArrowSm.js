import React from 'react';
import {SvgXml} from 'react-native-svg';

const ForwardArrowSm = ({height, width, color}) => {
  const defaultColor = color ? color : 'white';
  const defaultHeight = height ? height : 14;
  const defaultWidth = width ? width : 14;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.5" d="M5.54389 3.68077L1.85911 1.10142C1.19633 0.637479 0.285645 1.11163 0.285645 1.92066V7.07934C0.285645 7.88837 1.19633 8.36252 1.85911 7.89858L5.54388 5.31923C6.1126 4.92113 6.1126 4.07887 5.54389 3.68077Z" fill="#747688"/>
</svg>
`}
    />
  );
};

export default ForwardArrowSm;
