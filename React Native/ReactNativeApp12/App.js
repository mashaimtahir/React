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
import {Provider} from 'react-redux';
import store from './Store/store';
import Todo from './Components/Todo';

const App = () => {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
