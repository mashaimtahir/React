import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Friends from './Components/Friends';
import Coins from './Components/Coins';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Friendslist">
        <Stack.Screen name="Friendslist" component={Friends} />
        <Stack.Screen name="Coin" component={Coins} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
