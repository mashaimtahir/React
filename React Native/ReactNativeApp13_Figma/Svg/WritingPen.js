import React from 'react';
import {SvgXml} from 'react-native-svg';

const WritingPen = ({height, width, color}) => {
  const defaultColor = color ? color : 'white';
  const defaultHeight = height ? height : 14;
  const defaultWidth = width ? width : 14;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 10.8335H11.375" stroke="#5669FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.9375 1.89563C9.15299 1.68014 9.44525 1.55908 9.75 1.55908C9.90089 1.55908 10.0503 1.5888 10.1897 1.64655C10.3291 1.70429 10.4558 1.78893 10.5625 1.89563C10.6692 2.00233 10.7538 2.129 10.8116 2.26841C10.8693 2.40782 10.899 2.55724 10.899 2.70813C10.899 2.85903 10.8693 3.00844 10.8116 3.14785C10.7538 3.28726 10.6692 3.41393 10.5625 3.52063L3.79167 10.2915L1.625 10.8331L2.16667 8.66646L8.9375 1.89563Z" stroke="#5669FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}
    />
  );
};

export default WritingPen;
