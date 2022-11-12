import React from 'react';
import {SvgXml} from 'react-native-svg';

const FacebookIcon = ({height, width, color}) => {
  const defaultColor = color ? color : 'white';
  const defaultHeight = height ? height : 14;
  const defaultWidth = width ? width : 14;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_704_5120)">
<rect x="12" y="6" width="40" height="40" rx="12" fill="url(#paint0_linear_704_5120)"/>
</g>
<path d="M38.8082 22.3008L38.0827 27.1871H34.2694V38H29.1553V27.1871H25V22.3008H29.1553V19.5767C29.1553 15.3408 31.5973 13 35.337 13C37.1269 13 39 13.3302 39 13.3302V17.4901H36.9352C34.9023 17.4901 34.2694 18.7942 34.2694 20.1313V22.3008H38.8082Z" fill="white"/>
<defs>
<filter id="filter0_d_704_5120" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="1" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="6"/>
<feGaussianBlur stdDeviation="6"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0235294 0 0 0 0 0.447059 0 0 0 0 0.905882 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_704_5120"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_704_5120" result="shape"/>
</filter>
<linearGradient id="paint0_linear_704_5120" x1="32" y1="6" x2="32" y2="45.8814" gradientUnits="userSpaceOnUse">
<stop stop-color="#18ACFE"/>
<stop offset="1" stop-color="#0163E0"/>
</linearGradient>
</defs>
</svg>
`}
    />
  );
};

export default FacebookIcon;
