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

const SignIn = ({navigation}) => {
  return (
    <Container>
      <StatusBar
        text={'Sign In'}
        leading={<Backward />}
        textStyle={{fontWeight: '600', color: Colors.black}}
      />
      <View style={styles.padding}>
        <Text style={styles.head}>Welcome to</Text>
        <Text>
          <Text>Enter your Phone number or Email for sign in, Or </Text>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.link}>Create new account</Text>
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
          placeholder={'Password'}
          fontSize={14}
          backgroundColor={Colors.lightgrey}
          borderColor={Colors.grey + '7a'}
          Tailing_icon={Eye}
          tailingsize={FontSize.Subhead}
        />
      </View>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Forgot')}>
        <Text style={[styles.center, styles.padding]}>Forgot Password?</Text>
      </TouchableWithoutFeedback>
      <View style={styles.padding}>
        <Button
          text={'SIGN IN'}
          width={'100%'}
          backgroundColor={Colors.green}
          fontSize={FontSize.Button}
          paddingVertical={10}
          color={Colors.white}
          onPress={() => navigation.navigate('HomePage')}
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
});

export default SignIn;
