import React from 'react';
import {SvgXml} from 'react-native-svg';

const Bookmark = ({height, width, color}) => {
  const defaultColor = color ? color : '#EB5757';
  const defaultStrokeColor = defaultColor === '#EB5757' ? '#EB5757' : '#999';
  const defaultHeight = height ? height : 14;
  const defaultWidth = width ? width : 14;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.78925 10.9783L1.74254 13.0492C1.41944 13.206 1.02139 13.095 0.843269 12.7983C0.791736 12.7064 0.763934 12.6046 0.762085 12.5008V3.325C0.762085 1.575 2.04229 0.875 3.88455 0.875H8.21228C9.99833 0.875 11.3347 1.52833 11.3347 3.20833V12.5008C11.3347 12.6664 11.2643 12.8251 11.139 12.9422C11.0137 13.0592 10.8438 13.125 10.6665 13.125C10.5535 13.1233 10.4424 13.0974 10.3418 13.0492L6.27011 10.9783C6.12007 10.9026 5.93929 10.9026 5.78925 10.9783Z" fill=${defaultColor} stroke=${defaultStrokeColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}
    />
  );
};

export default Bookmark;
