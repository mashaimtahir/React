import store from '../Store/Store';
import {changeName, changeEmail} from '../Reducers/ProfileReducer';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken, Settings} from 'react-native-fbsdk-next';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import firebase from '@react-native-firebase/app';

GoogleSignin.configure({
  webClientId:
    '228876194121-iq76662s0fimmd22249i85as1l6c9tpo.apps.googleusercontent.com',
});

const firebaseConfig = {
  apiKey: 'AIzaSyAuPl5i2-dOQCe9e7Q3yjE4Jnba_s6HQpI',
  authDomain: 'com.reactnativeapp14_foodly',
  databaseURL:
    'https://signin-ab41f-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'signin-ab41f',
  storageBucket: 'myapp-project-123.appspot.com',
  messagingSenderId: '65211879809',
  appId: '1:228876194121:android:e4d31178f571e84eec4a98',
  measurementId: 'G-8GSGZQ44ST',
};

const FirebaseSignIn = async (username, password, navigation) => {
  if (!firebase.apps.length) {
    await firebase.initializeApp(firebaseConfig);
  }
  console.log(username, password);
  const user_sign_in = auth().signInWithEmailAndPassword(username, password);
  user_sign_in
    .then(user => {
      console.log(user);
      let email = user.user.email;
      store.dispatch(changeEmail(email));
      navigation.navigate('BottomTabBar');
    })
    .catch(error => {
      console.error(error);
    });
};

const GoogleSignIn = async navigation => {
  if (!firebase.apps.length) {
    await firebase.initializeApp(firebaseConfig);
  }
  const {idToken} = await GoogleSignin.signIn();
  const googleCredential = firebase.auth.GoogleAuthProvider.credential(idToken);
  const user_sign_in = auth().signInWithCredential(googleCredential);
  let name, email;
  user_sign_in
    .then(user => {
      console.log(user);
      name = user.additionalUserInfo.profile.name;
      email = user.additionalUserInfo.profile.email;
      store.dispatch(changeName(name));
      store.dispatch(changeEmail(email));
      navigation.navigate('BottomTabBar');
    })
    .catch(error => {
      console.error(error);
    });
};

const FacebookSignIn = async navigation => {
  Settings.setAppID('1394070491123615');
  Settings.initializeSDK();
  const result = await LoginManager.logInWithPermissions([
    'public_profile',
    'email',
  ]);

  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }
  const data = await AccessToken.getCurrentAccessToken();
  if (!data) {
    throw 'Something went wrong obtaining access token';
  }
  const facebookCredential = auth.FacebookAuthProvider.credential(
    data.accessToken,
  );
  let res = auth().signInWithCredential(facebookCredential);
  let name, email;
  res
    .then(user => {
      console.log(user);
      name = user.additionalUserInfo.profile.name;
      email = user.additionalUserInfo.profile.email;
      store.dispatch(changeName(name));
      store.dispatch(changeEmail(email));
      navigation.navigate('BottomTabBar');
    })
    .catch(error => {
      console.error(error);
    });
};

export {GoogleSignIn, FacebookSignIn, FirebaseSignIn};
