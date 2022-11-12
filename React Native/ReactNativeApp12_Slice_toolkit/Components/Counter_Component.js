import React from 'react';
// import {connect} from 'react-redux';
import {useDispatch} from 'react-redux';
import {increment, decrement, Deletion} from './../Reducer/Reducer';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';

const Counter = ({counter}) => {
  // const count = useSelector((state) => state.counter[0].value)
  const dispatch = useDispatch();
  return (
    <View style={styles.btn}>
      <View style={styles.row}>
        <Text style={styles.btn}>Task: </Text>
        <Text style={styles.btn}>{counter.name}</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.btn, styles.btn_color]}
          onPress={() => dispatch(increment(counter.id))}>
          <Text>Increment</Text>
        </TouchableOpacity>
        <Text style={styles.btn}>{counter.value}</Text>
        <TouchableOpacity
          style={[styles.btn, styles.btn_color]}
          onPress={() => dispatch(decrement(counter.id))}>
          <Text>Decrement</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => dispatch(Deletion(counter.id))}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  btn: {
    margin: 3,
    padding: 4,
  },
  btn_color: {
    backgroundColor: '#a8a8a8',
  },
});

export default Counter;
