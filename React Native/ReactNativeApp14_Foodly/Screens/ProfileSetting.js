/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeName, changeEmail, changePhone} from '../Reducers/ProfileReducer';
import {personalSlice} from '../Reducers/ProfileReducer';
import Container from '../Abstracts/Container';
import Button from '../Abstracts/Button';
import StatusBar from '../Modules/StatusBar';
import Backward from './../Svg/Backward';
import {Colors, FontSize} from '../Theme';
import {Text, TextInput, View} from 'react-native';

const ProfileSetting = ({navigation}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(useSelector(state => state.profile.name));
  const [email, setEmail] = useState(useSelector(state => state.profile.email));
  const [phone, setPhone] = useState(useSelector(state => state.profile.phone));
  return (
    <Container>
      <StatusBar
        leading={<Backward />}
        leadingClick={() => navigation.goBack()}
        text={'Profile Settings'}
      />
      <View style={{paddingTop: FontSize.Body}}>
        <Text>FULL NAME</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          style={{borderBottomWidth: 1, borderBottomColor: Colors.black + '2f'}}
        />
      </View>
      <View style={{paddingTop: FontSize.Body}}>
        <Text>EMAIL ADDRESS</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={{borderBottomWidth: 1, borderBottomColor: Colors.black + '2f'}}
        />
      </View>
      <View style={{paddingTop: FontSize.Body}}>
        <Text>PHONE NUMBER</Text>
        <TextInput
          value={phone}
          onChangeText={setPhone}
          style={{borderBottomWidth: 1, borderBottomColor: Colors.black + '2f'}}
        />
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Button
          text={'CHANGE SETTINGS'}
          fontSize={FontSize.Caption}
          color={Colors.white}
          backgroundColor={Colors.green}
          paddingVertical={FontSize.Caption}
          width={'100%'}
          onPress={() => {
            console.log(typeof changeName);
            console.log(typeof personalSlice);
            console.log(personalSlice);
            dispatch(changeName(''));
            // dispatch(changeEmail(email));
            // dispatch(changePhone(phone));
          }}
        />
      </View>
    </Container>
  );
};

export default ProfileSetting;
