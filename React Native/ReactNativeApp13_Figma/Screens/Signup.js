import React from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import Button from '../Abstract Component/Button';
import Container from '../Abstract Component/Container';
import OtherAuth from '../Components/OtherAuth';
import SignUpForm from '../Components/SignUpForm';
import BackArrow from './../Svg/BackArrow';

const SignUpScreen = ({navigation, route}) => {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{height: StatusBar.currentHeight}} />
        <StatusBar barStyle={'dark-content'} />
        <View style={{flexDirection: 'row', alignContent: 'flex-start'}}>
          <Button
            TextIcon={BackArrow}
            onPress={() => navigation.goBack()}
            width={null}
            texticonsize={25}
          />
        </View>
        <SignUpForm navigation={navigation} route={route} />
        <OtherAuth />
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Text>Already have an account?</Text>
          <Button
            text={'Signin'}
            onPress={() => navigation.navigate('SignIn')}
            width={null}
            fontSize={15}
            paddingVertical={0}
            color={'#5669FF'}
          />
        </View>
      </ScrollView>
    </Container>
  );
};

export default SignUpScreen;
