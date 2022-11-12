import React from 'react';
import {SvgXml} from 'react-native-svg';

const Star = ({height, width, color}) => {
  const defaultColor = color ? color : 'white';
  const defaultHeight = height ? height : 14;
  const defaultWidth = width ? width : 14;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.79015 1.02166C7.08056 0.43332 7.91952 0.43332 8.20993 1.02166L9.94629 4.53933L13.8304 5.10705C14.4795 5.20192 14.7382 5.9998 14.2683 6.45751L11.4584 9.19433L12.1213 13.0597C12.2323 13.7065 11.5534 14.1997 10.9726 13.8943L7.50004 12.0681L4.0275 13.8943C3.44671 14.1997 2.76782 13.7065 2.87874 13.0597L3.54171 9.19433L0.731828 6.45751C0.2619 5.9998 0.520603 5.20192 1.1697 5.10705L5.05379 4.53933L6.79015 1.02166Z" fill="#FBBE47"/>
</svg>
`}
    />
  );
};

export default Star;
