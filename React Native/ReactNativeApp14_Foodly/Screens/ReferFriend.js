/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import Button from '../Abstracts/Button';
import Container from '../Abstracts/Container';
import Scale from '../Function/Scale';
import StatusBar from '../Modules/StatusBar';
import Backward from '../Svg/Backward';
import {Colors, FontSize} from '../Theme';
import Gift from './../Svg/Gift';

const iconSize = Scale(375, 135, 146);
const ReferFriend = ({navigation}) => {
  return (
    <Container style={{alignItems: 'center'}}>
      <StatusBar
        text={'Reder to Friends'}
        leadingClick={() => navigation.goBack()}
        leading={<Backward />}
      />
      <View
        style={{
          width: '100%',
          paddingLeft: iconSize.WIDTH / 3,
        }}>
        <Gift width={iconSize.WIDTH} height={iconSize.HEIGHT} />
      </View>
      <Text style={{fontSize: FontSize.H3, color: Colors.black}}>
        Refer a Friend, Get $10
      </Text>
      <Text style={{fontSize: FontSize.Body, textAlign: 'center'}}>
        Get $10 in credits when someone sign up using your refer link
      </Text>
      <Text
        style={{
          marginTop: FontSize.Caption * 2,
          paddingHorizontal: FontSize.Caption,
          paddingVertical: FontSize.Caption,
          backgroundColor: Colors.grey + '55',
          color: Colors.black,
          fontSize: FontSize.Body,
          borderRadius: FontSize.Caption,
        }}>
        https://ui8.net/76738b
      </Text>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Button
          text={'Email'}
          width={'100%'}
          color={Colors.white}
          backgroundColor={Colors.green}
        />
        <Button
          text={'Others'}
          width={'100%'}
          borderColor={Colors.black + '4f'}
          borderWidth={1}
          style={{marginVertical: FontSize.Caption}}
        />
      </View>
    </Container>
  );
};

export default ReferFriend;
