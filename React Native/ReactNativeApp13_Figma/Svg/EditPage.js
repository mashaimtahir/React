import React from 'react';
import {SvgXml} from 'react-native-svg';

const EditPage = ({height, width, color}) => {
  const defaultColor = color ? color : 'white';
  const defaultHeight = height ? height : 14;
  const defaultWidth = width ? width : 14;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0833 3.6665H3.66668C3.18045 3.6665 2.71413 3.85966 2.37031 4.20347C2.0265 4.54729 1.83334 5.01361 1.83334 5.49984V18.3332C1.83334 18.8194 2.0265 19.2857 2.37031 19.6295C2.71413 19.9734 3.18045 20.1665 3.66668 20.1665H16.5C16.9862 20.1665 17.4526 19.9734 17.7964 19.6295C18.1402 19.2857 18.3333 18.8194 18.3333 18.3332V11.9165" stroke="#5669FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.9583 2.29171C17.323 1.92704 17.8176 1.72217 18.3333 1.72217C18.8491 1.72217 19.3437 1.92704 19.7083 2.29171C20.073 2.65638 20.2779 3.15099 20.2779 3.66671C20.2779 4.18244 20.073 4.67704 19.7083 5.04171L11 13.75L7.33334 14.6667L8.25001 11L16.9583 2.29171Z" stroke="#5669FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}
    />
  );
};

export default EditPage;
