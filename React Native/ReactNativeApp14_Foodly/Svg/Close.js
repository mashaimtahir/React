import React from 'react';
import {SvgXml} from 'react-native-svg';

const Close = ({height, width, color}) => {
  const defaultColor = color ? color : '#010F07';
  const defaultHeight = height ? height : 12;
  const defaultWidth = width ? width : 12;
  return (
    <SvgXml
      xml={`<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.7574 0.343186C1.36688 -0.0473381 0.73371 -0.0473381 0.343186 0.343186C-0.0473381 0.73371 -0.0473381 1.36688 0.343186 1.7574L4.58583 6.00004L0.343186 10.2427C-0.0473381 10.6332 -0.0473381 11.2664 0.343186 11.6569C0.73371 12.0474 1.36688 12.0474 1.7574 11.6569L6.00004 7.41425L10.2427 11.6569C10.6332 12.0474 11.2664 12.0474 11.6569 11.6569C12.0474 11.2664 12.0474 10.6332 11.6569 10.2427L7.41425 6.00004L11.6569 1.7574C12.0474 1.36688 12.0474 0.733711 11.6569 0.343187C11.2664 -0.0473377 10.6332 -0.0473377 10.2427 0.343187L6.00004 4.58583L1.7574 0.343186Z" fill=${defaultColor}/>
</svg>`}
    />
  );
};

export default Close;
