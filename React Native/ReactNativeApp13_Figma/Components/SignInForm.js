import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {SliderSwitch} from 'react-native-animated-switch';
import Input from '../Abstract Component/TextInput';
import Email from './../Svg/Email';
import Lock from './../Svg/Lock';
import HiddenEye from '../Svg/HiddenEye';
import ForwardArrow from './../Svg/ForwardArrow';
import Button from '../Abstract Component/Button';
import Switch from './Switch';
import Scale from '../Function/Scale';

const fontSize = Dimensions.get('window').width * 0.06;
const fontSize2 = Dimensions.get('window').width * 0.04;
const inputsize = Scale(375, 317, 56);
const arrowsize = Scale(375, 30, 30);
const leadingiconsize = Scale(375, 24, 24);
const btnsize = Scale(375, 273, 56);
const SignInForm = ({navigation, route}) => {
  const [obscurity, setObscurity] = useState(true);
  // const [on, setOn] = useState(false);

  // const onChange = () => {
  //   setOn(d => !d);
  // };
  return (
    <>
      <Text style={styles.title}>Sign In</Text>
      <Input
        width={'100%'}
        height={inputsize.HEIGHT / 1.2}
        Leading_icon={Email}
        paddingVertical={inputsize.HEIGHT / 10}
        leadingsize={leadingiconsize.WIDTH}
        placeholder={'abc@gmail.com'}
        fontSize={fontSize2}
      />
      <View style={styles.spacing} />
      <Input
        width={'100%'}
        height={inputsize.HEIGHT / 1.2}
        placeholder={'Your password'}
        paddingVertical={inputsize.HEIGHT / 10}
        fontSize={fontSize2}
        obscurity={obscurity}
        Leading_icon={Lock}
        leadingsize={leadingiconsize.WIDTH}
        Tailing_icon={HiddenEye}
        tailingsize={leadingiconsize.WIDTH}
        TailingButton={Button}
        onPressbtn={() => setObscurity(e => !e)}
      />
      <View style={styles.spacing} />
      <View style={styles.row}>
        <Switch />
        <Text style={[styles.middletext, {flex: 1}]}>Remember me</Text>
        <Text style={[styles.middletext]}>Forgot Password?</Text>
      </View>
      <View style={styles.spacing} />
      <Button
        onPress={() => navigation.navigate('HomeScreen')}
        height={btnsize.HEIGHT}
        text={'SIGN IN'}
        backgroundColor={'#5669FF'}
        fontSize={fontSize2}
        color={'white'}
        Tailing_icon={ForwardArrow}
        tailingsize={arrowsize.WIDTH}
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
    fontSize: fontSize2,
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

export default SignInForm;
