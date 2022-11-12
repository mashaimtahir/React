/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Button from '../Abstracts/Button';
import Container from '../Abstracts/Container';
import Input from '../Abstracts/TextInput';
import StatusBar from '../Modules/StatusBar';
import Backward from '../Svg/Backward';
import {Colors, FontSize} from '../Theme';

const Forgot = ({navigation}) => {
  return (
    <Container>
      <StatusBar
        text={'Forgot Password'}
        leading={<Backward />}
        leadingClick={() => navigation.goBack()}
        textStyle={{fontWeight: '600', color: Colors.black}}
      />
      <View style={styles.padding}>
        <Text style={styles.head}>Forgot password</Text>
        <Text>
          Enter your email address and we will send you a reset instructions.{' '}
        </Text>
      </View>
      <View style={styles.padding}>
        <Text>EMAIL ADDRESS</Text>
        <Input
          style={{borderBottomWidth: 1}}
          width={'100%'}
          paddingVertical={0}
          fontSize={FontSize.Body}
          height={FontSize.Body * 2.8}
          paddingHorizontal={0}
          backgroundColor={Colors.lightgrey}
          borderColor={Colors.grey + '7a'}
          borderRadius={0}
          borderWidth={0}
        />
      </View>
      <View style={styles.padding}>
        <Button
          text={'RESET PASSWORD'}
          width={'100%'}
          backgroundColor={Colors.green}
          fontSize={FontSize.Button}
          paddingVertical={10}
          color={Colors.white}
        />
      </View>
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

export default Forgot;
