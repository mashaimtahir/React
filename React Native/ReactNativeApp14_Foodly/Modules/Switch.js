import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import Scale from '../Function/Scale';

const switchsize = Scale(375, 32, 29);
const moversize = Scale(375, 15, 15);
const Switch = ({state, setState}) => {
  const switchRef = useRef(new Animated.Value(2)).current;
  const backgroundInter = switchRef.interpolate({
    inputRange: [2, switchsize.WIDTH / 2],
    outputRange: ['rgba(180, 180, 180, 1)', 'rgba(34, 164, 93, 0.91)'],
    extrapolate: 'clamp',
  });

  // const [state, setState] = useState(false);
  const forward = () => {
    setState(true);
    Animated.parallel([
      Animated.timing(switchRef, {
        toValue: switchsize.WIDTH / 2,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start();
  };
  const backward = () => {
    setState(false);
    Animated.parallel([
      Animated.timing(switchRef, {
        toValue: 2,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start();
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        state === true ? backward() : forward();
      }}>
      <Animated.View
        style={[styles.container, {backgroundColor: backgroundInter}]}>
        <Animated.View
          style={[
            styles.mover,
            {
              transform: [{translateX: switchRef}],
            },
          ]}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: switchsize.WIDTH,
    height: switchsize.height,
    borderRadius: 20,
    paddingVertical: switchsize.HEIGHT * 0.05,
    justifyContent: 'center',
  },
  mover: {
    width: moversize.WIDTH,
    height: moversize.HEIGHT,
    backgroundColor: 'white',
    borderRadius: 20,
  },
});

export default Switch;
