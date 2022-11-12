/* eslint-disable react-native/no-inline-styles */
// import {useForm, Form, Field} from 'react-fluid-form';
// import {observer} from 'mobx-react';
// import Icons from 'react-native-vector-icons';
import React, {useEffect, useState, useRef, useCallback} from 'react';
import DatePicker from 'react-native-neat-date-picker';
import {
  SafeAreaView,
  TextInput,
  ScrollView,
  Animated,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
} from 'react-native';
// import moment from 'moment';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {useYupValidator} from 'react-fluid-form';
import RegistrationForm from './Screens/RegistrationForm';
import Card from './Screens/Card';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <SafeAreaView>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="form">
        <Stack.Screen name="form" component={RegistrationForm} />
        <Stack.Screen name="card" component={Card} />
      </Stack.Navigator>
    </NavigationContainer>
    // </SafeAreaView>
  );
};

// const Card = () => {
//   return (
//     <View>
//       <Text>Hi</Text>
//     </View>
//   );
// };

export default App;
