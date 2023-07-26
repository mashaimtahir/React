import React from 'react';
import {Text} from 'react-native';

const ValidText = ({text, style, numberOfLines}) => {
  return text ? (
    <Text style={style} numberOfLines={numberOfLines}>
      {text}
    </Text>
  ) : (
    <></>
  );
};

export default ValidText;
