import React, {useState} from 'react';
import {Dimensions, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import About from './About';
import ProfileEvents from './ProfileEvent';
import ProfileReview from './ProfileReview';
import Button from '../Abstract Component/Button';

const Tab = createMaterialTopTabNavigator();

const fontsize = Dimensions.get('window').width * 0.045;
const fontsize2 = Dimensions.get('window').width * 0.036;
const Tabbar = props => {
  const [a, seta] = useState(0);
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      <Button
        text={'About'}
        width={null}
        paddingHorizontal={0}
        fontSize={fontsize}
        color={a === 0 ? '#5669FF' : '#666'}
        style={{
          borderBottomColor: '#5669FF',
          borderBottomWidth: a === 0 ? 2 : 0,
        }}
        onPress={() => {
          props.navigation.navigate('About');
          seta(0);
        }}
      />
      <Button
        text={'Event'}
        width={null}
        paddingHorizontal={0}
        fontSize={fontsize}
        color={a === 1 ? '#5669FF' : '#666'}
        style={{
          borderBottomColor: '#5669FF',
          borderBottomWidth: a === 1 ? 2 : 0,
        }}
        onPress={() => {
          props.navigation.navigate('ProfileEvent');
          seta(1);
        }}
      />
      <Button
        text={'Review'}
        width={null}
        paddingHorizontal={0}
        fontSize={fontsize}
        color={a === 2 ? '#5669FF' : '#666'}
        style={{
          borderBottomColor: '#5669FF',
          borderBottomWidth: a === 2 ? 2 : 0,
        }}
        onPress={() => {
          props.navigation.navigate('ProfileReview');
          seta(2);
        }}
      />
    </View>
  );
};

const TopTabBar = () => {
  return (
    <Tab.Navigator
      tabBar={props => <Tabbar {...props} />}
      screenOptions={{
        swipeEnabled: false,
        tabBarIndicatorStyle: {backgroundColor: '#5669ff'},
        // tabBarIndicator: {Tabbar},
        tabBarActiveTintColor: '#5669FF',
        tabBarInactiveTintColor: '#888',
        tabBarItemStyle: {backgroundColor: '#f220', padding: 0, width: null},
        tabBarIndicatorContainerStyle: {backgroundColor: '#0000'},
        tabBarStyle: {width: null, backgroundColor: '#0000', elevation: 0},
        tabBarContentContainerStyle: {
          justifyContent: 'space-around',
          backgroundColor: '#0000',
        },
      }}>
      <Tab.Screen name="About" component={About} />
      <Tab.Screen
        name="ProfileEvent"
        options={{tabBarLabel: 'Event'}}
        component={ProfileEvents}
      />
      <Tab.Screen
        name="ProfileReview"
        options={{tabBarLabel: 'Review'}}
        component={ProfileReview}
      />
    </Tab.Navigator>
  );
};

export default TopTabBar;
