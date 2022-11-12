/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  Animated,
  Easing,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import {Colors} from '../Theme';
import CloseIcon from './../Svg/Close';
import Button from '../Abstracts/Button';

const TopSheet = ({check, setCheck, wrapper}) => {
  const ref = useRef(new Animated.Value(0)).current;
  const Open = () => {
    Animated.timing(ref, {
      toValue: 1,
      duration: 700,
      easing: Easing.circle,
      useNativeDriver: false,
    }).start();
  };

  const Close = () => {
    Animated.timing(ref, {
      toValue: 0,
      duration: 700,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    console.log(check);
    if (check) {
      Open();
    } else {
      Close();
    }
  }, [check]);

  return (
    <Animated.View
      style={{
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: check
          ? Dimensions.get('window').height
          : ref.interpolate({
              inputRange: [0, 0.0005],
              outputRange: ['0%', '110%'],
              extrapolate: 'clamp',
            }),
        overflow: 'hidden',
        // backgroundColor: 'red',
        backgroundColor: ref.interpolate({
          inputRange: [0, 0.2],
          outputRange: [Colors.black + '00', Colors.black + '3f'],
          extrapolate: 'clamp',
        }),
      }}>
      <Animated.View
        style={{
          flex: ref,
          flexBasis: 0,
          overflow: 'hidden',
        }}>
        <View style={{backgroundColor: Colors.white}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: '5%',
              paddingVertical: '2%',
            }}>
            {/* <TouchableWithoutFeedback onPress={() => setCheck(false)}>
              <CloseIcon />
            </TouchableWithoutFeedback> */}
            <Button
              width={null}
              paddingHorizontal={2}
              paddingVertical={2}
              TextIcon={CloseIcon}
              onPress={() => setCheck(false)}
            />
            <Text>Clear All</Text>
          </View>
          {/* <MultiSelectionList options={['$', '$$', '$$$', '$$$$']} /> */}
          {wrapper}
          <Button
            text={'Complete'}
            style={{borderTopWidth: 1, borderTopColor: Colors.black + '33'}}
            width={'100%'}
            onPress={() => setCheck(false)}
          />
        </View>
        <TouchableOpacity style={{flex: 1}} onPress={() => setCheck(false)} />
      </Animated.View>
      <TouchableOpacity style={{flex: 1}} onPress={() => setCheck(false)} />
    </Animated.View>
  );
};

export default TopSheet;
