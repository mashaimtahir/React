import React, { useState } from 'react';
import {
  Image, StyleSheet, TouchableOpacity, View
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';
import Icon_Ent from 'react-native-vector-icons/Entypo';
import Icon_Evil from 'react-native-vector-icons/EvilIcons';
import Icon_Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon_Ion from 'react-native-vector-icons/Ionicons';
import Icon_MaterialC from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon_Material from 'react-native-vector-icons/MaterialIcons';
import Icon_SimpleL from 'react-native-vector-icons/SimpleLineIcons';
import Badges from './Badges';
import Coins from './Coins';
import Friends from './Friends';
import Photos from './Photos';
import { navigationRef } from './RootNavigation';
import MyTabBar from './Screens';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <Tab.Navigator tabBar={props => <MyTabBar {...props} />} screenOptions={{ headerShown: false }}>
          <Tab.Screen name='Search' component={Search} options={{ tabBarLabel: 'Search' }} />
          <Tab.Screen name='Alarm' component={Search} options={{ tabBarLabel: 'Alarm' }} />
          <Tab.Screen name='Lab' component={HomePage} options={{ tabBarLabel: 'Lab' }} />
          <Tab.Screen name='Bar' component={HomePage} options={{ tabBarLabel: 'Bars' }} />
          <Tab.Screen name='Profile' component={HomePage} options={{ tabBarLabel: 'Profile' }} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

const Search = () => {
  return (
    <></>
  );
}

const Button = props => {
  let bgcolor = false;
  return (
    <>
      <LinearGradient 
        colors={[Buttons_Design(props.colors), 'white']} 
        start={{x: props.start[0],y: props.start[1]}} 
        end={{x: props.end[0],y: props.end[1]}} 
        style={
          [
            { flex: 1, justifyContent:'center', zIndex: -1, borderRadius: 0}, 
            (props.colors === 0) ? style_btn_shadow.no_shadow : style_btn_shadow.shadow,
            (props.x === "left") ? ((props.y === "top") ? styles.bordertopleft : styles.borderbottomleft) : ((props.y === "top") ? styles.bordertopright : styles.borderbottomright)
          ]
        }>
        <TouchableOpacity onPress={() => { props.onPress() }} style={{zIndex:10,flex:0.4}} >
          <props.icon_type name={props.icon} style={[{ alignSelf: 'center', color: (props.colors === 0)?'black':'white', fontSize: 30, top: '50%' }, (props.id===1)?styles_btn.trans:{},]} />
        </TouchableOpacity>
      </LinearGradient>
      {/* <LinearGradient
        colors={['red', 'transparent']}
        start={{ x: 0, y: -0.3 }}
        end={{ x: 0, y: 0.5 }} 
        style={
          [
            { width: '50%', height: '105%', position: 'absolute', zIndex: 2 },
            style_btn_shadow.shadow_pos_top,
            (props.colors === 0) ? style_btn_shadow.no_shadow : style_btn_shadow.shadow,
            (props.x === 'right') ? style_btn_shadow.shadow_pos_right: style_btn_shadow.shadow_pos_left ,
            (props.x === "left") ? ((props.y === "top") ? styles.bordertopleft : styles.borderbottomleft) : ((props.y === "top") ? styles.bordertopright : styles.borderbottomright)
          ]
        } /> */}
    </>
  );
}

const style_btn_shadow = StyleSheet.create({
  shadow: { shadowOpacity: 1, shadowOffset: { width: 1000, height: 100 }, shadowColor: 'black', shadowRadius: 10, elevation: 15 },
  shadow_pos_right: { right: -5 },
  shadow_pos_left: { left: -5 },
  shadow_pos_top: { top: -5 },
  no_shadow: {},
});

const styles_btn = StyleSheet.create({
  btn: { flex: 1, backgroundColor: 'red', borderRadius: 0, },
  trans: {transform: [{ rotateY: '180deg' }]},
});
const Buttons_Design = props => {
  return (props === 0) ? 'white' : (props === 1)?'#8c2ca1':(props === 2)?'#fb1788':(props === 3)?'royalblue':'blue';
}

const styles = StyleSheet.create({
  bordertopright: {
    borderTopRightRadius: 200,
  },
  bordertopleft: {
    borderTopLeftRadius: 200,
  },
  borderbottomright: {
    paddingBottom: 30,
    paddingRight: 15,
    borderBottomRightRadius: 200,
  },
  borderbottomleft: {
    paddingBottom: 30,
    paddingLeft: 15,
    borderBottomLeftRadius: 200,
  },
})

const HomePage = (props) => {
  const [state, setState] = React.useState({
    Colors: [1, 0, 0, 0],
    Components: [1, 0, 0, 0],
  });
  return (
    <>
      <View style={{ flexDirection: 'column', width: '100%', height: 335, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
        <View style={{ width: '80%', height: '95%', borderRadius: 200, justifyContent: 'center' }}>
          <View style={{ width: 100, height: 100, position: 'absolute', alignSelf: 'center', borderRadius: 200, zIndex: 100 }}>
            <Image style={{ width: '100%', height: '100%', borderRadius: 200 }} source={require("./Images/profile.jpg")}></Image>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Button id={1} onPress={() => { setState({ Colors: [1,0,0,0], Components: [1, 0, 0, 0] }) }} start={[0.4,0.4]} end={[1,1]} style={styles_btn.btn} colors={state.Colors[0]} icon={'user-friends'} icon_type={Icon} x={'left'} y={'top'} color={'red'} action='Friends' ></Button>
            <Button id={2} onPress={() => { setState({ Colors: [0,3,0,0], Components: [0, 1, 0, 0] }) }} start={[1.4, 0.1]} end={[-0.5, -1]} style={styles_btn.btn} colors={state.Colors[1]} icon={'star-circle'} icon_type={Icon_MaterialC} x={'right'} y={'top'} color={'green'} action='Coins' ></Button>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Button id={3} onPress={() => { setState({ Colors: [0,0,2,0], Components: [0, 0, 1, 0] }) }} start={[0.5,1]} end={[1.4,0.1]} style={styles_btn.btn} colors={state.Colors[2]} icon={'image'} icon_type={Icon_Feather} x={'left'} y={'bottom'} color={'lightblue'} action='Photos' />
            <Button id={4} onPress={() => { setState({ Colors: [0,0,0,4], Components: [0, 0, 0, 1] }) }} start={[1,1]} end={[-0.4,-0.4]} style={styles_btn.btn} colors={state.Colors[3]} icon={'badge'} icon_type={Icon_SimpleL} x={'right'} y={'bottom'} color={'blue'} action='Badges' />
          </View>
        </View>
      </View>
      {(state['Components'][0] === 1) ? <Friends /> : (state['Components'][1] === 1) ? <Coins /> : (state['Components'][2] === 1)?<Photos/>:<Badges/>}
    </>
  );
}

export default App;
