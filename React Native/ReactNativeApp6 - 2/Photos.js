import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default Photos = () => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <Text style={{ fontSize: 30, color: '#fb1788', fontWeight: 'bold', paddingLeft: 10, paddingBottom: 5 }}>112 Posts</Text>
            <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between', flexGrow: 1 }}>
                <View style={{ width: 130.1, height: 130 }}>
                    <Image style={{ width: '100%', height: '100%', color: 'black' }} resizeMode={'stretch'} source={require("./Images/profile.jpg")}></Image>
                </View>
                <View style={{ width: 130.1, height: 130, marginLeft: 1 }}>
                    <Image style={{ width: '100%', height: '100%', color: 'black' }} resizeMode={'stretch'} source={require("./Images/profile.jpg")}></Image>
                </View>
                <View style={{ width: 130.1, height: 130, marginLeft: 1 }}>
                    <Image style={{ width: '100%', height: '100%', color: 'black' }} resizeMode={'stretch'} source={require("./Images/profile.jpg")}></Image>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 1, justifyContent: 'space-between', flexGrow: 1 }}>
                <View style={{ width: 130.1, height: 130 }}>
                    <Image style={{ width: '100%', height: '100%', color: 'black' }} resizeMode={'stretch'} source={require("./Images/profile.jpg")}></Image>
                </View>
                <View style={{ width: 130.1, height: 130, marginLeft: 1 }}>
                    <Image style={{ width: '100%', height: '100%', color: 'black' }} resizeMode={'stretch'} source={require("./Images/profile.jpg")}></Image>
                </View>
                <View style={{ width: 130.1, height: 130, marginLeft: 1 }}>
                    <Image style={{ width: '100%', height: '100%', color: 'black' }} resizeMode={'stretch'} source={require("./Images/profile.jpg")}></Image>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 1, justifyContent: 'space-between', flexGrow: 1 }}>
                <View style={{ width: 130.1, height: 130 }}>
                    <Image style={{ width: '100%', height: '100%', color: 'black' }} resizeMode={'stretch'} source={require("./Images/profile.jpg")}></Image>
                </View>
                <View style={{ width: 130.1, height: 130, marginLeft: 1 }}>
                    <Image style={{ width: '100%', height: '100%', color: 'black' }} resizeMode={'stretch'} source={require("./Images/profile.jpg")}></Image>
                </View>
                <View style={{ width: 130.1, height: 130, marginLeft: 1 }}>
                    <Image style={{ width: '100%', height: '100%', color: 'black' }} resizeMode={'stretch'} source={require("./Images/profile.jpg")}></Image>
                </View>
            </View>
        </ScrollView>
    );
}