import React from 'react';
import {SvgXml} from 'react-native-svg';

const Clock = ({height, width, color}) => {
  const defaultColor = color ? color : '#010F07';
  const defaultHeight = height ? height : 14;
  const defaultWidth = width ? width : 14;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.333374 6.99998C0.333374 10.6819 3.31814 13.6666 7.00004 13.6666C10.6819 13.6666 13.6667 10.6819 13.6667 6.99998C13.6667 3.31808 10.6819 0.333313 7.00004 0.333313C3.31814 0.333313 0.333374 3.31808 0.333374 6.99998ZM7.03523 2.92591H6.97265C6.77912 2.92591 6.61821 3.07491 6.60337 3.26787L6.28278 7.43554C6.26915 7.61266 6.38322 7.77452 6.55461 7.82126L9.97606 8.75438C10.0003 8.761 10.0253 8.76435 10.0505 8.76435C10.2067 8.76435 10.3334 8.6377 10.3334 8.48147V8.32603C10.3334 8.19312 10.2622 8.0704 10.1468 8.00446L7.74078 6.62961L7.40377 3.25943C7.38483 3.07009 7.22551 2.92591 7.03523 2.92591Z" fill=${defaultColor}/>
</svg>
`}
    />
  );
};

export default Clock;
