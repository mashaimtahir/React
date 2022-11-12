import React from 'react';
import {SvgXml} from 'react-native-svg';

const Search = ({height, width, color}) => {
  const defaultColor = color ? color : '#120D26';
  const defaultHeight = height ? height : 14;
  const defaultWidth = width ? width : 14;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke=${defaultColor} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.4" d="M20.9999 20.9999L16.6499 16.6499" stroke=${defaultColor} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}
    />
  );
};

export default Search;
