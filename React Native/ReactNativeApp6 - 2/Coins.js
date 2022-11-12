import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { navigate } from './RootNavigation';

export default Coins = () => {
    return (
        <View style={{ flex: 1, height: '100%', backgroundColor: 'royalblue', justifyContent: 'center' }}>
            <Text style={{ alignSelf:'center', fontSize: 40, fontWeight: 'bold' }}>Coins</Text>
        </View>
    );
}