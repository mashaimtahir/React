import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Interest = ({text, backgroundColor}) => {
  const styles = StyleSheet.create({
    center: {
      flexDirection: 'row',
    },
    container: {
      borderRadius: 50,
      backgroundColor: backgroundColor ?? 'grey',
      paddingHorizontal: 12,
      paddingVertical: 5,
      marginRight: 5,
      marginBottom: 5,
    },
    text: {
      color: 'white',
      fontSize: 15,
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Interest;
