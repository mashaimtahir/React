import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Button from '../Abstracts/Button';
import Scale from '../Function/Scale';
import {Colors, FontSize} from '../Theme';

const btnSize = Scale(375, 64, 64);
const MultiSelectionList = ({options}) => {
  const [option, setOption] = useState([]);
  return (
    <View style={[styles.row, styles.wrap]}>
      {options &&
        options.map((data, key) => {
          return (
            <View key={key} style={styles.btnContainer}>
              <Button
                text={data}
                borderRadius={100}
                width={btnSize.WIDTH}
                height={btnSize.WIDTH}
                fontSize={FontSize.Body}
                backgroundColor={
                  option.find(value => value.key === key)
                    ? Colors.green
                    : Colors.lightgrey
                }
                color={
                  option.find(value => value.key === key)
                    ? Colors.white
                    : Colors.black
                }
                onPress={() => {
                  let check = option.find(value => value.key === key);
                  setOption(preState => {
                    let temp = [...preState];
                    if (check) {
                      return temp.filter(value => value.key !== key);
                    } else {
                      temp.push({key, data});
                      return temp;
                    }
                  });
                }}
              />
            </View>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  wrap: {
    flexWrap: 'wrap',
  },
  btnContainer: {
    paddingVertical: FontSize.Caption * 0.2,
    paddingHorizontal: FontSize.Caption * 0.3,
  },
});

export default MultiSelectionList;
