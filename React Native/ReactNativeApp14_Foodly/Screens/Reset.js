/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Button from '../Abstracts/Button';
import Container from '../Abstracts/Container';
import StatusBar from '../Modules/StatusBar';
import Backward from '../Svg/Backward';
import {Colors, FontSize} from '../Theme';

const Reset = ({navigation}) => {
  return (
    <Container>
      <StatusBar
        text={'Forgot Password'}
        leading={<Backward />}
        textStyle={{fontWeight: '600', color: Colors.black}}
      />
      <View style={styles.padding}>
        <Text style={styles.head}>Reset Email sent</Text>
        <Text>
          <Text>
            We have sent a instructions email to Nawfazim@icloud.com.{' '}
          </Text>
          <TouchableWithoutFeedback onPress={() => {}}>
            <Text style={styles.link}>Having problem?</Text>
          </TouchableWithoutFeedback>
        </Text>
      </View>
      <View style={styles.padding}>
        <Button
          text={'SEND AGAIN'}
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

export default Reset;
