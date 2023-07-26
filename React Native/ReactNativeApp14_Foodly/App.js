import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import CameraView from './Modules/Camera';
import MultiSelectionList from './Modules/MultiSelectionList';
import {Save, Get, getAllKeys, GetValue} from './Function/LocalStorage';
import Slider from './Modules/Slider';
import BottomTabBar from './Modules/BottomTabBarNavigation';
import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import Reset from './Screens/Reset';
import Forgot from './Screens/Forgot';
import HomePage from './Screens/HomePage';
import Orders from './Screens/Orders';
import AddOrder from './Screens/AddOrder';
import BrowseFoods from './Screens/BrowseFoods';
import SearchCategory from './Screens/SearchCategory';
import AddSocialAccounts from './Screens/AddSocialAccounts';
import CardList from './Screens/CardList';
import Maps from './Screens/Map';
import PaymentMethod from './Screens/PaymentMethod';
import ProfileSetting from './Screens/ProfileSetting';
import AccountSetting from './Screens/AccountSetting';
import ReferFriend from './Screens/ReferFriend';
import OnBoarding from './Screens/OnBoarding';
import ChangePassword from './Screens/ChangePassword';
import Restaurant from './Screens/Restaurant';
import SearchRestaurant from './Screens/SearchRestaurant';
import {enableLatestRenderer} from 'react-native-maps';
import Store from './Store/Store';

enableLatestRenderer();
const App = () => {
  const Stack = createStackNavigator();
  const imgs = [
    'https://images.pexels.com/photos/1766828/pexels-photo-1766828.jpeg?cs=srgb&dl=pexels-baskin-creative-studios-1766828.jpg&fm=jpg',
    'https://images.unsplash.com/photo-1589670301572-734d642c53d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlJTIwdmlld3xlbnwwfHwwfHw%3D&w=1000&q=80',
    'https://images.pexels.com/photos/1766828/pexels-photo-1766828.jpeg?cs=srgb&dl=pexels-baskin-creative-studios-1766828.jpg&fm=jpg',
    'https://img.freepik.com/premium-photo/mesmerizing-view-green-landscape-with-trees-beautiful-cloudy-sky_181624-57064.jpg?w=2000',
    'https://images.pexels.com/photos/1766828/pexels-photo-1766828.jpeg?cs=srgb&dl=pexels-baskin-creative-studios-1766828.jpg&fm=jpg',
    'https://images.pexels.com/photos/1766828/pexels-photo-1766828.jpeg?cs=srgb&dl=pexels-baskin-creative-studios-1766828.jpg&fm=jpg',
  ];
  useEffect(() => {
    // Save('@name', 'true');
    // let keys = getAllKeys();
    // console.info('keys', keys);
    // GetValue('@name').then(result => console.log(result));
    // console.log(data);
  });
  const [sheet, setSheet] = useState(false);
  return (
    <>
      <Provider store={Store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={'SignIn'}
            screenOptions={{headerShown: false}}>
            <Stack.Screen name={'OnBoarding'} component={OnBoarding} />
            <Stack.Screen name={'BottomTabBar'} component={BottomTabBar} />
            <Stack.Screen name={'SignIn'} component={SignIn} />
            <Stack.Screen name={'SignUp'} component={SignUp} />
            <Stack.Screen name={'Reset'} component={Reset} />
            <Stack.Screen name={'Forgot'} component={Forgot} />
            <Stack.Screen name={'HomePage'} component={HomePage} />
            <Stack.Screen name={'AddOrder'} component={AddOrder} />
            <Stack.Screen name={'Order'} component={Orders} />
            <Stack.Screen name={'SearchCategory'} component={SearchCategory} />
            <Stack.Screen name={'BrowseFoods'} component={BrowseFoods} />
            <Stack.Screen name={'CardList'} component={CardList} />
            <Stack.Screen name={'Maps'} component={Maps} />
            <Stack.Screen name={'PaymentMethod'} component={PaymentMethod} />
            <Stack.Screen name={'ProfileSetting'} component={ProfileSetting} />
            <Stack.Screen name={'AccountSetting'} component={AccountSetting} />
            <Stack.Screen name={'ReferFriend'} component={ReferFriend} />
            <Stack.Screen name={'ChangePassword'} component={ChangePassword} />
            <Stack.Screen name={'Restaurant'} component={Restaurant} />
            <Stack.Screen
              name={'SearchRestaurant'}
              component={SearchRestaurant}
            />
            <Stack.Screen
              name={'AddSocialAccounts'}
              component={AddSocialAccounts}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
