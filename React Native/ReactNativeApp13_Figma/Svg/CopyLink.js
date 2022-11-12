import React from 'react';
import { SvgXml } from 'react-native-svg';

const CopyLink = ({ height, width, color }) => {
  const defaultColor = color ? color : 'white';
  const defaultHeight = height ? height : 38;
  const defaultWidth = width ? width : 38;
  return (
    <SvgXml
      xml={`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="12" fill="#EFE9E9"/>
</svg>
`}
    />
  );
};

export default CopyLink;
