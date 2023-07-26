/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotification from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging';

PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onNotification: function (notification) {
    console.log('Notification:', notification);
  },
  requestPermissions: Platform.OS === 'android',
});
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);
