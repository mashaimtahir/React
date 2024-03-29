import React from 'react';
import {StyleSheet, View} from 'react-native';
import Scale from '../Function/Scale';

const Container = ({style, paddingHorizontal, paddingVertical, children}) => {
  const paddingsize = Scale(375, 20, 20);
  Container.paddingsize = paddingsize;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: paddingHorizontal ?? paddingsize.WIDTH,
      paddingVertical: paddingVertical ?? 10,
    },
  });
  return <View style={[styles.container, style]}>{children}</View>;
};

export default Container;
