import React from 'react';
import {SvgXml} from 'react-native-svg';
import {Colors} from '../Theme';

const Search = ({height, width, color}) => {
  const defaultColor = color ? color : Colors.grey;
  const defaultHeight = height ? height : 16;
  const defaultWidth = width ? width : 17;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7C14 8.82763 13.2996 10.4917 12.1525 11.7383L15.7071 15.2929C16.0976 15.6834 16.0976 16.3166 15.7071 16.7071C15.3166 17.0976 14.6834 17.0976 14.2929 16.7071L10.594 13.0082C9.54341 13.638 8.31399 14 7 14ZM7 12C9.76142 12 12 9.76142 12 7C12 4.23858 9.76142 2 7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12Z" fill=${defaultColor}/>
</svg>
`}
    />
  );
};

export default Search;
