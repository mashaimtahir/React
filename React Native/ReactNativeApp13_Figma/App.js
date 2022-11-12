import React from 'react';
import {StatusBar, Animated} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Drawer from './Components/Drawer';
import SignInScreen from './Screens/Sigin';
import SignUpScreen from './Screens/Signup';
import Event from './Screens/Event';
import Search from './Screens/Search';
import ResetScreen from './Screens/Reset';
import MapView from './Screens/MapView';
import Notifications from './Screens/Notification';
import Profile from './Screens/Profile';
import EventDetail from './Screens/EventDetail';
// import Home from './Screens/Home';
import TopTabBar from './Components/ProfileTabBar';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar translucent />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SignIn"
          screenOptions={{headerShown: false, cardStyleInterpolator: Slide}}>
          <Stack.Screen name={'ProfileTabBar'} component={TopTabBar} />
          <Stack.Screen name={'HomeScreen'} component={Drawer} />
          <Stack.Screen name={'Event'} component={Event} />
          <Stack.Screen name={'EventDetail'} component={EventDetail} />
          <Stack.Screen name={'Notifications'} component={Notifications} />
          <Stack.Screen name={'SignIn'} component={SignInScreen} />
          <Stack.Screen name={'SignUp'} component={SignUpScreen} />
          <Stack.Screen name={'Map'} component={MapView} />
          <Stack.Screen name={'Search'} component={Search} />
          <Stack.Screen name={'ResetScreen'} component={ResetScreen} />
          <Stack.Screen name={'Profile'} component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const Slide = ({current, next, inverted, layouts: {screen}}) => {
  const progress = Animated.add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
    next
      ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        })
      : 0,
  );

  return {
    cardStyle: {
      transform: [
        {
          translateX: Animated.multiply(
            progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [screen.width, 0, screen.width * -0.3],
              extrapolate: 'clamp',
            }),
            inverted,
          ),
        },
      ],
    },
  };
};

export default App;
