import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Animated,
} from 'react-native';
import MapView, {Polyline} from 'react-native-maps';
// import Modal from 'react-native-modal';
import {enableLatestRenderer, Callout, Marker} from 'react-native-maps';
import ModalView from './src/Modal';
import Imagepicker from './src/ImagePick';
import Input from './src/InputText';
import MapViewDirections from 'react-native-maps-directions';
// import { defined } from 'react-native-reanimated';

const App = () => {
  enableLatestRenderer();
  return (
    <SafeAreaView>
      {/* <View>
        <Text>Hi</Text>
      </View> */}
      <Map />
    </SafeAreaView>
  );
};

const Map = () => {
  const [state, setState] = useState([]);
  const [modal, setModal] = useState([false, null]);
  const [temp, setTemp] = useState(false);
  const [line, setLine] = useState([]);
  // console.log('Temp ');
  // console.log(temp);
  // console.log('State ');
  // console.log(state);
  // console.log('modal');
  // console.log(modal);
  // console.log(state[modal[1]]);
  const drawLine = n => {
    console.log('line');
    setLine(data => {
      let tempdata = data;
      tempdata = [...tempdata, {latitude: n.latitude, longitude: n.longitude}];
      return tempdata;
    });
  };
  return (
    <>
      <MapView
        style={styles.map}
        onLongPress={e => {
          let eventHandler = e.nativeEvent.coordinate;
          setState(prevState => {
            let tempState = [...prevState, eventHandler];
            return tempState;
          });
        }}>
        {state[0] !== undefined
          ? state.map((eventData, key) => {
              return (
                <Marker
                  key={key}
                  onPress={event => {
                    setModal([true, key]);
                  }}
                  coordinate={{
                    latitude: eventData.latitude,
                    longitude: eventData.longitude,
                  }}>
                  <Animated.View style={[styles.markerWrap]}>
                    <Animated.View style={[styles.ring]} />
                    <View style={styles.marker} />
                  </Animated.View>
                </Marker>
              );
            })
          : null}
        {line[1] !== undefined ? (
          <Polyline
            onPress={e => console.log(e)}
            strokeWidth={6}
            strokeColor="#000000"
            coordinates={line}
          />
        ) : null}
        {/* {state[1] !== undefined ? (
          <MapViewDirections
            origin={{
              latitude: state[0].latitude,
              longitude: state[0].longitude,
            }}
            destination={{
              latitude: state[1].latitude,
              longitude: state[1].longitude,
            }}
            apikey={'AIzaSyD1GdTAbSrY7SqQkjZ86I7saCvTsCN6Pgo'} // insert your API Key here
            strokeWidth={4}
            strokeColor="#111111"
          />
        ) : null} */}
      </MapView>
      <ModalView
        modal={modal}
        setmodal={e => setModal(e)}
        state={state}
        defbtn={false}>
        <View>
          <Text style={[styles.center, styles.modalhead]}>Info</Text>
          {modal[1] !== undefined && modal[1] !== null ? (
            state[modal[1]].name !== undefined && temp === false ? (
              <>
                <Text style={[styles.text, styles.headtext]}>Name</Text>
                <Text style={styles.text}>{state[modal[1]].name}</Text>
              </>
            ) : (
              <Input
                Label={'Name'}
                value_={
                  state[modal[1]].name !== undefined ? state[modal[1]].name : ''
                }
                getValue={e =>
                  setState(prevState => {
                    let tempData = prevState;
                    tempData[modal[1]] = {
                      ...tempData[modal[1]],
                      name: e,
                    };
                    return tempData;
                  })
                }
              />
            )
          ) : null}
          {modal[1] !== undefined && modal[1] !== null ? (
            state[modal[1]].image === undefined || temp === true ? (
              <Imagepicker
                // geterror={e => {
                //   // console.log(e);
                // }}
                getValue={e => {
                  setState(prevState => {
                    let tempData = prevState;
                    tempData[modal[1]] = {
                      ...tempData[modal[1]],
                      image: e,
                    };
                    return tempData;
                  });
                }}
              />
            ) : (
              <Image
                style={styles.image}
                source={{uri: state[modal[1]].image}}
              />
            )
          ) : null}
          <TouchableOpacity
            style={[styles.btn, styles.center]}
            onPress={e => {
              // temp === false ? setTemp(true) : setTemp(false);
              setTemp(prevState => {
                return prevState === false ? true : false;
              });
              console.log(temp);
              // setModal([false, null]);
            }}>
            <Text style={[styles.center, styles.textwhite]}>Save/Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.center]}
            onPress={e => {
              drawLine({
                latitude: state[modal[1]].latitude,
                longitude: state[modal[1]].longitude,
              });
            }}>
            <Text style={[styles.center, styles.textwhite]}>Direction</Text>
          </TouchableOpacity>
        </View>
      </ModalView>
    </>
  );
};

// const DoubleTapGesture = () => {};

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
  modalhead: {
    fontSize: 20,
  },
  center: {
    alignSelf: 'center',
  },
  textwhite: {
    color: 'white',
  },
  btn: {
    padding: 8,
    backgroundColor: '#a599f4ea',
    width: '90%',
    borderRadius: 8,
    marginBottom: 10,
  },
  text: {
    marginLeft: 20,
    fontSize: 20,
  },
  headtext: {
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 10,
  },
  markerWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(130,4,150, 0.9)',
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(130,4,150, 0.3)',
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'rgba(130,4,150, 0.5)',
  },
});

export default App;
