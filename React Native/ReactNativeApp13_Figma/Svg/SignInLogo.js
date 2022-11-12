import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {SvgXml} from 'react-native-svg';
const SignInLogo = ({height, width, color}) => {
  const defaultColor = color ? color : 'white';
  const defaultHeight = height ? height : 14;
  const defaultWidth = width ? width : 14;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 56 59" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M52.4647 34.9356L52.5796 34.9931C55.2515 36.4871 56.2858 39.8485 54.878 42.5491C49.9939 51.8863 40.1683 58.2644 28.8774 58.1782C13.1334 58.0633 0.233603 45.2497 0.00376275 29.5057C-0.254807 13.2445 12.8461 0 29.0785 0C38.2434 0 46.4314 4.25204 51.7464 10.8887L41.3462 16.5197C38.0135 13.2732 33.388 11.3196 28.3315 11.5207C19.0517 11.8942 11.5819 19.5651 11.467 28.8736C11.3521 38.6993 19.2816 46.6862 29.0498 46.6862C35.83 46.6862 41.7197 42.8651 44.6501 37.234C46.1441 34.4185 49.6779 33.3842 52.4647 34.9356Z" fill="#5669FF"/>
<path d="M54.9643 15.83C56.2571 18.3583 55.3378 21.4611 52.8383 22.8401L46.4602 26.3739L30.6587 35.1366C28.188 36.5156 25.0851 35.8261 23.4188 33.5277L23.3613 33.4415C21.379 30.7122 22.2408 26.8336 25.2288 25.2247L41.375 16.4908L51.7753 10.8597C52.9819 12.4112 54.0449 14.0775 54.9643 15.83Z" fill="#00F8FF"/>
</svg>
`}
    />
  );
};

export default SignInLogo;
