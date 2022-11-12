'use strict';
import React, {PureComponent} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RNCamera} from 'react-native-camera';

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text>Waiting</Text>
  </View>
);

class ExampleApp extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}>
          {({camera, status, recordAudioPermissionStatus}) => {
            if (status !== 'READY') {
              return <PendingView />;
            }
            return (
              <View
                style={{
                  flex: 0,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => this.takePicture(camera)}
                  style={styles.capture}>
                  <Text style={{fontSize: 14}}> SNAP </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </RNCamera>
      </View>
    );
  }

  takePicture = async function (camera) {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);
    //  eslint-disable-next-line
    console.log(data.uri);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

// 'use strict';
// import React, {PureComponent} from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import {RNCamera} from 'react-native-camera';

// const PendingView = () => (
//   <View
//     style={{
//       flex: 1,
//       backgroundColor: 'lightgreen',
//       justifyContent: 'center',
//       alignItems: 'center',
//     }}>
//     <Text>Waiting</Text>
//   </View>
// );

// class App extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {isFaceDetected: false, isTextRecognized: false};
//   }

//   handleFaceDetected = faceArray => {
//     this.setState(prevState => {
//       return {
//         ...prevState,
//         isFaceDetected: faceArray.faces.length > 0 ? true : false,
//       };
//     });
//   };
//   handleText = event => {
//     // console.log(event);
//     if (event.textBlocks.length > 0) {
//       event.textBlocks.forEach(e => console.log(e.value));
//     }
//   };
//   render() {
//     return (
//       <View style={styles.container}>
//         <RNCamera
//           style={styles.preview}
//           autoFocus={'on'}
//           type={RNCamera.Constants.Type.back}
//           flashMode={RNCamera.Constants.FlashMode.off}
//           faceDetectionMode={RNCamera.Constants.FaceDetection.Mode.fast}
//           onFacesDetected={this.handleFaceDetected} //this.handleFaceDetected}
//           onFaceDetectionError={res => console.log(res)}
//           onTextRecognized={this.handleText}
//           androidCameraPermissionOptions={{
//             title: 'Permission to use camera',
//             message: 'We need your permission to use your camera',
//             buttonPositive: 'Ok',
//             buttonNegative: 'Cancel',
//           }}
//           // androidRecordAudioPermissionOptions={{
//           //   title: 'Permission to use audio recording',
//           //   message: 'We need your permission to use your audio',
//           //   buttonPositive: 'Ok',
//           //   buttonNegative: 'Cancel',
//           // }}>
//         >
//           {({camera, status, recordAudioPermissionStatus}) => {
//             if (this.state.isFaceDetected === true) {
//               console.log(camera);
//               this.takePicture(camera);
//               {
//                 /* camera.pausePreview(); */
//               }
//             }
//             if (status !== 'READY') {
//               return <PendingView />;
//             }
//             return (
//               <View
//                 style={{
//                   flex: 0,
//                   flexDirection: 'row',
//                   justifyContent: 'center',
//                 }}>
//                 <TouchableOpacity
//                   onPress={() => this.takePicture(camera)}
//                   style={styles.capture}>
//                   <Text style={{fontSize: 14}}> SNAP </Text>
//                 </TouchableOpacity>
//               </View>
//             );
//           }}
//         </RNCamera>
//       </View>
//     );
//   }

//   takePicture = async function (camera) {
//     const options = {quality: 0.5, base64: true};
//     const data = await camera.takePictureAsync(options);
//     console.log(data.uri);
//   };
// }

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: 'black',
//   },
//   preview: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   capture: {
//     flex: 0,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     padding: 15,
//     paddingHorizontal: 20,
//     alignSelf: 'center',
//     margin: 20,
//   },
// });
