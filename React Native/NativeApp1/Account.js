import React from "react";
import { StyleSheet, Button, Text, TextInput, View, TouchableWithoutFeedback } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Signup = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex:2, alignItems:'center', justifyContent:'flex-end' }}>
        <Text style={{ color:'#4267B2', fontSize:30, fontWeight:'bold' }}>Facebook</Text>
      </View>
      <View style={{ flex:2, justifyContent:'flex-end', padding:25 }}>
        <TextInput style={{ padding:20, borderRadius:10, marginBottom:15, backgroundColor:'lightgrey' }} placeholder="Email or Number"></TextInput>
        <TextInput style={{ padding:20, borderRadius:10, marginBottom:15, backgroundColor:'lightgrey' }} placeholder="Password"></TextInput>
      </View>
      <View style={{ flex: 2, padding: 25, justifyContent:'flex-start' }}>
        <TouchableWithoutFeedback color='green' onPress={() => { navigation.navigate('Home'); }}>
          <View style={{ alignItems:'center', padding:15, borderRadius:10, backgroundColor:'#467fd0' }}>
            <Text style={{ color:'white', fontWeight:'bold', fontSize:18 }}>Sign In</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});

export default Signup;