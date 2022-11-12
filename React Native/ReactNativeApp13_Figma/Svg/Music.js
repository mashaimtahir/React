import React from 'react';
import {SvgXml} from 'react-native-svg';

const Music = ({height, width, color}) => {
  const defaultColor = color ? color : 'white';
  const defaultHeight = height ? height : 14;
  const defaultWidth = width ? width : 14;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 17 19" fill=${defaultColor} xmlns="http://www.w3.org/2000/svg">
<path d="M5.47511 3.74565V12.5991C4.91147 12.0862 4.16288 11.7733 3.34271 11.7733C1.59374 11.7733 0.170837 13.1962 0.170837 14.9452C0.170837 16.6941 1.59374 18.117 3.34271 18.117C5.08952 18.117 6.5108 16.6977 6.51445 14.9518H6.51459V8.62536L15.6235 5.88806V10.4652C15.0599 9.95248 14.3113 9.6394 13.4911 9.6394C11.7421 9.6394 10.3192 11.0623 10.3192 12.8113C10.3192 14.5602 11.7421 15.9832 13.4911 15.9832C15.2341 15.9832 16.6531 14.5699 16.6627 12.829H16.663V0.383545L5.47511 3.74565Z" fill=${defaultColor}/>
</svg>
`}
    />
  );
};

export default Music;
