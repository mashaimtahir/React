import React from 'react';
import {SvgXml} from 'react-native-svg';
import {Colors} from '../Theme';

const Profile = ({height, width, color}) => {
  const defaultColor = color ? color : Colors.grey;
  const defaultHeight = height ? height : 18;
  const defaultWidth = width ? width : 18;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.66667 3.83333C4.66667 5.67428 6.15905 7.16667 8 7.16667C9.84095 7.16667 11.3333 5.67428 11.3333 3.83333C11.3333 1.99238 9.84095 0.5 8 0.5C6.15905 0.5 4.66667 1.99238 4.66667 3.83333ZM7.98612 8.83333C4.05159 8.83333 0.823549 10.8554 0.500543 14.8327C0.482949 15.0493 0.89726 15.5 1.10625 15.5H14.8722C15.4983 15.5 15.508 14.9962 15.4983 14.8333C15.2541 10.7443 11.976 8.83333 7.98612 8.83333Z" fill="#010F07"/>
</svg>`}
    />
  );
};

export default Profile;
