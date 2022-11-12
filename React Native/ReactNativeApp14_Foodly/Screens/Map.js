/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Backward from '../Svg/Backward';
import {Colors, FontSize} from '../Theme';

const Maps = () => {
  return (
    <View style={{flex: 1}}>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 36.866667,
          longitude: 77.206896,
          latitudeDelta: 2.0922,
          longitudeDelta: 2.09,
        }}
        style={{
          flex: 1,
          width: '100%',
        }}
      />
      <View
        style={{
          position: 'absolute',
          top: FontSize.Caption * 1.5,
          left: FontSize.Caption * 1.5,
          borderRadius: 979,
          padding: FontSize.Caption * 0.5,
          backgroundColor: Colors.white,
        }}>
        <Backward />
      </View>
    </View>
  );
};

export default Maps;
