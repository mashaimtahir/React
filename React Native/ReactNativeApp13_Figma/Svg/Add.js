import React from 'react';
import {SvgXml} from 'react-native-svg';

const Add = ({height, width, color}) => {
  const defaultColor = color ? color : '#5669FF';
  const defaultHeight = height ? height : 34;
  const defaultWidth = width ? width : 34;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.18 8.82V7.18H8.82V3.82H7.18V7.18H3.82V8.82H7.18V12.18H8.82V8.82H12.18ZM13.82 0.5C14.2733 0.5 14.6667 0.666666 15 0.999999C15.3333 1.33333 15.5 1.72667 15.5 2.18V13.82C15.5 14.2733 15.3333 14.6667 15 15C14.6667 15.3333 14.2733 15.5 13.82 15.5H2.18C1.71333 15.5 1.31333 15.3333 0.98 15C0.66 14.6667 0.5 14.2733 0.5 13.82V2.18C0.5 1.72667 0.66 1.33333 0.98 0.999999C1.31333 0.666666 1.71333 0.5 2.18 0.5H13.82Z" fill=${defaultColor}/>
</svg>
`}
    />
  );
};

export default Add;
