import React from 'react';
import {SvgXml} from 'react-native-svg';

const MenuDot = ({height, width, color}) => {
  const defaultColor = color ? color : '#060518';
  const defaultHeight = height ? height : 14;
  const defaultWidth = width ? width : 14;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.9999 11.9166C11.5062 11.9166 11.9166 11.5062 11.9166 10.9999C11.9166 10.4937 11.5062 10.0833 10.9999 10.0833C10.4937 10.0833 10.0833 10.4937 10.0833 10.9999C10.0833 11.5062 10.4937 11.9166 10.9999 11.9166Z" fill=${defaultColor} stroke=${defaultColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.9999 5.50008C11.5062 5.50008 11.9166 5.08968 11.9166 4.58341C11.9166 4.07715 11.5062 3.66675 10.9999 3.66675C10.4937 3.66675 10.0833 4.07715 10.0833 4.58341C10.0833 5.08968 10.4937 5.50008 10.9999 5.50008Z" fill=${defaultColor} stroke=${defaultColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.9999 18.3333C11.5062 18.3333 11.9166 17.9229 11.9166 17.4167C11.9166 16.9104 11.5062 16.5 10.9999 16.5C10.4937 16.5 10.0833 16.9104 10.0833 17.4167C10.0833 17.9229 10.4937 18.3333 10.9999 18.3333Z" fill=${defaultColor} stroke=${defaultColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}
    />
  );
};

export default MenuDot;
