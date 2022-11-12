import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { navigate } from './RootNavigation';
import Icon_MaterialC from 'react-native-vector-icons/MaterialCommunityIcons';

export default Friends = () => {
    return (
        <>
            <ScrollView style={{ backgroundColor: 'white' }}>
                <Text style={{ color: 'black', paddingLeft: 30,fontSize: 27, color: 'purple', fontWeight: 'bold' }}>4,392 Friends</Text>
                <View>
                    <View style={{ flexDirection: 'row', paddingVertical: 10, alignItems: 'center', paddingHorizontal: 30 }}>
                        <View style={{ width: 45, height: 45, borderRadius: 100 }}>
                            <Image style={{ width: '100%', height: '100%', borderRadius: 200 }} source={require("./Images/profile.jpg")}></Image>
                        </View>
                        <View style={{ flexDirection: 'column', flexGrow: 1, marginLeft: 10 }}>
                            <Text style={{ fontSize: 23, color: 'black' }}>Anjelika Downey</Text>
                            <Text style={{ color: 'grey' }}>Adowney</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon_MaterialC name='star-circle' style={{ color: 'black', paddingTop: 2, fontSize: 15 }}/>
                            <Text style={{ color: 'black' }}>  9</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', paddingVertical: 10, alignItems: 'center', paddingHorizontal: 30 }}>
                        <View style={{ width: 45, height: 45, borderRadius: 100 }}>
                            <Image style={{ width: '100%', height: '100%', borderRadius: 200 }} source={require("./Images/profile.jpg")}></Image>
                        </View>
                        <View style={{ flexDirection: 'column', flexGrow: 1, marginLeft: 10 }}>
                            <Text style={{ fontSize: 23, color: 'black' }}>Anjelika Downey</Text>
                            <Text style={{ color: 'grey' }}>Adowney</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon_MaterialC name='star-circle' style={{ color: 'black', paddingTop: 2, fontSize: 15 }} />
                            <Text style={{ color: 'black' }}>  9</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', paddingVertical: 10, alignItems: 'center', paddingHorizontal: 30 }}>
                        <View style={{ width: 45, height: 45, borderRadius: 100 }}>
                            <Image style={{ width: '100%', height: '100%', borderRadius: 200 }} source={require("./Images/profile.jpg")}></Image>
                        </View>
                        <View style={{ flexDirection: 'column', flexGrow: 1, marginLeft: 10 }}>
                            <Text style={{ fontSize: 23, color: 'black' }}>Anjelika Downey</Text>
                            <Text style={{ color: 'grey' }}>Adowney</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon_MaterialC name='star-circle' style={{ color: 'black', paddingTop: 2, fontSize: 15 }} />
                            <Text style={{ color: 'black' }}>  9</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', paddingVertical: 10, alignItems: 'center', paddingHorizontal: 30 }}>
                        <View style={{ width: 45, height: 45, borderRadius: 100 }}>
                            <Image style={{ width: '100%', height: '100%', color: 'black', borderRadius: 200 }} source={require("./Images/profile.jpg")}></Image>
                        </View>
                        <View style={{ flexDirection: 'column', flexGrow: 1, marginLeft: 10 }}>
                            <Text style={{ fontSize: 23, color: 'black' }}>Anjelika Downey</Text>
                            <Text style={{ color: 'grey' }}>Adowney</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon_MaterialC name='star-circle' style={{ color: 'black', paddingTop: 2, fontSize: 15 }}/>
                            <Text style={{ color: 'black' }}>  9</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', paddingVertical: 10, alignItems: 'center', paddingHorizontal: 30 }}>
                        <View style={{ width: 45, height: 45, borderRadius: 100 }}>
                            <Image style={{ width: '100%', height: '100%', borderRadius: 200 }} source={require("./Images/profile.jpg")}></Image>
                        </View>
                        <View style={{ flexDirection: 'column', flexGrow: 1, marginLeft: 10 }}>
                            <Text style={{ fontSize: 23, color: 'black' }}>Anjelika Downey</Text>
                            <Text style={{ color: 'grey' }}>Adowney</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon_MaterialC name='star-circle' style={{ color: 'black', paddingTop: 2, fontSize: 15 }} />
                            <Text style={{ color: 'black' }}>  9</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    );
}