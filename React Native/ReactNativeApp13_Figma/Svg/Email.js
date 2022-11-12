import React from 'react';
import {SvgXml} from 'react-native-svg';

const Email = ({height, width, color}) => {
  const defaultColor = color ? color : 'white';
  const defaultHeight = height ? height : 14;
  const defaultWidth = width ? width : 14;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.8287 6.30591L10.9187 9.45399C10.1788 10.0341 9.14151 10.0341 8.40156 9.45399L4.45801 6.30591" stroke="#807A7A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.3138 1.20825H13.9561C15.2022 1.22223 16.3882 1.74902 17.2379 2.66594C18.0877 3.58286 18.5269 4.80986 18.4534 6.06119V12.0451C18.5269 13.2964 18.0877 14.5234 17.2379 15.4403C16.3882 16.3573 15.2022 16.884 13.9561 16.898H5.3138C2.63722 16.898 0.833252 14.7205 0.833252 12.0451V6.06119C0.833252 3.38575 2.63722 1.20825 5.3138 1.20825Z" stroke="#807A7A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`}
    />
  );
};

export default Email;
