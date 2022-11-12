import React from 'react';
import {SvgXml} from 'react-native-svg';

const AddPerson = ({height, width, color}) => {
  const defaultColor = color ? color : 'white';
  const defaultHeight = height ? height : 14;
  const defaultWidth = width ? width : 14;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6667 19.25V17.4167C14.6667 16.4442 14.2804 15.5116 13.5927 14.8239C12.9051 14.1363 11.9725 13.75 11 13.75H4.58335C3.61089 13.75 2.67826 14.1363 1.99063 14.8239C1.303 15.5116 0.916687 16.4442 0.916687 17.4167V19.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.79167 10.0833C9.81671 10.0833 11.4583 8.44171 11.4583 6.41667C11.4583 4.39162 9.81671 2.75 7.79167 2.75C5.76662 2.75 4.125 4.39162 4.125 6.41667C4.125 8.44171 5.76662 10.0833 7.79167 10.0833Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.3333 7.3335V12.8335" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.0833 10.0835H15.5833" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}
    />
  );
};

export default AddPerson;
