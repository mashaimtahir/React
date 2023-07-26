/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar as Statusbar,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import {Colors, FontSize} from '../Theme';

const StatusBar = ({
  leading,
  leadingClick,
  tailing,
  tailingClick,
  text,
  textStyle,
  style,
}) => {
  return (
    <View style={[styles.row, styles.container, styles.justify, style]}>
      <Statusbar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <TouchableWithoutFeedback
        style={[styles.absolute]}
        onPress={leadingClick}>
        <View style={styles.spacing}>{leading}</View>
      </TouchableWithoutFeedback>
      <View style={[styles.flex]}>
        <Text
          style={[
            styles.center,
            textStyle,
            {fontSize: FontSize.Body, color: Colors.black, fontWeight: '500'},
          ]}>
          {text}
        </Text>
      </View>
      <TouchableWithoutFeedback
        style={[styles.absolute, styles.right, styles.spacing]}
        onPress={tailingClick}>
        <Text>{tailing}</Text>
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
  right: {
    right: 0,
  },
  spacing: {
    padding: FontSize.Caption * 0.3,
  },
  container: {
    width: '100%',
    paddingVertical: 8,
    paddingTop: Statusbar.currentHeight,
  },
  justify: {
    justifyContent: 'center',
  },
});

export default StatusBar;
