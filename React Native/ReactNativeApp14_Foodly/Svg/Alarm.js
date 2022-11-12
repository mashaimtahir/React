import React from 'react';
import {SvgXml} from 'react-native-svg';
import {Colors} from '../Theme';

const Alarm = ({height, width, color}) => {
  const defaultColor = color ? color : Colors.grey;
  const defaultHeight = height ? height : 18;
  const defaultWidth = width ? width : 16;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.15645 10.0613C3.15645 11.4264 2.03521 12.5331 0.6521 12.5331H17.3478C15.9646 12.5331 14.8434 11.4264 14.8434 10.0613V5.94149C14.8434 2.7561 12.2272 0.173828 8.99993 0.173828C5.77266 0.173828 3.15645 2.7561 3.15645 5.94149V10.0613ZM8.99993 15.826C9.86012 15.826 10.6553 15.2004 11.0869 14.1839H6.91297C7.34459 15.2004 8.13973 15.826 8.99993 15.826Z" fill="#010F07"/>
</svg>
`}
    />
  );
};

export default Alarm;
