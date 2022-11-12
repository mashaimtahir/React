import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CheckBox from 'react-native-check-box';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Fragment } from 'react/cjs/react.production.min';


const App = () => {

  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Svg style={{ position: 'absolute' }}>
          <Defs>
            <RadialGradient id='grad' cx={'25%'} cy={'15%'} fx={'100%'} fy={'100'}>
              <Stop offset={'0%'} stopColor={'#8537dd'} stopOpacity={1} />
              <Stop offset={'40%'} stopColor={'#8537dd'} stopOpacity={1} />
              <Stop offset={'100%'} stopColor={'#4f24ea'} stopOpacity={1} />
            </RadialGradient>
          </Defs>
          <Path
            d='M140 -1 q 0 60 145 64 q 54 7 63 48 q 6 65 100 55 l 0 -170'
              stroke='none'
              fill={'url(#grad)'}
          />
          <Fragment>
            <Icon name='close' style={{ top:13 ,right:16, position:'absolute', color:'white', fontSize:20 }}/>
          </Fragment>
        </Svg>
        {/* <Canvas ref={handleCanvas} style={{ right: 0, top: -25, position: 'absolute' }}>
        </Canvas> */}
        <Text style={{ fontWeight: 'bold', fontSize: 25, color:'black', marginTop: 120, position:'relative', paddingBottom:30 }}>Sign Up</Text>
      </View>
      <View>
        <View style={[{ flexDirection: 'row', alignItems: 'center', borderWidth:0, borderRadius:50, borderColor: 'purple', paddingHorizontal:22, paddingVertical:5, backgroundColor: 'white', shadowOffset: { width: 10, height: 15 }, shadowOpacity: 1, shadowRadius: 20, shadowColor: 'black', elevation:10, marginVertical: 20, marginHorizontal: 18 }]}>
          <Icon name={'user-circle'} color= {'#4f24ea'} size={25} />
          <TextInput placeholder='Name' style={{ paddingHorizontal: 15 }}></TextInput>
        </View>
        <View style={[{ flexDirection: 'row', alignItems: 'center', borderWidth:0, borderRadius:50, borderColor: 'purple', paddingHorizontal:22, paddingVertical:5, backgroundColor: 'white', shadowOffset: { width: 10, height: 15 }, shadowOpacity: 1, shadowRadius: 20, shadowColor: 'black', elevation:10, marginVertical: 20, marginHorizontal: 18 }]}>
          <Icon name={'envelope-open'} color='#4f24ea' size={23} />
          <TextInput placeholder='E-mail' style={{ paddingHorizontal: 15 }}></TextInput>
        </View>
        <View style={[{ flexDirection: 'row', alignItems: 'center', borderWidth:0, borderRadius:50, borderColor: 'purple', paddingHorizontal:22, paddingVertical:5, backgroundColor: 'white', shadowOffset: { width: 10, height: 15 }, shadowOpacity: 1, shadowRadius: 20, shadowColor: 'black', elevation:10, marginVertical: 20, marginHorizontal: 18 }]}>
          <Icon name={'lock'} color={'#4f24ea'} size={25} />
          <TextInput placeholder='Password' style={{ paddingHorizontal: 15, flexGrow:1 }}></TextInput>
          <Icon name={'eye-slash'} color={'#8537dd'} size={25} />
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems:'center', marginVertical:10 }}>
        <CheckBox onClick={()=>{}} checkBoxColor={'#8537dd'} isChecked={true} />
        <Text> I read and agree to </Text>
        <Text style={{color: '#4f24ea'}} >Terms & Conditions</Text>
      </View>
      <View style={{ paddingVertical: 10, paddingHorizontal: 15, marginVertical: 3 }}>
        <LinearGradient colors={['#8537dd', '#4f24ea']} start={{x:0, y:0}} end={{x:1, y:1}} style={{ borderRadius: 50, paddingHorizontal:10, paddingVertical:15 }} >
          <TouchableOpacity onPress={()=>{}} style={{ justifyContent:'center', alignItems: 'center' }}>
            <Text style={{ color:'white', fontWeight:'bold', fontSize:17 }}>Create Account</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <View style={{ flexDirection: 'row', alignItems:'center', justifyContent:'center', marginTop:25 }}>
        <Text>Already have an account?</Text>
        <Text style={{ color:'#4f24ea' }}>Sign in</Text>
      </View>
      <LinearGradient colors={['#8537dd','#8537dd', '#4f24ea', '#4f24ea']} start={{x:0, y:0}} end={{x:1, y:1}} style={{ bottom:-310, position:'absolute', width:280, height:285, borderRadius:500, backgroundColor:'#4f24ea', marginStart:-95 }} >
      </LinearGradient>
    </View>
  );
};

export default App;
