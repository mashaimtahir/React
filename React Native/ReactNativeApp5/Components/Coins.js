import React from 'react';
import {
  SafeAreaView,
    ScrollView,
  TouchableWithoutFeedback,
  StatusBar,
  StyleSheet,
  Text,
  Pressable,
  useColorScheme,
  View,
} from 'react-native';

const Coins = ({ navigation }) => {
    return (
        <TouchableWithoutFeedback color='green' onPress={() => { navigation.navigate('Coin'); }}>
          <View style={{ alignItems:'center', padding:15, borderRadius:10, backgroundColor:'#467fd0' }}>
            <Text style={{ color:'white', fontWeight:'bold', fontSize:18 }}>Sign In</Text>
          </View>
        </TouchableWithoutFeedback>
    );
}

export default Coins;