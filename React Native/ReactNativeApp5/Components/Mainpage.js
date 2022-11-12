import { TabActions } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Pressable,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Friends from './Friends';

const Tab = createBottomTabNavigator();

const MainPage = ({ navigation }) => {
    return (
      <Tab.Navigator>
        <Text>New</Text>
        <Friends />
      </Tab.Navigator>
    );
}

export default MainPage;