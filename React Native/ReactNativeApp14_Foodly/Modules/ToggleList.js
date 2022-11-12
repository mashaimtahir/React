import React, {useState} from 'react';
import {Text, TouchableWithoutFeedback, View, StyleSheet} from 'react-native';
import Tick from './../Svg/Tick';
import Sun from './../Svg/Sun';
import {FontSize} from '../Theme';
import FastClock from '../Svg/FastClock';

const ToggleList = () => {
  const [data, setData] = useState([
    {icon: <Sun />, text: 'Recommended'},
    {icon: <FastClock />, text: 'Fastest Delivery'},
  ]);
  const [selection, setSelection] = useState(null);
  return (
    <View>
      {data.map((Item, key) => {
        return (
          <TouchableWithoutFeedback key={key} onPress={() => setSelection(key)}>
            <View style={[styles.row, styles.spacebetween, styles.container]}>
              <View style={[styles.row, styles.centering]}>
                {Item.icon}
                <Text style={styles.leftspace}>{Item.text}</Text>
              </View>
              {selection === key && <Tick />}
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  spacebetween: {
    justifyContent: 'space-between',
  },
  center: {
    alignSelf: 'center',
  },
  centering: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 15,
  },
  leftspace: {
    paddingLeft: FontSize.H3,
  },
});

export default ToggleList;
