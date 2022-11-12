import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Input from '../Abstract Component/TextInput';
import Scale from '../Function/Scale';
import Email from './../Svg/Email';
import Lock from './../Svg/Lock';
import ForwardArrow from './../Svg/ForwardArrow';
import Profile from './../Svg/Profile';
import Button from '../Abstract Component/Button';

const fontSize = Dimensions.get('window').width * 0.06;
const fontSize2 = Dimensions.get('window').width * 0.04;
const inputsize = Scale(375, 317, 56);
const arrowsize = Scale(375, 30, 30);
const leadingiconsize = Scale(375, 24, 24);
const btnsize = Scale(375, 273, 56);
const SignUpForm = ({navigation, route}) => {
  return (
    <>
      <Text style={styles.title}>Sign Up</Text>
      <Input
        width={'100%'}
        height={inputsize.HEIGHT / 1.2}
        Leading_icon={Profile}
        fontSize={fontSize2}
        leadingsize={leadingiconsize.WIDTH}
        placeholder={'Full name'}
      />
      <View style={styles.spacing} />
      <Input
        width={'100%'}
        height={inputsize.HEIGHT / 1.2}
        Leading_icon={Email}
        leadingsize={leadingiconsize.WIDTH}
        placeholder={'abc@gmail.com'}
        fontSize={fontSize2}
      />
      <View style={styles.spacing} />
      <Input
        width={'100%'}
        height={inputsize.HEIGHT / 1.2}
        placeholder={'Your password'}
        fontSize={fontSize2}
        Leading_icon={Lock}
        leadingsize={leadingiconsize.WIDTH}
      />
      <View style={styles.spacing} />
      <Input
        width={'100%'}
        height={inputsize.HEIGHT / 1.2}
        placeholder={'Cinfirm password'}
        fontSize={fontSize2}
        Leading_icon={Lock}
        leadingsize={leadingiconsize.WIDTH}
      />
      <View style={styles.spacing} />
      <View style={styles.spacing} />
      <Button
        onPress={() => navigation.navigate('SignIn')}
        text={'SIGN UP'}
        backgroundColor={'#5669FF'}
        color={'white'}
        height={btnsize.HEIGHT}
        Tailing_icon={ForwardArrow}
        tailingsize={30}
      />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: fontSize,
    fontWeight: '500',
    paddingVertical: 20,
  },
  middletext: {
    fontSize: 16,
    paddingLeft: 7,
  },
  text: {
    fontSize: 18,
    paddingTop: 25,
    paddingBottom: 10,
  },
  spacing: {
    padding: 10,
  },
  center: {
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
  },
});

export default SignUpForm;
