import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

const BottomSheet = ({children, refRBSheet, height}) => {
  return (
    <RBSheet
      ref={refRBSheet}
      dragFromTopOnly={true}
      animationType={'slide'}
      openDuration={1850}
      closeOnDragDown={true}
      customStyles={{
        wrapper: {
          backgroundColor: 'transparent',
        },
        container: {
          borderTopStartRadius: 30,
          borderTopEndRadius: 30,
          paddingTop: 20,
          paddingHorizontal: 10,
          height: height,
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: 'red',
        },
      }}>
      {/* <ScrollView style={{ width: '100%', height: '100%' }} contentInset={{ top: 1, bottom: 1}} automaticallyAdjustContentInsets={false} hitSlop={{bottom: 0}}> */}
      <View style={{width: '100%', height: '100%'}}>{children}</View>
      {/* </ScrollView> */}
    </RBSheet>
  );
};

export default BottomSheet;
