import React, {useState, useRef} from 'react';
import {StyleSheet, View, Animated, Dimensions} from 'react-native';
import MapView, {Polyline} from 'react-native-maps';
import {enableLatestRenderer, Marker} from 'react-native-maps';
import MapBottom from './MapBottom';
import Basketball from '../Svg/basketball';
import Music from '../Svg/Music';
import ForkandKnives from '../Svg/Fork&knives';
import Scale from '../Function/Scale';

const Map = ({navigation, route}) => {
  const [location_data, setLocation_data] = useState([
    {
      latitude: 0,
      longitude: 1,
      Icon: Basketball,
      color: '#EE544A',
    },
    {
      latitude: 4,
      longitude: 8,
      Icon: Music,
      color: '#5669FF',
    },
  ]);
  let state = [
    {
      img: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBwbmd8ZW58MHx8MHx8&w=1000&q=80',
      date: 'Wed, Apr 28 •5: 30 PM',
      title: 'Jo Malone London’s Mother’s Day Presents',
      location: 'Radius Gallery • Santa Cruz, CA',
      latitude: 10,
      longitude: 11,
      Icon: Basketball,
      color: '#EE544A',
    },
    {
      img: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBwbmd8ZW58MHx8MHx8&w=1000&q=80',
      date: 'Wed, Apr 28 •5: 30 PM',
      title: 'International Gala Music Festival',
      location: 'Radius Gallery • Santa Cruz, CA',
      latitude: 5,
      longitude: 1,
      Icon: Music,
      color: '#5669FF',
    },
    {
      img: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBwbmd8ZW58MHx8MHx8&w=1000&q=80',
      date: 'Wed, Apr 28 •5: 30 PM',
      title: 'Jo Malone London’s Mother’s Day Presents',
      location: 'Radius Gallery • Santa Cruz, CA',
      latitude: 12,
      longitude: 0,
      Icon: ForkandKnives,
      color: '#29D697',
    },
    {
      img: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBwbmd8ZW58MHx8MHx8&w=1000&q=80',
      date: 'Wed, Apr 28 •5: 30 PM',
      title: 'Jo Malone London’s Mother’s Day Presents',
      location: 'Radius Gallery • Santa Cruz, CA',
      latitude: 6,
      longitude: 10,
      Icon: Music,
      color: '#5669FF',
    },
  ];

  const [indexToScroll, setIndexToScroll] = useState(0);
  const refScroll = useRef();
  const customIndexToRender = useState();
  const refMarker = useRef();
  let a = 0;
  enableLatestRenderer();
  return (
    <View style={styles.map}>
      <MapView.Animated
        ref={refMarker}
        style={styles.map}
        onPress={e => console.log(e.nativeEvent.coordinate)}>
        {state.map((data, key) => {
          console.log(a++);
          return (
            <Marker.Animated
              key={key}
              onPress={() => {
                //
                setIndexToScroll(key);
              }}
              coordinate={{longitude: data.longitude, latitude: data.latitude}}>
              <CustomMarker color={data.color} Icon={data.Icon} />
            </Marker.Animated>
          );
        })}
      </MapView.Animated>
      <MapBottom
        refMarker={refMarker}
        navigation={navigation}
        route={route}
        state={state}
        customIndexToRender={indexToScroll}
      />
    </View>
  );
};

const CustomMarker = ({color, Icon}) => {
  const markerstyles = StyleSheet.create({
    markerwrap: {
      width: 35,
      height: 60,
    },
    container: {
      width: 35,
      height: 35,
      borderRadius: 7,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    mincontainer: {
      width: '75%',
      height: '75%',
      borderRadius: 7,
      backgroundColor: color,
      alignItems: 'center',
      justifyContent: 'center',
    },
    notch: {
      width: 0,
      height: 0,
      borderWidth: 4,
      alignSelf: 'center',
      borderTopColor: '#fff',
      borderBottomColor: '#0000',
      borderRightColor: '#0000',
      borderLeftColor: '#0000',
      borderLeft: 'transparent',
    },
  });
  return (
    <Animated.View style={markerstyles.markerwrap}>
      <Animated.View style={markerstyles.container}>
        <Animated.View style={markerstyles.mincontainer}>
          <Icon />
        </Animated.View>
      </Animated.View>
      <View>
        <Animated.View style={markerstyles.notch} />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
});

export default Map;
