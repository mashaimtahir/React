/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import Container from '../Abstracts/Container';
import SocialAuth from '../Modules/SocialAuth';
import StatusBar from '../Modules/StatusBar';
import Backward from '../Svg/Backward';
import {Colors, FontSize} from '../Theme';

const AddSocialAccounts = ({navigation}) => {
  return (
    <Container>
      <StatusBar
        text={'Add Social Accounts'}
        textStyle={{color: Colors.black}}
        leading={<Backward />}
        leadingClick={() => navigation.goBack()}
      />
      <View style={{paddingTop: FontSize.H3 * 5, alignItems: 'center'}}>
        <Text
          style={{
            fontSize: FontSize.H3,
            color: Colors.black,
            fontWeight: '500',
          }}>
          Add social accounts
        </Text>
        <Text
          style={{
            fontSize: FontSize.Body,
            paddingVertical: FontSize.H3,
            textAlign: 'center',
          }}>
          Add your social accounts for more security. You will go directly to
          their site.
        </Text>
        <SocialAuth label={''} />
      </View>
    </Container>
  );
};

export default AddSocialAccounts;
