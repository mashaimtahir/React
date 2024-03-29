import React from 'react';
import {SvgXml} from 'react-native-svg';

const Facebook = ({height, width, color}) => {
  const defaultColor = color ? color : '#395998';
  const defaultHeight = height ? height : 28;
  const defaultWidth = width ? width : 28;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="28" height="28" rx="4" fill="white"/>
<path d="M15.1547 21V13.9992H17.2255L17.5 11.5867H15.1547L15.1582 10.3792C15.1582 9.74992 15.2223 9.41278 16.1907 9.41278H17.4853V7H15.4142C12.9264 7 12.0507 8.17033 12.0507 10.1385V11.5869H10.5V13.9994H12.0507V21H15.1547Z" fill=${defaultColor}/>
</svg>
`}
    />
  );
};

export default Facebook;
