import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import Button from '../Abstract Component/Button';
import OtherAuth from '../Components/OtherAuth';
import SignInForm from '../Components/SignInForm';
import SignInHead from '../Components/SignInHead';
import Container from '../Abstract Component/Container';

const SignInScreen = ({navigation, route, option}) => {
  const Size = useWindowDimensions().scale * 4 + 4;
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{width: StatusBar.currentHeight}} />
        <StatusBar
          translucent
          barStyle={'dark-content'}
          backgroundColor={'transparent'}
        />
        <SignInHead />
        <SignInForm navigation={navigation} route={route} />
        <OtherAuth />
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Text>Don't have an account?</Text>
          <Button
            onPress={() => {
              navigation.navigate('SignUp');
            }}
            text={'Sign up'}
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

export default SignInScreen;
