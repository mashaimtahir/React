import React from 'react';
import {SvgXml} from 'react-native-svg';

const Profile = ({height, width, color}) => {
  const defaultColor = color ? color : 'white';
  const defaultHeight = height ? height : 14;
  const defaultWidth = width ? width : 14;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="8.61424" cy="5.67149" rx="4.37986" ry="4.37986" stroke="#807A7A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.66676 16.1428C1.66559 15.8349 1.73445 15.5308 1.86814 15.2535C2.28766 14.4144 3.47073 13.9697 4.45242 13.7683C5.16042 13.6172 5.87819 13.5163 6.6004 13.4663C7.93752 13.3488 9.28236 13.3488 10.6195 13.4663C11.3416 13.5169 12.0594 13.6178 12.7674 13.7683C13.7491 13.9697 14.9322 14.3724 15.3517 15.2535C15.6206 15.8188 15.6206 16.4752 15.3517 17.0406C14.9322 17.9216 13.7491 18.3244 12.7674 18.5174C12.0603 18.6747 11.3423 18.7785 10.6195 18.8278C9.53117 18.9201 8.43779 18.9369 7.34716 18.8782C7.09544 18.8782 6.85212 18.8782 6.6004 18.8278C5.88033 18.7791 5.16504 18.6753 4.46081 18.5174C3.47073 18.3244 2.29605 17.9216 1.86814 17.0406C1.73513 16.7601 1.66634 16.4534 1.66676 16.1428Z" stroke="#807A7A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}
    />
  );
};

export default Profile;
