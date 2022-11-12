/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Button from '../Abstracts/Button';
import Container from '../Abstracts/Container';
import Input from '../Abstracts/TextInput';
import SocialAuth from '../Modules/SocialAuth';
import StatusBar from '../Modules/StatusBar';
import Backward from '../Svg/Backward';
import Eye from '../Svg/Eye';
import {Colors, FontSize} from '../Theme';

const SignUp = ({navigation}) => {
  return (
    <Container>
      <StatusBar
        text={'Sign Up'}
        leading={<Backward />}
        leadingClick={() => navigation.goBack()}
        textStyle={{fontWeight: '600', color: Colors.black}}
      />
      <View style={styles.padding}>
        <Text style={styles.head}>Create Account</Text>
        <Text>
          <Text>Enter your Name, Email and Password for sign up.</Text>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.link}>Already have account?</Text>
          </TouchableWithoutFeedback>
        </Text>
      </View>
      <View style={styles.padding}>
        <Input
          width={'100%'}
          paddingVertical={0}
          placeholder={'Name'}
          fontSize={14}
          backgroundColor={Colors.lightgrey}
          borderColor={Colors.grey + '7a'}
        />
      </View>
      <View style={styles.padding}>
        <Input
          width={'100%'}
          paddingVertical={0}
          placeholder={'Email Address'}
          fontSize={14}
          backgroundColor={Colors.lightgrey}
          borderColor={Colors.grey + '7a'}
        />
      </View>
      <View style={styles.padding}>
        <Input
          width={'100%'}
          paddingVertical={0}
          placeholder={'Password'}
          fontSize={14}
          backgroundColor={Colors.lightgrey}
          borderColor={Colors.grey + '7a'}
          Tailing_icon={Eye}
          tailingsize={FontSize.Subhead}
        />
      </View>
      <Text style={[styles.center, styles.textcenter, styles.padding]}>
        By Signing up you agree to our Terms Conditions & Privacy Policy.
      </Text>
      <View style={styles.padding}>
        <Button
          text={'SIGN UP'}
          width={'100%'}
          backgroundColor={Colors.green}
          fontSize={FontSize.Button}
          paddingVertical={10}
          color={Colors.white}
        />
      </View>
      <SocialAuth />
    </Container>
  );
};

const styles = StyleSheet.create({
  head: {
    fontSize: FontSize.H1,
    color: Colors.black,
  },
  body: {
    fontSize: FontSize.Body,
  },
  link: {
    color: Colors.green,
  },
  padding: {
    paddingTop: 20,
  },
  center: {
    alignSelf: 'center',
  },
  textcenter: {
    textAlign: 'center',
  },
});

export default SignUp;
