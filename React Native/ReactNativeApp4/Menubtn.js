import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  ImageBackground,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

let check = true;
const Menubtn = () => {
    const [toggle, setToggle] = useState(true);
    const toggleFunction = () => {
        setToggle(!toggle);
    };
    return (
        <Pressable onPress={() => toggleFunction() }>
            {(toggle)?<Menuclose/>:<Menuopen/> }
        </Pressable>
    );
}

const Menuclose = () => {
    return (
        <View style={style.menu}>
            <View style={style.menuiconbtn}>
                <Icon name='plus' style={style.menuicon} />
            </View>
        </View>
    );
}

const Menuopen = () => {
    return (
        <View style={[style.menu, style.menuopen]}>
            <View style={[style.menuiconbtn]}>
                <Icon name='close' style={style.menuicon} />
            </View>
            <View style={[style.menuitem,style.menuitem1]}>
                <Icon name='clock' style={style.menuitemicon} />
            </View>
            <View style={[style.menuitem,style.menuitem2]}>
                <Icon name='clock' style={style.menuitemicon} />
            </View>
            <View style={[style.menuitem,style.menuitem3]}>
                <Icon name='clock' style={style.menuitemicon} />
            </View>
            <View style={[style.menuitem,style.menuitem4]}>
                <Icon name='clock' style={style.menuitemicon} />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    menuiconbtn: {
        width: 60,
        height: 60,
        borderRadius: 100,
        backgroundColor: 'red',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 1,
    },
    menuicon: {
        fontSize: 20,
        color: 'white'
    },
    menu: {
        width: 140,
        height: 140,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuopen: {
        backgroundColor: 'grey',
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    menuitem: {
        flexShrink: 1,
        position: 'absolute',
        borderRadius: 100,
    },
    menuitem1: {
        top: 16,
    },
    menuitem2: {
        top: 43,
        left: 22,
    },
    menuitem3: {
        left: 25,
        bottom: 36,
    },
    menuitem4: {
        bottom: 14,
    },
    menuitemicon: {
        fontSize: 13.4,
        color: 'white',
    },
})

export default Menubtn;