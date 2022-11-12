import React from 'react';
import {SvgXml} from 'react-native-svg';

const Google = ({height, width, color}) => {
  const defaultColor = color ? color : '#868686';
  const defaultHeight = height ? height : 28;
  const defaultWidth = width ? width : 28;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="28" height="28" rx="4" fill="white"/>
<path d="M14 10.2791C15.1392 10.2791 15.9076 10.7712 16.3458 11.1824L18.058 9.51065C17.0064 8.53322 15.638 7.93332 14 7.93332C11.6273 7.93332 9.57812 9.29494 8.58051 11.2767L10.542 12.8001C11.0341 11.3374 12.3957 10.2791 14 10.2791Z" fill="#EA4335"/>
<path d="M19.824 14.1348C19.824 13.636 19.7836 13.272 19.6959 12.8945H14V15.1459H17.3434C17.276 15.7054 16.912 16.548 16.1031 17.1142L18.0175 18.5972C19.1634 17.5389 19.824 15.9818 19.824 14.1348Z" fill="#4285F4"/>
<path d="M10.5488 15.1999C10.4207 14.8224 10.3465 14.4179 10.3465 14C10.3465 13.582 10.4207 13.1776 10.542 12.8001L8.58044 11.2767C8.16931 12.0991 7.93335 13.0226 7.93335 14C7.93335 14.9774 8.16931 15.9009 8.58044 16.7232L10.5488 15.1999Z" fill="#FBBC05"/>
<path d="M14 20.0667C15.638 20.0667 17.0131 19.5274 18.0175 18.5972L16.1031 17.1142C15.5908 17.4715 14.9033 17.7209 14 17.7209C12.3957 17.7209 11.0341 16.6626 10.5488 15.1999L8.58722 16.7232C9.58484 18.7051 11.6273 20.0667 14 20.0667Z" fill="#34A853"/>
</svg>
`}
    />
  );
};

export default Google;
