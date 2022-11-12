import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  ImageBackground
} from 'react-native';
import Emoji from 'react-native-emoji';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('./assets/background.png')} style={{ flexDirection:'column', flexGrow:1 }}>
        <View style={{ padding: 15 }}>
          <View style={{ marginHorizontal:-10,flexDirection:'row', alignSelf:'flex-end' }}>
            <View style={{ backgroundColor:'#e7ffdb', marginVertical:3, paddingVertical:7, paddingHorizontal:10, borderRadius:7, borderTopEndRadius:0, flexDirection:'row', alignSelf:'flex-end' }}>
              <Text style={{ fontSize:20 }}>Fine</Text>
              <Emoji name="slightly_smiling_face" style={{fontSize: 20}} />
              <Text style={{ fontSize:13, alignSelf:'flex-end', paddingLeft:10 }}>11:13</Text>
              {/* <Icon name='check-double' style={{ fontSize:13, fontWeight:100, color: 'skyblue', alignSelf:'flex-end', paddingLeft:10 }}/> */}
              <Image 
              style={{ width: 15, height: 15, marginLeft:4, alignSelf:'flex-end' }}
              source={require('./assets/tick.png') }
            />
            </View>
            <View style={{ width:0, height:0, borderWidth:7, alignSelf:'flex-start', marginVertical:3, marginLeft:-1, borderTopColor:'#e7ffdb', borderLeftColor:'#e7ffdb', borderBottomColor:'transparent', borderRightColor:'transparent' }}></View>
          </View>
          <View style={{ backgroundColor:'#e7ffdb', marginVertical:4, marginTop:0, marginRight:3, paddingVertical:7, paddingHorizontal:10, borderRadius:7, flexDirection:'row', alignSelf:'flex-end' }}>
            <Text style={{ fontSize:20 }}>Thank You</Text>
            <Text style={{ fontSize:13, alignSelf:'flex-end', paddingLeft:10 }}>11:13</Text>
              <Image
              style={{ width: 15, height: 15, marginLeft:4, alignSelf:'flex-end' }}
              source={require('./assets/tick.png') }
            />
          </View>
          <View style={{ marginHorizontal:-10,flexDirection:'row', alignSelf:'flex-start' }}>
            <View style={{ width:0, height:0, borderWidth:7, alignSelf:'flex-start', marginVertical:4, marginLeft:1, borderTopColor:'#e7ffdb', borderLeftColor:'transparent', borderRightColor:'#e7ffdb', borderBottomColor:'transparent' }}></View>
            <View style={{ maxWidth:'80%', fontSize:20, flexWrap:'wrap', backgroundColor:'#e7ffdb', marginVertical:4, paddingVertical:7, paddingHorizontal:10, borderRadius:7, borderTopStartRadius:0, flexDirection:'row', alignSelf:'flex-start' }}>
              <Text style={{ fontSize: 20, alignSelf: 'flex-start', alignContent:'flex-start', flexWrap:'wrap' }}>Good
                <Emoji name="thumbsup" />
                <Text> again see you asd  sd</Text>
                <Text> see you   ai a in ais n ai snd as a as ainasdn asidn</Text>
                <Text> see you   ai a in ais n ai snd as a sss s ss ss </Text>
                <Emoji name="slightly_smiling_face" style={{ fontSize: 20 }} />
                <Text style={{ width:10, height:10, color:'transparent' }}>11001</Text>
              </Text>
              <Text style={{ fontSize: 13, position:'absolute', bottom:7, right:20, paddingLeft: 0, marginLeft:0 }}>11:13</Text>
            </View>
          </View>
          <View style={{ marginHorizontal:-10,flexDirection:'row', alignSelf:'flex-end' }}>
            <View style={{ backgroundColor:'#e7ffdb', marginVertical:4, paddingVertical:7, paddingHorizontal:10, borderRadius:7, borderTopEndRadius:0, flexDirection:'row', alignSelf:'flex-end' }}>
              <Emoji name="heart_eyes" style={{fontSize: 20}} />
              <Text style={{ fontSize:20 }}>by</Text>
              <Text style={{ fontSize:13, alignSelf:'flex-end', paddingLeft:10 }}>11:13</Text>
              <Image
              style={{ width: 15, height: 15, marginLeft:4, alignSelf:'flex-end' }}
              source={require('./assets/tick.png') }
            />
            </View>
            <View style={{ width:0, height:0, borderWidth:7, alignSelf:'flex-start', marginVertical:4, marginLeft:-1, borderTopColor:'#e7ffdb', borderLeftColor:'#e7ffdb', borderBottomColor:'transparent', borderRightColor:'transparent' }}></View>
          </View>
          <View style={{ marginHorizontal:-10,flexDirection:'row', alignSelf:'flex-start' }}>
            <View style={{ width:0, height:0, borderWidth:7, alignSelf:'flex-start', marginVertical:4, marginLeft:1, borderTopColor:'#e7ffdb', borderLeftColor:'transparent', borderRightColor:'#e7ffdb', borderBottomColor:'transparent' }}></View>
            <View style={{ backgroundColor:'#e7ffdb', marginVertical:4, paddingVertical:7, paddingHorizontal:10, borderRadius:7, borderTopStartRadius:0, flexDirection:'row', alignSelf:'flex-start' }}>
              <Text style={{ fontSize:20 }}>Take Care</Text>
              <Emoji name="kissing_heart" style={{fontSize: 20}} />
              <Emoji name="kissing_heart" style={{fontSize: 20}} />
              <Text style={{ fontSize:13, alignSelf:'flex-end', paddingLeft:10 }}>11:13</Text>
            </View>
          </View>
          <View style={{ backgroundColor:'#e7ffdb', marginLeft:4, marginVertical:3, marginTop:-1, paddingVertical:7, paddingHorizontal:10, borderRadius:7, flexDirection:'row', alignSelf:'flex-start' }}>
            <Emoji name="smiley" style={{fontSize: 20}} />
            <Text style={{ fontSize:13, alignSelf:'flex-end', paddingLeft:10 }}>11:13</Text>
          </View>
          <View style={{ marginHorizontal:-10,flexDirection:'row', alignSelf:'flex-end' }}>
            <View style={{ backgroundColor:'#e7ffdb', marginVertical:3, paddingVertical:7, paddingHorizontal:10, borderRadius:7, borderTopEndRadius:0, flexDirection:'row', alignSelf:'flex-end' }}>
              <Emoji name="heart" style={{ fontSize: 20 }} />
              <Emoji name="orange_heart" style={{ fontSize: 20 }} />
              <Emoji name="yellow_heart" style={{ fontSize: 20 }} />
              <Emoji name="green_heart" style={{ fontSize: 20 }} />
              <Emoji name="purple_heart" style={{ fontSize: 20 }} />
              <Text style={{ fontSize:13, alignSelf:'flex-end', paddingLeft:10 }}>11:13</Text>
              <Image 
              style={{ width: 15, height: 15, marginLeft:4, alignSelf:'flex-end' }}
              source={require('./assets/tick.png') }
            />
            </View>
            <View style={{ width:0, height:0, borderWidth:7, alignSelf:'flex-start', marginVertical:3, marginLeft:-1, borderTopColor:'#e7ffdb', borderLeftColor:'#e7ffdb', borderBottomColor:'transparent', borderRightColor:'transparent' }}></View>
          </View>
          <View style={{ marginHorizontal:-10,flexDirection:'row', alignSelf:'flex-start' }}>
            <View style={{ width:0, height:0, borderWidth:7, alignSelf:'flex-start', marginVertical:4, marginLeft:1, borderTopColor:'#e7ffdb', borderLeftColor:'transparent', borderRightColor:'#e7ffdb', borderBottomColor:'transparent' }}></View>
            <View style={{ maxWidth:'80%', fontSize:20, flexWrap:'wrap', backgroundColor:'#e7ffdb', marginVertical:4, paddingVertical:7, paddingHorizontal:10, borderRadius:7, borderTopStartRadius:0, flexDirection:'row', alignSelf:'flex-start' }}>
              <Text style={{ fontSize: 20, alignSelf: 'flex-start', alignContent:'flex-start', flexWrap:'wrap' }}>Good
                {/* <Emoji name="thumbsup" /> */}
                {/* <Text> again see you asd  sd</Text>
                <Text> see you   ai a in ais n ai snd as a as ainasdn asidn</Text> */}
                {/* <Emoji name="slightly_smiling_face" style={{ fontSize: 20 }} /> */}
              </Text>
              <Text style={{ fontSize: 13, flexBasis:'auto', flexShrink:1, alignSelf:'flex-end', paddingLeft: 0, marginLeft:0 }}>11:13</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default App;
