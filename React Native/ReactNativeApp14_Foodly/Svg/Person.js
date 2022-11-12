import React from 'react';
import {SvgXml} from 'react-native-svg';
import {Colors} from '../Theme';

const Person = ({height, width, color}) => {
  const defaultColor = color ? color : Colors.grey;
  const defaultHeight = height ? height : 18;
  const defaultWidth = width ? width : 18;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 4C5 6.20914 6.79086 8 9 8C11.2091 8 13 6.20914 13 4C13 1.79086 11.2091 0 9 0C6.79086 0 5 1.79086 5 4ZM8.98334 10C4.26191 10 0.388259 12.4265 0.000651684 17.1992C-0.0204617 17.4592 0.476712 18 0.727502 18H17.2467C17.9979 18 18.0096 17.3955 17.9979 17.2C17.7049 12.2932 13.7712 10 8.98334 10Z" fill=${defaultColor}/>
</svg>
`}
    />
  );
};

export default Person;
