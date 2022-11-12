import React from 'react';
import {Text} from 'react-native';

const ValidText = ({text, style}) => {
  return text ? <Text style={style}>{text}</Text> : <></>;
};

export default ValidText;
