import React from 'react';
import {SvgXml} from 'react-native-svg';

const EmptyNotification = ({height, width, color}) => {
  const defaultColor = color ? color : 'white';
  const defaultHeight = height ? height : 14;
  const defaultWidth = width ? width : 14;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 206 240" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_704_8304)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M86.3113 38.3968C86.3113 29.1798 93.7831 21.708 103 21.708C112.217 21.708 119.689 29.1798 119.689 38.3968V38.8615C139.134 45.7345 153.066 64.2797 153.066 86.0789V122.371H153.347C153.347 122.371 153.411 130.708 158.982 130.708C161.081 130.708 163.305 131.56 165.261 132.622C169.218 134.77 171 139.266 171 143.769C171 152.725 163.739 159.986 154.783 159.986H50.8518C42.0971 159.986 35 152.889 35 144.134C35 139.429 37.0048 134.785 41.1664 132.59C43.1504 131.543 45.3125 130.708 47.1626 130.708C50.1586 130.708 51.9695 127.666 52.9338 125.257V86.0789C52.9338 64.2797 66.8657 45.7345 86.3113 38.8615V38.3968ZM102.5 190.208C113.822 190.208 123 185.619 123 179.958C123 174.297 113.822 169.708 102.5 169.708C91.1782 169.708 82 174.297 82 179.958C82 185.619 91.1782 190.208 102.5 190.208Z" fill="white"/>
</g>
<g filter="url(#filter1_d_704_8304)">
<circle cx="156.6" cy="162.308" r="17.6" fill="#5669FF"/>
</g>
<path d="M156.509 168.357C159.559 168.357 161.373 165.856 161.373 161.886C161.373 157.916 159.542 155.458 156.509 155.458C153.466 155.458 151.627 157.933 151.627 161.895C151.627 165.874 153.449 168.357 156.509 168.357ZM156.509 166.544C154.824 166.544 153.862 164.825 153.862 161.886C153.862 158.999 154.841 157.271 156.509 157.271C158.167 157.271 159.138 158.99 159.138 161.895C159.138 164.834 158.184 166.544 156.509 166.544Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M88 111.22C88 112.017 88.4749 112.735 89.2232 113.01C91.6316 113.895 97.2269 115.708 102.65 115.708C108.059 115.708 113.468 113.905 115.803 113.017C116.537 112.738 117 112.028 117 111.243C117 109.807 115.508 108.808 114.146 109.264C111.398 110.185 107.016 111.362 102.577 111.362C98.102 111.362 93.6266 110.165 90.8386 109.242C89.4801 108.792 88 109.789 88 111.22Z" fill="#5669FF"/>
<path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M80 93.7442C80 93.1746 80.2223 92.6262 80.6546 92.2554C81.7193 91.342 83.9231 89.708 86.0622 89.708C88.2103 89.708 90.3583 91.3557 91.3819 92.2667C91.792 92.6318 92 93.1613 92 93.7103C92 95.6609 89.3502 96.7705 87.4779 96.2233C87.0058 96.0853 86.5197 96.003 86.032 96.003C85.5172 96.003 85.0023 96.0947 84.5025 96.2468C82.6298 96.8168 80 95.7017 80 93.7442Z" fill="#5669FF"/>
<path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M114 93.7442C114 93.1746 114.222 92.6262 114.655 92.2554C115.719 91.342 117.923 89.708 120.062 89.708C122.21 89.708 124.358 91.3557 125.382 92.2667C125.792 92.6318 126 93.1613 126 93.7103C126 95.6609 123.35 96.7705 121.478 96.2233C121.006 96.0853 120.52 96.003 120.032 96.003C119.517 96.003 119.002 96.0947 118.503 96.2468C116.63 96.8168 114 95.7017 114 93.7442Z" fill="#5669FF"/>
<path opacity="0.1" d="M34.5532 59.1525C32.6123 48.3835 41.201 35.6478 51.2571 33" stroke="#5669FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.1" d="M18.6345 54.8539C16.122 40.9136 27.2399 24.4275 40.2573 21" stroke="#5669FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<filter id="filter0_d_704_8304" x="0" y="0.708008" width="206" height="238.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="14"/>
<feGaussianBlur stdDeviation="17.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.208044 0 0 0 0 0.283314 0 0 0 0 0.429427 0 0 0 0.057 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_704_8304"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_704_8304" result="shape"/>
</filter>
<filter id="filter1_d_704_8304" x="131" y="138.708" width="51.2" height="51.2002" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="4"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.337255 0 0 0 0 0.411765 0 0 0 0 1 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_704_8304"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_704_8304" result="shape"/>
</filter>
</defs>
</svg>
`}
    />
  );
};

export default EmptyNotification;
