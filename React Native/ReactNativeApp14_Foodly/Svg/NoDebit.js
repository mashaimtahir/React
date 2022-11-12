import React from 'react';
import {SvgXml} from 'react-native-svg';

const NoDebit = ({height, width, color}) => {
  const defaultColor = color ? color : '#111719';
  const defaultHeight = height ? height : 125;
  const defaultWidth = width ? width : 125;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 125 123" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M60 120C99 107.5 71 93.1371 71 60C71 26.8629 93.1371 0 60 0C26.8629 0 0 26.8629 0 60C0 93.1371 21 132.5 60 120Z" fill="#22A45D"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M114.2 36H27.8C21.68 36 17 40.68 17 46.8V97.2C17 103.32 21.68 108 27.8 108H114.2C120.32 108 125 103.32 125 97.2V46.8C125 40.68 120.32 36 114.2 36Z" fill="#22A45D"/>
<path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M102 94C106.971 94 111 89.9706 111 85C111 80.0294 106.971 76 102 76C97.0294 76 93 80.0294 93 85C93 89.9706 97.0294 94 102 94Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M94 94C98.9706 94 103 89.9706 103 85C103 80.0294 98.9706 76 94 76C89.0294 76 85 80.0294 85 85C85 89.9706 89.0294 94 94 94Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M51.2 68.3999H58.4C59.48 68.3999 60.2 69.1199 60.2 70.1999C60.2 71.2799 59.48 71.9999 58.4 71.9999H51.2C50.12 71.9999 49.4 71.2799 49.4 70.1999C49.4 69.1199 50.12 68.3999 51.2 68.3999Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M33.2 68.3999H40.4C41.48 68.3999 42.2 69.1199 42.2 70.1999C42.2 71.2799 41.48 71.9999 40.4 71.9999H33.2C32.12 71.9999 31.4 71.2799 31.4 70.1999C31.4 69.1199 32.12 68.3999 33.2 68.3999Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M33.2 79.2002H51.2C52.28 79.2002 53 79.9202 53 81.0002C53 82.0802 52.28 82.8002 51.2 82.8002H33.2C32.12 82.8002 31.4 82.0802 31.4 81.0002C31.4 79.9202 32.12 79.2002 33.2 79.2002Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M72.8 93.6H33.2C32.12 93.6 31.4 92.88 31.4 91.8C31.4 90.72 32.12 90 33.2 90H72.8C73.88 90 74.6 90.72 74.6 91.8C74.6 92.88 73.88 93.6 72.8 93.6Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M76.4 71.9999H69.2C68.12 71.9999 67.4 71.2799 67.4 70.1999C67.4 69.1199 68.12 68.3999 69.2 68.3999H76.4C77.48 68.3999 78.2 69.1199 78.2 70.1999C78.2 71.2799 77.48 71.9999 76.4 71.9999Z" fill="white"/>
</svg>
`}
    />
  );
};

export default NoDebit;
