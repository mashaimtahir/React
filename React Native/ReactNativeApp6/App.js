import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  Image,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './RootNavigation';
import Friends from './Friends';
import { navigate } from './RootNavigation';
import Photos from './Photos';
import Badges from './Badges';
import Coins from './Coins';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon_Feather from 'react-native-vector-icons/Feather';
import Icon_MaterialC from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon_Material from 'react-native-vector-icons/MaterialIcons';
import Icon_SimpleL from 'react-native-vector-icons/SimpleLineIcons';
import Icon_Ent from 'react-native-vector-icons/Entypo';
import Icon_Ion from 'react-native-vector-icons/Ionicons';
import Icon_Evil from 'react-native-vector-icons/EvilIcons';

const Stack = createNativeStackNavigator();
const friends = createNativeStackNavigator();
const photos = createNativeStackNavigator();
const coins = createNativeStackNavigator();
const badges = createNativeStackNavigator();
const home = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <HomePage></HomePage>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Home' component={All} />
        </Stack.Navigator>
      </NavigationContainer>
      <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', height: 70 }}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Icon_Ion name={'search-outline'} size={33} color= {'#FF00FB'} />
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Icon_Evil name={'bell'} size={35} color= {'#FF00FB'} />
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Icon_Ent name={'lab-flask'} size={35} color= {'#FF00FB'} />
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          {/* <Icon name={'hands'} size={30} /> */}
          <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
            <View style={{ borderWidth: 1, width: '10%', height: '34%', borderColor: '#FF00FB', marginTop: '6%' }}></View>
            <View style={{ borderWidth: 1, width: '10%', height: '40%', borderColor: '#FF00FB', marginHorizontal: 1 }}></View>
            <View style={{ borderWidth: 1, width: '10%', height: '25%', borderColor: '#FF00FB', marginTop: '15%' }}></View>
          </View>
        </View>
        <LinearGradient style={{ flex: 1 }} colors={['#FF00FB', 'white']} start={{ x: 0, y: -1 }} end={{ x: 0, y: 0.6 }}>
          <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%', borderTopWidth: 3, borderColor: '#FF00FB' }}>
            <Icon_Material name={'person'} size={38} color={'#FF00FB'} />
          </View>
        </LinearGradient>
      </View>
    </>
  );
};

const All = () => {
  return (
    <>
      <home.Navigator screenOptions={{ headerShown: false }}>
        <home.Screen name='Friends' component={FriendStack} />
        <home.Screen name='Photos' component={PhotoStack} />
        <home.Screen name='Coins' component={CoinStack} />
        <home.Screen name='Badges' component={BadgeStack} />
      </home.Navigator>
    </>
  );
}

const FriendStack = () => {
  return (
    <friends.Navigator screenOptions={{ headerShown: false }}>
      <friends.Screen name='Friend' component={Friends} />
    </friends.Navigator>
  );
};

const PhotoStack = () => {
  return (
    <photos.Navigator screenOptions={{ headerShown: false }}>
      <photos.Screen name='Photo' component={Photos} />
    </photos.Navigator>
  );
};

const CoinStack = () => {
  return (
    <coins.Navigator screenOptions={{ headerShown: false }}>
      <coins.Screen name='Coin' component={Coins} />
    </coins.Navigator>
  );
};

const BadgeStack = () => {
  return (
    <badges.Navigator screenOptions={{ headerShown: false }}>
      <badges.Screen name='Badge' component={Badges} />
    </badges.Navigator>
  );
};

const Button = props => {
  let bgcolor = false;
  // alert(props.id, 'Hello');
  return (
    <>
      <LinearGradient 
        colors={[Buttons_Design(props.colors), 'white']} 
        start={{x: props.start[0],y: props.start[1]}} 
        end={{x: props.end[0],y: props.end[1]}} 
        style={
          [
            // { shadowOpacity: 1, shadowOffset: { width: 100, height: 100 }, shadowRadius: 10, elevation: 10 },
            { flex: 1, justifyContent:'center', zIndex: -1, borderRadius: 0}, 
            (props.colors === 0) ? style_btn_shadow.no_shadow : style_btn_shadow.shadow,
            (props.x === "left") ? ((props.y === "top") ? styles.bordertopleft : styles.borderbottomleft) : ((props.y === "top") ? styles.bordertopright : styles.borderbottomright)
          ]
        }>
        <TouchableOpacity onPress={() => { navigate(props.action); props.onPress() }} style={{zIndex:10,flex:0.4}} >
          <props.icon_type name={props.icon} style={[{ alignSelf: 'center', color: (props.colors === 0)?'black':'white', fontSize: 30, top: '50%' }, (props.id===1)?styles_btn.trans:{},]} />
        </TouchableOpacity>
      </LinearGradient>
    </>
  );
}

const style_btn_shadow = StyleSheet.create({
  shadow: { shadowOpacity: 1, shadowOffset: {width: 150, height: 150}, shadowRadius: 10, elevation: 20 },
  no_shadow: {},
});

const styles_btn = StyleSheet.create({
  btn: { flex: 1, backgroundColor: 'red', borderRadius: 0, },
  trans: {transform: [{ rotateY: '180deg' }]},
});
const Buttons_Design = props => {
  return (props === 0) ? 'white' : (props === 1)?'purple':'#FF00BF';
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

const HomePage = () => {
  const [state, setState] = React.useState({
    Colors: [1, 0, 0, 0],
  });
  return (
    <View style={{ flexDirection: 'column', width: '100%', height: 335, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <View style={{ width: '80%', height: '95%', borderRadius: 200, justifyContent: 'center' }}>
        <View style={{ width: 100, height: 100, position: 'absolute', alignSelf: 'center', borderRadius: 200, zIndex: 100 }}>
          <Image style={{ width: '100%', height: '100%', borderRadius: 200 }} source={require("./Images/profile.jpg")}></Image>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Button id={1} onPress={() => { setState({ Colors: [1,0,0,0] }) }} start={[0.4,0.4]} end={[1,1]} style={styles_btn.btn} colors={state.Colors[0]} icon={'user-friends'} icon_type={Icon} x={'left'} y={'top'} color={'red'} action='Friends' ></Button>
          <Button id={2} onPress={() => { setState({ Colors: [0,1,0,0] }) }} start={[1.4, 0.1]} end={[-0.5, -1]} style={styles_btn.btn} colors={state.Colors[1]} icon={'star-circle'} icon_type={Icon_MaterialC} x={'right'} y={'top'} color={'green'} action='Coins' ></Button>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Button id={3} onPress={() => { setState({ Colors: [0,0,2,0] }) }} start={[0.5,1]} end={[1.4,0.1]} style={styles_btn.btn} colors={state.Colors[2]} icon={'image'} icon_type={Icon_Feather} x={'left'} y={'bottom'} color={'lightblue'} action='Photos' />
          <Button id={4} onPress={() => { setState({ Colors: [0,0,0,1] }) }} start={[1,1]} end={[-0.4,-0.4]} style={styles_btn.btn} colors={state.Colors[3]} icon={'badge'} icon_type={Icon_SimpleL} x={'right'} y={'bottom'} color={'blue'} action='Badges' />
        </View>
      </View>
    </View>
  );
}

export default App;
