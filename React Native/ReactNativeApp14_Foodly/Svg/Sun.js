import React from 'react';
import {SvgXml} from 'react-native-svg';

const Sun = ({height, width, color}) => {
  const defaultColor = color ? color : '#111719';
  const defaultHeight = height ? height : 14;
  const defaultWidth = width ? width : 14;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.00006 13.5708L5.55107 14.7561L4.43691 12.2739L1.79901 11.6077L2.54099 8.99012L0.948486 6.78416L3.19944 5.2559L3.39747 2.54239L6.10415 2.81856L8.00006 0.867188L9.89597 2.81856L12.6026 2.54239L12.8007 5.2559L15.0516 6.78416L13.4591 8.99012L14.2011 11.6077L11.5632 12.2739L10.449 14.7561L8.00006 13.5708Z" fill=${defaultColor}/>
</svg>
`}
    />
  );
};

export default Sun;
