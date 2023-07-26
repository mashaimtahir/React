/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '../Screens/HomePage';
import Home from './../Svg/Home';
import Search from '../Svg/Search';
import Orders from './../Svg/Orders';
import Person from './../Svg/Person';
import SearchCategory from '../Screens/SearchCategory';
import Order from '../Screens/Orders';
import {Colors} from '../Theme';
import AccountSetting from '../Screens/AccountSetting';
import SearchRestaurant from '../Screens/SearchRestaurant';

function MyTabBar({state, descriptors, navigation}) {
  const Svg = props => {
    switch (props.index) {
      case 0:
        return <Home {...props} />;
      case 1:
        return <Search {...props} />;
      case 2:
        return <Orders {...props} />;
      case 3:
        return <Person {...props} />;
      default:
        return <></>;
    }
  };
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            activeOpacity={0.75}
            accessibilityRole="button"
            // accessibilityState={isFocused ? {selected: true} : {}}
            // accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <View
              style={{alignItems: 'center', paddingTop: 9, paddingBottom: 5}}>
              <Svg
                index={index}
                color={isFocused ? Colors.green : Colors.grey}
                width={20}
                height={20}
              />
              <Text style={{color: isFocused ? Colors.green : Colors.black}}>
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function BottomTabBar() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Search" component={SearchRestaurant} />
      <Tab.Screen name="Orders" component={Order} />
      <Tab.Screen name="Profile" component={AccountSetting} />
    </Tab.Navigator>
  );
}
