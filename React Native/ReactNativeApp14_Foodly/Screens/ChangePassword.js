/*eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {changePassword} from '../Reducers/ProfileReducer';
import Container from '../Abstracts/Container';
import Button from '../Abstracts/Button';
import StatusBar from '../Modules/StatusBar';
import Backward from './../Svg/Backward';
import {Colors, FontSize} from '../Theme';
import {Text, TextInput, View} from 'react-native';

const ChangePassword = ({navigation}) => {
  const dispatch = useDispatch();
  const [oldpass, setOldpass] = useState();
  const [newpass, setNewpass] = useState();
  const [newpassCinfirm, setNewpassCinfirm] = useState();
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
          value={oldpass}
          onChangeText={setOldpass}
          style={{borderBottomWidth: 1, borderBottomColor: Colors.black + '2f'}}
        />
      </View>
      <View style={{paddingTop: FontSize.Body}}>
        <Text>NEW PASSWORD</Text>
        <TextInput
          value={newpass}
          onChangeText={setNewpass}
          style={{borderBottomWidth: 1, borderBottomColor: Colors.black + '2f'}}
        />
      </View>
      <View style={{paddingTop: FontSize.Body}}>
        <Text>CINFIRM PASSWORD</Text>
        <TextInput
          value={newpassCinfirm}
          onChangeText={setNewpassCinfirm}
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
          onPress={() => {
            if (newpass === newpassCinfirm) {
              dispatch(changePassword({old: oldpass, new: newpass}));
            } else {
              alert('Not matched password.');
            }
          }}
        />
      </View>
    </Container>
  );
};

export default ChangePassword;
