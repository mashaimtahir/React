import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ScrollViewBase } from 'react-native';
import { navigate } from './RootNavigation';

export default Badges = () => {
    return (
            <View style={{ flex: 1, height: '100%', backgroundColor: 'blue', justifyContent: 'center' }}>
                <Text style={{ alignSelf:'center', fontSize: 40, fontWeight: 'bold' }}>Badges</Text>
            </View>
    );
}