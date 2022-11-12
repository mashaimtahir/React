import React from 'react';
import {SvgXml} from 'react-native-svg';

const NoSelect = ({height, width, color}) => {
  const defaultColor = color ? color : 'white';
  const defaultHeight = height ? height : 25;
  const defaultWidth = width ? width : 25;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="10" cy="10" r="10" fill="#E2E2E2"/>
<path d="M5 10L8.5 13.5L15 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}
    />
  );
};

export default NoSelect;
