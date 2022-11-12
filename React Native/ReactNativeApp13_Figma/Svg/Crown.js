import React from 'react';
import {SvgXml} from 'react-native-svg';
import Scale from '../Function/Scale';

const Crown = ({height, width, color}) => {
  const size = Scale(375, 21, 19);
  const defaultColor = color ? color : '#111719';
  const defaultHeight = height ? height : size.HEIGHT;
  const defaultWidth = width ? width : size.WIDTH;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M20.4853 18.2112H1.52225C0.940416 18.2112 0.46875 18.6828 0.46875 19.2647V19.2647C0.46875 19.8465 0.940416 20.3182 1.52225 20.3182H20.4853C21.0671 20.3182 21.5387 19.8465 21.5387 19.2647C21.5387 18.6828 21.0671 18.2112 20.4853 18.2112Z" fill="#00F8FF"/>
<path d="M6.31388 5.92952C5.98142 6.32844 5.40784 6.42561 4.96253 6.15848L2.06426 4.41949C1.36209 3.99818 0.46875 4.50397 0.46875 5.32285V15.0507C0.46875 15.6325 0.94042 16.1041 1.52225 16.1041H20.4852C21.0671 16.1041 21.5387 15.6325 21.5387 15.0507V5.32285C21.5387 4.50397 20.6454 3.99818 19.9432 4.41949L17.0449 6.15848C16.5996 6.42561 16.0261 6.32844 15.6936 5.92952L11.813 1.27286C11.3918 0.767444 10.6156 0.767444 10.1944 1.27286L6.31388 5.92952Z" fill="#00F8FF"/>
</svg>
`}
    />
  );
};

export default Crown;
