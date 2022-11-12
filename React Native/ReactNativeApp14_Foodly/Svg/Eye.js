import React from 'react';
import {SvgXml} from 'react-native-svg';

const Eye = ({height, width, color}) => {
  const defaultColor = color ? color : '#868686';
  const defaultHeight = height ? height : 14;
  const defaultWidth = width ? width : 14;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9013 0.75L1.825 10.8263L2.88566 11.8869L12.9619 1.81066L11.9013 0.75ZM8.87886 1.87114L7 3.75C5.75736 3.75 4.75 4.75736 4.75 6L2.14496 8.60504C0.812548 7.37512 0.25 6 0.25 6C0.25 6 2.09091 1.5 7 1.5C7.64991 1.5 8.28069 1.64021 8.87886 1.87114ZM12.4059 4.38627C13.2478 5.26342 13.75 6 13.75 6C13.75 6 10.6818 10.5 7 10.5C6.76701 10.5 6.54093 10.4899 6.32163 10.4706L12.4059 4.38627Z" fill="#868686"/>
</svg>
`}
    />
  );
};

export default Eye;
