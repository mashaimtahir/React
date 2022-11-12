import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CheckBox from 'react-native-check-box';
import LinearGradient from 'react-native-linear-gradient';
// import RadialGradient from 'react-native-radial-gradient';
import Canvas from 'react-native-canvas';


const App = () => {
const handleCanvas = (canvas) => {
   const ctx = canvas.getContext('2d');
   ctx.fillStyle = 'purple';
  //  ctx.fillRect(0, 0, 100, 100);
  ctx.beginPath();
  // ctx.moveTo(0, 0);
  // ctx.arc(70, 0, 50, 0, 90, false);
  // ctx.arc(120, 50, 50, 90, 180, false);
  // ctx.bezierCurveTo(420, 150, 420, 120, 390, 100);
  // ctx.bezierCurveTo(430, 40, 370, 30, 340, 50);
  ctx.bezierCurveTo(100, 0, 80, 55, 220, 60);
  ctx.bezierCurveTo(160, 56, 245, 50, 255, 100);
  ctx.bezierCurveTo(255, 100, 255, 160, 340, 150);
  ctx.lineTo(350, 0);
  // ctx.bezierCurveTo(200, 5, 150, 20, 170, 80);

  // complete custom shape
  ctx.closePath();
  ctx.fillStyle = '#4f24ea';
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.strokeStyle = '#4f24ea';
  ctx.stroke();
}
  return (
    <View style={{ flexGrow: 1 }}>
      <View style={{ flexDirection: 'row',justifyContent:'center', alignItems:'center', marginVertical: 15 }}>
        <Canvas ref={handleCanvas} style={{ right: 0, top: -25, position: 'absolute' }}>
        </Canvas>
        <Text style={{ fontWeight: 'bold', fontSize: 25, color:'black', marginTop: 120, position:'relative' }}>Sign Up</Text>
      </View>
      <View>
        <View style={[{ flexDirection: 'row', alignItems: 'center', borderWidth:0, borderRadius:50, borderColor: 'purple', paddingHorizontal:22, paddingVertical:5, backgroundColor: 'white', shadowOffset: { width: 10, height: 15 }, shadowOpacity: 1, shadowRadius: 20, shadowColor: 'black', elevation:10, marginVertical: 20, marginHorizontal: 18 }]}>
          <FontAwesome5 name={'user-circle'} solid={true} style={{ color: '#4f24ea', fontSize: 20 }} />
          <TextInput placeholder='Name' style={{ paddingHorizontal: 15 }}></TextInput>
        </View>
        <View style={[{ flexDirection: 'row', alignItems: 'center', borderWidth:0, borderRadius:50, borderColor: 'purple', paddingHorizontal:22, paddingVertical:5, backgroundColor: 'white', shadowOffset: { width: 10, height: 15 }, shadowOpacity: 1, shadowRadius: 20, shadowColor: 'black', elevation:10, marginVertical: 20, marginHorizontal: 18 }]}>
          <FontAwesome5 name={'envelope-open'} solid={true} style={{ color: '#4f24ea', fontSize: 20 }} />
          <TextInput placeholder='E-mail' style={{ paddingHorizontal: 15 }}></TextInput>
        </View>
        <View style={[{ flexDirection: 'row', alignItems: 'center', borderWidth:0, borderRadius:50, borderColor: 'purple', paddingHorizontal:22, paddingVertical:5, backgroundColor: 'white', shadowOffset: { width: 10, height: 15 }, shadowOpacity: 1, shadowRadius: 20, shadowColor: 'black', elevation:10, marginVertical: 20, marginHorizontal: 18 }]}>
          <FontAwesome5 name={'lock'} style={{ color: '#4f24ea', fontSize: 20 }} />
          <TextInput placeholder='Password' style={{ paddingHorizontal: 15 }}></TextInput>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical:10 }}>
        <CheckBox onClick={()=>{}} style={{ color: '#8537dd' }} checkedCheckBoxColor={'#8537dd'} uncheckedCheckBoxColor={'#8537dd'} isChecked={true} />
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
      <LinearGradient colors={['#8537dd','#8537dd', '#4f24ea', '#4f24ea']} start={{x:0, y:0}} end={{x:1, y:1}} style={{ bottom:-170, position:'absolute', width:290, height:295, borderRadius:500, backgroundColor:'#4f24ea', marginStart:-100 }} >
      </LinearGradient>
      {/* <LinearGradient colors={['#8537dd','#8537dd', '#4f24ea', '#4f24ea']} start={{x:0, y:0}} end={{x:1, y:1}} style={{ bottom:-170, position:'absolute', width:290, height:295, borderRadius:500, backgroundColor:'#4f24ea', marginStart:-100 }} >
      </LinearGradient> */}
{/* <RadialGradient style={{width:200,height:200}}
                        colors={['black','green','blue','red']}
                        stops={[0.1,0.4,0.3,0.75]}
                        center={[100,100]}
        radius={200}>
        <Text></Text>
</RadialGradient>       */}
    </View>
  );
};


export default App;
