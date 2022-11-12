import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import {FontSize} from '../Theme';

const MainStatusBar = () => {
  return (
    <View style={[styles.row, styles.container]}>
      <View style={[styles.flex]}>
        <Text style={styles.center}>Delvier to</Text>
        <Text style={styles.center}>San Francisco</Text>
      </View>
      <TouchableWithoutFeedback onPress={() => {}}>
        <Text style={[styles.filter, styles.spacing]}>Filter</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  center: {
    alignSelf: 'center',
  },
  absolute: {
    position: 'absolute',
  },
  row: {
    flexDirection: 'row',
  },
  spacing: {
    padding: FontSize.Caption * 0.3,
  },
  container: {
    width: '100%',
    paddingVertical: 8,
  },
  justify: {
    justifyContent: 'center',
  },
  filter: {
    position: 'absolute',
    paddingRight: 10,
    right: 0,
    bottom: 0,
  },
});

export default MainStatusBar;
