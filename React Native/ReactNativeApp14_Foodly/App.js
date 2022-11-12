import React, {useState} from 'react';
import {
  SafeAreaView,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Scale from './Function/Scale';
import CategoryCard from './Modules/CategoryCard';
import Pager from './Modules/Pager';
import {Colors} from './Theme';
import Container from './Abstracts/Container';
import SocialAuth from './Modules/SocialAuth';
import RadioList from './Modules/RadioList';
import CameraView from './Modules/Camera';
import MultiSelectionList from './Modules/MultiSelectionList';
import TopSheet from './Modules/TopSheet';
import Button from './Abstracts/Button';
import TextInput from './Abstracts/TextInput';
import DetailCard from './Modules/DetailCard';
import RatingList from './Modules/RatingList';
import {Save, Get} from './Function/LocalStorage';
import ToggleList from './Modules/ToggleList';
import Slider from './Modules/Slider';
import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Reset from './Screens/Reset';
import Forgot from './Screens/Forgot';
import HomePage from './Screens/HomePage';
import BottomTabBar from './Modules/BottomTabBarNavigation';

const cardSize = Scale(375, 335, 282);
const cardSize2 = Scale(375, 160, 288);
const cardImgSize = Scale(375, 335, 185);
const cardImgSize2 = Scale(375, 160, 220);
const App = () => {
  const Stack = createStackNavigator();
  const [async, setAsync] = useState();
  const imgs = [
    'https://images.pexels.com/photos/1766828/pexels-photo-1766828.jpeg?cs=srgb&dl=pexels-baskin-creative-studios-1766828.jpg&fm=jpg',
    'https://images.unsplash.com/photo-1589670301572-734d642c53d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlJTIwdmlld3xlbnwwfHwwfHw%3D&w=1000&q=80',
    'https://images.pexels.com/photos/1766828/pexels-photo-1766828.jpeg?cs=srgb&dl=pexels-baskin-creative-studios-1766828.jpg&fm=jpg',
    'https://img.freepik.com/premium-photo/mesmerizing-view-green-landscape-with-trees-beautiful-cloudy-sky_181624-57064.jpg?w=2000',
    'https://images.pexels.com/photos/1766828/pexels-photo-1766828.jpeg?cs=srgb&dl=pexels-baskin-creative-studios-1766828.jpg&fm=jpg',
    'https://images.pexels.com/photos/1766828/pexels-photo-1766828.jpeg?cs=srgb&dl=pexels-baskin-creative-studios-1766828.jpg&fm=jpg',
  ];
  const [sheet, setSheet] = useState(false);
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'BottomTabBar'}
          screenOptions={{headerShown: false}}>
          <Stack.Screen name={'BottomTabBar'} component={BottomTabBar} />
          <Stack.Screen name={'SignIn'} component={SignIn} />
          <Stack.Screen name={'SignUp'} component={SignUp} />
          <Stack.Screen name={'Reset'} component={Reset} />
          <Stack.Screen name={'Forgot'} component={Forgot} />
          <Stack.Screen name={'HomePage'} component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
