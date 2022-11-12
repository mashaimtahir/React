import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {SvgXml} from 'react-native-svg';
const SolidLocation = ({height, width, color}) => {
  const defaultColor = color ? color : 'white';
  const defaultHeight = height ? height : 48;
  const defaultWidth = width ? width : 48;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.15" width="45" height="45" rx="11.8868" fill="#5669FF"/>
<rect x="7.10547" y="7.10498" width="30.7895" height="30.7895" rx="10.1887" fill="white"/>
<g clip-path="url(#clip0_704_8165)">
<path d="M28.1248 21.2507C28.1248 25.6257 22.4998 29.3757 22.4998 29.3757C22.4998 29.3757 16.8748 25.6257 16.8748 21.2507C16.8748 19.7589 17.4674 18.3281 18.5223 17.2733C19.5772 16.2184 21.0079 15.6257 22.4998 15.6257C23.9916 15.6257 25.4223 16.2184 26.4772 17.2733C27.5321 18.3281 28.1248 19.7589 28.1248 21.2507Z" stroke="#5669FF" stroke-width="1.69811" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.4995 23.1252C23.535 23.1252 24.3745 22.2858 24.3745 21.2502C24.3745 20.2147 23.535 19.3752 22.4995 19.3752C21.464 19.3752 20.6245 20.2147 20.6245 21.2502C20.6245 22.2858 21.464 23.1252 22.4995 23.1252Z" stroke="#5669FF" stroke-width="1.69811" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_704_8165">
<rect width="15" height="15" fill="white" transform="translate(14.9998 15.0002)"/>
</clipPath>
</defs>
</svg>
`}
    />
  );
};

export default SolidLocation;
