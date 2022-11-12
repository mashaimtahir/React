import React from 'react';
import {SvgXml} from 'react-native-svg';
import {Colors} from '../Theme';

const Gift = ({height, width, color}) => {
  const defaultColor = color ? color : Colors.grey;
  const defaultHeight = height ? height : 147;
  const defaultWidth = width ? width : 136;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 136 147" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M116.845 111.076C142.188 78.905 110.943 82.655 92.4132 55.1831C73.8832 27.7112 77.2141 -6.93804 49.7423 11.592C22.2704 30.122 15.0216 67.4139 33.5516 94.8858C52.0816 122.358 91.5028 143.248 116.845 111.076Z" fill="#22A45D"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M110.79 40.2837C112.542 39.7647 114.498 40.4427 115.611 41.9337C116.457 43.0707 116.712 44.4837 116.316 45.8157C114.57 51.6927 109.626 56.0337 103.755 57.2367L110.562 64.0437C111.147 64.6287 111.147 65.5797 110.562 66.1647C110.268 66.4557 109.884 66.6027 109.5 66.6027C109.116 66.6027 108.732 66.4557 108.438 66.1617L100.5 58.2237L92.562 66.1647C92.268 66.4557 91.884 66.6027 91.5 66.6027C91.116 66.6027 90.732 66.4557 90.438 66.1617C89.853 65.5767 89.853 64.6257 90.438 64.0407L97.245 57.2337C91.371 56.0307 86.43 51.6897 84.681 45.8127C84.285 44.4837 84.543 43.0677 85.389 41.9337C86.502 40.4457 88.461 39.7647 90.213 40.2867C94.884 41.6757 98.565 45.1017 100.5 49.3887C102.435 45.0987 106.116 41.6757 110.79 40.2837ZM87.795 43.7277C87.633 43.9437 87.39 44.3907 87.558 44.9577C89.094 50.1207 93.633 53.8677 98.904 54.5067C98.265 49.2387 94.518 44.6997 89.355 43.1637C89.226 43.1247 89.097 43.1037 88.971 43.1037C88.527 43.1037 88.086 43.3377 87.795 43.7277ZM113.439 44.9577C111.903 50.1207 107.364 53.8677 102.096 54.5067C102.732 49.2387 106.479 44.6967 111.645 43.1607C111.771 43.1247 111.9 43.1037 112.029 43.1037C112.473 43.1037 112.914 43.3377 113.205 43.7277C113.367 43.9437 113.61 44.3907 113.439 44.9577ZM94.683 68.2857C93.831 69.1347 92.7 69.6027 91.5 69.6027C90.3 69.6027 89.169 69.1347 88.317 68.2857C87.465 67.4367 87 66.3027 87 65.1027C87 63.9027 87.468 62.7717 88.317 61.9197L91.752 58.4847C89.772 57.4947 87.999 56.1687 86.478 54.6027H70.5C68.019 54.6027 66 56.6217 66 59.1027V68.1027C66 70.5837 68.019 72.6027 70.5 72.6027H99V63.9657L94.683 68.2857ZM114.522 54.6027H130.5C132.981 54.6027 135 56.6217 135 59.1027V68.1027C135 70.5837 132.981 72.6027 130.5 72.6027H102V63.9657L106.317 68.2857C107.169 69.1347 108.3 69.6027 109.5 69.6027C110.7 69.6027 111.834 69.1377 112.683 68.2857C113.532 67.4337 114 66.3057 114 65.1027C114 63.8997 113.532 62.7687 112.683 61.9197L109.248 58.4847C111.228 57.4947 113.001 56.1717 114.522 54.6027ZM99 75.6027H70.5C69.987 75.6027 69.486 75.5487 69 75.4497V98.1027C69 102.237 72.366 105.603 76.5 105.603H99V75.6027ZM130.5 75.6027H102V105.603H124.5C128.634 105.603 132 102.237 132 98.1027V75.4497C131.514 75.5487 131.013 75.6027 130.5 75.6027Z" fill="#22A45D"/>
</svg>
`}
    />
  );
};

export default Gift;
