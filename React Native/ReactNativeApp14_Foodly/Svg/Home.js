import React from 'react';
import {SvgXml} from 'react-native-svg';
import {Colors} from '../Theme';

const Home = ({height, width, color}) => {
  const defaultColor = color ? color : Colors.green;
  const defaultHeight = height ? height : 18;
  const defaultWidth = width ? width : 18;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.957117 5.41516L8.47857 0.818715C8.79868 0.623091 9.20136 0.623091 9.52147 0.818715L17.0429 5.41516C17.6374 5.77847 18 6.42499 18 7.12172V16.0001C18 17.1047 17.1046 18.0001 16 18.0001L2 18.0001C0.89543 18.0001 0 17.1047 0 16.0001L1.673e-05 7.12172C1.78e-05 6.42499 0.362608 5.77847 0.957117 5.41516ZM7.00002 10.0001C6.44773 10.0001 6.00002 10.4478 6.00002 11.0001V14.0001C6.00002 14.5523 6.44773 15.0001 7.00002 15.0001H11C11.5523 15.0001 12 14.5523 12 14.0001V11.0001C12 10.4478 11.5523 10.0001 11 10.0001H7.00002Z" fill=${defaultColor}/>
</svg>
`}
    />
  );
};

export default Home;
