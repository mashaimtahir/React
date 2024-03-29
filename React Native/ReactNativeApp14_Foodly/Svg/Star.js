import React from 'react';
import {SvgXml} from 'react-native-svg';

const Star = ({height, width, color}) => {
  const defaultColor = color ? color : '#22A45D';
  const defaultHeight = height ? height : 12;
  const defaultWidth = width ? width : 12;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.00003 10.1667L3.16365 11.6578C2.82418 11.8363 2.4043 11.7058 2.22583 11.3663C2.15476 11.2311 2.13023 11.0763 2.15605 10.9258L2.69775 7.76743L0.403074 5.53067C0.128432 5.26296 0.122813 4.8233 0.390522 4.54866C0.497125 4.4393 0.636807 4.36812 0.787944 4.34616L3.95911 3.88537L5.3773 1.0118C5.54703 0.667878 5.96344 0.52667 6.30737 0.696408C6.44432 0.763999 6.55517 0.874851 6.62276 1.0118L8.04095 3.88537L11.2121 4.34616C11.5917 4.40131 11.8546 4.75371 11.7995 5.13325C11.7775 5.28439 11.7063 5.42407 11.597 5.53067L9.30231 7.76743L9.84401 10.9258C9.90884 11.3038 9.65496 11.6628 9.27695 11.7276C9.12643 11.7534 8.97159 11.7289 8.83641 11.6578L6.00003 10.1667Z" fill=${defaultColor}/>
</svg>
`}
    />
  );
};

export default Star;
