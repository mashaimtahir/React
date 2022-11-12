/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const Slider = () => {
  const [price, setPrice] = useState();
  return (
    <View style={{paddingTop: 100, paddingLeft: 50}}>
      <MultiSlider
        isMarkersSeparated={true}
        // min={50}
        max={1400}
        enabledOne={true}
        // enabledTwo={true}
        // values={[20, 140]}
        onValuesChangeFinish={data => setPrice(data)}
        trackStyle={{
          backgroundColor: '#000',
        }}
        selectedStyle={{
          backgroundColor: '#000',
        }}
        // touchDimensions={{
        //   width: 30,
        //   height: 30,
        //   slipDisplacement: 212,
        // }}
        enableLabel
        customLabel={event => {
          console.log(event);
          return (
            <View style={{flexDirection: 'row'}}>
              <View style={{top: -5, position: 'absolute'}}>
                <Text>0$</Text>
                <View
                  style={{
                    width: 0,
                    height: 10,
                    borderColor: '#000',
                    borderWidth: 1,
                    borderStyle: 'dashed',
                  }}
                />
              </View>
              <View style={{top: -5, left: 279, position: 'absolute'}}>
                <Text style={{left: -18}}>1400$</Text>
                <View
                  style={{
                    width: 0,
                    height: 10,
                    borderColor: '#000',
                    borderWidth: 1,
                    borderStyle: 'dashed',
                  }}
                />
              </View>
              <Text
                style={{
                  position: 'absolute',
                  top: -5,
                  left:
                    event.oneMarkerLeftPosition -
                    5 -
                    event.oneMarkerLeftPosition / 20,
                }}>
                {event.oneMarkerValue.toFixed(0) + '$'}
              </Text>
            </View>
          );
        }}
        customMarkerLeft={() => {
          return (
            <View
              style={{
                backgroundColor: '#000',
                // padding: 3,
                height: 10,
                width: 0,
                top: -3,
                borderWidth: 0.9,
                // borderRadius: 7,
                borderColor: '#000',
              }}>
              {/* <MovingArrow /> */}
            </View>
          );
        }}
        // customMarkerRight={() => {
        //   return (
        //     <View
        //       style={{
        //         backgroundColor: 'white',
        //         padding: 3,
        //         borderWidth: 1,
        //         borderRadius: 7,
        //         borderColor: '#5669FFBB',
        //       }}>
        //       {/* <MovingArrow /> */}
        //     </View>
        //   );
        // }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 30,
  },
});

export default Slider;
