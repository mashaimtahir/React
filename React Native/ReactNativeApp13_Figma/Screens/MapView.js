import React, {useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import MapBottom from '../Components/MapBottom';
import Map from './../Components/Map';
import MapHead from './../Components/MapHead';

const MapView = ({navigation, route}) => {
  const refMarker = useRef();
  return (
    <View style={styles.container}>
      <Map refMarker={refMarker} navigation={navigation} route={route} />
      <MapHead navigation={navigation} route={route} />
      {/* <MapBottom refMarker={refMarker} navigation={navigation} route={route} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: '100%',
    // height: '100%',
  },
});

export default MapView;
