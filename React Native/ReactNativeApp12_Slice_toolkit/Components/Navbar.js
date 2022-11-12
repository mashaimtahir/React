import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {Insertion} from './../Reducer/Reducer';
import {useState} from 'react';

const NavBar = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(value);
  return (
    <View>
      <Text>Task Name</Text>
      <TextInput value={value} onChangeText={setValue} />
      <TouchableOpacity onPress={() => dispatch(Insertion(value))}>
        <Text>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;
