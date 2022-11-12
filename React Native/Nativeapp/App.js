import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LotsOfStyles = () => {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View>
          <Text style={{fontSize: 30, padding: 20}}>1</Text>
        </View>
        <View>
          <Text style={{fontSize: 30, padding: 20}}>2</Text>
        </View>
        <View>
          <Text style={{fontSize: 30, padding: 20}}>3</Text>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default LotsOfStyles;