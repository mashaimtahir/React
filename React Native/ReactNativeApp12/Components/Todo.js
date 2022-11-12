import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Reducer from '../Redux/Reducers';
import {useSelector} from 'react-redux';
import dispatch from './../Redux/Controllers';

const Todo = () => {
  return (
    <>
      <TodoHead />
      <TodoMap />
    </>
  );
};

const TodoHead = () => {
  const [input, setInput] = useState('');
  const counters = useSelector(state => state.counter);
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text, styles.center]}>Todo App</Text>
      <View style={[styles.row, styles.container]}>
        <Text style={[styles.text, styles.center]}>Name</Text>
        <TextInput
          style={[styles.input, styles.center]}
          value={input}
          onChangeText={setInput}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          dispatch.event.insert({
            id: counters.length,
            name: input,
            value: 1,
          });
          // console.log(counters);
        }}>
        <Text style={[styles.center, styles.text]}>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
};

const TodoMap = () => {
  const counters = useSelector(state => state.counter);
  // console.log(counters);
  return (
    <>
      {counters.map(counter => (
        <TodoView key={counter.id} counter={counter} />
      ))}
    </>
  );
};

const TodoView = ({counter}) => {
  console.log(counter);
  return (
    <View style={[styles.row, styles.container]}>
      <Text style={styles.text}>{counter.value} Person</Text>
      <TouchableOpacity
        style={[styles.addbtn, styles.btn]}
        onPress={() => dispatch.values.increment(counter.id)}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.minbtn, styles.btn]}
        onPress={() => dispatch.values.decrement(counter.id)}>
        <Text style={styles.text}>-</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{counter.name}</Text>
      <TouchableOpacity
        style={[styles.delbtn, styles.btn]}
        onPress={() => dispatch.event.delete(counter.id)}>
        <Text style={styles.text}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  center: {
    alignSelf: 'center',
  },
  container: {
    margin: 10,
  },
  text: {
    marginHorizontal: 10,
    fontSize: 18,
  },
  input: {
    flex: 1,
    borderWidth: 1,
  },
  btn: {
    marginHorizontal: 10,
  },
  addbtn: {
    backgroundColor: '#44b254',
  },
  minbtn: {
    backgroundColor: '#b4c13f',
  },
});

export default Todo;
