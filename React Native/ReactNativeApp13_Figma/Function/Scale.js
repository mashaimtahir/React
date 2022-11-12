import React from 'react';
import {Dimensions} from 'react-native';

const Scale = (screen_width, width, height) => {
  // const SH = Dimensions.get('window').height;
  const SW = Dimensions.get('window').width;

  const CARD_WIDTH = SW * (width / screen_width);
  const CARD_HEIGHT = CARD_WIDTH * (height / width);
  return {
    HEIGHT: CARD_HEIGHT,
    WIDTH: CARD_WIDTH,
  };
};

export default Scale;
