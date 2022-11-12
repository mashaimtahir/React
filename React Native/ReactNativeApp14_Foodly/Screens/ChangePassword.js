/*eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import Container from '../Abstracts/Container';
import Button from '../Abstracts/Button';
import StatusBar from '../Modules/StatusBar';
import Backward from './../Svg/Backward';
import {Colors, FontSize} from '../Theme';
import {Text, TextInput, View} from 'react-native';

const ChangePassword = ({navigation}) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  return (
    <Container>
      <StatusBar
        leading={<Backward />}
        leadingClick={() => navigation.goBack()}
        text={'Profile Settings'}
      />
      <View style={{paddingTop: FontSize.Body}}>
        <Text>PASSWORD</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          style={{borderBottomWidth: 1, borderBottomColor: Colors.black + '2f'}}
        />
      </View>
      <View style={{paddingTop: FontSize.Body}}>
        <Text>NEW PASSWORD</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={{borderBottomWidth: 1, borderBottomColor: Colors.black + '2f'}}
        />
      </View>
      <View style={{paddingTop: FontSize.Body}}>
        <Text>CINFIRM PASSWORD</Text>
        <TextInput
          value={phone}
          onChangeText={setPhone}
          style={{borderBottomWidth: 1, borderBottomColor: Colors.black + '2f'}}
        />
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Button
          text={'CHANGE PASSWORD'}
          fontSize={FontSize.Caption}
          color={Colors.white}
          backgroundColor={Colors.green}
          paddingVertical={FontSize.Caption}
          width={'100%'}
          onPress={() =>
            alert('Name: ' + name + '\nEmail: ' + email + '\nPhone: ' + phone)
          }
        />
      </View>
    </Container>
  );
};

export default ChangePassword;
