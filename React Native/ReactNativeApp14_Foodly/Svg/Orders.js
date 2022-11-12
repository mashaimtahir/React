import React from 'react';
import {SvgXml} from 'react-native-svg';
import {Colors} from '../Theme';

const Orders = ({height, width, color}) => {
  const defaultColor = color ? color : Colors.grey;
  const defaultHeight = height ? height : 16;
  const defaultWidth = width ? width : 18;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.6C0 1.03995 0 0.759921 0.108993 0.546009C0.204867 0.357847 0.357847 0.204867 0.546009 0.108993C0.759921 0 1.03995 0 1.6 0H14.4C14.9601 0 15.2401 0 15.454 0.108993C15.6422 0.204867 15.7951 0.357847 15.891 0.546009C16 0.759921 16 1.03995 16 1.6V16.4C16 16.9601 16 17.2401 15.891 17.454C15.8431 17.5481 15.7809 17.6334 15.7071 17.7071L14 16L12.5 17.5L11 16L9.5 17.5L8 16L6.5 17.5L5 16L3.5 17.5L2 16L0.292893 17.7071C0.219144 17.6334 0.15693 17.5481 0.108993 17.454C0 17.2401 0 16.9601 0 16.4V1.6ZM2.0545 2.273C2 2.37996 2 2.51997 2 2.8V3.2C2 3.48003 2 3.62004 2.0545 3.727C2.10243 3.82108 2.17892 3.89757 2.273 3.9455C2.37996 4 2.51997 4 2.8 4H13.2C13.48 4 13.62 4 13.727 3.9455C13.8211 3.89757 13.8976 3.82108 13.9455 3.727C14 3.62004 14 3.48003 14 3.2V2.8C14 2.51997 14 2.37996 13.9455 2.273C13.8976 2.17892 13.8211 2.10243 13.727 2.0545C13.62 2 13.48 2 13.2 2H2.8C2.51997 2 2.37996 2 2.273 2.0545C2.17892 2.10243 2.10243 2.17892 2.0545 2.273Z" fill=${defaultColor}/>
</svg>
`}
    />
  );
};

export default Orders;
