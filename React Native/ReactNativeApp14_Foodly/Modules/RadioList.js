import React, {useState} from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Text} from 'react-native';
import Scale from '../Function/Scale';
import {Colors, FontSize} from '../Theme';

const circleSize = Scale(375, 24, 24);
const innerCircleSize = Scale(375, 18, 18);
const RadioList = ({choices}) => {
  const [currentChoice, setChoice] = useState({key: undefined});
  return (
    <View>
      {choices &&
        choices.map((choice, key) => {
          return (
            <TouchableWithoutFeedback
              key={key}
              onPress={() => setChoice({key, choice})}>
              <View style={[styles.row, styles.container]}>
                <View>
                  <View style={styles.choiceContainer}>
                    {currentChoice.key === key ? (
                      <View style={styles.innerCircle} />
                    ) : null}
                  </View>
                </View>
                <Text>{choice}</Text>
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
  container: {
    paddingVertical: FontSize.Caption,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey + '2f',
  },
  choiceContainer: {
    width: circleSize.WIDTH,
    height: circleSize.HEIGHT,
    borderWidth: 1,
    borderColor: Colors.grey + 'aa',
    borderRadius: 30,
    marginRight: FontSize.Body,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: innerCircleSize.WIDTH,
    height: innerCircleSize.HEIGHT,
    backgroundColor: Colors.green,
    borderRadius: 100,
  },
});

export default RadioList;
