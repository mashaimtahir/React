import React, {useEffect, useState, useRef, useCallback} from 'react';
import {
  SafeAreaView,
  TextInput,
  ScrollView,
  // Animated,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
} from 'react-native';

const Input = ({Label, placeholder, value_, regex, geterror, getValue}) => {
  const [value, setValue] = useState(value_);
  const [check, setCheck] = useState(geterror);
  const error = 'Invalid ' + Label;
  const validator = e => {
    setValue(e);
    getValue(e);
    const regexp = regex;
    if (regex !== undefined) {
      if (!regexp.test(e)) {
        setCheck(true);
      } else {
        setCheck(false);
      }
    } else {
      if (e === '') {
        setCheck(true);
      } else {
        setCheck(false);
      }
    }
  };
  return (
    <View style={styles.inputbody}>
      <Text>{Label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        valid={check}
        onChangeText={e => validator(e)}
        value={value}
      />
      <Text
        style={{
          display: check === true || geterror === true ? 'flex' : 'none',
          color: 'red',
          fontSize: 16,
        }}>
        {error}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  FormHeading: {
    alignSelf: 'center',
    paddingTop: 10,
    fontSize: 27,
  },
  input: {
    borderBottomWidth: 1,
    // marginHorizontal: 15,
  },
  inputbody: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  dobtext: {
    fontSize: 18,
    paddingVertical: 5,
  },
  submit: {
    alignItems: 'center',
    backgroundColor: '#2001e1',
    paddingVertical: 8,
  },
  submitText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    width: 120,
    height: 120,
  },
});

export default Input;
