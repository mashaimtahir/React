// import React, {useEffect, useState} from 'react';
// import {
//   Button,
//   Animated,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   TouchableWithoutFeedback,
// } from 'react-native';
// import EStyleSheet from 'react-native-extended-stylesheet';
// import lightTheme from './Theme/Lighttheme';
// import darkTheme from './Theme/Darktheme';
// import {Camera} from 'react-native-vision-camera';

// EStyleSheet.build(lightTheme);
// let theme = darkTheme;
// const toggleTheme = () => {
//   theme = theme.$theme === 'light' ? darkTheme : lightTheme;
//   console.log(theme);
//   // StyleSheet.build(theme);
//   // EStyleSheet.value('$theme') === 'light' ? darkTheme : lightTheme;
//   // EStyleSheet.build(theme);
//   // setState() called twice to re-render whole component tree
// };

// const App = () => {
//   return (
//     <View>
//       <Camera isActive={true} />
//       <></>
//     </View>
//   );
// };

// export default App;

import * as React from 'react';
import {runOnJS} from 'react-native-reanimated';
import 'react-native-reanimated';
import {StyleSheet} from 'react-native';
import {useCameraDevices, useFrameProcessor} from 'react-native-vision-camera';

import {Camera} from 'react-native-vision-camera';
import {scanFaces, Face} from 'vision-camera-face-detector';

export default function App() {
  const [hasPermission, setHasPermission] = React.useState(false);
  const [faces, setFaces] = React.useState();

  const devices = useCameraDevices();
  const device = devices.back;

  React.useEffect(() => {
    console.log(faces);
  }, [faces]);

  React.useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
    })();
  }, []);

  const frameProcessor = useFrameProcessor(frame => {
    'worklet';
    console.log(frame);
    const scannedFaces = scanFaces(frame);
    runOnJS(setFaces)(scannedFaces);
  }, []);

  // console.log(device);
  console.log(hasPermission);
  return device != null && hasPermission ? (
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
      frameProcessor={frameProcessor}
      frameProcessorFps={5}
    />
  ) : null;
}
