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
  ImageBackground,
  Animated,
} from 'react-native';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
} from 'react-native-popup-menu';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MenuBtn from './Menubtn';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ActionButton from 'react-native-circular-action-menu';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexShrink: 1, height: 400 }}>
        <ImageBackground style={[style.backgroundimg]} source={{uri: "https://w0.peakpx.com/wallpaper/599/6/HD-wallpaper-nature-national-geographic-sky-bird-falcon-animal-wings-fight.jpg"}}>
          <View style={style.top}>
            <View style={[style.containertop]}>
              <View style={[style.appbar]}>
                <Icon name='bars' size={20} color='white' />
                <Text style={style.apptitle}>Timeline</Text>
                <View style={style.dot_container}>
                  <View style={style.dot}></View>
                  <View style={style.dot}></View>
                  <View style={style.dot}></View>
                </View>
              </View>
              <View style={style.head}>
                <Image source={require('./Images/Ryan.png')} style={style.Ryan_avatar} />
                <View style={style.headt}>
                  <Text style={style.headtitle} >Ryan Barnes</Text>
                  <Text style={style.headsubtitle} >Product Designer</Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            <View style={style.lineup}></View>
            <View style={style.tepazoid}>
          </View>
          </View>
        </ImageBackground>
      </View>
      {/* <Animated.View style={{ right:0, bottom:0, height:50, width:50}}>
        <MenuBtn></MenuBtn>
      </Animated.View> */}
      <View style={{flexShrink:1, backgroundColor:'white'}}>
      <Animated.View style={{ zIndex:10, position: 'absolute', top: -80, right:60, height:0, width:50, alignSelf:'flex-end'}}>
        <MenuBtn></MenuBtn>
      </Animated.View>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={style.content}>
            <View style={style.line}></View>
            <View style={style.taskcontain}>
              <Text style={style.task}>My Tasks</Text>
              <Text style={style.taskcnt}>FEBRAURY 8, 2015</Text>
            </View>
            <View style={style.taskscontain}>
              <View style={[style.linedot, { backgroundColor: 'yellow' }]}></View>
              <View style={style.tasksmid}>
                <Text style={style.taskstitle}>Catch up with Brian</Text>
                <Text>Mobile Project</Text>
              </View>
              <Text style={style.tasksdate} >5pm</Text>
            </View>
            <View style={style.taskscontain}>
              <View style={[style.linedot, { backgroundColor: 'blue' }]}></View>
              <View style={style.tasksmid}>
                <Text style={style.taskstitle}>Catch up with Brian</Text>
                <Text>Mobile Project</Text>
              </View>
              <Text style={style.tasksdate} >5pm</Text>
            </View>
            <View style={style.taskscontain}>
              <View style={[style.linedot, { backgroundColor: 'lightblue' }]}></View>
              <View style={style.tasksmid}>
                <Text style={style.taskstitle}>Catch up with Brian</Text>
                <Text>Mobile Project</Text>
              </View>
              <Text style={style.tasksdate} >5pm</Text>
            </View>
            <View style={style.taskscontain}>
              <View style={[style.linedot, { backgroundColor: 'green' }]}></View>
              <View style={style.tasksmid}>
                <Text style={style.taskstitle}>Catch up with Brian</Text>
                <Text>Mobile Project</Text>
              </View>
              <Text style={style.tasksdate} >5pm</Text>
            </View>
            <View style={style.taskscontain}>
              <View style={[style.linedot, { backgroundColor: 'purple' }]}></View>
              <View style={style.tasksmid}>
                <Text style={style.taskstitle}>Catch up with Brian</Text>
                <Text>Mobile Project</Text>
              </View>
              <Text style={style.tasksdate} >5pm</Text>
            </View>
            <View style={style.taskscontain}>
              <View style={[style.linedot, { backgroundColor: 'red' }]}></View>
              <View style={style.tasksmid}>
                <Text style={style.taskstitle}>Catch up with Brian</Text>
                <Text>Mobile Project</Text>
              </View>
              <Text style={style.tasksdate} >5pm</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  top: {
    flexGrow: 1,
  },
  containertop: {
    backgroundColor: 'transparent',
  },
  appbar: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  apptitle: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    color: 'white',
    fontSize: 20,
    flexGrow: 1,
  },
  dot_container: {
    flexDirection: 'row',
  },
  dot: {
    width: 10,
    height: 10,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'transparent',
    marginHorizontal: 2,
    borderRadius:50
  },
  Ryan_avatar: {
    width: 62,
    height: 62,
    borderRadius:50
  },
  head: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  headt: {
    paddingHorizontal: 10,
  },
  headtitle: {
    fontSize: 30,
    color: 'white',
  },
  headsubtitle: {
    color: 'white',
  },
  content: {},
  task: {
    fontSize: 30,
    color: 'black',
  },
  taskcnt: {
    fontSize: 15,
    color: 'grey',
  },
  line: {
    width: 2,
    height: '100%',
    backgroundColor: 'grey',
    marginLeft: 30,
    position: 'absolute',
  },
  lineup: {
    width: 2,
    height: '100%',
    backgroundColor: 'grey',
    marginLeft: 30,
    marginTop: 4,
    position: 'absolute',
    zIndex: 10
  },
  taskcontain: {
    paddingLeft: 60,
  },
  taskscontain: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
  },
  taskstitle: {
    fontSize: 20,
    color: 'black',
  },
  linedot: {
    width: 20,
    height: 20,
    borderRadius: 50,
    marginHorizontal: 21,
  },
  tasksdate: {
    alignSelf: 'flex-start',
    marginRight: 15,
    paddingVertical: 5,
  },
  tasksmid: {
    flexGrow: 1,
  },
  backgroundimg: {
    width: '100%',
    height: '100%',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    borderLeftColor: 'white',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
  },
  tepazoid: {
    width: 0,
    height: 0,
    bottom: -2,
    borderTopWidth: 65,
    borderLeftWidth: 400,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    borderLeftColor: 'white',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
  },
})

export default App;
