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
import store from './Store/Store';
import {Provider} from 'react-redux';
import NavBar from './Components/Navbar';
import Counters from './Components/Counter_Mapping';

const App = () => {
  return (
    <Provider store={store}>
      <NavBar />
      <Counters />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
