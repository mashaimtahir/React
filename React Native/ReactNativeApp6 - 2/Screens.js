import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon_Ent from 'react-native-vector-icons/Entypo';
import Icon_Evil from 'react-native-vector-icons/EvilIcons';
import Icon_Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon_Ion from 'react-native-vector-icons/Ionicons';
import Icon_MaterialC from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon_Material from 'react-native-vector-icons/MaterialIcons';
import Icon_SimpleL from 'react-native-vector-icons/SimpleLineIcons';

function MyTabBar({ state, descriptors, navigation }) {
    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1, height: 50, justifyContent: 'center', alignItems: 'center' }}
                    >
                        <LinearGradient colors={[(isFocused) ? '#f62b99' : 'white', 'white']} start={{ x: 0, y: -1.5 }} end={{ x: 0, y: 0.7 }} style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', borderTopWidth: (isFocused)?2:0, borderTopColor: '#f62b99' }} >
                            {(options.tabBarLabel === 'Search')?<SearchIcon/>:(options.tabBarLabel==='Alarm')?<AlarmIcon/>:(options.tabBarLabel==='Bars')?<BarsIcon/>:(options.tabBarLabel==='Profile')?<ProfileIcon/>:<LabIcon/>}
                        </LinearGradient>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const SearchIcon = props => {
    return (
        <>
            <Icon_Ion name={'search-outline'} size={33} color={'#f62b99'} />
        </>
    );
}

const AlarmIcon = () => {
    return (
        <>
            <Icon_Evil name={'bell'} size={35} color={'#f62b99'} />
        </>
    );
}

const ProfileIcon = () => {
    return (
        <>
            <Icon_Material name={'person'} size={38} color={'#f62b99'} />
        </>
    );
}

const LabIcon = () => {
    return (
        <>
            <Icon_Ent name={'lab-flask'} size={35} color={'#f62b99'} />
        </>
    );
}

const BarsIcon = () => {
    return (
        <View style={{ flexDirection: 'row', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ borderWidth: 1, width: '10%', height: '38%', borderColor: '#f62b99', marginTop: '4%' }}></View>
            <View style={{ borderWidth: 1, width: '10%', height: '45%', borderColor: '#f62b99', marginHorizontal: 1 }}></View>
            <View style={{ borderWidth: 1, width: '10%', height: '30%', borderColor: '#f62b99', marginTop: '9%' }}></View>
        </View>
    );
}

export default MyTabBar;