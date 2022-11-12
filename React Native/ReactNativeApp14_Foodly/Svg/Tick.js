import React from 'react';
import {SvgXml} from 'react-native-svg';
import {Colors} from '../Theme';

const Tick = ({height, width, color}) => {
  const defaultColor = color ? color : Colors.green;
  const defaultHeight = height ? height : 14;
  const defaultWidth = width ? width : 14;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.3035 0.764252C10.5718 0.448647 11.0451 0.410269 11.3607 0.678534C11.6763 0.946798 11.7147 1.42012 11.4464 1.73572L5.07144 9.23572C4.79896 9.55628 4.31616 9.59005 4.00171 9.31055L0.626712 6.31054C0.317124 6.03536 0.28924 5.5613 0.564428 5.25172C0.839617 4.94213 1.31367 4.91424 1.62326 5.18943L4.42515 7.68L10.3035 0.764252Z" fill=${defaultColor}/>
</svg>
`}
    />
  );
};

export default Tick;
