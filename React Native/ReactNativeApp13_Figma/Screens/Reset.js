import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../Abstract Component/Button';
import Container from '../Abstract Component/Container';
import BackArrow from './../Svg/BackArrow';
import ForwardArrow from './../Svg/ForwardArrow';
import Input from '../Abstract Component/TextInput';
import Email from '../Svg/Email';

const ResetScreen = () => {
  return (
    <Container>
      <View style={styles.icon}>
        <Button TextIcon={BackArrow} width={null} texticonsize={25} />
      </View>
      <Text style={styles.title}>Reset Password</Text>
      <Text style={styles.subtitle}>
        Please enter your email address to request a password reset
      </Text>
      <Input
        width={'100%'}
        Leading_icon={Email}
        leadingsize={18}
        placeholder={'abc@gmail.com'}
        fontSize={18}
      />
      <View style={styles.spacing} />
      <Button
        text={'SIGN IN'}
        backgroundColor={'#5669FF'}
        color={'white'}
        height={58}
        Tailing_icon={ForwardArrow}
        tailingsize={30}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '500',
    paddingVertical: 20,
  },
  subtitle: {
    fontSize: 18,
    paddingBottom: 30,
  },
  spacing: {
    padding: 20,
  },
  center: {
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  icon: {
    flexDirection: 'row',
    alignContent: 'flex-start',
  },
});

export default ResetScreen;
