import React from 'react';
import {SvgXml} from 'react-native-svg';

const ProfileLight = ({height, width, color}) => {
  const defaultColor = color ? color : 'white';
  const defaultHeight = height ? height : 14;
  const defaultWidth = width ? width : 14;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.1667 20.125V18.2083C19.1667 17.1917 18.7628 16.2166 18.0439 15.4978C17.325 14.7789 16.35 14.375 15.3333 14.375H7.66668C6.65001 14.375 5.67499 14.7789 4.9561 15.4978C4.23721 16.2166 3.83334 17.1917 3.83334 18.2083V20.125" stroke="#767676" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.5 10.5417C13.6171 10.5417 15.3333 8.82543 15.3333 6.70833C15.3333 4.59124 13.6171 2.875 11.5 2.875C9.3829 2.875 7.66666 4.59124 7.66666 6.70833C7.66666 8.82543 9.3829 10.5417 11.5 10.5417Z" stroke="#767676" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`}
    />
  );
};

export default ProfileLight;
